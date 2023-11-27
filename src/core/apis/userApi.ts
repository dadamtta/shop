import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

export const userApi = {
    usePostSignUpMutation: () => useMutation({
        mutationFn: () => axios.post("/v1/users/sign-up"),
    }),
    usePostSignInMutation: () => useMutation({
        mutationFn: () => axios.post("/v1/users/sign-in"),
    }),
};

export const {
    usePostSignUpMutation,
    usePostSignInMutation,
} = userApi;