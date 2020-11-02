import { combineReducers } from 'redux';
import example from './get-example-reducer';

const rootReducer = combineReducers({
  example,
});
export default rootReducer;
