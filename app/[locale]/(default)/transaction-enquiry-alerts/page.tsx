import React from 'react'
import Image from 'next/image';
import getIntl from "../../intl";
import JumpBtn from "@/app/components/Btn/JumpBtn";


export async function generateMetadata({ params }: { params: { locale: string } }) {
    const intl = await getIntl(params.locale);
    return {
        title: intl.formatMessage({ id: "tran_top_title" }),
        description: intl.formatMessage({ id: "tran_top_title" })
    }
}


const TransactionEnquiryAlerts = async ({ params: { locale } }: { params: { locale: string } }) => {
    const intl = await getIntl(locale);

    const processList = [
        {text: intl.formatMessage({id: 'tran_process_one'})},
        {text: intl.formatMessage({id: 'tran_process_two'})},
        {text: intl.formatMessage({id: 'tran_process_three'})},
        {text: intl.formatMessage({id: 'tran_process_four'})},
        {text: intl.formatMessage({id: 'tran_process_five'})},
        {text: intl.formatMessage({id: 'tran_process_six'})},
    ]

    const advList = [
        {
            src: "/image/enquiry-alerts/ys-one.png",
            title: intl.formatMessage({ id: 'tran_adv_one_t' }),
            desc: intl.formatMessage({ id: 'tran_adv_one_desc' })
        },
        {
            src: "/image/enquiry-alerts/ys-two.png",
            title: intl.formatMessage({ id: 'tran_adv_two_t' }),
            desc: intl.formatMessage({ id: 'tran_adv_two_desc' })
        },
        {
            src: "/image/enquiry-alerts/ys-three.png",
            title: intl.formatMessage({ id: 'tran_adv_three_t' }),
            desc: intl.formatMessage({ id: 'tran_adv_three_desc' })
        },
        {
            src: "/image/enquiry-alerts/ys-four.png",
            title: intl.formatMessage({ id: 'tran_adv_four_t' }),
            desc: intl.formatMessage({ id: 'tran_adv_four_desc' })
        },
    ]

    return (
        <div>
             {/* 顶部大图 */}
             <div className="w-full  bg-gradient-to-bl from-[#061242] to-[#1537BE] max-h-[var(--top-h)] h-[var(--top-h)]">
                <div className="max-w-[1440px] mx-auto h-full lg:bg-[url('/image/enquiry-alerts/top-bg.jpg')] bg-[length:360px_354px]  xl:bg-[length:450px_443px] bg-[right_bottom_0%]  lg:bg-[right_bottom_56px] bg-no-repeat  px-6 xl:px-0">
                    <div className={`flex flex-col text-white h-full max-w-[1200px] mx-auto   ${locale === 'en' ? ' pt-36 sm:pt-40 lg:pt-48' : 'pt-40 sm:pt-48'}`}>
                        <h3 className={`font-bold text-5xl ${locale === "en" ? ' max-w-[500px] lg:text-[55px]' : 'lg:text-[58px] '}`}>{intl.formatMessage({ id: "tran_top_title" })}</h3>
                        <div className={`flex flex-col ${locale === "en" ? "max-w-[712px] text-[25px] mb-12  mt-10" : "text-3xl mb-20 mt-20"}`}>
                            <span>{intl.formatMessage({ id: "tran_top_desc_one" })}</span>
                            <span>{intl.formatMessage({ id: "tran_top_desc_two" })}</span>
                        </div>
                        <JumpBtn locale={locale}>
                            {intl.formatMessage({ id: 'jump_wetech_text' })}
                        </JumpBtn>
                    </div>
                </div>
            </div>
            {/* 工作流程 */}
            <div className='w-full bg-white py-16 lg:py-28 px-4  bg-[url("/image/enquiry-alerts/wk-l.jpg"),url("/image/enquiry-alerts/wk-r.jpg")] bg-repeat-x bg-[left_top_50%]'>
                <div className='max-w-[965px] mx-auto bg-[#F3F5F9] min-h-[444px] rounded-2xl relative'>
                    <div className='relative w-full h-full z-20'>
                        <div className='w-full flex flex-col sm:flex-row justify-between items-center px-7 py-6'>
                            <div className={`sm:mb-0 mb-6 ${locale === "en" ? '' : 'max-w-md' }`}>
                                <h3 className='text-[#131C87] font-semibold text-3xl mb-8'>{intl.formatMessage({id: 'tran_process'})}</h3>
                                <ul className='text-lg leading-9 '>
                                    {
                                        processList.map((it, index) => {
                                            return <li key={index}>{it.text}</li>
                                        })
                                    }
                                </ul>
                            </div>
                            <div className='relative flex-auto  max-w-[384px] overflow-hidden'>
                                <Image className=' object-contain rounded-[10px]' src={locale === "en" ? "/image/enquiry-alerts/wk-main-en.jpg" : "/image/enquiry-alerts/wk-main-cn.jpg"} alt='' width={386} height={404} style={{
                                    width: "100%",
                                    height: "auto",
                                }} />
                            </div>
                        </div>
                    </div>
                    {/* <Image className=' object-contain absolute -left-[345px] top-6 z-10' src="/image/enquiry-alerts/wk-l.jpg" alt='' width={345} height={242} />
                    <Image className=' object-contain absolute -right-[365px] top-6 z-10' src="/image/enquiry-alerts/wk-r.jpg" alt='' width={365} height={304} /> */}

                </div>
            </div>
            {/* 我们的优势 */}
            <div className=' bg-[#ffffff] w-full pb-14 lg:pb-[134px] bg-[url("/image/enquiry-alerts/adv-l-one.jpg"),url("/image/enquiry-alerts/adv-l-two.jpg")] bg-no-repeat bg-tran-bg-po'>
                <div>
                    <div className='text-sm text-[#0B0B0B] flex justify-center items-center gap-x-2'>
                        <div className='w-8 h-[1px] bg-[#131B84]'></div>
                        <span>{intl.formatMessage({ id: 'tran_our_services' })}</span>
                        <div className='w-8 h-[1px] bg-[#131B84]'></div>
                    </div>
                    <h3 className='text-[38px] text-[#131B84] text-center font-semibold mb-10'>{intl.formatMessage({ id: 'our_advantage' })}</h3>
                </div>
                <ul className='max-w-[1000px] mx-auto flex items-center justify-center gap-x-52 gap-y-20 flex-wrap'>
                    {advList.map((adv, index) => (
                        <li key={index} className={` max-w-[316px] bg-[#F3F5F9] rounded-[18px] flex flex-col items-center p-5 ${locale === 'en' ? 'h-[314px]' : 'h-[258px]'}`}>
                            <div className=' relative w-[85px] h-[85px] flex-none'>
                                <Image src={adv.src} className=' object-contain' fill alt="" />
                            </div>
                            <h3 className=' text-[#131B84] text-2xl mt-2 mb-3 font-semibold text-center '>{adv.title}</h3>
                            <p className={`text-[#000000] text-center  ${locale === 'en' ? 'text-xs' : 'text-sm'}`}>{adv.desc}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TransactionEnquiryAlerts;