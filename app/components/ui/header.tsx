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
    }, [top])

    return (
        <header className={`fixed w-full z-30 transition duration-300 ease-in-out ${!top ? ' bg-[--header-bg]  backdrop-blur-sm shadow-sm' : ''}`}>
            <div className={`mx-auto px-5 relative ${params?.locale === "en" ? "max-w-[62.5rem]" : "max-w-[1440px]"}`}>
                <div className="flex items-center justify-between h-28 md:h-36 gap-x-20">

                    {/* Site branding */}
                    <div className="shrink-0 mr-11  z-50">
                        <Logo />
                    </div>

                    {/* Desktop navigation */}
                    <nav className="hidden md:flex md:grow h-full">
                        {/* Desktop sign in links */}
                        <ul className="flex grow justify-between flex-wrap items-center text-sm text-[#C7DAFF]">
                            {navList.map(nav => {
                                return (
                                    <li key={nav.id} className={` relative ${params?.locale === "en" ? " max-w-[6.75rem] text-center h-14 mt-8" : ""}`}>
                                        <Link href={params?.locale === "en" ? "/en" + nav.link : nav.link} className={`text-[#C7DAFF] hover:text-white font-bold transition-colors after:absolute  after:content-[''] after:h-1 after:transition-all after:rounded-e after:w-[0px] hover:after:w-[7px] after:bg-white after:left-1/2 before:absolute before:h-1 before:transition-all before:rounded-s before:w-[0px] hover:before:w-[7px] before:bg-white before:right-1/2 ${params?.locale === "en" ? " after:bottom-0 before:bottom-0" : "after:-bottom-4 before:-bottom-4"} ${((pathname?.replace(reg, "") === "/" || pathname?.replace(reg, "") === "") && nav.link === "/") || (pathname?.replace(reg, "") !== "/" && nav.link !== "/" && pathname?.replace(reg, "")?.startsWith(nav.link)) ? "text-white after:w-[7px] before:w-[7px]" : ""}`}>
                                            {nav.text}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                    <div className='flex justify-center items-center text-white text-sm'>
                        <LocaleSwitcher />
                    </div>

                    <MobileMenu params={params} />
                </div>
            </div>
        </header>
    )
}
