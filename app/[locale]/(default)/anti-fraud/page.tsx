import React from 'react'
import Image from 'next/image';
import PageTop from '@/app/components/ui/page-top';
import AdvantageItem from '@/app/components/ui/advantage-item';
import getIntl from "../../intl";



const AntiFraud = async ({ params: { locale } }: { params: { locale: string } }) => {
    const intl = await getIntl(locale);
    const desc = (
        <div className={`mx-auto ${locale === "en" ? "max-w-[764px]" : "max-w-[720px]"}`}>{intl.formatMessage({ id: 'anti_fraud_desc' })}</div>
    );
    return (
        <div>
            {/* 顶部 */}
            <PageTop locale={locale} bgImg='/image/anti-fraud/top-bg.png' title={intl.formatMessage({ id: 'anti_fraud_t' })} desc={desc} topText={intl.formatMessage({ id: 'breadcrumbs_af' })} />
            {/* 传统对比wetech */}
            <div className='w-full bg-gradient-to-b  from-[#F4F7FF] via-[rgba(224,238,255,0)] to-white py-24'>
                <div className='flex flex-col justify-center max-w-[80rem] mx-auto'>
                    <div className=' px-4 lg:px-0 flex justify-between flex-col lg:flex-row items-center mx-auto w-full'>
                        <div className={`flex-1 ${locale === "en" ? "max-w-[488px] lg:max-w-[570px]" : "max-w-[488px] lg:max-w-[410px]"}`}>
                            <div className={`sub-title text-left ${locale === "en" ? "text-[32px]" : ""}`}>{intl.formatMessage({ id: 'af_ctfk_t' })}</div>
                            <div className=' text-base text-[#171717] mt-5'>{intl.formatMessage({ id: 'af_ctfk_desc' })}</div>
                        </div>
                        <div className=' relative'>
                            <Image src={locale === "en" ? "/image/anti-fraud/traditional-risk-control-en.png" : "/image/anti-fraud/traditional-risk-control.png"} width={448} height={212} sizes="448px"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                }} alt='traditional-risk-control' />
                        </div>
                    </div>
                    <div className=' relative w-[2.38rem] h-[5.625rem] mx-auto my-3'>
                        <Image src="/image/anti-fraud/multiple-arrow.png" alt='multiple-arrow' fill={true} />
                    </div>
                    <div className='px-4 lg:px-0 flex justify-between items-center flex-col lg:flex-row gap-6 md:gap-0'>
                        <div className=' relative'>
                            <Image src={locale === "en" ? "/image/anti-fraud/wetech-risk-control-en.png" : "/image/anti-fraud/wetech-risk-control.png"} width={670} height={184} sizes="448px"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                }} alt='wetech-risk-control' />
                        </div>
                        <div className={`max-w-[488px]`}>
                            <div className={`sub-title text-left ${locale === "en" ? "text-[32px]" : ""}`}>{intl.formatMessage({ id: 'af_wcfk_t' })}</div>
                            <div className=' text-base text-[#171717] mt-5'>{intl.formatMessage({ id: 'af_wcfk_desc' })}</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 信用卡反欺诈核心价值 */}
            <div className='w-full pt-[1.75rem] pb-[10rem] earth-bg2'>
                <div className='mx-auto max-w-[74.5rem] px-5'>
                    <div>
                        <div className={`sub-title pt-12 mb-28 ${locale === "en" ? "text-[32px]" : ""}`}>{intl.formatMessage({ id: 'af_hxjz_t' })}</div>
                        <div className='flex flex-col flex-wrap md:flex-row justify-center items-center px-3 xl:px-12 gap-x-8 xl:gap-x-[5.875rem] gap-y-[6.25rem]'>
                            <AdvantageItem locale={locale} title={<div className={`text-center  ${locale === "en" ? "mt-[110px] px-1 lg:px-4 min-h-[56px] leading-[56px]" : "mt-[138px]"}`}>{intl.formatMessage({ id: 'af_hxjz_one_t' })}</div>} desc={(<div className={`${locale === "en" ? " px-6" : " px-8"}`}>{intl.formatMessage({ id: 'af_hxjz_one_desc' })}</div>)} absImg={<div className=' absolute left-1/2 -translate-y-1/2 -translate-x-1/2 w-[15rem] h-[15rem]'>
                                <Image src="/image/advantage-icons/advantage1.png" alt='advantage1' fill={true} />
                            </div>} />
                            <AdvantageItem locale={locale} title={<div className={`text-center  ${locale === "en" ? "mt-[110px] px-1 lg:px-4" : "mt-[138px]"}`}>{intl.formatMessage({ id: 'af_hxjz_two_t' })}</div>} desc={(<div className={`${locale === "en" ? " px-6" : " px-8"}`}>{intl.formatMessage({ id: 'af_hxjz_two_desc' })}</div>)} absImg={<div className=' absolute left-1/2 -translate-y-1/2 -translate-x-1/2 w-[15rem] h-[15rem]'>
                                <Image src="/image/advantage-icons/advantage4.png" alt='advantage2' fill={true} />
                            </div>} />
                            <AdvantageItem locale={locale} title={<div className={`text-center  ${locale === "en" ? "mt-[110px] px-12" : "mt-[138px]"}`}>{intl.formatMessage({ id: 'af_hxjz_three_t' })}</div>} desc={(<div className={`${locale === "en" ? " px-6" : " px-8"}`}>{intl.formatMessage({ id: 'af_hxjz_three_desc' })}</div>)} absImg={<div className=' absolute left-1/2 -translate-y-1/2 -translate-x-1/2 w-[15rem] h-[15rem]'>
                                <Image src="/image/advantage-icons/advantage3.png" alt='advantage3' fill={true} />
                            </div>} />

                        </div>
                    </div>
                    <div className='w-full h-[1px] bg-[rgba(0,0,0,0.25)] mt-10'></div>
                    <div className='w-full'>
                        <div className={`sub-title ${locale === "en" ? "text-[32px] max-w-[690px] mx-auto mt-6 mb-12" : "mt-10 md:mb-[4.88rem] "}`}>{intl.formatMessage({ id: 'af_zz_hw_t' })}</div>
                        <div className='flex flex-col md:flex-row justify-between items-center text-[#333] text-base'>
                            <div className={`mt-10 mb-6 md:m-0 ${locale === "en" ? "max-w-[640px]" : "max-w-[528px]" }`}>{intl.formatMessage({ id: 'af_zz_hw_desc' })}</div>
                            <div className=' relative flex-shrink-0'>
                                <Image src={locale === "en" ? "/image/anti-fraud/intent-anti-fraud-en.png" : "/image/anti-fraud/intent-anti-fraud.png"} width={468} height={100} sizes="468px"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                    }} alt='intent-anti-fraud' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* AI智能模型，成长型数据模型 */}
            <div className='w-full pt-[48px] pb-[50px] bg-slate-500 bg-[url("/image/anti-fraud/model-bg.png")] bg-center bg-no-repeat bg-cover'>
                <div className=' font-bold text-2xl pb-11 text-center text-[#FFFFFF]'>{intl.formatMessage({ id: 'af_al_model_t' })}</div>
                <div className='flex flex-col md:flex-row justify-between items-center max-w-[85rem] mx-auto'>
                    <div className=' relative '>
                        <Image src={locale === "en" ? "/image/anti-fraud/ai-model1-en.png" : "/image/anti-fraud/ai-model1.png"} alt='ai-model1' width={347} height={294} sizes="347px"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }} />
                    </div>
                    <div className=' relative rotate-90 md:rotate-0 my-10 md:m-0'>
                        <Image src="/image/anti-fraud/arrow.png" alt='arrow' width={114} height={47} sizes="114px"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }} />
                    </div>
                    <div className=' relative'>
                        <Image src={locale === "en" ? "/image/anti-fraud/ai-model2-en.png" : "/image/anti-fraud/ai-model2.png"} alt='ai-model2'  width={514} height={210} sizes="514px"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }} />
                    </div>
                    <div className=' relative rotate-90 md:rotate-0  my-10 md:m-0'>
                        <Image src="/image/anti-fraud/arrow.png" alt='arrow' width={114} height={47} sizes="114px"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }} />
                    </div>
                    <div className='flex flex-row md:flex-col gap-x-6 md:gap-0 text-base'>
                        <div className=' mb-24 w-[8.5rem] h-11 leading-10 bg-white border border-[#1989FA] rounded text-center text-[#1989FA]'>YES/<span className='text-[#FA1919]'>NO</span></div>
                        <div className='w-[8.5rem] h-11 leading-10 bg-white border border-[#1989FA] rounded text-center text-[#1989FA]'>{locale === "en" ? "Score" : "Score评分"}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AntiFraud;