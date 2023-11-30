"use client"

import { Button, TextField } from "@mui/material"
import { authApi } from "apis/authApi"
import { userApi } from "apis/userApi"
import { useEffect, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { encryptBase64EncodedData } from "utils/rsa"

interface SignUpInputs {
    userId: string
    userPwd: string
    checkUserPwd: string
    email?: string
    name: string
    phone: string
}

interface Props {
}

function SignUpSection({
}: Props) {

    const [publicKey, setPublicKey] = useState<string>('')
    const { control, handleSubmit } = useForm<SignUpInputs>({
        defaultValues: {
            userId: '',
            userPwd: '',
            checkUserPwd: '',
            email: undefined,
            name: '',
            phone: '',
        },
    })

    useEffect(() => {
        authApi.getBase64EncodedPublicKeyPem().then(response => {
            setPublicKey(response.data.base64EncodedPublicKeyPem)
        })
    }, [])

    // todo check input validation
    const postSignUp = (inputs: SignUpInputs) => {
        console.log(inputs)
        const encryptedInputs = encryptBase64EncodedData(publicKey, JSON.stringify({
            id: inputs.userId,
            pwd: inputs.userPwd,
            email: inputs.email,
            name: inputs.name,
            phone: inputs.phone,
        }))
        // todo error handle
        userApi.postSignUp(encryptedInputs)
    }

    return (
        <div>
            <h1>회원가입 페이지</h1>
            <h5>아이디</h5>
            <Controller 
                name="userId"
                control={control}
                render={({ field: { onChange, value, ref } }) => (
                    <TextField 
                        size="small"
                        ref={ref}
                        value={value}
                        onChange={onChange}
                    />
                )}
            />
            <h5>패스워드</h5>
            <Controller 
                name="userPwd"
                control={control}
                render={({ field: { onChange, value, ref } }) => (
                    <TextField 
                        size="small"
                        ref={ref}
                        value={value}
                        onChange={onChange}
                    />
                )}
            />
            <h5>패스워드 확인</h5>
            <Controller 
                name="checkUserPwd"
                control={control}
                render={({ field: { onChange, value, ref } }) => (
                    <TextField 
                        size="small"
                        ref={ref}
                        value={value}
                        onChange={onChange}
                    />
                )}
            />
            <h5>휴대폰 번호</h5>
            <Controller 
                name="phone"
                control={control}
                render={({ field: { onChange, value, ref } }) => (
                    <TextField 
                        size="small"
                        ref={ref}
                        value={value}
                        onChange={onChange}
                    />
                )}
            />
            <Button onClick={() => console.log('인증 요청')}>인증</Button>
            <h5>이메일</h5>
            <Controller 
                name="email"
                control={control}
                render={({ field: { onChange, value, ref } }) => (
                    <TextField 
                        size="small"
                        ref={ref}
                        value={value}
                        onChange={onChange}
                    />
                )}
            />
            <h5>이름</h5>
            <Controller 
                name="name"
                control={control}
                render={({ field: { onChange, value, ref } }) => (
                    <TextField 
                        size="small"
                        ref={ref}
                        value={value}
                        onChange={onChange}
                    />
                )}
            />
            <Button onClick={handleSubmit(postSignUp)}>회원가입</Button>
        </div>
    )
}

export default SignUpSection