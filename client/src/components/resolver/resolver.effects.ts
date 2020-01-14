import { takeLatest, put } from "redux-saga/effects";
import { resolverSuccess, resolverInit } from "./resolver.actions";
import { fetchTestAPI } from "../../api/http";
import { SuccessResponse } from "../../types/api.types";
import { Test } from "../../types/test.types";
import { testsSuccess } from "../test/tests.actions";


function* resolverInitEffect() {
    try {
        const testsResponse: SuccessResponse<Test[]> = yield fetchTestAPI();
        yield put(testsSuccess(testsResponse.payload));
        yield put(resolverSuccess());
    } catch (error) {
        console.error(error);
    }
}

export const resolverEffects = [
    takeLatest(resolverInit, resolverInitEffect)
];
