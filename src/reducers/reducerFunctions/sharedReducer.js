import {
  SET_ERROR,
  SET_LOADING,
  SET_SUCCESS,
} from "reducers/constants";

export const sharedReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return { ...state, loading: true, error: null };
    case SET_SUCCESS:
      return { ...state, data: payload, loading: false };
    case SET_ERROR:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};
