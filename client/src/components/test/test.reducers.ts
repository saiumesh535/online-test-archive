import { TestCreateState, QuestionCreateState, Question, OptionCreate} from './../../types/common.types';
import { createReducer } from '@reduxjs/toolkit';
import { createTest } from './test.actions';
import { Test } from '../../types/test.types';

export const questionInitState: Question = {
 id: 0,
 question: '',
 testId: 0,
 noOfOptions: 4
}

export const optionInitState: OptionCreate = {
  id: 0,
  option: '',
  isAnswer: false
}

export const testInitialState: Test = {
   id: 0,
   name: '',
   timer: 0,
   cutoff: 0
}
export const questionCreateInitState: QuestionCreateState = {
  question: questionInitState,
  options: [optionInitState]
}

export const testCreateInitState: TestCreateState = {
  test: testInitialState,
  questions: [questionCreateInitState]
}

export const testReducer = createReducer<TestCreateState>(testCreateInitState, (builder) => {
  builder
  .addCase(createTest, (state, action) => {
    return {
      test:{
        name: action.payload.name,
        timer: action.payload.timer,
        cutoff: action.payload.cutoff
      },
      questions: [questionCreateInitState]
    }
  })
}
);