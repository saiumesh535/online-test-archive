import { UserLogin } from "../types/user.types";
import { postAPI } from ".";
import { Test } from "../types/common.types";

const loginURL = `/auth/login`;
const createTestURL = `/test`;

export const loginAPI = async (input: UserLogin) => {
    return await postAPI<UserLogin, any>(loginURL, input);
}

export const createTestAPI = async(input: Test) => {
    return await postAPI<Test, any>(createTestURL, input)

}