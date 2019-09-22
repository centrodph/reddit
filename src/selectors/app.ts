import { RootState } from "store/rootReducer";

export function selectAppVersion(state: RootState): number {
  return state.appVersion;
}
