import React from 'react'
import Image from 'next/image';
import PageTop from '@/app/components/ui/page-top'
import EarlyWarningSwiper from '@/app/components/ui/early-warning-swiper';
import getIntl from "../../intl";






const EarlyWarning = async ({ params: { locale } }: { params: { locale: string } }) => {
    const intl = await getIntl(locale);

    const warnList = [
        {
            src: "/image/advantage-icons/yj1.png",
            title: intl.formatMessage({ id: 'ew_jf_sx_one_t' }),
            desc: intl.formatMessage({ id: 'ew_jf_sx_one_desc' })
        },
        {
            src: "/image/advantage-icons/yj2.png",
            title: intl.formatMessage({ id: 'ew_jf_sx_two_t' }),
            desc: intl.formatMessage({ id: 'ew_jf_sx_two_desc' })
        },
        {
            src: "/image/advantage-icons/yj3.png",
            title: intl.formatMessage({ id: 'ew_jf_sx_three_t' }),
            desc: intl.formatMessage({ id: 'ew_jf_sx_three_desc' })
        },
        {
            src: "/image/advantage-icons/yj4.png",
            title: intl.formatMessage({ id: 'ew_jf_sx_four_t' }),
            desc: intl.formatMessage({ id: 'ew_jf_sx_four_desc' })
        },
        {
            src: "/image/advantage-icons/yj5.png",
            title: intl.formatMessage({ id: 'ew_jf_sx_five_t' }),
            desc: intl.formatMessage({ id: 'ew_jf_sx_five_desc' })
        },
        {
            src: "/image/advantage-icons/yj6.png",
            title: intl.formatMessage({ id: 'ew_jf_sx_six_t' }),
            desc: intl.formatMessage({ id: 'ew_jf_sx_six_desc' })
        },
    ]
    const desc = (
        <div className={`mx-auto ${locale === "en" ? "max-w-[850px]" : "max-w-[450px]"}`}>{intl.formatMessage({ id: 'early_warning_desc' })}</div>
    )
    return (
        <div>
            {/* 顶部 */}
            <PageTop locale={locale} bgImg='/image/early-warning/top-bg.png' title={intl.formatMessage({ id: 'early_warning_t' })} desc={desc} topText={intl.formatMessage({ id: 'breadcrumbs_zy' })} />
            {/* 两个幻灯片 */}
            <div className='w-full h-[43.375rem] pt-20 bg-[url("/image/early-warning/swiper-bg.png")] bg-center bg-no-repeat bg-cover'>
                <EarlyWarningSwiper />
            </div>
            {/* RDR和CDRN拒付解决服务能够做 */}
            <div className='w-full py-9 bg-[#F4F7FF]'>
                <div className='max-w-[83.75rem] mx-auto px-3 md:px-0'>
                    <div className={`sub-title pb-2 font-extrabold  ${locale === "en" ? " text-[32px]" : ""}`}>{intl.formatMessage({ id: 'ew_what_rdr_cdrn_t' })}</div>
                    <div className='flex items-center flex-1 flex-col lg:flex-row'>
                        <ul className=' text-base text-[rgba(0,0,0,0.85)] flex flex-col gap-y-1 py-4 px-4 xl:px-0'>
                            <li>
                                <p>{intl.formatMessage({ id: 'ew_what_rdr_cdrn_one' })}</p>
                            </li>
                            <li>
                                <p>{intl.formatMessage({ id: 'ew_what_rdr_cdrn_two' })}</p>
                                <p>{intl.formatMessage({ id: 'ew_what_rdr_cdrn_two_desc' })}</p>
                            </li>
                            <li>
                                <p>{intl.formatMessage({ id: 'ew_what_rdr_cdrn_three' })}</p>
                                <p>{intl.formatMessage({ id: 'ew_what_rdr_cdrn_three_desc' })}</p>
                            </li>
                            <li>
                                <p>{intl.formatMessage({ id: 'ew_what_rdr_cdrn_four' })}</p>
                                <p>{intl.formatMessage({ id: 'ew_what_rdr_cdrn_four_desc' })}</p>
                            </li>
                            <li>
                                <p>{intl.formatMessage({ id: 'ew_what_rdr_cdrn_five' })}</p>
                                <p>{intl.formatMessage({ id: 'ew_what_rdr_cdrn_five_desc' })}</p>
                            </li>
                            <li>
                                <p>{intl.formatMessage({ id: 'ew_what_rdr_cdrn_six' })}</p>
                                <p>{intl.formatMessage({ id: 'ew_what_rdr_cdrn_six_desc' })}</p>
                            </li>
                        </ul>
                        <div className=' relative flex-shrink-0'>
                            <Image src={locale === "en" ? "/image/early-warning/lc-en.png" : "/image/early-warning/lc.png"} width={666} height={316} sizes="666px"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                }} alt={intl.formatMessage({ id: 'ew_what_rdr_cdrn_t' })} />
                        </div>
                    </div>
                </div>
            </div>
            {/* 我们的优点 */}
            <div className='w-full pt-8 pb-10 bg-[url("/image/early-warning/advantage-bg.png")] bg-center bg-no-repeat bg-cover'>
                <div className='max-w-[79rem] mx-auto'>
                    <div className='sub-title'>{intl.formatMessage({ id: 'our_advantage_two' })}</div>
                    <div className=' text-sm text-[#333] font-bold w-full flex flex-wrap justify-center items-center gap-x-40'>
                        <div className='flex flex-col items-center gap-y-5'>
                            <div className=' relative w-[15rem] h-[15rem]'>
                                <Image src="/image/advantage-icons/advantage1.png" fill={true} alt="WeTech" />
                            </div>
                            <span className=' max-w-[300px] text-center'>{intl.formatMessage({ id: 'ew_adv_one' })}</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <div className=' relative w-[15rem] h-[15rem]'>
                                <Image src="/image/advantage-icons/advantage2.png" fill={true} alt="WeTech" />
                            </div>
                            <span className=' max-w-[300px] text-center'>{intl.formatMessage({ id: 'ew_adv_two' })}</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <div className=' relative w-[15rem] h-[15rem]'>
                                <Image src="/image/advantage-icons/advantage3.png" fill={true} alt="WeTech" />
                            </div>
                            <span className=' max-w-[300px] text-center'>{intl.formatMessage({ id: 'ew_adv_three' })}</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <div className=' relative w-[15rem] h-[15rem]'>
                                <Image src="/image/advantage-icons/advantage4.png" fill={true} alt="WeTech" />
                            </div>
                            <span className=' max-w-[300px] text-center'>{intl.formatMessage({ id: 'ew_adv_four' })}</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <div className=' relative w-[15rem] h-[15rem]'>
                                <Image src="/image/advantage-icons/advantage5.png" fill={true} alt="WeTech" />
                            </div>
                            <span className=' max-w-[300px] text-center'>{intl.formatMessage({ id: 'ew_adv_five' })}</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Ethoca拒付预警服务 */}
            <div className='min-h-[22.5rem] py-20 w-full bg-[#00206E]'>
                <div className=' max-w-[80.875rem] h-full mx-auto flex flex-col lg:flex-row gap-y-4 justify-between items-center  px-3 md:px-0'>
                    <div className='relative flex-shrink-0'>
                        <Image src={locale === "en" ? "/image/early-warning/fw-en.png" : "/image/early-warning/fw.png"} width={568} height={174} sizes="568px"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }} alt={intl.formatMessage({ id: 'ew_jf_serve_t' })} />
                    </div>
                    <div className=' text-white max-w-[592px]'>
                        <div className=' font-extrabold text-4xl mb-4 '>{intl.formatMessage({ id: 'ew_jf_serve_t' })}</div>
                        <ul className=' text-base flex flex-col gap-y-2'>
                            <li>{intl.formatMessage({ id: 'ew_jf_serve_sub_t' })}</li>
                            <li>
                                <div>{intl.formatMessage({ id: 'ew_jf_serve_item_one' })}</div>
                                <div className='indent-8'>{intl.formatMessage({ id: 'ew_jf_serve_item_one_desc' })}</div>
                            </li>
                            <li>
                                <div>{intl.formatMessage({ id: 'ew_jf_serve_item_two' })}</div>
                                <div className='indent-8'>{intl.formatMessage({ id: 'ew_jf_serve_item_two_desc' })}</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* WeTech Ethoca拒付预警可以为您实现 */}
            <div className='w-full min-h-[45.25.rem] '>
                <div className='h-full pt-9 pb-16 max-w-7xl mx-auto'>
                    <div className={` w-full sub-title mb-11 ${locale === "en" ? " text-[32px]" : ""}`}>{intl.formatMessage({ id: 'ew_jf_sx_t' })}</div>
                    <div className={`w-full flex items-center justify-center flex-wrap gap-y-[3.875rem] ${locale === "en" ? "gap-x-28" : "gap-x-[11.875rem]"}`}>
                        {warnList.map((it, index) => (
                            <div key={it.title} className={`flex flex-col items-center ${locale === "en" ? " w-72" : "w-60"} `}>
                                <div className=' relative w-[11.25rem] h-[11.25rem] flex-shrink-0'>
                                    <Image src={it.src} fill={true} alt={it.title} />
                                </div>
                                <div className=' text-[#316FE7] text-base my-2'>{it.title}</div>
                                <div className={`text-xs text-[#000] text-center  ${locale === "en" ? "" : "whitespace-nowrap"} ${index === 0 ? "max-w-[215px]" : ""} ${index === 1 ? "max-w-[200px]" : ""}  ${index === 5 ? "max-w-[242px]" : ""}`}>{it.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EarlyWarning