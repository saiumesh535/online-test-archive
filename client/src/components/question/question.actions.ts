import { createAction } from "@reduxjs/toolkit";
import { QuestionCreate, Question } from "../../types/common.types";

const questionActions = (name: string) => `QUESTION_${name}`

export const ADD_QUESTION_INIT = questionActions('ADD_QUESTION_INIT');
export const addQuestionInit = createAction<QuestionCreate>(ADD_QUESTION_INIT);

export const ADD_QUESTION_SUCCESS = questionActions('ADD_QUESTION_SUCCESS');
export const addQuestionSuccess = createAction<Question>(ADD_QUESTION_SUCCESS);