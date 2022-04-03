import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import {
  SET_ERROR,
  SET_LOADING,
  SET_PLAYLISTS,
  SET_CURRENT_PLAYLIST,
  SET_VIDEOS,
} from "reducers/constants";
import { playlistReducer } from "reducers/reducerFunctions";
import { initialPlaylistState } from "reducers/states";
import { useAuth } from "./authContext";

const PlaylistContext = createContext();

const PlaylistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(playlistReducer, initialPlaylistState);
  const { playlists, currentPlaylist, loading, error } = state;
  const {
    userAuthState: { authToken },
  } = useAuth();

  const getPlaylists = async () => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await axios.get("/api/user/playlists", {
        headers: { authorization: authToken },
      });
      setTimeout(() => {
        dispatch({
          type: SET_PLAYLISTS,
          payload: response.data.playlists,
        });
      }, 1000);
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error });
    }
  };

  const addPlaylist = async (playlist) => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await axios.post(
        "/api/user/playlists",
        { playlist },
        {
          headers: { authorization: authToken },
        }
      );

      dispatch({
        type: SET_PLAYLISTS,
        payload: response.data.playlists,
      });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error });
    }
  };

  const deletePlaylist = async (id) => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await axios.delete(`/api/user/playlists/${id}`, {
        headers: { authorization: authToken },
      });
      dispatch({
        type: SET_PLAYLISTS,
        payload: response.data.playlists,
      });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error });
    }
  };

  const getPlaylistData = async (playlistId) => {
    dispatch({ type: SET_LOADING });

    try {
      const response = await axios.get(`/api/user/playlists/${playlistId}`, {
        headers: { authorization: authToken },
      });

      setTimeout(() => {
        dispatch({
          type: SET_CURRENT_PLAYLIST,
          payload: response.data.playlist.videos,
        });
      }, 1000);
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error });
    }
  };

  const addVideoToPlaylist = async (playlistId, video) => {
    dispatch({ type: SET_LOADING });

    try {
      const response = await axios.post(
        `/api/user/playlists/${playlistId}`,
        { video },
        {
          headers: { authorization: authToken },
        }
      );
      dispatch({
        type: SET_VIDEOS,
        payload: response.data.playlist,
      });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error });
    }
  };

  const deleteVideoFromPlaylist = async (playlistId, videoId) => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await axios.delete(
        `/api/user/playlists/${playlistId}/${videoId}`,
        {
          headers: { authorization: authToken },
        }
      );
      dispatch({
        type: SET_VIDEOS,
        payload: response.data.playlist,
      });

      dispatch({
        type: SET_CURRENT_PLAYLIST,
        payload: response.data.playlist.videos,
      });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error });
    }
  };

  return (
    <PlaylistContext.Provider
      value={{
        playlists,
        currentPlaylist,
        loading,
        error,
        getPlaylists,
        addPlaylist,
        deletePlaylist,
        getPlaylistData,
        addVideoToPlaylist,
        deleteVideoFromPlaylist,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylist = () => useContext(PlaylistContext);

export { usePlaylist, PlaylistProvider };
