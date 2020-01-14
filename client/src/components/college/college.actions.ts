import { createAction } from "@reduxjs/toolkit";
import { CollegeInput } from "../../types/college.types";

export const saveCollege = createAction<CollegeInput>('SAVE_COLLEGE');