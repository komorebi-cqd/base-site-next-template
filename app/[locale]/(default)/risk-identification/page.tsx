import React from 'react'
import Image from 'next/image';
import getIntl from "../../intl";
import JumpBtn from "@/app/components/Btn/JumpBtn";



export async function generateMetadata({ params }: { params: { locale: string } }) {
    const intl = await getIntl(params.locale);
    return {
        title: intl.formatMessage({ id: "seo_ri_title" }),
        description: intl.formatMessage({ id: "seo_ri_title" })
    }
}

const RiskIdentification = async ({ params: { locale } }: { params: { locale: string } }) => {
    const intl = await getIntl(locale);
    const ourAdvList = [
        { text: intl.formatMessage({ id: "dri_adv_one_t" }), desc: intl.formatMessage({ id: "dri_adv_one_desc" }), imgUrl: "/image/early-warning/ys1.png" },
        { text: intl.formatMessage({ id: "dri_adv_two_t" }), desc: intl.formatMessage({ id: "dri_adv_two_desc" }), imgUrl: "/image/early-warning/ys2.png" },
        { text: intl.formatMessage({ id: "dri_adv_three_t" }), desc: intl.formatMessage({ id: "dri_adv_three_desc" }), imgUrl: "/image/early-warning/ys3.png" },
    ];

    return (
        <div>
            {/* 顶部大图 */}
            <div className="w-full  bg-gradient-to-r from-[#185BDD] to-[#042081] max-h-[var(--top-h)] h-[var(--top-h)]">
                <div className="max-w-[1440px] mx-auto h-full lg:bg-[url('/image/risk-identification/computed.png')] bg-[length:305px_200px]  xl:bg-[length:610px_400px] bg-[right_bottom_0%]  lg:bg-[right_bottom_56px] bg-no-repeat  px-6 xl:px-0">
                    <div className={`flex flex-col text-white h-full max-w-[1200px] mx-auto   ${locale === 'en' ? ' pt-36 sm:pt-40 lg:pt-48' : 'pt-40 sm:pt-48'}`}>
                        <h3 className={`font-bold text-5xl ${locale === "en" ? ' max-w-[714px] lg:text-[55px]' : 'lg:text-[58px] '}`}>{intl.formatMessage({ id: "dri_top_title" })}</h3>
                        <div className={`flex flex-col mt-4 ${locale === "en" ? "max-w-[730px] text-[25px] mb-7" : "text-3xl mb-16"}`}>
                            <span>{intl.formatMessage({ id: "dri_top_desc" })}</span>
                        </div>
                        <JumpBtn locale={locale}>
                            {intl.formatMessage({ id: 'jump_wetech_text' })}
                        </JumpBtn>
                    </div>
                </div>
            </div>
            <div className='w-full bg-[#F3F5F9] py-16'>
                <div className='w-1200 text-[#333] px-5 md:px-0'>
                    <div className='w-full p-5 md:p-14 bg-white gap-y-5 rounded-xl flex flex-col md:flex-row justify-between mb-10'>
                        <div className='flex-1 pt-5 md:pt-16'>
                            <h3 className={`text-primary leading-tight text-[38px] font-semibold ${locale === 'en' ? ' max-w-[468px]' : ''}`}>{intl.formatMessage({ id: "dri_bigdataai_t" })}</h3>
                            <p className={`font-semibold text-base mt-3 mb-4 ${locale === 'en' ? 'max-w-[468px]' : 'max-w-[400px]'}`}>{intl.formatMessage({ id: "dri_bigdataai_desc" })}</p>
                            <ul className=' text-sm leading-6 pl-4 '>
                                <li className=' list-style-c'>{intl.formatMessage({ id: "dri_bigdataai_one" })}</li>
                                <li className=' list-style-c'>{intl.formatMessage({ id: "dri_bigdataai_two" })}</li>
                                <li className=' list-style-c'>{intl.formatMessage({ id: "dri_bigdataai_three" })}</li>
                                <li className=' list-style-c'>{intl.formatMessage({ id: "dri_bigdataai_four" })}</li>
                            </ul>
                        </div>
                        <div className='relative flex-auto max-w-[430px] rounded-[10px] px-7 '>
                            <Image className=' object-contain' src={locale === "en" ? "/image/risk-identification/sf-en.png" : "/image/risk-identification/sf.png"} alt='' width={430} height={413} style={{
                                width: "100%",
                                height: "auto",
                            }} />
                        </div>
                    </div>
                    <div className='w-full p-5 md:p-14 bg-white  rounded-xl flex justify-between flex-col-reverse md:flex-row-reverse'>
                        <div className={`flex-1 pt-5  md:pt-16 ${locale === "en" ? "max-w-[426px] " : "max-w-[416px] "}`}>
                            <h3 className=' text-primary text-[38px] font-semibold'>{intl.formatMessage({ id: "dri_bigdata_t" })}</h3>
                            <p className='font-semibold text-base mt-3 mb-4'>{intl.formatMessage({ id: "dri_bigdata_desc" })}</p>
                            <ul className=' text-sm leading-6 pl-4 '>
                                <li className=' list-style-c'>{intl.formatMessage({ id: "dri_bigdata_one" })}</li>
                                <li className=' list-style-c'>{intl.formatMessage({ id: "dri_bigdata_two" })}</li>
                            </ul>
                        </div>
                        <div className='  relative rounded-[10px] px-7 max-w-[430px]'>
                            <Image className=' object-contain' src="/image/risk-identification/dsj.png" alt='' width={430} height={413} style={{
                                width: "100%",
                                height: "auto",
                            }} />
                        </div>
                    </div>
                </div>
            </div>
            {/*我们的优势 */}
            <div className=' w-full bg-white'>
                <div className='w-1200 min-h-[548px] py-16 px-5 lg:px-0'>
                    <h3 className=' text-[38px] font-semibold text-center pb-16'>{intl.formatMessage({ id: "our_advantage" })}</h3>
                    <ul className='flex flex-wrap items-center justify-center gap-x-6 gap-y-6'>
                        {ourAdvList.map((it, index) => (
                            <li key={it.text} className='w-full flex-1 h-[326px] max-w-[383px] min-w-[280px] bg-[rgba(241,241,241,0.58)] rounded-[10px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] flex flex-col items-center pt-5'>
                                <Image src={it.imgUrl} alt='' width={155} height={155} sizes="155px"
                                />
                                <p className={`text-primary font-semibold text-center ${locale === 'en' ? ' text-xl max-w-[270px] mb-2 leading-6' : 'text-2xl mb-4'}`}>{it.text}</p>
                                <p className={`text-sm text-center ${locale === 'en' ? 'max-w-[280px]' : 'max-w-[210px]'} ${index === 2 && locale === 'en' ? 'max-w-[316px]' : ''}`}>{it.desc}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RiskIdentification;