import { QuestionCreate } from './../types/common.types';
import { UserLogin } from "../types/user.types";
import { postAPI, getAPI } from ".";
import { CreateTest, Test } from "../types/test.types";
import { SuccessResponse } from '../types/api.types';
import { CollegeInput } from '../types/college.types';

const loginURL = `/auth/login`;
const testURL = `/test`;
const questionUrl = `/questions`;
const collegeURL = `/college`;

export const loginAPI = async (input: UserLogin) => {
    return await postAPI<UserLogin, any>(loginURL, input);
};

export const testAPI = async <R>(input: CreateTest): Promise<R> => {
    return await postAPI<CreateTest, R>(testURL, input);
}

export const fetchTestAPI = async (): Promise<SuccessResponse<Test>> => {
    return await getAPI<SuccessResponse<Test>>(testURL);
};

export const createCollegeAPI = async (input: CollegeInput): Promise<never> => {
    return await postAPI(collegeURL, input);
}

export const addQuestionAPI = async <R>(input: QuestionCreate): Promise<R> => {
    return await postAPI<QuestionCreate, R>(questionUrl, input);
}