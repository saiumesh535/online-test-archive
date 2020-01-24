import { createReducer } from "@reduxjs/toolkit";
import { %file_name%Success } from "./%file_name%.actions";

export interface %file_name%State {
    isLoading: boolean;
}

export const %file_name%InitState: %file_name%State = {
    isLoading: true,
}

export const %file_name%Reducer = createReducer<%file_name%State>(%file_name%InitState, (builder) => {
    builder
        .addCase(%file_name%Success, () => {
        return {
            isLoading: false
        }
    })
});