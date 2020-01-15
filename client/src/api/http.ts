import { QuestionCreate } from './../types/common.types';
import { UserLogin } from "../types/user.types";
import { postAPI } from ".";
import { CreateTest } from "../types/test.types";

const loginURL = `/auth/login`;
const testURL = `/test`;
const questionUrl = `/questions`;

export const loginAPI = async (input: UserLogin) => {
    return await postAPI<UserLogin, any>(loginURL, input);
};

export const testAPI = async <R>(input: CreateTest): Promise<R> => {
    return await postAPI<CreateTest, R>(testURL, input);
}

export const addQuestionAPI = async <R>(input: QuestionCreate): Promise<R> => {
    return await postAPI<QuestionCreate, R>(questionUrl, input);
}