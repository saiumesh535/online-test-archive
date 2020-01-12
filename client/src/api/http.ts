import { UserLogin } from "../types/user.types";
import { postAPI } from ".";
import { Test } from "../types/test.types";

const loginURL = `/auth/login`;
const testURL = `/test`;

export const loginAPI = async (input: UserLogin) => {
    return await postAPI<UserLogin, any>(loginURL, input);
};

export const testAPI = async <R>(input: Test): Promise<R> => {
    return await postAPI<Test, R>(testURL, input);
}