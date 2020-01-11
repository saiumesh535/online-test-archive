import { UserLogin } from "../types/user.types";
import { postAPI } from ".";

const loginURL = `/auth/login`;

export const loginAPI = async (input: UserLogin) => {
    return await postAPI<UserLogin, any>(loginURL, input);
}