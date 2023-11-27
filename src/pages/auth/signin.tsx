import axios from "axios";
import { useEffect, useState } from "react";
import { usePostSignUpMutation } from 'core/apis/userApi'; 

function SignInPage({ ...props }) {

    const [userId, setUserId] = useState<string>();
    const [userPwd, setUserPwd] = useState<string>();
    // const mutation = usePostSignUpMutation();
    const post = () => {
        return new Promise<string>((resolve) => resolve(""));
    }

    useEffect(() => {
        // 공개키 취득
        const rsaResponse = axios.get("/v1/rsa");
        console.dir(props);
    }, []);

    const handleSubmit = () => {    
        alert('서버 통신');

        // 공개키 인코드

        // API 전송

        // 성공 시 Go Home
    }

    return (
        <>
            <h1>로그인 페이지</h1>
            <span>ID 입력</span>
            <input type="text" onChange={(e) => setUserId(e.target.value)} />
            <span>PWD 입력</span>
            <input type="password" onChange={(e) => setUserPwd(e.target.value)} />
            <button onClick={handleSubmit}>로그인</button>
        </>
    );
}

// export async function getServerSideProps() {
//     const rsaResponse = await axios.get("/v1/rsa");
    
//     return { props: { base64EncodedPublicKeyPem: rsaResponse.data } };
// }

export default SignInPage;