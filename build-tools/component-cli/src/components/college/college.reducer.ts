import { createReducer } from "@reduxjs/toolkit";
import { collegeSuccess } from "./college.actions";

export interface CollegeState {
    isLoading: boolean;
}

export const collegeInitState: CollegeState = {
    isLoading: true,
}

export const collegeReducer = createReducer<CollegeState>(collegeInitState, (builder) => {
    builder
        .addCase(collegeSuccess, () => {
        return {
            isLoading: false
        }
    })
});