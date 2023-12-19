import PageFooter from "containers/PageFooter"
import TitleHeader from "containers/TitleHeader"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: '이랑이 첫 생파!',
    description: '',
}

export default function SignInPageLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <>
            <TitleHeader />
            {children}
            <PageFooter />
        </>
    )
}


