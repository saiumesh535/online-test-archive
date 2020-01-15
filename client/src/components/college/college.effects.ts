import { takeLatest } from "redux-saga/effects";
import { SagaAction } from "../../types/effect.types";
import { CollegeInput } from "../../types/college.types";
import { saveCollege } from "./college.actions";
import { createCollegeAPI } from "../../api/http";

function* saveCollegeEffect(action: SagaAction<CollegeInput>) {
    try {
        yield createCollegeAPI(action.payload);
    } catch (error) {
        console.error(error);
    }
}

export const collegeEffects = [
    takeLatest(saveCollege, saveCollegeEffect)
]