import { fork } from "redux-saga/effects";
import { getPostWatcher } from "./sagas/getPosts";
export default [fork(getPostWatcher)];
