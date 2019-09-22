import { combineReducers } from "redux";
import { RedditReducerType,  redditReducer } from "./reddit/redditReducer";

export interface RootState {
  // version
  appVersion: number;
  reddit: RedditReducerType;
}

export default combineReducers({
  // version
  appVersion: () => 1.1,
  reddit: redditReducer,
});
