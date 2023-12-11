import ClientOnly from "@/app/components/ClientOnly";
import HomeRiskSwiper from "@/app/components/home/home-risk-swiper";
import HalfCirclePosition from "@/app/components/HalfCirclePosition";
import SixAdvantage from "@/app/components/home/six-advantage";
import HomeTop from "@/app/components/home/home-top";
import Image from "next/image";
import getIntl from "../intl";

async function Home({ params: { locale } }: { params: { locale: string } }) {
    const intl = await getIntl(locale);
    return (
        <main className=''>
            {/* 顶部大图 */}
            <HomeTop locale={locale}/>
            {/* AI支付风控，为跨境出海保驾护航 */}
            <div className={`w-full h-auto  relative `}>
                <div className=" absolute -top-32 inset-x-0 mx-auto w-full xl:w-[79.5rem] h-auto risk-ai-bg rounded-2xl text-[#333] py-12">
                    {/* title */}
                    <div className="px-4 md:px-0">
                        <div className="flex items-center justify-center gap-x-5 mb-4">
                            <span className=" block w-[1.375rem] h-[1.375rem] rounded-full bg-gradient-to-bl from-white to-[#316FE7] flex-shrink-0"></span>
                            <span className={`font-semibold text-center ${locale === "en" ? "text-xl" : "text-2xl  md:text-[28px]"}`}>{intl.formatMessage({ id: 'home_block_top' })}</span>
                            <span className=" block w-[1.375rem] h-[1.375rem] rounded-full bg-gradient-to-bl from-white to-[#316FE7] flex-shrink-0"></span>
                        </div>
                        <div className={`text-center mx-auto ${locale === "en" ? " text-sm max-w-[41.25rem]" : " text-base"}`}>{intl.formatMessage({ id: 'home_block_top_desc' })}</div>
                        <div className={`text-center text-xl mt-4 mb-6 font-bold ${locale === "en" ? " text-xl" : " text-xl md:text-2xl"}`}>{intl.formatMessage({ id: 'home_block_top_small_des' })}</div>
                    </div>
                    {/* 幻灯片 */}
                    <ClientOnly>
                        <HomeRiskSwiper />
                    </ClientOnly>
                </div>
                <div className={`pt-[27rem]  md:pt-[27rem] w-full ${locale === "en" ? "lg:pt-[28.25rem]" : "lg:pt-[25.25rem]"}`}>
                    <div className="w-full xl:w-[83.5rem] relative mx-auto overflow-hidden">
                        <ClientOnly>
                            <HalfCirclePosition />
                        </ClientOnly>
                    </div>
                </div>
            </div>
            {/* 全球最前沿和最全风控数据库 */}
            <ClientOnly>
                <SixAdvantage />
            </ClientOnly>
            {/* 强大技术及深度算法能力 */}
            <div className="w-full h-auto pt-[4rem] pb-[2.5rem] bg-[#F4F7FF] px-2">
                <div className="w-full xl:w-[65.625rem] mx-auto flex flex-col md:flex-row justify-between items-center h-full">
                    <div className=" relative w-[17.6rem] h-[17.6rem] flex-shrink-0">
                        <Image src="/image/home/algorithm-img.png" fill={true} alt="algorithm-img" />
                    </div>
                    <div className={` px-5 md:px-0 ${locale === "en" ? "max-w-[550px]" : ""}`}>
                        <div className={`sub-title text-left mb-7 pb-7 relative before:absolute before:bottom-0 before:left-0 before:w-48 before:h-[1px] before:bg-[rgba(0,0,0,0.1)] ${locale === "en" ? "text-3xl" : ""}`}>
                            {intl.formatMessage({ id: 'home_art_t' })}
                        </div>
                        <ul className=" w-full text-[rgba(51,51,51,0.85)] font-medium text-base pl-3">
                            <li className=" whitespace-normal mb-2 relative before:absolute before:top-3 before:-translate-y-1/2 before:-left-3 before:bg-[#316FE7] before:w-[5px] before:h-[5px] before:rounded-full">{intl.formatMessage({ id: 'home_art_t_one_des' })}</li>
                            <li className=" whitespace-normal relative before:absolute before:top-3 before:-translate-y-1/2 before:-left-3 before:bg-[#316FE7] before:w-[5px] before:h-[5px] before:rounded-full">{intl.formatMessage({ id: 'home_art_t_two_des' })}</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* 反欺诈风控产品 */}
            <div className="w-full h-auto pt-[5.5rem] pb-[4rem] bg-white  px-2">
                <div className=" max-w-[1150px] mx-auto flex flex-col md:flex-row justify-between items-center">
                    <div className="max-w-[504px] order-2 md:order-1 mt-10 md:mt-0">
                        <div className="sub-title text-left mb-7 pb-7 relative before:absolute before:bottom-0 before:left-0 before:w-48 before:h-[1px] before:bg-[rgba(0,0,0,0.1)]">{intl.formatMessage({ id: 'home_risk_pro_t' })}</div>
                        <div className={`text-[rgba(51,51,51,0.85)] text-base max-w-[365px] ${locale === "en" ? "max-w-[560px]" : "max-w-[365px]"}`}>{intl.formatMessage({ id: 'home_risk_pro_des' })}</div>
                    </div>
                    <div className=" relative order-1 md:order-2">
                        <Image src="/image/home/risk-control.png" width={400} height={218} alt="risk-control" />
                    </div>
                </div>
            </div>
            {/* 争议预警与解决 */}
            <div className=" w-full pt-[2.875rem] pb-[11.875rem] bg-[#00206F] text-center text-white relative">
                <div className={`font-extrabold mb-8  ${locale === "en" ? "text-[32px]" : "text-4xl" }`}>{intl.formatMessage({ id: 'home_zy_jj_t' })}</div>
                <div className=" text-base font-medium leading-9 text-[rgba(255,255,255,0.85)]">{intl.formatMessage({ id: 'home_zy_jj_t_one_desc' })}<br />{intl.formatMessage({ id: 'home_zy_jj_t_two_desc' })}</div>
                <div className="ab-c top-auto -bottom-52 shadow-md shadow-[rgba(34,95,212,0.08)] h-56 w-full lg:w-[71rem] bg-white flex justify-center items-center text-[#333333] text-base">
                    <div className=" relative flex flex-col justify-center h-full items-center flex-1 lg:flex-auto before:absolute before:bottom-1/2 before:right-0 before:w-[1px] before:h-32 before:translate-y-1/2 before:bg-[rgba(0,0,0,0.45)]">
                        <Image src="/image/home/zy1.png" width={96} height={70} alt="Ethoca 争议拒付预警" />
                        <div className=" mt-3">{intl.formatMessage({ id: 'home_zy_jj_t_l' })}</div>
                    </div>
                    <div className=" relative flex flex-col justify-center h-full items-center flex-1 lg:flex-auto">
                        <Image src="/image/home/zy2.png" width={96} height={78} alt="RDR/CDRN争议拒付预警" />
                        <div className="mt-2">{intl.formatMessage({ id: 'home_zy_jj_t_r' })}</div>
                    </div>
                </div>
            </div>
            <div className="earth-bg mt-32 pt-[8.625rem] pb-11 w-full flex flex-col lg:flex-row justify-center lg:items-stretch items-center gap-x-28">
                <div className=" w-[90%] sm:w-[25.625rem] bg-white relative rounded shadow-[0_4px_4px_0px_rgba(49,111,231,0.21)]">
                    <div className=" absolute left-1/2 -top-32 -translate-x-1/2 w-[17rem] h-[17rem]">
                        <Image src="/image/home/device-identification.png" fill={true} alt="device-identification" />
                    </div>
                    <div className=" pt-44 text-center">
                        <div className={` text-[#316FE7] font-extrabold mb-[1.4rem] ${locale === "en" ? " text-lg" : " text-[1.75rem]" }`}>{intl.formatMessage({ id: 'home_device_ad_t' })}</div>
                        <div className={`text-[#333333]  text-xs leading-[1.5rem] pb-6 ${locale === "en" ? " px-3" : " px-6" }`}>{intl.formatMessage({ id: 'home_device_ad_desc' })}</div>
                    </div>
                </div>
                <div className="w-[90%] sm:w-[25.625rem] mt-[8.625rem] lg:mt-0 bg-white relative rounded shadow-[0_4px_4px_0px_rgba(49,111,231,0.21)]">
                    <div className=" absolute left-1/2 -top-32 -translate-x-1/2 w-[17rem] h-[17rem]">
                        <Image src="/image/home/risk-portrait.png" fill={true} alt="risk-portrait" />
                    </div>
                    <div className=" pt-44 text-center">
                        <div className={`text-[#316FE7]  font-extrabold mb-[1.4rem] lg:mb-14 ${locale === "en" ? " text-lg" : " text-[1.75rem]" }`}>{intl.formatMessage({ id: 'home_fxhx_t' })}</div>
                        <div className={` text-[#333333] text-xs leading-[1.5rem] pb-6 ${locale === "en" ? " px-4 lg:pb-0 lg:pt-10" : " px-14 sm:px-[80px]" }`}>{intl.formatMessage({ id: 'home_fxhx_desc' })}</div>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default Home;
