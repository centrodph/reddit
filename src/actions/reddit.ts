    import { ActionType } from "models";

export function getRedditPost() {
  return {
    type: ActionType.REDDIT_POST_REQUEST
  };
}
