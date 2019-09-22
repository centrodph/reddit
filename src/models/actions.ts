export enum RedditPostActionType {
  REDDIT_POST_REQUEST = "REDDIT_POST_REQUEST",
  REDDIT_POST_REQUEST_SUCCESS = "REDDIT_POST_REQUEST_SUCCESS",
  REDDIT_POST_REQUEST_ERROR = "REDDIT_POST_REQUEST_ERROR"
}

export type IActionType = RedditPostActionType;

export const ActionType = {
  ...RedditPostActionType
};

export interface Action<T> {
  type: IActionType;
  payload: T;
}
