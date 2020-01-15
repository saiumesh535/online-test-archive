import { TestState } from './../../types/common.types';
import { createReducer } from '@reduxjs/toolkit';
import { createTestSuccess } from './test.actions';
import { testsSuccess } from './tests.actions';


export const testInitState: TestState = {
  tests: [],
  testId: 0
}

export const testReducer = createReducer<TestState>(testInitState, (builder) => {
  builder
  .addCase(createTestSuccess, (state, action) => {
    return {
      ...state,
      tests:[...state.tests, action.payload],
      testId:action.payload.id
    }
  })
  .addCase(testsSuccess, (state, action) => {
        return {
          ...state,
          tests: [...action.payload]
        }
  })
}
);