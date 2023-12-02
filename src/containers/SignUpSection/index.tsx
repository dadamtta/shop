"use client"

import styles from './styles.module.css'
import { Button, MenuItem, Select, TextField } from "@mui/material"
import { authApi } from "apis/authApi"
import { userApi } from "apis/userApi"
import { ReactNode, useEffect, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { encryptBase64EncodedData } from "utils/rsa"

interface SignUpInputs1 {
    userId: string
    userPwd: string
    checkUserPwd: string
    email?: string
    name: string
    phone: string
}

interface SignUpInputs {
    name: string
    userId: string
    userPwd: string
    checkUserPwd: string
    emailLocalStr?: string
    emailDomainStr?: string
    phoneStartNum: string
    phoneMiddleNum: string
    phoneEndNum: string
}

interface Props {
}

interface InputWithLabelProps {
    label: string
    children: ReactNode
}

function InputWithLabel({
    label,
    children
}: InputWithLabelProps) {
    return (
        <div className={styles['input-with-label']}>
            <h5>{label}</h5>
            <div>
                {children}
            </div>
        </div>
    )
}

function SignUpSection({
}: Props) {

    const [publicKey, setPublicKey] = useState<string>('')
    const { control, handleSubmit } = useForm<SignUpInputs>({
        defaultValues: {
            name: "",
            userId: "",
            userPwd: "",
            checkUserPwd: "",
            emailLocalStr: undefined,
            emailDomainStr: undefined,
            phoneStartNum: "010",
            phoneMiddleNum: "",
            phoneEndNum: "",
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
            name: inputs.name,
            userId: inputs.userId,
            userPwd: inputs.userPwd,
            checkUserPwd: inputs.checkUserPwd,
            emailLocalStr: inputs.emailLocalStr,
            emailDomainStr: inputs.emailDomainStr,
            phoneStartNum: inputs.phoneStartNum,
            phoneMiddleNum: inputs.phoneMiddleNum,
            phoneEndNum: inputs.phoneEndNum,
        }))
        // todo error handle
        userApi.postSignUp(encryptedInputs)
    }

    return (
        <section className={styles["sect-signup"]}>
            <div className={styles["sect-signup-inner"]}>
                <h1>회원가입 페이지</h1>
                <InputWithLabel
                    label='이름'
                >
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
                </InputWithLabel>
                <InputWithLabel
                    label='아이디'
                >
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
                </InputWithLabel>
                <InputWithLabel
                    label='비밀번호'
                >
                    <Controller 
                        name="userPwd"
                        control={control}
                        render={({ field: { onChange, value, ref } }) => (
                            <TextField 
                                size="small"
                                ref={ref}
                                type="password"
                                value={value}
                                onChange={onChange}
                            />
                        )}
                    />
                </InputWithLabel>
                <InputWithLabel
                    label='비밀번호 확인'
                >
                    <Controller 
                        name="checkUserPwd"
                        control={control}
                        render={({ field: { onChange, value, ref } }) => (
                            <TextField 
                                size="small"
                                ref={ref}
                                type="password"
                                value={value}
                                onChange={onChange}
                            />
                        )}
                    />
                </InputWithLabel>
                <InputWithLabel
                    label='휴대폰 번호'
                >
                    <>
                        <Controller 
                            name="phoneStartNum"
                            control={control}
                            render={({ field: { onChange, value, ref } }) => (
                                <Select
                                    ref={ref}
                                    size="small"
                                    value={value}
                                    onChange={(e) => onChange(e)}
                                >
                                    <MenuItem value="010">010</MenuItem>
                                    <MenuItem value="011">011</MenuItem>
                                    <MenuItem value="016">016</MenuItem>
                                    <MenuItem value="017">017</MenuItem>
                                </Select>
                            )}
                        />
                        <Controller 
                            name="phoneMiddleNum"
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
                        <Controller 
                            name="phoneEndNum"
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
                    </>
                </InputWithLabel>
                <InputWithLabel
                    label='이메일'
                >
                    <>
                        <Controller 
                            name="emailLocalStr"
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
                        @
                        <Controller 
                            name="emailDomainStr"
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
                    </>
                </InputWithLabel>
                <Button onClick={handleSubmit(postSignUp)}>회원가입</Button>
            </div>
        </section>
    )
}

export default SignUpSection