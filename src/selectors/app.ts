import { RootState } from "models";

export function selectAppVersion(state: RootState): number {
  return state.appVersion;
}
