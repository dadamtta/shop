"use client"

import { TextField, Button } from "@mui/material"
import { authApi } from "apis/authApi"
import { userApi } from "apis/userApi"
import { memo, useEffect, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { encryptBase64EncodedData } from "utils/rsa"
import styles from './styles.module.css'
import Link from "next/link"

interface SignInInputs {
    userId: string
    userPwd: string
}

interface Props {
}

function OAuthSignInArticle() {
    return (
        <article>
            <h3>다른 계정으로 로그인하기</h3>
            <div>
                <Button 
                    onClick={() => alert('구글 로그인')}
                >구글 이미지</Button>
                <Button 
                    onClick={() => alert('네이버 로그인')}
                >네이버 이미지</Button>
                <Button 
                    onClick={() => alert('카카오 로그인')}
                >카카오 이미지</Button>
            </div>
        </article>
    )
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
        <section className={styles['sect-signin']}>
            <div className={styles['sect-signin-inner']}>
                <h1>로그인</h1>
                <div className={styles['sect-signin-form']}>
                    <Controller 
                        name="userId"
                        control={control}
                        render={({ field: { onChange, value, ref } }) => (
                            <TextField 
                                className={styles["sect-signin-input"]}
                                ref={ref}                                
                                size="small"
                                value={value}
                                placeholder="아이디"
                                onChange={onChange}
                            />
                        )}
                    />
                    <Controller 
                        name="userPwd"
                        control={control}
                        render={({ field: { onChange, value, ref } }) => (
                            <TextField 
                                className={styles["sect-signin-input"]}
                                ref={ref}
                                type="password"
                                size="small"
                                value={value}
                                placeholder="비밀번호"
                                onChange={onChange}
                            />
                        )}
                    />
                    <Button 
                        className={styles["sect-signin-submit"]}
                        onClick={handleSubmit(postSignIn)}
                    >로그인</Button>
                    <Link href="/signup">
                        <Button
                        >회원가입</Button>
                    </Link>
                </div>
                <OAuthSignInArticle />
            </div>
        </section>
    )
}

export default memo(SignInSection)