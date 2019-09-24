import { ActionType, RedditPost } from "models";

export function getRedditPost() {
  return {
    type: ActionType.REDDIT_POST_REQUEST
  };
}

export function viewRedditPost(payload: RedditPost) {
  return {
    type: ActionType.REDDIT_POST_VIEW,
    payload
  };
}

export function dismissRedditPost(payload: string) {
  return {
    type: ActionType.REDDIT_POST_DISMISS,
    payload
  };
}
export function removeRedditPost(payload: string) {
  return {
    type: ActionType.REDDIT_POST_REMOVE,
    payload
  };
}

export function dismissAllRedditPost() {
  return {
    type: ActionType.REDDIT_POST_DISMISS_ALL
  };
}
