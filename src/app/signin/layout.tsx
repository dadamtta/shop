import { Metadata } from "next"

export const metadata: Metadata = {
    title: '로그인 | 다담따',
    description: '초대장에 온 마음을 다 담다.',
}

export default function SignInPageLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <h1 className="underline">SIGN IN</h1>
            <nav></nav>
            {children}
        </section>
    )
}