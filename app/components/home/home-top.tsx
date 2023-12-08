import React from 'react'
import getIntl from "@/app/[locale]/intl";

const HomeTop = async ({ locale }: { locale: string }) => {
    console.log(locale);
    const intl = await getIntl(locale);
    return (
        <div className='home-bg w-full h-[51.125rem] transition-all px-20 relative pt-40 xl:pt-60 lg:pl-44'>
            <div className='flex flex-col text-white lg:w-[68.75rem] mx-auto'>
                <div className=' w-6 h-[2px] bg-white' />
                <div className={`font-extrabold mt-11 mb-4 ${locale === "en" ? " text-4xl" : "text-5xl md:text-6xl"}`}>{intl.formatMessage({ id: 'home_top_title' })}</div>
                <div className={`font-medium ${locale === "en" ? " text-sm" : "text-2xl md:text-3xl"}`}>{intl.formatMessage({ id: 'home_top_title_des' })}</div>
                <a href='https://plat.wetech-rc.com/' target='_blank' className='block cursor-pointer mt-12 border border-white w-[12.875rem] h-[2.75rem] rounded leading-[2.6rem] text-center text-base'>{intl.formatMessage({ id: 'jump_wetech_text' })}</a>
            </div>
        </div>
    )
}

export default HomeTop