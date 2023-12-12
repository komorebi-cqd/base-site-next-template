import React from 'react'
import Image from 'next/image';
import PageTop from '@/app/components/ui/page-top';
import AdvantageItem from '@/app/components/ui/advantage-item';
import getIntl from "../../intl";


const RiskIdentification = async ({ params: { locale } }: { params: { locale: string } }) => {
    const intl = await getIntl(locale);
    const desc = (
        <div className={`mx-auto ${locale === "en" ? "max-w-[848px]" : "max-w-[800px]"}`}>{intl.formatMessage({ id: 'device_risk_desc' })}</div>
    )
    return (
        <div>
            {/* 顶部 */}
            <PageTop locale={locale} bgImg='/image/risk-identification/top-bg.png' title={intl.formatMessage({ id: 'device_risk_t' })} desc={desc} topText={intl.formatMessage({ id: 'breadcrumbs_fxsb' })} />
            {/* 优势 */}
            <div className='w-full pt-5 pb-9 risk-advantage-img'>
                <div className='flex flex-col'>
                    <div className=' sub-title pt-5 pb-4'>{intl.formatMessage({ id: 'our_advantage' })}</div>
                    <div className='flex flex-col justify-center md:flex-row  items-center mt-24 gap-y-[6.25rem] gap-x-[2rem] md:gap-x-4 xl:gap-x-[6rem] lg:gap-x-16'>
                        <AdvantageItem locale={locale} title={<div className={`text-center  ${locale === "en" ? "mt-[110px] px-1 lg:px-4" : "mt-[138px]"}`}>{intl.formatMessage({ id: 'dr_one_t' })}</div>} desc={(<div className={`${locale === "en" ? " px-6" : " px-12"}`}>{intl.formatMessage({ id: 'dr_one_desc' })}</div>)} absImg={<div className=' absolute left-1/2 -translate-y-1/2 -translate-x-1/2 w-48 h-48'>
                            <Image src="/image/advantage-icons/yj1.png" alt={intl.formatMessage({ id: 'dr_one_t' })} fill={true} />
                        </div>} />
                        <AdvantageItem locale={locale}  title={<div className={`text-center  ${locale === "en" ? "mt-[110px] px-1 lg:px-6" : "mt-[138px]"}`}>{intl.formatMessage({ id: 'dr_two_t' })}</div>} desc={(<div className={`${locale === "en" ? " px-3" : " px-7"}`}>{intl.formatMessage({ id: 'dr_two_desc' })}</div>)} absImg={<div className=' absolute left-1/2 -translate-y-1/2 -translate-x-1/2 w-48 h-48'>
                            <Image src="/image/advantage-icons/yj2.png" alt={intl.formatMessage({ id: 'dr_two_t' })} fill={true} />
                        </div>} />
                        <AdvantageItem locale={locale} title={<div className={`text-center  ${locale === "en" ? "mt-[110px] px-1 lg:px-6" : "mt-[138px]"}`}>{intl.formatMessage({ id: 'dr_three_t' })}</div>} desc={(<div className={`${locale === "en" ? " px-2" : " px-4"}`}>{intl.formatMessage({ id: 'dr_three_desc' })}</div>)} absImg={<div className=' absolute left-1/2 -translate-y-1/2 -translate-x-1/2 w-48 h-48'>
                            <Image src="/image/advantage-icons/yj3.png" alt={intl.formatMessage({ id: 'dr_three_t' })} fill={true} />
                        </div>} />
                    </div>
                </div>
            </div>
            <div className=' w-full bg-gradient-to-b  from-[#E7F1FF] to-white'>
                <div className=' max-w-[78.75rem] mx-auto h-full flex flex-col'>
                    <div className='flex-1 flex flex-col md:flex-row justify-between items-center px-3 md:px-20 py-[3.5rem]'>
                        <div className={` ${locale === "en" ? "max-w-[600px]" : "max-w-[28.275rem]"}`}>
                            <div className={`sub-title text-left ${locale === "en" ? "max-w-[436px] text-[32px]" : ""}`}>{intl.formatMessage({ id: 'dr_b_one_t' })}</div>
                            <div className='text-[#333333] text-base font-bold mt-5 mb-2'>{intl.formatMessage({ id: 'dr_b_one_sub_t' })}</div>
                            <div className='text-[#333333] text-base'>{intl.formatMessage({ id: 'dr_b_one_desc' })}</div>
                        </div>
                        <div className=' relative w-[19.25rem] h-[16.9rem] flex-shrink-0'>
                            <Image src={locale === "en" ? "/image/risk-identification/sf-en.png" : "/image/risk-identification/sf.png"} alt='anti-fraud-value' fill={true} />
                        </div>
                    </div>
                    <div className='w-full h-[1px] bg-[rgba(0,0,0,0.15)]'></div>
                    <div className='flex-1 flex flex-col md:flex-row justify-between items-center px-3 md:px-20 py-[3.5rem]'>
                        <div className=' relative w-[17.25rem] h-[16.25rem] flex-shrink-0'>
                            <Image src="/image/risk-identification/dsj.png" alt='anti-fraud-value' fill={true} />
                        </div>
                        <div className={` ${locale === "en" ? "max-w-[480px]" : "max-w-[28.275rem]"}`}>
                            <div className={`sub-title text-left ${locale === "en" ? "text-[32px]" : ""}`}>{intl.formatMessage({ id: 'dr_b_two_t' })}</div>
                            <div className='text-[#333333] text-base mt-5'>{intl.formatMessage({ id: 'dr_b_two_desc' })}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RiskIdentification;