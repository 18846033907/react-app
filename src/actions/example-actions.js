import axios from 'axios';
import {
  ADD_EXAMPLE_SUCCESS,
  ADD_EXAMPLE_PENDING,
  ADD_EXAMPLE_FAILED,
  GET_EXAMPLE_SUCCESS,
  GET_EXAMPLE_PENDING,
  GET_EXAMPLE_FAILED,
} from './action-types';

export const addExampleSuccess = (res) => {
  return { type: ADD_EXAMPLE_SUCCESS, payload: res };
};
export const addExamplePending = () => {
  return { type: ADD_EXAMPLE_PENDING };
};
export const addExampleFailed = (error) => {
  return { type: ADD_EXAMPLE_FAILED, error };
};

export const getExampleSuccess = (data) => {
  return { type: GET_EXAMPLE_SUCCESS, payload: data };
};
export const getExamplePending = () => {
  return { type: GET_EXAMPLE_PENDING };
};
export const getExampleFailed = (error) => {
  return { type: GET_EXAMPLE_FAILED, error };
};

export const getExample = () => {
  return (dispatch) => {
    return axios
      .get('http://localhost:8090/json.action')
      .then((res) => {
        dispatch(getExampleSuccess(res.data));
      })
      .catch((error) => {
        return error;
      });
  };
};
