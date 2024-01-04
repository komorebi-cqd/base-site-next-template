import i18nConfig from '@/i18nConfig';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import getIntl from './intl';
import ServerIntlProvider from '@/app/providers/ServerIntlProvider';
import ToasterProvider from '@/app/providers/ToasterProvider';
import "@/app/globals.css";


export const metadata: Metadata = {
    title: '创建网站',
    description: '网址'
};

export function generateStaticParams() {
    return i18nConfig.locales.map(locale => ({ locale }));
}

export default async function DefaultRootLayout({
    children,
    params: { locale }
}: {
    children: ReactNode;
    params: { locale: string };
}) {

    const intl = await getIntl(locale);
    return (
        <html lang={locale}>
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <body>
                <ServerIntlProvider messages={intl.messages} locale={intl.locale}>
                    <ToasterProvider />
                    {children}
                </ServerIntlProvider>
            </body>
        </html>
    );
}

