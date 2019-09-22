import { RootState } from "store/rootReducer";
import { RedditReducerType } from "store/reddit/redditReducer";
import { RedditPost } from "models";

export function selectReddit(state: RootState): RedditReducerType {
  return state.reddit;
}

export function selectRedditLoading(state: RootState): boolean {
  return selectReddit(state).loading;
}

export function selectRedditList(state: RootState): RedditPost[] {
  return selectReddit(state).list;
}
