import { RootState } from "store/rootReducer";

export function selectRedditLoading(state: RootState): boolean {
  return state.reddit.loading;
}
