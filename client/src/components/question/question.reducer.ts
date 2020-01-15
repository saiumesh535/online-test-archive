import { QuestionState } from './../../types/common.types';
import { createReducer } from '@reduxjs/toolkit';
import { addQuestionSuccess } from './question.actions';

export const questionInitState: QuestionState = {
  questions: [],
  id: 0
}

export const questionReducer = createReducer<QuestionState>(questionInitState, (builder) => {
  builder
  .addCase(addQuestionSuccess,(state, action) => {
    return {
    ...state,
    questions: [...state.questions, action.payload]
    }
  })
})