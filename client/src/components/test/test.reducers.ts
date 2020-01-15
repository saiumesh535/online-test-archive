import { TestState } from './../../types/common.types';
import { createReducer } from '@reduxjs/toolkit';
import { createTestSuccess } from './test.actions';


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
}
);