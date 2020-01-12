import { AppState } from "../../store";

const testCreateState = (state: AppState) => {
  return { ...state.testCreate };
};

export const selectTestCreate =(state: AppState) => {
  return testCreateState(state).test;
}

export const selectTestName =(state: AppState) => {
  return selectTestCreate(state).name;
}
export const selectTestTimer =(state: AppState) => {
  return selectTestCreate(state).timer;
}
export const selectTestCutoff =(state: AppState) => {
  return selectTestCreate(state).cutoff;
}