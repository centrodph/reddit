import { all } from "redux-saga/effects";
import redditSagas from "./reddit/redditSagas";

export default function* runSagas() {
  yield all([...redditSagas]);
}
