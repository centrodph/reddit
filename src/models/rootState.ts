import { RedditReducerType } from "store/reddit/redditReducer";

export interface RootState {
  // version
  appVersion: number;
  reddit: RedditReducerType;
}
