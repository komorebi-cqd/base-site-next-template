'use client'
import { useState, useEffect, Fragment } from 'react'
import Link from 'next/link'
import Logo from './logo'
import { usePathname, useParams } from 'next/navigation'
import MobileMenu from './mobile-menu'
import { useNavList } from "../utils/data";
import LocaleSwitcher from "@/app/components/LocaleSwitcher";


export default function Header() {
    const params = useParams();
    const [url, setUrl] = useState<string | null>('');
    const { navList, reg } = useNavList();
    const pathname = usePathname();
    const [top, setTop] = useState<boolean>(true)
    // detect whether user has scrolled the page down by 10px
    const scrollHandler = () => {
        window.scrollY > 10 ? setTop(false) : setTop(true)
    }


    useEffect(() => {
        scrollHandler()
        window.addEventListener('scroll', scrollHandler)
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        }
    }, [top]);


    useEffect(() => {
        let url = pathname;
        if (pathname?.startsWith("/en")) {
            url = url?.replace(reg, "") || '/';
        }
        setUrl(url);
    }, [pathname, reg]);

    return (
        <header className={`fixed w-full z-30 transition duration-300 ease-in-out ${!top ? ' bg-[--header-bg]  backdrop-blur-sm shadow-sm' : ''}`}>
            <div className={`mx-auto px-5 relative ${params?.locale === "en" ? "" : ""}`}>
                <div className="flex items-center justify-between h-28 md:h-36 md:gap-x-6 lg:gap-x-12 xl:gap-x-20">

                    {/* Site branding */}
                    <div className="shrink-0 z-50">
                        <Logo />
                    </div>

                    {/* Desktop navigation */}
                    <nav className={`hidden md:grow h-full  ${params?.locale === "en" ? "xl:flex" : " md:flex"}`}>
                        {/* Desktop sign in links */}
                        <ul className={`flex grow flex-wrap  justify-center items-center text-sm text-[#C7DAFF] ${params?.locale === "en" ? "gap-x-4 2xl:gap-x-10" : "gap-x-10"}`}>
                            {navList.map(nav => {
                                return (
                                    <li key={nav.id} className={` relative ${params?.locale === "en" ? "" : ""}`}>
                                        <Link href={params?.locale === "en" ? "/en" + nav.link : nav.link} className={`text-[#C7DAFF] hover:text-white font-bold transition-colors after:absolute  after:content-[''] after:h-1 after:transition-all after:rounded-e after:w-[0px] hover:after:w-[7px] after:bg-white after:left-1/2 before:absolute before:h-1 before:transition-all before:rounded-s before:w-[0px] hover:before:w-[7px] before:bg-white before:right-1/2 after:-bottom-4 before:-bottom-4 ${url === nav.link ? "text-white after:w-[7px] before:w-[7px]" : ""}`}>
                                            {nav.text}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                    <div className={`justify-center items-center text-white text-sm hidden ${params?.locale === "en" ? "xl:flex" : " md:flex"}`}>
                        <LocaleSwitcher />
                    </div>

                    <MobileMenu params={params} />
                </div>
            </div>
        </header>
    )
}
