import type { Metadata } from 'next'
import { ResolvingMetadata } from 'next';

export const metadata: Metadata = {
    title: 'wetech登录',
    description: 'wetech登录页面',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <header>登录界面</header>
            {children}
        </>

    )
}
