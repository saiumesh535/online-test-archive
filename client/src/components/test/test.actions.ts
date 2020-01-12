import { createAction } from "@reduxjs/toolkit";
import { Test } from "../../types/common.types";

const testActions = (name: string) => `TEST_${name}`;

export const CREATE_TEST = testActions('CREATE_TEST');
export const createTest = createAction<Test>(CREATE_TEST);
