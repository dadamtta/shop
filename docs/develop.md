# 진행한 내용 정리

프로젝트 폴더 구조는 아래 링크에 정리된 글을 참고해서 진행  
[miriya.net Next.js 폴더/파일 구조 잡기](https://miriya.net/blog/cliz752zc000lwb86y5gtxstu)

## Next.JS

### proxy 설정

리액트에서는 proxy 설정을 `package.json`에서 한 줄로 심플하게 설정을 했는데,  
NextJS의 경우 `next.config.js`에서 `rewrites()`로 설정해야 한다.