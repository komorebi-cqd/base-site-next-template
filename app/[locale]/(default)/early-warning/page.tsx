import React from 'react'
import Image from 'next/image';
import EarlyWarningSwiper from '@/app/components/ui/early-warning-swiper';
import getIntl from "../../intl";
import JumpBtn from "@/app/components/Btn/JumpBtn";


export async function generateMetadata({ params }: { params: { locale: string } }) {
    const intl = await getIntl(params.locale);
    return {
        title: intl.formatMessage({ id: "seo_zyjj_title" }),
        description: intl.formatMessage({ id: "seo_zyjj_title" })
    }
}


const EarlyWarning = async ({ params: { locale } }: { params: { locale: string } }) => {
    const intl = await getIntl(locale);

    const advList = [
        {
            src: "/image/early-warning/adv-1.png",
            title: intl.formatMessage({ id: 'ew_adv_one_t' }),
            desc: intl.formatMessage({ id: 'ew_adv_one_desc' })
        },
        {
            src: "/image/early-warning/adv-2.png",
            title: intl.formatMessage({ id: 'ew_adv_two_t' }),
            desc: intl.formatMessage({ id: 'ew_adv_two_desc' })
        },
        {
            src: "/image/early-warning/adv-3.png",
            title: intl.formatMessage({ id: 'ew_adv_three_t' }),
            desc: intl.formatMessage({ id: 'ew_adv_three_desc' })
        },
        {
            src: "/image/early-warning/adv-4.png",
            title: intl.formatMessage({ id: 'ew_adv_four_t' }),
            desc: intl.formatMessage({ id: 'ew_adv_four_desc' })
        },
        {
            src: "/image/early-warning/adv-5.png",
            title: intl.formatMessage({ id: 'ew_adv_five_t' }),
            desc: intl.formatMessage({ id: 'ew_adv_five_desc' })
        },
        {
            src: "/image/early-warning/adv-6.png",
            title: intl.formatMessage({ id: 'ew_adv_six_t' }),
            desc: intl.formatMessage({ id: 'ew_adv_six_desc' })
        },
    ]

    return (
        <div>
            {/* 顶部大图 */}
            <div className="w-full  bg-[#020F15] max-h-[var(--top-h)] h-[var(--top-h)]">
                <div className="max-w-[1440px] mx-auto h-full bg-[url('/image/early-warning/top-bg.png')] bg-contain bg-right-bottom bg-no-repeat  px-6 xl:px-0">
                    <div className={`flex flex-col text-white h-full max-w-[1200px] mx-auto ${locale === 'en' ? ' pt-36 md:pt-48 ' : 'pt-40 sm:pt-48'}`}>
                        <h3 className={` text-5xl lg:leading-[72px] font-bold ${locale === 'en' ? 'max-w-[480px] lg:text-6xl' : 'lg:text-[58px]'}`}>{intl.formatMessage({ id: 'early_warning_t' })}</h3>
                        <div className={`flex flex-col leading-tight mt-4 mb-6 ${locale === 'en' ? 'max-w-[470px] text-lg' : ' text-3xl max-w-[420px]'}`}>
                            <span>{intl.formatMessage({ id: 'early_warning_desc' })}</span>
                        </div>
                        <JumpBtn locale={locale}>
                            {intl.formatMessage({ id: 'jump_wetech_text' })}
                        </JumpBtn>
                    </div>
                </div>
            </div>
            {/* 幻灯片 */}
            <div className='w-full pt-16 pb-32 bg-white '>
                <EarlyWarningSwiper />
            </div>
            {/* 拒付流程 */}
            <div className=' bg-[rgba(199,218,255,0.1)] w-full pt-[72px] pb-12'>
                <div className='w-1200 flex justify-stretch items-stretch gap-x-14 flex-col md:flex-row px-5 md:px-0'>
                    <div className=' bg-white shadow-[-15px_15px_50px_15px_rgba(0,0,0,0.05)] rounded-[10px] pt-16 pb-14 md:pb-28 flex-1 box-border '>
                        <ul className=' relative flex flex-col gap-y-[76px] px-12 pb-12 text-[rgba(51,51,51,0.95)] text-sm before:block before:absolute before:h-full before:w-[1px] before:bg-primary before:left-[63px] before:top-0 before:-bottom-6'>
                            <li className=' pl-11 before:content-["1"] list-style-n'>{intl.formatMessage({ id: 'ew_process_one' })}</li>
                            <li className=' pl-11 before:content-["2"] list-style-n'>{intl.formatMessage({ id: 'ew_process_two' })}</li>
                            <li className=' pl-11 before:content-["3"] list-style-n'>
                                <div>
                                    <span className=' font-semibold'>{intl.formatMessage({ id: 'ew_process_three_t_one' })}</span>
                                    <p>{intl.formatMessage({ id: 'ew_process_three_desc_one' })}</p>
                                </div>
                                <div>
                                    <span className=' font-semibold'>{intl.formatMessage({ id: 'ew_process_three_t_two' })}</span>
                                    <p>{intl.formatMessage({ id: 'ew_process_three_desc_two' })}</p>
                                </div>
                            </li>
                            <li className=' pl-11 before:content-["4"] list-style-n'>{intl.formatMessage({ id: 'ew_process_four' })}</li>
                        </ul>
                    </div>
                    <div className=' relative w-full h-96 md:h-auto flex-auto md:flex-1'>
                        <Image src={locale === "en" ? "/image/early-warning/jylc-en.png" : "/image/early-warning/jylc.png"} className=' object-contain' fill alt="" />
                    </div>
                </div>
            </div>

            <div className="w-full min-h-[505px] bg-[url('/image/early-warning/ys-bg.png')] bg-cover bg-no-repeat pt-16 pb-28 text-[#333333]">
                <div className='  text-[38px] font-semibold text-center pb-10 lg:pb-20'>{intl.formatMessage({ id: 'our_advantage' })}</div>
                <div className='w-1200'>
                    <ul className='flex items-center justify-between text-sm px-8 xl:px-0 flex-wrap lg:flex-nowrap gap-y-5'>
                        <li className=' w-[155px] flex flex-col items-center lg:gap-y-5 flex-[100%] md:flex-[50%] lg:flex-1'>
                            <div className=' relative w-full h-[155px]'>
                                <Image src="/image/early-warning/ys1.png" className=' object-contain' fill alt="" />
                            </div>
                            <p className={`text-center ${locale === 'en' ? ' max-w-[260px]' : 'whitespace-nowrap '}`}>{intl.formatMessage({ id: 'ew_top_adv_one' })}</p>
                        </li>
                        <li className=' w-[155px] flex flex-col items-center lg:gap-y-5 flex-[100%] md:flex-[50%] lg:flex-1'>
                            <div className=' relative w-full h-[155px]'>
                                <Image src="/image/early-warning/ys2.png" className=' object-contain' fill alt="" />
                            </div>
                            <p className={`text-center ${locale === 'en' ? ' max-w-[260px]' : 'whitespace-nowrap '}`}>{intl.formatMessage({ id: 'ew_top_adv_two' })}</p>
                        </li>
                        <li className=' w-[155px] flex flex-col items-center lg:gap-y-5 flex-[100%] md:flex-[50%] lg:flex-1'>
                            <div className=' relative w-full h-[155px]'>
                                <Image src="/image/early-warning/ys3.png" className=' object-contain' fill alt="" />
                            </div>
                            <p className={`text-center ${locale === 'en' ? ' max-w-[280px]' : 'whitespace-nowrap '}`}>{intl.formatMessage({ id: 'ew_top_adv_three' })}</p>
                        </li>
                        <li className=' w-[155px] flex flex-col items-center lg:gap-y-5 flex-[100%] md:flex-[50%] lg:flex-1'>
                            <div className=' relative w-full h-[155px]'>
                                <Image src="/image/early-warning/ys4.png" className=' object-contain' fill alt="" />
                            </div>
                            <p className={`text-center ${locale === 'en' ? ' max-w-[280px]' : 'whitespace-nowrap '}`}>{intl.formatMessage({ id: 'ew_top_adv_four' })}</p>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Ethoca争议预警与解决 */}
            <div className='w-full min-h-[515px] bg-gradient-to-b from-[rgba(220,232,255,0.65)] to-[rgba(220,232,255,0)] text-[#333] py-16'>
                <h3 className=' text-3xl text-[38px] text-center font-semibold mb-9'>{intl.formatMessage({ id: 'ew_zyyjj_t' })}</h3>
                <div className='w-1200 flex justify-between items-center relative flex-col md:flex-row gap-y-10 px-5 sm:px-0'>
                    <div className=' z-10 rounded-2xl shadow-[0px_8px_16px_0px_rgba(0,0,0,0.1)] flex bg-[#EFF5FF] max-w-[580px] w-full min-h-[240px] relative pt-0 sm:pt-[70px] pb-0 sm:pb-10 pl-6 sm:pl-8 pr-6 sm:pr-[50px]'>
                        <div className=' relative w-full h-auto'>
                            <Image src={locale === "en" ? "/image/early-warning/zyyjj-en.png" : "/image/early-warning/zyyjj.png"} fill alt='' className=' object-contain' />
                        </div>
                    </div>
                    <div className='z-10 w-[350px] min-h-[300px] rounded-2xl bg-white shadow-[0px_8px_4px_0px_rgba(0,0,0,0.05)] pt-6 pr-3 pb-8 pl-6 text-sm'>
                        <h3 className=' text-2xl'>{intl.formatMessage({ id: 'ew_zyyjj_c_t' })}</h3>
                        <p className=' text-sm mb-7 mt-1'>{intl.formatMessage({ id: 'ew_zyyjj_c_desc' })}</p>
                        <div className='w-full min-h-[72px] bg-[rgba(233,233,233,0.49)] rounded-[5px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.08)] text-[rgba(51,51,51,0.9)] py-[6px] px-2 leading-5 mb-5'>
                            <p className=' font-normal'>{intl.formatMessage({ id: 'ew_zyyjj_c_item_one' })}</p>
                            <p>{intl.formatMessage({ id: 'ew_zyyjj_c_item_one_desc' })}</p>
                        </div>
                        <div className='w-full min-h-[72px] bg-[rgba(233,233,233,0.49)] rounded-[5px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.08)] text-[rgba(51,51,51,0.9)] py-[6px] px-2 leading-5'>
                            <p className=' font-normal'>{intl.formatMessage({ id: 'ew_zyyjj_c_item_two' })}</p>
                            <p>{intl.formatMessage({ id: 'ew_zyyjj_c_item_two_desc' })}</p>
                        </div>
                    </div>
                    <div style={{ background: "linear-gradient(90deg, rgba(204,221,255,0.21) 0%, #FFFFFF 100%)" }} className=' hidden lg:block absolute top-1/4 left-[48%] w-[287px] h-[155px] overflow-hidden before:block before:absolute before:bg-[#f3f7ff] before:left-0 before:right-0 before:-top-2 before:h-[64px] before:rounded-[0_0_50%_50%] after:bg-[#f8fbff] after:absolute after:left-0 after:right-0 after:-bottom-5 after:h-[80px] after:rounded-[50%_50%_0_0] after:shadow-[4px_0px_0px_4px_rgba(0,0,0,0.1)]'></div>
                </div>
            </div>
            {/* 我们的优势2 */}
            <div className=' bg-[#F3F5F9] w-full pb-14 pt-[60px] lg:pb-[134px]'>
                <h3 className='text-3xl text-[38px] text-center font-semibold mb-10'>{intl.formatMessage({ id: 'our_advantage' })}</h3>
                <ul className='w-1200 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 px-5 lg:px-0'>
                    {advList.map((adv, index) => (
                        <li key={index} className='h-[327px] w-full bg-white rounded-[10px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] flex flex-col items-center py-6'>
                            <div className=' relative w-[155px] h-[155px]'>
                                <Image src={adv.src} className=' object-contain' fill alt="" />
                            </div>
                            <h3 className=' text-primary text-2xl mt-5 mb-4'>{adv.title}</h3>
                            <p className={`text-[#000000] text-center text-sm ${locale === 'en' ? 'max-w-[320px]' : ''}`}>{adv.desc}</p>
                        </li>
                    ))}

                    {/* <li className='h-[327px] w-full bg-white rounded-[10px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] flex flex-col items-center py-6'>
                        <div className=' relative w-[155px] h-[155px]'>
                            <Image src="/image/early-warning/adv-2.png" className=' object-contain' fill alt="" />
                        </div>
                        <h3 className=' text-primary text-2xl mt-5 mb-4'>{intl.formatMessage({ id: 'ew_adv_two_t' })}</h3>
                        <p className=' text-[#000000] text-sm'>{intl.formatMessage({ id: "ew_adv_two_desc" })}</p>
                    </li>
                    <li className='h-[327px] w-full bg-white rounded-[10px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] flex flex-col items-center py-6'>
                        <div className=' relative w-[155px] h-[155px]'>
                            <Image src="/image/early-warning/adv-3.png" className=' object-contain' fill alt="" />
                        </div>
                        <h3 className=' text-primary text-2xl mt-5 mb-4'>{intl.formatMessage({ id: 'ew_adv_three_t' })}</h3>
                        <p className=' text-[#000000] text-sm max-w-[224px] text-center'>{intl.formatMessage({ id: "ew_adv_three_desc" })}</p>
                    </li>
                    <li className='h-[327px] w-full bg-white rounded-[10px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] flex flex-col items-center py-6'>
                        <div className=' relative w-[155px] h-[155px]'>
                            <Image src="/image/early-warning/adv-4.png" className=' object-contain' fill alt="" />
                        </div>
                        <h3 className=' text-primary text-2xl mt-5 mb-4'>{intl.formatMessage({ id: 'ew_adv_four_t' })}</h3>
                        <p className=' text-[#000000] text-sm'>{intl.formatMessage({ id: "ew_adv_four_desc" })}</p>
                    </li>
                    <li className='h-[327px] w-full bg-white rounded-[10px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] flex flex-col items-center py-6'>
                        <div className=' relative w-[155px] h-[155px]'>
                            <Image src="/image/early-warning/adv-5.png" className=' object-contain' fill alt="" />
                        </div>
                        <h3 className=' text-primary text-2xl mt-5 mb-4'>{intl.formatMessage({ id: 'ew_adv_five_t' })}</h3>
                        <p className=' text-[#000000] text-sm'>{intl.formatMessage({ id: "ew_adv_five_desc" })}</p>
                    </li>
                    <li className='h-[327px] w-full bg-white rounded-[10px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] flex flex-col items-center py-6'>
                        <div className=' relative w-[155px] h-[155px]'>
                            <Image src="/image/early-warning/adv-6.png" className=' object-contain' fill alt="" />
                        </div>
                        <h3 className=' text-primary text-2xl mt-5 mb-4'>{intl.formatMessage({ id: 'ew_adv_six_t' })}</h3>
                        <p className=' text-[#000000] text-sm'>{intl.formatMessage({ id: "ew_adv_six_desc" })}</p>
                    </li> */}
                </ul>
            </div>
        </div>
    )
}

export default EarlyWarning