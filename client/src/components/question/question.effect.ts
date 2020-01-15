import { takeLatest, put } from "redux-saga/effects";
import { ADD_QUESTION_INIT, addQuestionSuccess } from "./question.actions";
import { addQuestionAPI } from "../../api/http";
import { QuestionCreate } from "../../types/common.types";

function* addQuestionEffect (action: any) {
  try{
    const question: QuestionCreate = action.payload;
    const response = yield addQuestionAPI(question);
    yield put(addQuestionSuccess({
      id: response.payload,
      ...question
    }))
  } catch(e) {
    console.error('error while inserting Question ', e);
  }
}

export const questionEffects = [
  takeLatest(ADD_QUESTION_INIT, addQuestionEffect)
]