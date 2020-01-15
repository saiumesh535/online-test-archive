import { UserLogin } from "../types/user.types";
import { postAPI, getAPI } from ".";
import { TestInput, Test } from "../types/test.types";
import { SuccessResponse } from "../types/api.types";
import { CollegeInput } from "../types/college.types";

const loginURL = `/auth/login`;
const testURL = `/test`;
const collegeURL = `/college`;

export const loginAPI = async (input: UserLogin) => {
    return await postAPI<UserLogin, any>(loginURL, input);
};

export const testAPI = async <R>(input: TestInput): Promise<R> => {
    return await postAPI<TestInput, R>(testURL, input);
};

export const fetchTestAPI = async (): Promise<SuccessResponse<Test>> => {
    return await getAPI<SuccessResponse<Test>>(testURL);
};

export const createCollegeAPI = async (input: CollegeInput): Promise<never> => {
    return await postAPI(collegeURL, input);
}