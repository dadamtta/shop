
export default function SignInPageLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <h1>SIGN IN</h1>
            <nav></nav>
            {children}
        </section>
    )
}