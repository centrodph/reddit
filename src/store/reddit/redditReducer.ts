import { Action, ActionType, RedditPost, RedditPostResponse } from "models";
import createReducer from "../createReducer";

export interface RedditReducerType {
  list: RedditPost[];
  active?: RedditPost;
  viewed: string[];
  loading: boolean;
  error?: string;
}
const defaultState: RedditReducerType = {
  list: [],
  viewed: [],
  loading: false,
  error: undefined
};

export const redditReducer = createReducer<RedditReducerType>(defaultState, {
  [ActionType.REDDIT_POST_REQUEST](
    state: RedditReducerType,
    action: Action<undefined>
  ) {
    return {
      ...state,
      loading: true
    };
  },

  [ActionType.REDDIT_POST_REQUEST_ERROR](
    state: RedditReducerType,
    action: Action<any>
  ) {
    return {
      ...state,
      loading: false,
      error: action.payload
    };
  },
  [ActionType.REDDIT_POST_REQUEST_SUCCESS](
    state: RedditReducerType,
    action: Action<RedditPostResponse>
  ) {
    return {
      ...state,
      loading: false,
      list: action.payload.data.children
    };
  },
  [ActionType.REDDIT_POST_VIEW](
    state: RedditReducerType,
    action: Action<RedditPost>
  ) {
    const {
      data: { id }
    } = action.payload;
    const viewed = [...state.viewed];
    if (!state.viewed.find(item => item === id)) {
      viewed.push(id);
    }
    return {
      ...state,
      loading: false,
      active: action.payload,
      viewed
    };
  }
});
