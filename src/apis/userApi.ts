import axios, { AxiosResponse } from "axios";

export const userApi = {
    postSignIn: (encryptedInputData: string): Promise<AxiosResponse<any>> => axios.post("/v1/users/sign-in", encryptedInputData),
    postSignUp: (encryptedInputData: string) => axios.post("/v1/users/sign-up", encryptedInputData),
};