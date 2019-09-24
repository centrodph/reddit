import { combineReducers } from "redux";
import { redditReducer } from "./reddit/redditReducer";

export default combineReducers({
  // version
  appVersion: () => 1.1,
  reddit: redditReducer
});
