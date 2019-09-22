import { Action, ActionType, RedditPost, RedditPostResponse } from "models";
import createReducer from "../createReducer";

export interface TranslationsReducerType {
  list: RedditPost[];
  loading: boolean;
  error?: string;
}
const defaultState: TranslationsReducerType = {
  list: [],
  loading: false,
  error: undefined
};

export const translationReducer = createReducer<TranslationsReducerType>(
  defaultState,
  {
    [ActionType.REDDIT_POST_REQUEST](
      state: TranslationsReducerType,
      action: Action<undefined>
    ) {
      return {
        ...state,
        loading: true
      };
    },

    [ActionType.REDDIT_POST_REQUEST_ERROR](
      state: TranslationsReducerType,
      action: Action<any>
    ) {
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    },
    [ActionType.REDDIT_POST_REQUEST_SUCCESS](
      state: TranslationsReducerType,
      action: Action<RedditPostResponse>
    ) {
      return {
        ...state,
        loading: false,
        list: action.payload.data.children
      };
    }
  }
);
