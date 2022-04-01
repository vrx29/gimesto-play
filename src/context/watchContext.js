import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { SET_ERROR, SET_LOADING, SET_SUCCESS } from "reducers/constants";
import { sharedReducer } from "reducers/reducerFunctions";
import { sharedState } from "reducers/states";
import { useAuth } from "./authContext";

const WatchContext = createContext();

const WatchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(sharedReducer, sharedState);
  const { data: watchLater, loading, error } = state;
  const {
    userAuthState: { authToken },
  } = useAuth();

  const getWatchLater = async () => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await axios.get("/api/user/watchlater", {
        headers: { authorization: authToken },
      });
      setTimeout(() => {
        dispatch({
          type: SET_SUCCESS,
          payload: response.data.watchlater,
        });
      }, 2000);
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error });
    }
  };

  const addWatchLater = async (video) => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await axios.post(
        "/api/user/watchlater",
        { video },
        {
          headers: { authorization: authToken },
        }
      );
      dispatch({
        type: SET_SUCCESS,
        payload: response.data.watchlater,
      });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error });
    }
  };

  const deleteWatchLater = async (id) => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await axios.delete(`/api/user/watchlater/${id}`, {
        headers: { authorization: authToken },
      });
      dispatch({
        type: SET_SUCCESS,
        payload: response.data.watchlater,
      });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error });
    }
  };

  return (
    <WatchContext.Provider
      value={{
        watchLater,
        loading,
        error,
        getWatchLater,
        addWatchLater,
        deleteWatchLater,
      }}
    >
      {children}
    </WatchContext.Provider>
  );
};

const useWatch = () => useContext(WatchContext);

export { useWatch, WatchProvider };
