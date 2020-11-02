import { GET_EXAMPLE_SUCCESS, GET_EXAMPLE_PENDING, GET_EXAMPLE_FAILED } from 'actions/action-types';

const initialState = {};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_EXAMPLE_SUCCESS:
      return { status: 'SUCCESS', ...state, payload: action.payload };
    case GET_EXAMPLE_PENDING:
      return { status: 'PENDING' };
    case GET_EXAMPLE_FAILED:
      return { status: 'error' };
    default:
      return state;
  }
};
