import { createReducer } from "@reduxjs/toolkit";
import { Test } from "../../types/test.types";
import { testsSuccess } from "./tests.actions";

const testInitialTestsState: Test[] = [];

export const testsReducer = createReducer<Test[]>(testInitialTestsState, (builder) => {
    builder
    .addCase(testsSuccess, (_, action) => {
        return [...action.payload]
    })
});