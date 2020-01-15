import { AppState } from "../../store";

export const selectResolverState = (state: AppState) => state.resolver;
export const selectIsResolverLoading = (state: AppState) => {
    return selectResolverState(state).isLoading;
};