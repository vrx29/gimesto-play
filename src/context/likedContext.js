import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { SET_ERROR, SET_LOADING, SET_SUCCESS } from "reducers/constants";
import { sharedReducer } from "reducers/reducerFunctions";
import { sharedState } from "reducers/states";
import { useAuth } from "./authContext";

const LikedContext = createContext();

const LikedProvider = ({ children }) => {
  const [state, dispatch] = useReducer(sharedReducer, sharedState);
  const { data: likedVideos, loading, error } = state;
  const {
    userAuthState: { authToken },
  } = useAuth();

  const getLikedVideos = async () => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await axios.get("/api/user/likes", {
        headers: { authorization: authToken },
      });
      setTimeout(() => {
        dispatch({
          type: SET_SUCCESS,
          payload: response.data.likes,
        });
      }, 3000);
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error });
    }
  };

  const addLikedVideo = async (video) => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await axios.post(
        "/api/user/likes",
        { video },
        {
          headers: { authorization: authToken },
        }
      );

      dispatch({
        type: SET_SUCCESS,
        payload: response.data.likes,
      });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error });
    }
  };

  const deleteLikedVideo = async (video) => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await axios.delete(`/api/user/likes/${video}`, {
        headers: { authorization: authToken },
      });
      dispatch({
        type: SET_SUCCESS,
        payload: response.data.likes,
      });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error });
    }
  };

  return (
    <LikedContext.Provider
      value={{
        likedVideos,
        loading,
        error,
        getLikedVideos,
        addLikedVideo,
        deleteLikedVideo,
      }}
    >
      {children}
    </LikedContext.Provider>
  );
};

const useLikedVideo = () => useContext(LikedContext);

export { useLikedVideo, LikedProvider };
