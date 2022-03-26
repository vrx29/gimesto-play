import axios from "axios";
import { useEffect, useReducer } from "react";
import {
  RESET_LOADING,
  SET_ERROR,
  SET_LOADING,
  SET_SUCCESS,
} from "reducers/constants";
import { sharedReducer } from "reducers/reducerFunctions";
import { sharedState } from "reducers/states";

export const useFetch = (apiData, config = {}) => {
  const { api, property } = apiData;

  const [state, dispatch] = useReducer(sharedReducer, sharedState);

  useEffect(() => {
    (async () => {
      dispatch({ type: SET_LOADING });
      try {
        const response = await axios.get(api, config);
        dispatch({
          type: SET_SUCCESS,
          payload: response.data[property],
        });
      } catch (error) {
        dispatch({ type: SET_ERROR, payload: error });
      }
    })();
  }, []);

  return { state, dispatch };
};
