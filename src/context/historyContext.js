import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { SET_ERROR, SET_LOADING, SET_SUCCESS } from "reducers/constants";
import { sharedReducer } from "reducers/reducerFunctions";
import { sharedState } from "reducers/states";
import { useAuth } from "./authContext";

const HistoryContext = createContext();

const HistoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(sharedReducer, sharedState);
  const { data: history, loading, error } = state;
  const {
    userAuthState: { authToken },
  } = useAuth();

  const getHistory = async () => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await axios.get("/api/user/history", {
        headers: { authorization: authToken },
      });
      setTimeout(() => {
        dispatch({
          type: SET_SUCCESS,
          payload: response.data.history,
        });
      }, 3000);
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error });
    }
  };

  const addHistory = async (video) => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await axios.post(
        "/api/user/history",
        { video },
        {
          headers: { authorization: authToken },
        }
      );

      dispatch({
        type: SET_SUCCESS,
        payload: response.data.history,
      });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error });
    }
  };

  const deleteVideoHistory = async (id) => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await axios.delete(`/api/user/history/${id}`, {
        headers: { authorization: authToken },
      });
      dispatch({
        type: SET_SUCCESS,
        payload: response.data.history,
      });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error });
    }
  };

  const clearHistory = async () => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await axios.delete("/api/user/history/all", {
        headers: { authorization: authToken },
      });
      dispatch({
        type: SET_SUCCESS,
        payload: response.data.history,
      });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error });
    }
  };

  return (
    <HistoryContext.Provider
      value={{
        history,
        loading,
        error,
        getHistory,
        addHistory,
        deleteVideoHistory,
        clearHistory,
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
};

const useHistory = () => useContext(HistoryContext);

export { useHistory, HistoryProvider };
