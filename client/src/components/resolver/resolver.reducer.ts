import { createReducer } from "@reduxjs/toolkit";
import { resolverSuccess } from "./resolver.actions";

export interface ResolverState {
    isLoading: boolean;
}

export const resolverInitState: ResolverState = {
    isLoading: true,
}

export const resolverReducer = createReducer<ResolverState>(resolverInitState, (builder) => {
    builder
    .addCase(resolverSuccess, () => {
        return {
            isLoading: false
        }
    })
});