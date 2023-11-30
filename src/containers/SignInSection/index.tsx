"use client"

import { TextField, Button } from "@mui/material"
import { authApi } from "apis/authApi"
import { userApi } from "apis/userApi"
import { memo, useEffect, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { encryptBase64EncodedData } from "utils/rsa"

interface SignInInputs {
    userId: string
    userPwd: string
}

interface Props {
}

function SignInSection({
}: Props) {

    const [publicKey, setPublicKey] = useState<string>('')
    // TODO 데이터 입력 확인 validation check
    const { control, handleSubmit } = useForm<SignInInputs>({
        defaultValues: {
            userId: "",
            userPwd: "",
        },
    })

    useEffect(() => {
        authApi.getBase64EncodedPublicKeyPem().then(response => {
            setPublicKey(response.data.base64EncodedPublicKeyPem)
        })
    }, [])

    const postSignIn = (inputs: SignInInputs) => {
        const encryptedInputs = encryptBase64EncodedData(publicKey, JSON.stringify({
            id: inputs.userId,
            pwd: inputs.userPwd,
        }))
        // todo error handle
        userApi.postSignIn(encryptedInputs)
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

export default memo(SignInSection)