import editReducer from "./edit-reducer";
import formVisibleOnPage from "./form-visible-reducer";
import postListReducer from "./post-list-reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterPostList: postListReducer,
});

export default rootReducer;
