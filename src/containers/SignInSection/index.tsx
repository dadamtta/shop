"use client"

import { TextField, Button } from "@mui/material"
import { useMutation } from "@tanstack/react-query"
import { userApi } from "apis/userApi"
import { Controller, useForm } from "react-hook-form"

interface SignInInputs {
    userId: string
    userPwd: string
}

function SignInSection() {

    const { control, handleSubmit } = useForm<SignInInputs>({
        defaultValues: {
            userId: "",
            userPwd: "",
        },
    })
    const signInMutation = useMutation({
        mutationFn: userApi.postSignIn,
        onSuccess: () => alert("로그인 성공"),
        onError: () => alert("로그인 실패"),
    })

    const postSignIn = (inputs: SignInInputs) => {
        console.log(inputs)
        
        signInMutation.mutate(inputs)
    }

    return (
        <div>
            <h1>로그인 페이지</h1>
            
            <Controller 
                name="userId"
                control={control}
                render={({ field: { onChange, value, ref } }) => (
                    <TextField 
                        ref={ref}
                        value={value}
                        onChange={onChange}
                    />
                )}
            />
            <Controller 
                name="userPwd"
                control={control}
                render={({ field: { onChange, value, ref } }) => (
                    <TextField 
                        ref={ref}
                        value={value}
                        onChange={onChange}
                    />
                )}
            />
            <Button onClick={handleSubmit(postSignIn)}>로그인</Button>
        </div>
    )
}

export default SignInSection