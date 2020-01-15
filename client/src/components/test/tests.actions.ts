import { createAction } from "@reduxjs/toolkit";
import { Test } from "../../types/test.types";

export const testsInit = createAction('TESTS_INIT');
export const testsSuccess = createAction<Test[]>('TESTS_SUCCESS');
