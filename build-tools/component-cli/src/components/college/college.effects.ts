import { takeLatest } from "redux-saga/effects";
import { collegeInit } from "./college.actions";

function* increaseCount() {
    try {
    } catch (error) {
    }
}

export const counterEffects = [
    takeLatest(collegeInit, increaseCount),
];
