# 진행한 내용 정리

프로젝트 폴더 구조는 아래 링크에 정리된 글을 참고해서 진행  
[miriya.net Next.js 폴더/파일 구조 잡기](https://miriya.net/blog/cliz752zc000lwb86y5gtxstu)

## Next.JS 14

[Start building with Next.js 14](https://nextjs.org/learn)  
[Hoon님이 정리하신 NextJS 글(2019년)](https://velog.io/@jeff0720/Next.js-%EA%B0%9C%EB%85%90-%EC%9D%B4%ED%95%B4-%EB%B6%80%ED%84%B0-%EC%8B%A4%EC%8A%B5%EA%B9%8C%EC%A7%80-%ED%95%B4%EB%B3%B4%EB%8A%94-SSR-%ED%99%98%EA%B2%BD-%EA%B5%AC%EC%B6%95)

### proxy 설정

리액트에서는 proxy 설정을 `package.json`에서 한 줄로 심플하게 설정을 했는데,  
NextJS의 경우 `next.config.js`에서 `rewrites()`로 설정해야 한다.

## axios

로그인, 회원가입 등 민감 정보를 서버에 HTTP 요청을 보낼 때 서버에서 공개키를 받아 암호화하는 처리를 했다.  
서버에서는 클라이언트의 SessionID를 기준으로 session(redis)에 비밀키를 보관하고 있는데 GetSession이 안되는 문제가 있었다.  
`axios 설정 withCredentials:true 줘야 session 정보가 서버로 전달된다.`

## mui

[material-ui-nextjs-ts example](https://github.com/mui/material-ui/tree/master/examples/material-ui-nextjs-ts)