import { combineReducers } from "redux";

export interface RootState {
  // version
  appVersion: number;
}

export default combineReducers({
  // version
  appVersion: () => 1.1
});
