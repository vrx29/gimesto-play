import { initialFormState } from "reducers/states";

export const formReducer = (state = initialFormState, { type, payload }) => {
  switch (type) {
    case "SET_FORM_DATA":
      return { ...state, ...payload };
    case "SET_FORM_ERROR":
      return { ...state, error: true, errorMsg: payload, loading: false };
    case "SET_FORM_SUCCESS":
      return { ...state, error: false, errorMsg: "" };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "SUBMIT_SUCCESS":
      return { ...state, loading: false };
    default:
      return { ...state };
  }
};
