import { AppState } from "../../store";

export const selectTests = (state: AppState) => state.testState.tests;