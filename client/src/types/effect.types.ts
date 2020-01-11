import { Action } from "@reduxjs/toolkit";

export interface SagaAction<T> extends Action {
    payload: T;
}