import './globals.css'
import type { Metadata } from 'next'
import ToasterProvider from './providers/ToasterProvider';
import Header from './components/ui/header';


export const metadata: Metadata = {
    title: 'wetech',
    description: 'wetech官网',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <body>
                <ToasterProvider />
                <Header />
                {children}
            </body>
        </html>
    )
}
