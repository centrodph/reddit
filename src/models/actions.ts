export enum RedditPostActionType {
  REDDIT_POST_REQUEST = "REDDIT_POST_REQUEST",
  REDDIT_POST_REQUEST_SUCCESS = "REDDIT_POST_REQUEST_SUCCESS",
  REDDIT_POST_REQUEST_ERROR = "REDDIT_POST_REQUEST_ERROR",
  REDDIT_POST_VIEW = "REDDIT_POST_VIEW",
  REDDIT_POST_DISMISS = "REDDIT_POST_DISMISS",
  REDDIT_POST_REMOVE = "REDDIT_POST_REMOVE",
  REDDIT_POST_DISMISS_ALL = "REDDIT_POST_DISMISS_ALL"
}

export type IActionType = RedditPostActionType;

export const ActionType = {
  ...RedditPostActionType
};

export interface Action<T> {
  type: IActionType;
  payload: T;
}
