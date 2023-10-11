import Image from 'next/image'
import Link from 'next/link'
import getCurrentUser from "@/app/actions/getCurrentUser";
import SignOutButton from './components/SignOutButton';

export default async function Home() {
    const currentUser = await getCurrentUser();
    console.log("home---", currentUser, "---home");
    return (
        <div className=' w-full h-full'>
            <Link href="/user/login">登录</Link>
            {
                currentUser?.user?.username || <Link href="/user/login">登录</Link>
            }
            {
                currentUser?.user?.username && <SignOutButton />
            }

            <Link href="/about">关于我</Link>
        </div>
    )
}
