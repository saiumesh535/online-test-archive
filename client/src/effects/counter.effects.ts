import { takeLatest, put } from "redux-saga/effects";
import { increaseCounter, increaseCounterEffect } from "../store/reducer-sample/counter.reducer";
import { SagaAction } from "../types/effect.types";
import { loginAPI } from "../api/http";

function* increaseCount(action: SagaAction<number>) {
    try {
        yield put(increaseCounter(action.payload))
        const loginResp = yield loginAPI({
            username: 'saiumesh',
            password: 'saiumesh'
        });
        console.log(loginResp);
    } catch (error) {
        console.error(error);
    }
}

export const counterEffects = [
    takeLatest(increaseCounterEffect, increaseCount)
]