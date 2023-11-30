import axios, { AxiosResponse } from "axios";

export interface RSAResponse {
    base64EncodedPublicKeyPem: string
}

export const authApi = {
    getBase64EncodedPublicKeyPem: (): Promise<AxiosResponse<RSAResponse>> => axios.get("http://localhost:8080/v1/rsa", {
        withCredentials:true,
    }),
};