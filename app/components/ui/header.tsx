'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from './logo'
import { usePathname } from 'next/navigation'
import MobileMenu from './mobile-menu'
import {navList} from "../utils/data";


export default function Header() {
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
            <div className=" max-w-4xl mx-auto px-5 sm:px-6 relative">
                <div className="flex items-center justify-between h-28 md:h-36">

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
                                    <li key={nav.id} >
                                        <Link href={nav.link} className={`text-[#C7DAFF] hover:text-white font-bold transition-colors relative after:absolute  after:content-[''] after:h-1 after:transition-all after:-bottom-4 after:rounded-e after:w-[0px] hover:after:w-[7px] after:bg-white after:left-1/2 before:absolute  before:content-[''] before:h-1 before:transition-all before:-bottom-4 before:rounded-s before:w-[0px] hover:before:w-[7px] before:bg-white before:right-1/2 ${(pathname === "/" && nav.link === "/") || (pathname !== "/" && nav.link !== "/" && pathname?.startsWith(nav.link)) ? "text-white after:w-[7px] before:w-[7px]" : ""}`}>
                                            {nav.text}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                    <MobileMenu />
                </div>
            </div>
        </header>
    )
}
