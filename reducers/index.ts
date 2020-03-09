import { combineReducers } from "redux";
import { reducer as form } from 'redux-form';
import posts from "./posts"

const rootReducer = combineReducers({
  form,
  posts,
});

export type State = ReturnType<typeof rootReducer>

export default rootReducer;
