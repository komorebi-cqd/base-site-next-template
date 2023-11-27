import type { Metadata } from 'next';
import { ReactNode } from 'react';
import Header from '@/app/components/ui/header';
import getCurrentUser from "@/app/actions/getCurrentUser";
import Footer from '@/app/components/ui/footer';


export const metadata: Metadata = {
    title: 'WeTech',
    description: 'WeTech官网'
};


export default async function DefaultRootLayout({
    children,
}: {
    children: ReactNode;
    params: { locale: string };
}) {

    const currentUser = await getCurrentUser();
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

