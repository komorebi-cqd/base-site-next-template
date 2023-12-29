import React from 'react'
import Image from 'next/image';
import getIntl from "../../intl";


const identificationModeList = [
    { text: "海量海外数据", imgUrl: "/image/risk-portrait/sbfs-1.png" },
    { text: "大数据分析+整理", imgUrl: "/image/risk-portrait/sbfs-2.png" },
    { text: "AI智能算法 ", imgUrl: "/image/risk-portrait/sbfs-3.png" },
    { text: "多轮持续模型优化 ", imgUrl: "/image/risk-portrait/sbfs-4.png" },
    { text: "IP画像 ", imgUrl: "/image/risk-portrait/sbfs-5.png" },
    { text: "手机号画像", imgUrl: "/image/risk-portrait/sbfs-6.png" },
    { text: "邮箱画像 ", imgUrl: "/image/risk-portrait/sbfs-7.png" },
    { text: "地址画像", imgUrl: "/image/risk-portrait/sbfs-8.png" },
];

const ourAdvList = [
    { text: "多维度风险画像", desc: "基本AI智能算法，从多个维度进行 风险画像，具备全面性和性高准确性", imgUrl: "/image/early-warning/adv-1.png" },
    { text: "全球采样数据库", desc: "丰富的全球生态采样能力， 高效的大数据分析和智能AI算法", imgUrl: "/image/early-warning/adv-2.png" },
    { text: "定制化客户方案 ", desc: "专业定制服务团队， 便捷的接入流程和高效的响应机制", imgUrl: "/image/early-warning/adv-3.png" },
];





const RiskPortait = async ({ params: { locale } }: { params: { locale: string } }) => {
    const intl = await getIntl(locale);

    const desc = (
        <div className={`mx-auto ${locale === "en" ? "max-w-[900px]" : "max-w-[464px]"}`}>{intl.formatMessage({ id: 'risk_profiling_desc' })}</div>
    )
    return (
        <div>
            {/* 顶部大图 */}
            <div className="w-full  bg-[#00061a] max-h-[var(--top-h)] h-[var(--top-h)]">
                <div className="max-w-[1440px] mx-auto h-full bg-[url('/image/risk-portrait/top-bg.png')] bg-contain bg-right-bottom bg-no-repeat  px-6 xl:px-0">
                    <div className="flex flex-col text-white h-full max-w-[1200px] mx-auto pt-48 ">
                        <h3 className=" text-[58px] font-bold">大数据分析+AI智能算法</h3>
                        <div className="flex flex-col text-3xl mt-4 mb-6">
                            <span>IP画像、手机号画像、邮箱画像、地址画像</span>
                        </div>
                        <a href="#" className="w-[206px] h-[56px] bg-white rounded leading-[56px] text-primary text-center text-xl font-semibold">立即体验</a>
                    </div>
                </div>
            </div>
            {/* 多维画像设计，提高风险识别精准度 */}
            <div className='w-full bg-white pt-14 pb-[108px] text-[#333333]'>
                <h3 className=' text-[38px] font-semibold text-center'>多维画像设计，提高风险识别精准度</h3>
                <div className='flex items-center justify-center mt-4 mb-12 text-[rgba(0,0,0,0.69)] text-base flex-col'>
                    <span>多维画像设计，提高风险识别精准度</span>
                    <span>可有效的解决垃圾注册、刷单、薅羊毛、识别风险行为</span>
                </div>
                <div className='w-1200'>
                    <ul className='grid grid-cols-4 gap-x-7 gap-y-8 text-2xl'>
                        {identificationModeList.map(it => (
                            <li key={it.text} className='w-full h-[260px] bg-white rounded-[10px] shadow-[0px_4px_40px_0px_rgba(43,89,255,0.08)] flex items-center flex-col pt-7'>
                                <Image src={it.imgUrl} alt="" width={110} height={110} sizes="110px" />
                                <span className=' pt-[28px]'>{it.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* 我们的团队 */}
            <div className=' w-full bg-[rgba(49,111,231,0.05)] text-[#333] pt-[82px] pb-[90px]'>
                <div className='w-1200 flex items-center px-5 lg:px-0 flex-col md:flex-row gap-y-5'>
                    <div className='flex-1 w-full rounded-[10px] shadow-[0px_4px_40px_0px_rgba(43,89,255,0.08)] bg-white pt-10 md:pt-[72px] pb-14 md:pb-[108px] px-10 bg-[url("/image/risk-portrait/dhao.png")] bg-no-repeat bg-[right_36px_bottom_1rem] bg-[length:148px_110px]'>
                        <h3 className=' text-primary font-semibold text-[38px] mb-7'>我们的团队</h3>
                        <ul className='flex flex-col leading-6 text-sm'>
                            <li>· 长期投入上百名风控专家，跟进海外风控动态  </li>
                            <li>· 挖掘新的风险，洞察新的对抗，持续的优化模型和算法</li>
                            <li>· 专业的定制化团队，依照您的要求，制定落地方案，高效执行，快速响应</li>
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
                    <h3 className=' text-[38px] font-semibold text-center pb-16'>我们的优势</h3>
                    <ul className='flex gap-x-6'>
                        {ourAdvList.map(it => (
                            <li key={it.text} className='w-full h-[326px] bg-[#F3F5F9] rounded-[10px] flex flex-col items-center pt-5'>
                                <Image src={it.imgUrl} alt='' width={155} height={155} sizes="155px"
                                />
                                <p className=' text-primary text-2xl mb-4 font-semibold'>{it.text}</p>
                                <p className=' text-sm max-w-[224px] text-center'>{it.desc}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RiskPortait;