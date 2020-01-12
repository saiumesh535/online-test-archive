export interface Test {
  id?: number,
  name: string,
  timer: number
}

export interface Question {
  id: number;
  question: string;
  noOfOptions: number;
  testId: number;
}

export interface OptionCreate {
  id: number;
  option: string;
  isAnswer: boolean;
}

export interface QuestionCreateState {
  question: Question;
  options: OptionCreate[]
}

export interface TestCreateState {
  test: Test,
  questions: QuestionCreateState[]
}