import { AppState } from "../../store";

const testCreateState = (state: AppState) => {
  return { ...state.testState };
};

export const selectTestId =(state: AppState) => {
  return testCreateState(state).testId;
}
