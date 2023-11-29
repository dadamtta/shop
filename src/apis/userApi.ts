import { DefaultError, UseMutationOptions, useMutation } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";

export interface SignInRequest {
    userId: string
    userPwd: string
}

export const userApi = {
    postSignIn: (dto: SignInRequest): Promise<AxiosResponse<any>> => axios.post("/v1/users/sign-in"),
    postSignUp: () => axios.post("/v1/users/sign-up"),
};