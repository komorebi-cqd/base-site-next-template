import getIntl from './intl';
import ServerIntlProvider from '@/app/providers/ServerIntlProvider';
import ExampleClientComponent from '@/app/components/ExampleClientComponent';
import LocaleSwitcher from '@/app/components/LocaleSwitcher';
import Link from 'next/link';

async function Home({ params: { locale } }: { params: { locale: string } }) {
    const intl = await getIntl(locale);

    return (
        <ServerIntlProvider messages={intl.messages} locale={intl.locale}>
            <main>
                <h1>{intl.formatMessage({ id: 'header' })}</h1>
                <ExampleClientComponent />
                <Link href="/about">{intl.formatMessage({ id: 'nav_about' })}</Link>
                <LocaleSwitcher />
            </main>
        </ServerIntlProvider>
    );
}

export default Home;
