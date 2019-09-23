    import { ActionType, RedditPost } from "models";

export function getRedditPost() {
  return {
    type: ActionType.REDDIT_POST_REQUEST
  };
}

export function viewRedditPost(payload: RedditPost) {
  return {
    type: ActionType.REDDIT_POST_VIEW,
    payload,
  };
}
