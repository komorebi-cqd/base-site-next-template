import React from 'react'
import Image from 'next/image';
import getIntl from "../../intl";



const AntiFraud = async ({ params: { locale } }: { params: { locale: string } }) => {
    const intl = await getIntl(locale);
    return (
        <div>
            {/* 顶部大图 */}
            <div className="w-full  bg-[#161616] max-h-[var(--top-h)] h-[var(--top-h)]">
                <div className="max-w-[1440px] mx-auto h-full bg-[url('/image/anti-fraud/anti-fraud-top-bg.png')] bg-contain bg-right-bottom bg-no-repeat  px-6 xl:px-0">
                    <div className="flex flex-col text-white h-full max-w-[1200px] mx-auto pt-48 ">
                        <h3 className={`font-bold text-5xl ${locale === "en" ? "max-w-[620px] leading-[68px] lg:text-[72px]" : "lg:text-[58px] "}`}>{intl.formatMessage({ id: 'ar_top_title' })}</h3>
                        <div className={`flex flex-col mt-4 mb-6 ${locale === "en" ? " text-lg max-w-[620px]" : " text-[32px]  max-w-[570px]"}`}>
                            <span>{intl.formatMessage({ id: 'ar_top_desc' })}</span>
                        </div>
                        <a href="#" className="w-[206px] h-[56px] bg-white rounded leading-[56px] text-primary text-center text-xl font-semibold">{intl.formatMessage({ id: 'jump_wetech_text' })}</a>
                    </div>
                </div>
            </div>
            {/* 传统对比wetech */}
            <div className='w-full px-4 py-6 bg-[#F3F5F9]'>
                <div className='max-w-[1200px] mx-auto  flex flex-col items-center gap-y-7 text-sm text-[#171717]'>
                    <div className='w-full min-h-[300px] bg-white flex p-6 gap-x-12 flex-col lg:flex-row'>
                        <ul className='flex-auto leading-6 max-w-[692px] mx-auto lg:w-auto w-full mb-10 lg:mb-0'>
                            <h3 className=' text-primary text-2xl mb-4 lg:mt-10 font-semibold'>{intl.formatMessage({ id: 'ar_ctfk_t' })}</h3>
                            <li className='list-style-dot'>{intl.formatMessage({ id: 'ar_ctfk_desc_one' })}</li>
                            <li className='list-style-dot'>{intl.formatMessage({ id: 'ar_ctfk_desc_two' })}</li>
                        </ul>
                        <div className=' relative w-full max-w-[692px] md:h-[248px] mx-auto'>
                            <Image className=' object-contain' style={{
                                width: '100%',
                                height: 'auto',
                            }} src={locale === "en" ? "/image/anti-fraud/ct-fk-en.png" : "/image/anti-fraud/ct-fk.png"} alt='advantage1'  width={692} height={248} />
                        </div>
                    </div>
                    <div className={`w-full min-h-[300px] bg-white flex p-6 flex-col-reverse lg:flex-row-reverse  ${locale === "en" ? "gap-x-4" : " gap-x-12"}`}>
                        <ul className={`leading-6 mx-auto lg:w-auto w-full max-w-[692px] ${locale === 'en' ? 'lg:max-w-[444px]' : 'lg:max-w-[432px]'}`}>
                            <h3 className={`text-primary text-2xl mb-4 mt-10 font-semibold`}>{intl.formatMessage({ id: 'ar_wcfk_t' })}</h3>
                            <li className='list-style-dot'>{intl.formatMessage({ id: 'ar_wcfk_desc_one' })}</li>
                            <li className='list-style-dot'>{intl.formatMessage({ id: 'ar_wcfk_desc_two' })}</li>
                            <li className='list-style-dot'>{intl.formatMessage({ id: 'ar_wcfk_desc_three' })}</li>
                        </ul>
                        <div className={`relative flex-initial w-full md:h-[248px] max-w-[692px] mx-auto`}>
                            <Image style={{
                                width: '100%',
                                height: 'auto',
                            }} className=' object-contain' src={locale === "en" ? "/image/anti-fraud/wc-fk-en.png" : "/image/anti-fraud/wc-fk.png"} alt='advantage1'  width={692} height={248} />
                        </div>
                    </div>
                </div>
            </div>
            {/* WeTech专注于出海支付风控服务 */}
            <div className='w-full bg-white pt-16 pb-12'>
                <h3 className={`text-center text-[#333] font-semibold  ${locale === 'en' ? ' text-2xl max-w-[518px] mx-auto' : 'text-3xl lg:text-[38px]'}`}>{intl.formatMessage({ id: 'ar_wczz_t' })}</h3>
                <div className={` max-w-[1300px] mx-auto flex justify-center items-center flex-col lg:flex-row px-5 md:px-0  ${locale === "en" ? "gap-5" : "gap-5"}`}>
                    <ul className=' flex-1 text-base text-[#333333] leading-7 max-w-[724px] mx-auto mt-10 lg:mt-0'>
                        <li className='list-style-dot'>{intl.formatMessage({ id: 'ar_wczz_desc_one' })}</li>
                        <li className='list-style-dot'>{intl.formatMessage({ id: 'ar_wczz_desc_two' })}</li>
                        <li className='list-style-dot'>{intl.formatMessage({ id: 'ar_wczz_desc_three' })}</li>
                    </ul>
                    <div className=' relative flex-1 lg:flex-initial max-w-[724px] w-full'>
                        <Image src={locale === "en" ? "/image/anti-fraud/wczzhwfk-en.png" : "/image/anti-fraud/wczzhwfk.png"} alt='ai-model1' width={724} height={363} sizes="724px"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }} />
                    </div>
                </div>
            </div>

            {/* AI智能模型，成长型数据模型 */}
            <div className='w-full pt-12 pb-16 bg-[#071532]'>
                <div className=' font-bold text-3xl lg:text-[38px] mb-16 text-center text-[#FFFFFF]'>{intl.formatMessage({ id: 'ar_al_model' })}</div>
                <div className='flex flex-col md:flex-row justify-between items-center max-w-[85rem] mx-auto px-4 md:px-0'>
                    <div className=' relative -ml-12 md:ml-0'>
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
                        <Image src={locale === "en" ? "/image/anti-fraud/ai-model2-en.png" : "/image/anti-fraud/ai-model2.png"} alt='ai-model2' width={485} height={332} sizes="485px"
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
                    <div className='flex flex-row flex-initial w-full md:w-auto md:flex-col gap-y-11 gap-x-6 text-base  leading-10 text-[#1989FA] text-center'>
                        <div className='w-auto flex-1 md:w-[8.5rem] h-11 bg-white border border-[#1989FA] rounded'>YES/<span className='text-[#FA1919]'>NO</span></div>
                        <div className='w-auto flex-1 md:w-[8.5rem] h-11 bg-white border border-[#1989FA] rounded'>{locale === "en" ? "Score" : "Score评分"}</div>
                        <div className='w-auto flex-1 md:w-[8.5rem] h-11 bg-white border border-[#1989FA] rounded'>Others</div>
                    </div>
                </div>
            </div>

            {/* 我们的优势 */}
            <div className='w-full bg-[#F3F5F9] pt-14 pb-16'>
                <div className=' text-[#333] text-center text-3xl lg:text-[38px] font-semibold mb-10'>{intl.formatMessage({ id: 'our_advantage' })}</div>
                <div className='w-1200 flex flex-col md:flex-row gap-x-6 text-sm text-[#000000] px-5 gap-y-6'>
                    <div className='w-full bg-white h-[327px] flex flex-col items-center pt-4 rounded-[10px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)]'>
                        <div className=' relative'>
                            <Image src="/image/anti-fraud/ys1.png" alt='arrow' width={155} height={155} sizes="155px"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                }} />
                        </div>
                        <h3 className={`text-primary font-semibold text-center ${locale === "en" ? " text-xl my-2" : "text-2xl mt-2 mb-4"}`}>{intl.formatMessage({ id: 'ar_adv_one_t' })}</h3>
                        <div className={`text-center ${locale === 'en' ? 'max-w-[270px] leading-5' : 'max-w-[210px] leading-6'}`}>{intl.formatMessage({ id: 'ar_adv_one_des' })}</div>
                    </div>
                    <div className='w-full bg-white h-[327px] flex flex-col items-center pt-4 rounded-[10px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)]'>
                        <div className=' relative'>
                            <Image src="/image/anti-fraud/ys2.png" alt='arrow' width={155} height={155} sizes="155px"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                }} />
                        </div>
                        <h3 className={`text-primary font-semibold text-center ${locale === "en" ? "text-xl max-w-[240px] my-[6px] leading-5" : "text-2xl mt-2 mb-4"}`}>{intl.formatMessage({ id: 'ar_adv_two_t' })}</h3>
                        <div className={`text-center ${locale === 'en' ? ' max-w-[260px] leading-5' : 'max-w-[210px] leading-6'}`}>{intl.formatMessage({ id: 'ar_adv_two_des' })}</div>
                    </div>
                    <div className='w-full bg-white min-h-[327px] flex flex-col items-center pt-4 rounded-[10px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)]'>
                        <div className=' relative'>
                            <Image src="/image/anti-fraud/ys3.png" alt='arrow' width={155} height={155} sizes="155px"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                }} />
                        </div>
                        <h3 className={`mt-2 mb-4 text-primary font-semibold text-center ${locale === "en" ? "text-xl" : "text-2xl"}`}>{intl.formatMessage({ id: 'ar_adv_three_t' })}</h3>
                        <div className={`text-center ${locale === 'en' ? ' max-w-[280px] leading-5' : 'max-w-[210px] leading-6'}`}>{intl.formatMessage({ id: 'ar_adv_three_des' })}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AntiFraud;