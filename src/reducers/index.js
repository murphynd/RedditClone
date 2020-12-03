import editReducer from "./edit-reducer";
import formVisibleReducer from "./form-visible-reducer";
import postListReducer from "./post-list-reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterPostList: postListReducer,
  editAvailable: editReducer
});

export default rootReducer;
