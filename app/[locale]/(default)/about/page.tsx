import React from 'react'
import Image from 'next/image';
import getIntl from "../../intl";


const About = async ({ params: { locale } }: { params: { locale: string } }) => {
    const intl = await getIntl(locale);
    return (
        <div className='w-full'>
            {/* 顶部背景图 */}
            <div className='w-full h-[51.125rem] bg-[url("/image/about/bg-top.png")] bg-no-repeat relative bg-cover bg-center'>
                <div className=' text-sm text-white pt-[8rem] max-w-4xl mx-auto pl-8 mb-3'>{intl.formatMessage({ id: 'breadcrumbs_about' })}</div>
            </div>
            <div className='w-full py-12 bg-gradient-to-b  from-[#E7F1FF] to-white'>
                <div className='max-w-[78.75rem] mx-auto h-full flex flex-col'>
                    <div className='flex-1 flex flex-col md:flex-row justify-between items-center px-3 md:px-20 pb-7'>
                        <div className='max-w-[20rem] xl:max-w-[32.75rem] lg:max-w-[23rem]'>
                            <div className={`sub-title text-left mb-4 ${locale === "en" ? " text-[32px]" : ""}`}>{intl.formatMessage({ id: 'about_title' })}</div>
                            <div className='text-[#333333] text-base'>{intl.formatMessage({ id: 'about_des' })}</div>
                        </div>
                        <div className=' relative'>
                            <Image src="/image/about/about-r.png" alt='about-WeTech' width={465} height={316} sizes="465px"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                }} />
                        </div>
                    </div>
                    <div className='w-full h-[1px] bg-[rgba(0,0,0,0.15)]'></div>
                    <div className='flex-1 flex items-center justify-center flex-col px-3 sm:p-0 text-sm'>
                        <div className={`sub-title mb-7 mt-14 ${locale === "en" ? " text-[32px]" : ""}`}>{intl.formatMessage({ id: 'about_contact_us' })}</div>
                        <div className='sm:w-[37.5rem] pb-20 bg-white shadow-[0_8px_8px_0_rgba(0,0,0,0.25)]'>
                            <ul className='flex flex-col gap-y-5 px-12'>
                                <li className='relative -ml-8 pt-10'>
                                    <Image src="/image/about-logo.png" width={254} height={60} alt='WeTech' />
                                </li>
                                <li className='flex items-start sm:items-center gap-x-1'>
                                    <Image src="/image/about/phone.png" className=' pt-1 sm:pt-0' width={16} height={16} alt='WeTech-phone' />
                                    <span>{intl.formatMessage({ id: 'phone' })}</span>
                                </li>
                                <li className='flex items-start sm:items-center gap-x-1'>
                                    <Image src="/image/about/email.png" className=' pt-1 sm:pt-0' width={16} height={16} alt='WeTech-email' />
                                    <span>{intl.formatMessage({ id: 'email' })}</span>
                                </li>
                                <li className='flex items-start gap-x-1'>
                                    <Image src="/image/about/address.png" className=' pt-1' width={16} height={16} alt='WeTech-address' />
                                    <div className='flex'>
                                        <span className=' flex-shrink-0'>{intl.formatMessage({ id: 'address_text' })}</span>
                                        <div className=' md:max-w-[300px]'>{intl.formatMessage({ id: 'address_detials' })}</div>
                                    </div>
                                </li>
                                {locale !== "en" && <li>
                                    <a href={process.env.NEXT_PUBLIC_JUMP_URL} target="_blank" className="py-2 px-3 bg-indigo-500 text-white text-sm font-semibold rounded-md shadow focus:outline-none">加入渠道联盟</a>
                                </li>}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About