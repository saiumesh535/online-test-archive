import { takeLatest } from "redux-saga/effects";
import { testsInit } from "./tests.actions";

function* testsInitEffect() {

}


export const testsEffect = [
    takeLatest(testsInit, testsInitEffect)
]