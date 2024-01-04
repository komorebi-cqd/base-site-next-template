import React from 'react'
import Image from 'next/image';
import getIntl from "../../intl";
import JumpBtn from "@/app/components/Btn/JumpBtn";


export async function generateMetadata({ params }: { params: { locale: string } }) {
    const intl = await getIntl(params.locale);
    return {
        title: intl.formatMessage({ id: "seo_rp_title" }),
        description: intl.formatMessage({ id: "seo_rp_title" })
    }
}



const RiskPortait = async ({ params: { locale } }: { params: { locale: string } }) => {
    const intl = await getIntl(locale);

    const identificationModeList = [
        { text: intl.formatMessage({id: 'rp_sj_js_one'}), imgUrl: "/image/risk-portrait/sbfs-1.png" },
        { text: intl.formatMessage({id: 'rp_sj_js_two'}), imgUrl: "/image/risk-portrait/sbfs-2.png" },
        { text: intl.formatMessage({id: 'rp_sj_js_three'}), imgUrl: "/image/risk-portrait/sbfs-3.png" },
        { text: intl.formatMessage({id: 'rp_sj_js_four'}), imgUrl: "/image/risk-portrait/sbfs-4.png" },
        { text: intl.formatMessage({id: 'rp_sj_js_five'}), imgUrl: "/image/risk-portrait/sbfs-5.png" },
        { text: intl.formatMessage({id: 'rp_sj_js_six'}), imgUrl: "/image/risk-portrait/sbfs-6.png" },
        { text: intl.formatMessage({id: 'rp_sj_js_seven'}), imgUrl: "/image/risk-portrait/sbfs-7.png" },
        { text: intl.formatMessage({id: 'rp_sj_js_eight'}), imgUrl: "/image/risk-portrait/sbfs-8.png" },
    ];
    
    const ourAdvList = [
        { text: intl.formatMessage({id: 'rp_adv_one_t'}), desc: intl.formatMessage({id: 'rp_adv_one_desc'}), imgUrl: "/image/early-warning/adv-1.png" },
        { text: intl.formatMessage({id: 'rp_adv_two_t'}), desc: intl.formatMessage({id: 'rp_adv_two_desc'}), imgUrl: "/image/early-warning/adv-2.png" },
        { text: intl.formatMessage({id: 'rp_adv_three_t'}), desc: intl.formatMessage({id: 'rp_adv_three_desc'}), imgUrl: "/image/early-warning/adv-3.png" },
    ];

    return (
        <div>
            {/* 顶部大图 */}
            <div className="w-full  bg-[#00061a] max-h-[var(--top-h)] h-[var(--top-h)]">
                <div className="max-w-[1440px] mx-auto h-full bg-[url('/image/risk-portrait/top-bg.png')] bg-contain bg-right-bottom bg-no-repeat  px-6 xl:px-0">
                    <div className={`flex flex-col text-white h-full max-w-[1200px] mx-auto ${locale === 'en' ? ' pt-36 md:pt-48 ' : 'pt-40 sm:pt-48'}`}>
                        <h3 className={`font-bold text-5xl ${locale === 'en' ? ' lg:text-[55px] max-w-[675px]' : 'lg:text-[58px] '}`}>{intl.formatMessage({id: 'rp_top_title'})}</h3>
                        <div className={`flex flex-col mt-4 mb-6 ${locale === 'en' ? ' max-w-[460px] text-[25px]' : 'text-3xl'}`}>
                            <span>{intl.formatMessage({id: 'rp_top_desc'})}</span>
                        </div>
                        <JumpBtn locale={locale}>
                            {intl.formatMessage({ id: 'jump_wetech_text' })}
                        </JumpBtn>
                    </div>
                </div>
            </div>
            {/* 多维画像设计，提高风险识别精准度 */}
            <div className='w-full bg-white pt-14 pb-[108px] text-[#333333]'>
                <h3 className={`text-[38px] leading-tight font-semibold text-center mx-auto ${locale === 'en' ? ' max-w-[900px]' : ''}`}>{intl.formatMessage({id: 'rp_sj_t'})}</h3>
                <div className={`mx-auto text-center mt-8 mb-12 text-[rgba(0,0,0,0.69)] text-base ${locale === 'en' ? '' : 'flex items-center justify-center flex-col'}`}>
                    <span>{intl.formatMessage({id: 'rp_sj_desc_one'})}</span>
                    <span>{intl.formatMessage({id: 'rp_sj_desc_two'})}</span>
                </div>
                <div className='w-1200'>
                    <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-7 gap-y-8 text-2xl px-5 md:px-0'>
                        {identificationModeList.map(it => (
                            <li key={it.text} className='w-full h-[260px] bg-white rounded-[10px] shadow-[0px_4px_40px_0px_rgba(43,89,255,0.08)] flex items-center flex-col pt-7'>
                                <Image src={it.imgUrl} alt="" width={110} height={110} sizes="110px" />
                                <span className={`pt-[28px] text-center ${locale === 'en' ? ' max-w-[238px] text-base' : ''}`}>{it.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* 我们的团队 */}
            <div className=' w-full bg-[rgba(49,111,231,0.05)] text-[#333] pt-[82px] pb-[90px]'>
                <div className='w-1200 flex items-center px-5 lg:px-0 flex-col md:flex-row gap-y-5'>
                    <div className='flex-1 w-full rounded-[10px] shadow-[0px_4px_40px_0px_rgba(43,89,255,0.08)] bg-white pt-10 md:pt-[72px] pb-14 md:pb-[108px] px-10 bg-[url("/image/risk-portrait/dhao.png")] bg-no-repeat bg-[right_36px_bottom_1rem] bg-[length:148px_110px]'>
                        <h3 className=' text-primary font-semibold text-[38px] mb-7'>{intl.formatMessage({id: 'rp_our_team'})}</h3>
                        <ul className={`flex flex-col leading-6 text-sm max-w-[545px]`}>
                            <li className=' list-style-dot'>{intl.formatMessage({id: 'rp_our_team_desc_one'})}</li>
                            <li className=' list-style-dot'>{intl.formatMessage({id: 'rp_our_team_desc_two'})}</li>
                            <li className=' list-style-dot'>{intl.formatMessage({id: 'rp_our_team_desc_three'})}</li>
                        </ul>
                    </div>
                    <div className=' relative ml-5 lg:ml-20'>
                        <Image src={locale === "en" ? "/image/risk-portrait/our-tem-en.png" : "/image/risk-portrait/our-tem.png"} alt='' width={385} height={361} sizes="385px"
                            style={{
                                width: '100%',
                                height: 'auto', 
                            }} />
                    </div>
                </div>
            </div>
            {/*我们的优势 */}
            <div className=' w-full bg-white'>
                <div className='w-1200 min-h-[548px] pt-10 pb-[94px]'>
                    <h3 className=' text-[38px] font-semibold text-center pb-16'>{intl.formatMessage({id: 'our_advantage'})}</h3>
                    <ul className='flex justify-center flex-wrap gap-x-6 gap-y-6'>
                        {ourAdvList.map((it, index) => (
                            <li key={it.text} className=' flex-1 w-full min-w-[260px] max-w-[383px] h-[326px] bg-[#F3F5F9] rounded-[10px] flex flex-col items-center pt-5'>
                                <Image src={it.imgUrl} alt='' width={155} height={155} sizes="155px"
                                />
                                <p className={`text-primary mb-4 text-center font-semibold ${locale === 'en' ? 'text-xl' : 'text-2xl'}`}>{it.text}</p>
                                <p className={` text-sm text-center ${locale === 'en' ? 'max-w-[320px]' : 'max-w-[224px]'} ${index !== 0 && locale === 'en' ? 'max-w-[290px]' : ''}`}>{it.desc}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RiskPortait;