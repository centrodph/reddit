import { RedditReducerType } from "store/reddit/redditReducer";
import { RootState, RedditPost } from "models";

export function selectReddit(state: RootState): RedditReducerType {
  return state.reddit;
}

export function selectRedditLoading(state: RootState): boolean {
  return selectReddit(state).loading;
}

export function selectRedditList(state: RootState): RedditPost[] {
  return selectReddit(state).list;
}

export function selectIsVisited(state: RootState, id: string): boolean {
  return selectReddit(state).viewed.indexOf(id) > -1;
}

export function selectDismissing(state: RootState, id: string): boolean {
  return selectReddit(state).dismiss.indexOf(id) > -1;
}

export function selectActive(state: RootState): RedditPost | undefined {
  return selectReddit(state).active;
}
