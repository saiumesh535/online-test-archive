import { createReducer } from "@reduxjs/toolkit";
import { collegeSuccess } from "./college.actions";

export interface collegeState {
    isLoading: boolean;
}

export const collegeInitState: collegeState = {
    isLoading: true,
}

export const collegeReducer = createReducer<collegeState>(collegeInitState, (builder) => {
    builder
        .addCase(collegeSuccess, () => {
        return {
            isLoading: false
        }
    })
});