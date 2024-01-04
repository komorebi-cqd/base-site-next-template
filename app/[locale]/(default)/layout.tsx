import { ReactNode } from 'react';
import Header from '@/app/components/ui/header';
import Footer from '@/app/components/ui/footer';
import getIntl from "../intl";


export async function generateMetadata({ params }: { params: { locale: string } }) {
    const intl = await getIntl(params.locale);
    return {
        title: intl.formatMessage({ id: "seo_home_title" }),
        description: intl.formatMessage({ id: "seo_home_title" })
    }
}


export default async function DefaultRootLayout({
    children,
    params
}: {
    children: ReactNode;
    params: { locale: string };
}) {
    return (
        <>
            <Header />
            {children}
            <Footer locale={params.locale} />
        </>
    );
}

