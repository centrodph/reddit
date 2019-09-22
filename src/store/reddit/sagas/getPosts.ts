import { put, takeLatest, call, delay } from "redux-saga/effects";
import { createApiCall, MethodType } from "store/api";
import { ActionType, RedditPostResponse } from "models";

function* getPosts() {
  try {
    let response: RedditPostResponse = yield call(createApiCall, {
      method: MethodType.GET,
      url: `https://raw.githubusercontent.com/deviget/Front-end/master/top.json?token=AAP2KXY3CS5TKK3C3D66WFK5SABNE`
    });
    yield put({
      type: ActionType.REDDIT_POST_REQUEST_SUCCESS,
      payload: response
    });
  } catch (error) {
    yield put({
      type: ActionType.REDDIT_POST_REQUEST_ERROR,
      payload: error
    });
  }
}
export function* getPostWatcher() {
  yield takeLatest(ActionType.REDDIT_POST_REQUEST as any, getPosts);
}
