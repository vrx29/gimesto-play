import {
  RESET_LOADING,
  SET_ERROR,
  SET_LOADING,
  SET_SUCCESS,
} from "reducers/constants";

export const sharedReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case RESET_LOADING:
      return { ...state, loading: false };
    case SET_SUCCESS:
      return { ...state, data: payload };
    case SET_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};
