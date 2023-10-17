import getIntl from '../intl';
import ExampleClientComponent from '@/app/components/ExampleClientComponent';
import LocaleSwitcher from '@/app/components/LocaleSwitcher';
import Link from 'next/link';
import getCurrentUser from "@/app/actions/getCurrentUser";

async function Home({ params: { locale } }: { params: { locale: string } }) {
    const currentUser = await getCurrentUser();
    console.log("home---", currentUser, "---home");
    const intl = await getIntl(locale);

    return (
        <main className=' pt-40'>
            {
                currentUser?.user?.username || <Link href="/user/login">登录</Link>
            }
            <h1>{intl.formatMessage({ id: 'header' })}</h1>
            <ExampleClientComponent />
            <Link href="/about">{intl.formatMessage({ id: 'nav_about' })}</Link>
            <LocaleSwitcher />
        </main>
    );
}

export default Home;
