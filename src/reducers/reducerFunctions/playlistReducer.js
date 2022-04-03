import {
  SET_ERROR,
  SET_LOADING,
  SET_PLAYLISTS,
  SET_CURRENT_PLAYLIST,
  SET_VIDEOS,
} from "reducers/constants";

export const playlistReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return { ...state, loading: true, error: null };
    case SET_PLAYLISTS:
      return { ...state, playlists: payload, loading: false };
    case SET_CURRENT_PLAYLIST:
      return { ...state, currentPlaylist: payload, loading: false };
    case SET_VIDEOS:
      return {
        ...state,
        playlists: [...state.playlists].map((item) =>
          item._id === payload._id ? payload : item
        ),
        loading: false,
      };
    case SET_ERROR:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};
