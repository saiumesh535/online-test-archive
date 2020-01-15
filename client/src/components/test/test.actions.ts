import { createAction } from "@reduxjs/toolkit";
import { CreateTest, Test } from "../../types/test.types";


const testActions = (name: string) => `TEST_${name}`;

export const CREATE_TEST = testActions('CREATE_TEST');
export const createTest = createAction<CreateTest>(CREATE_TEST);

export const CREATE_TEST_SUCCESS = testActions('CREATE_TEST_SUCCESS');
export const createTestSuccess = createAction<Test>(CREATE_TEST_SUCCESS);
