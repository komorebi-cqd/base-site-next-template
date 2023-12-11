import React from 'react'
import Image from 'next/image';
import PageTop from '@/app/components/ui/page-top';
import AdvantageItem from '@/app/components/ui/advantage-item';
import getIntl from "../../intl";


const RiskPortait = async ({ params: { locale } }: { params: { locale: string } }) => {
    const intl = await getIntl(locale);

    const desc = (
        <div className={`mx-auto ${locale === "en" ? "max-w-[900px]" : "max-w-[464px]"}`}>{intl.formatMessage({ id: 'risk_profiling_desc' })}</div>
    )
    return (
        <div>
            {/* 顶部 */}
            <PageTop bgImg='/image/risk-portrait/top-bg.png' locale={locale} title={intl.formatMessage({ id: 'risk_profiling_t' })} desc={desc} topText='产品->风险画像' />
            {/* 优势 */}
            <div className='w-full pt-5 pb-9 risk-advantage-img'>
                <div className='flex flex-col'>
                    <div className=' sub-title pt-5 pb-4'>{intl.formatMessage({ id: 'our_advantage' })}</div>
                    <div className='flex flex-col justify-center md:flex-row items-center mt-24 gap-x-[2rem] xl:gap-x-[6rem] lg:gap-x-16 md:gap-x-4 gap-y-[6.25rem] '>
                        <AdvantageItem locale={locale} title={<div className='mt-[136px] whitespace-nowrap'>{intl.formatMessage({ id: 'rp_ys_one_t' })}</div>} desc={(<div className={`${locale === "en" ? "px-2" : " px-3 lg:px-5"}`}>{intl.formatMessage({ id: 'rp_ys_one_desc' })}</div>)} absImg={<div className=' absolute left-1/2 -translate-y-1/2 -translate-x-1/2 w-48 h-48'>
                            <Image src="/image/advantage-icons/yj1.png" alt={intl.formatMessage({ id: 'rp_ys_one_t' })} fill={true} />
                        </div>} />
                        <AdvantageItem locale={locale} title={<div className='mt-[136px] whitespace-nowrap'>{intl.formatMessage({ id: 'rp_ys_two_t' })}</div>} desc={(<div className={`${locale === "en" ? "" : " px-3 lg:px-14"}`}>{intl.formatMessage({ id: 'rp_ys_two_desc' })}</div>)} absImg={<div className=' absolute left-1/2 -translate-y-1/2 -translate-x-1/2 w-48 h-48'>
                            <Image src="/image/advantage-icons/yj2.png" alt={intl.formatMessage({ id: 'rp_ys_two_t' })} fill={true} />
                        </div>} />
                        <AdvantageItem locale={locale} title={<div className='mt-[136px] whitespace-nowrap'>{intl.formatMessage({ id: 'rp_ys_three_t' })}</div>} desc={(<div className={`${locale === "en" ? "" : "px-3 lg:px-14"}`}>{intl.formatMessage({ id: 'rp_ys_three_desc' })}</div>)} absImg={<div className=' absolute left-1/2 -translate-y-1/2 -translate-x-1/2 w-48 h-48'>
                            <Image src="/image/advantage-icons/yj3.png" alt={intl.formatMessage({ id: 'rp_ys_three_t' })} fill={true} />
                        </div>} />
                    </div>
                </div>
            </div>
            <div className=' w-full bg-gradient-to-b  from-[#E7F1FF] to-white'>
                <div className=' max-w-[78.75rem] mx-auto h-full flex flex-col'>
                    <div className='flex-1 flex flex-col md:flex-row justify-between items-center px-3 md:px-20 pt-[3.5rem] pb-0 md:pb-[3.5rem]'>
                        <div className={` ${locale === "en" ? "max-w-[665px]" : "max-w-[28.275rem]"}`}>
                            <div className={`sub-title text-left ${locale === "en" ? "max-w-[560px] text-[32px]" : ""}`}>{intl.formatMessage({ id: 'rp_ys_b_one_t' })}</div>
                            <div className='text-[#333333] text-base font-bold mt-5 mb-2'>{intl.formatMessage({ id: 'rp_ys_b_one_sub_t' })}</div>
                            <div className='text-[#333333] text-base'>{intl.formatMessage({ id: 'rp_ys_b_one_desc' })}</div>
                        </div>
                        <div className=' relative flex-shrink-0'>
                            <Image src="/image/risk-portrait/item1.png" alt='anti-fraud-value' width={378} height={370} sizes="378px"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                }} />
                        </div>
                    </div>
                    <div className='w-full h-[1px] bg-[rgba(0,0,0,0.15)]'></div>
                    <div className='flex-1 flex flex-col md:flex-row justify-between items-center px-3 md:px-20 py-[3.5rem]'>
                        <div className=' relative flex-shrink-0'>
                            <Image src="/image/risk-portrait/item2.png" alt='anti-fraud-value' width={320} height={300} sizes="320px"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                }} />
                        </div>
                        <div className='max-w-[27rem]'>
                            <div className={`sub-title text-left ${locale === "en" ? "text-[32px]" : ""}`}>{intl.formatMessage({ id: 'rp_ys_b_two_t' })}</div>
                            <div className='text-[#333333] text-base mt-5'>{intl.formatMessage({ id: 'rp_ys_b_two_desc' })}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RiskPortait;