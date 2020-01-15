import { CreateTest, Test } from "./test.types";

export interface QuestionCreate {
  question: string;
  noOfOptions: number;
  options: string[]
  testId: number;
  answerIndex: number;
}
export interface Question extends QuestionCreate{
  id: number;
}

export interface QuestionCreateState {
  question: Question;
  options: string[]
}

export interface TestCreateState {
  test: CreateTest,
  questions: QuestionCreateState[]
}

export interface TestState {
  tests: Test[]
  testId: number;
}

export interface QuestionState {
  questions: Question[]
  id: number;
}