import { Metadata } from "next"

export const metadata: Metadata = {
    title: '회원가입 | 다담따',
    description: '초대장에 온 마음을 다 담다.',
}

export default function SignUpPageLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
        </>
    )
}