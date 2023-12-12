import React from 'react'
import getIntl from "@/app/[locale]/intl";

type Props = {
    bgImg: string;
    title: string;
    desc: React.ReactNode;
    locale: string;
    topText?: string;
}

const PageTop: React.FC<Props> = async ({ bgImg, title, desc, topText, locale }) => {
    const intl = await getIntl(locale);
    return (
        <div className={`w-full h-[51.125rem] bg-center bg-no-repeat relative bg-cover mb-[14.5rem]`} style={{ backgroundImage: `url(${bgImg})` }}>
            <div className=' text-sm text-white pt-[8rem] max-w-4xl mx-auto pl-8 mb-3'>{topText}</div>
            <div className='flex flex-col justify-between items-center absolute -bottom-52 left-1/2 -translate-x-1/2 w-full xl:w-[77.25rem] lg:h-[20.25rem] bg-gradient-to-b from-[#EEF6FF] to-white rounded-[1.69rem] shadow-[0_12px_3px_0px_rgba(49,111,231,0.1)]'>
                {/* 标题 */}
                <div className='flex items-center justify-center gap-x-4 pt-12 mb-5 px-4 md:px-0'>
                    <span className='block flex-shrink-0 w-[22px] h-[22px] rounded-full bg-gradient-to-bl from-white to-[#316FE7]'></span>
                    <div className={` text-[#316FE7] font-semibold text-center ${locale === "en" ? " text-xl" : "text-[1.75rem]"}`}>{title}</div>
                    <span className='block flex-shrink-0 w-[22px] h-[22px] rounded-full bg-gradient-to-bl from-white to-[#316FE7]'></span>
                </div>
                {/* 介绍 */}
                <div className="text-[#333] text-base text-center flex-1 pb-10 lg:pb-0 px-4 md:px-0">
                    {desc}
                </div>
                {/* 按钮 */}
                <a href='https://plat.wetech-rc.com/' target='_blank' className='rounded border border-[#316FE7] text-[#316FE7] w-52 h-11 leading-10 text-center mb-12'>{intl.formatMessage({ id: 'jump_wetech_text' })}</a>
            </div>
        </div>
    )
}

export default PageTop;