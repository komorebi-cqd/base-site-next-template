'use client'

import { useState, useEffect } from 'react'
import LocaleSwitcher from '../LocaleSwitcher'
import Link from 'next/link'
import Logo from './logo'
import Dropdown from '@/app/components/utils/dropdown'
import MobileMenu from './mobile-menu'

export default function Header() {

    const [top, setTop] = useState<boolean>(true)

    // detect whether user has scrolled the page down by 10px
    const scrollHandler = () => {
        window.scrollY > 10 ? setTop(false) : setTop(true)
    }

    useEffect(() => {
        scrollHandler()
        window.addEventListener('scroll', scrollHandler)
        return () => window.removeEventListener('scroll', scrollHandler)
    }, [top])

    return (
        <header className={`fixed w-full z-30 transition duration-300 ease-in-out ${!top ? 'bg-white backdrop-blur-sm shadow-sm' : ''}`}>
            <div className="max-w-6xl mx-auto px-5 sm:px-6 ">
                <div className="flex items-center justify-between h-16 md:h-20">

                    {/* Site branding */}
                    <div className="shrink-0 mr-4">
                        <Logo />
                    </div>

                    {/* Desktop navigation */}
                    <nav className="hidden md:flex md:grow h-full">
                        {/* Desktop sign in links */}
                        <ul className="flex grow justify-end flex-wrap items-center">
                            <Dropdown title='列表一'>
                                <div>
                                    <h3>title</h3>
                                    <ul>
                                        <li>item1</li>
                                        <li>item2</li>
                                        <li>item3</li>
                                    </ul>
                                </div>
                            </Dropdown>
                            <Dropdown title='列表二'>
                                <div>
                                    <h3>title</h3>
                                    <ul>
                                        <li>item1</li>
                                        <li>item2</li>
                                        <li>item3</li>
                                    </ul>
                                </div>
                            </Dropdown>
                            <Dropdown title='中文' isHasRelative={true}>
                                <ul>
                                    <li>中文</li>
                                    <li>英文</li>
                                </ul>
                            </Dropdown>
                            <li className='h-full flex justify-center items-center hover:bg-slate-500 transition duration-150 ease-in-out'>
                                <Link href="/user/login" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">登录</Link>
                            </li>
                            <li className='h-full flex justify-center items-center hover:bg-slate-500 transition duration-150 ease-in-out'>
                                退出登录
                            </li>
                        </ul>

                    </nav>

                    <MobileMenu />

                </div>
            </div>
        </header>
    )
}
