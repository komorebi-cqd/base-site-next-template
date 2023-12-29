import React from 'react'
import Image from 'next/image';
import PageTop from '@/app/components/ui/page-top';
import AdvantageItem from '@/app/components/ui/advantage-item';
import getIntl from "../../intl";


const ourAdvList = [
    { text: "模型准确率高，稳定可靠", desc: "动静态特征相结合，AI智能模型， 提高准确性，确保稳定性", imgUrl: "/image/early-warning/ys1.png" },
    { text: "全平台、适配性好", desc: "动静态特征相结合，AI智能模型， 高兼容，有效对抗设备信息篡改", imgUrl: "/image/early-warning/ys2.png" },
    { text: "多维度，反诈骗能力强 ", desc: "多维度设备信息，大数据分析， AI智能算法和智能风控系统，有效 对抗伪造，机控和撸羊毛", imgUrl: "/image/early-warning/ys3.png" },
];

const RiskIdentification = async ({ params: { locale } }: { params: { locale: string } }) => {
    const intl = await getIntl(locale);
    const desc = (
        <div className={`mx-auto ${locale === "en" ? "max-w-[848px]" : "max-w-[800px]"}`}>{intl.formatMessage({ id: 'device_risk_desc' })}</div>
    )
    return (
        <div>
            {/* 顶部大图 */}
            <div className="w-full  bg-gradient-to-r from-[#185BDD] to-[#042081] max-h-[var(--top-h)] h-[var(--top-h)]">
                <div className="max-w-[1440px] mx-auto h-full bg-[url('/image/risk-identification/computed.png')] bg-[length:610px_400px] bg-[right_bottom_56px] bg-no-repeat  px-6 xl:px-0">
                    <div className="flex flex-col text-white h-full max-w-[1200px] mx-auto pt-48 ">
                        <h3 className=" text-[58px] font-bold">大数据分析+AI智能算法</h3>
                        <div className="flex flex-col text-3xl mt-4 mb-16">
                            <span>AI智能模型，多维度设备信息，覆盖面广，识别准确率高</span>
                        </div>
                        <a href="#" className="w-[206px] h-[56px] bg-white rounded leading-[56px] text-primary text-center text-xl font-semibold">立即体验</a>
                    </div>
                </div>
            </div>
            <div className='w-full bg-[#F3F5F9] py-16'>
                <div className='w-1200 text-[#333]'>
                    <div className='w-full p-14 bg-white  rounded-xl flex justify-between mb-10'>
                        <div className='flex-1 pt-16'>
                            <h3 className=' text-primary text-[38px] font-semibold'>大数据分析+AI智能算法</h3>
                            <p className='max-w-[400px] font-semibold text-base mt-3 mb-4'>WeTech AI智能风控系统，可有效对抗设备伪造，机控、薅羊毛等恶意的行为</p>
                            <ul className=' text-sm leading-6 pl-4 '>
                                <li className=' list-style-c'>多维度设备信息</li>
                                <li className=' list-style-c'>大数据分析</li>
                                <li className=' list-style-c'>AI智能算法</li>
                                <li className=' list-style-c'>生成唯一可信标识</li>
                            </ul>
                        </div>
                        <div className='w-[430px] h-[418px] relative bg-[rgba(49,111,231,0.08)] rounded-[10px] px-7'>
                            <Image className=' object-contain' src={locale === "en" ? "/image/risk-identification/sf-en.png" : "/image/risk-identification/sf.png"} alt='' fill />
                        </div>
                    </div>
                    <div className='w-full p-14 bg-white  rounded-xl flex justify-between flex-row-reverse'>
                        <div className='flex-1 pt-16 max-w-[416px] '>
                            <h3 className=' text-primary text-[38px] font-semibold'>大数据</h3>
                            <p className='font-semibold text-base mt-3 mb-4'>具备海外设备变化的洞察先机，帮助业务提前感知潜在风险</p>
                            <ul className=' text-sm leading-6 pl-4 '>
                                <li className=' list-style-c'>上亿移动设备</li>
                                <li className=' list-style-c'>百人专业团队</li>
                            </ul>
                        </div>
                        <div className='w-[430px] h-[418px] relative bg-[rgba(49,111,231,0.08)] rounded-[10px] px-7'>
                            <Image className=' object-contain' src="/image/risk-identification/dsj.png" alt='' fill />
                        </div>
                    </div>
                </div>
            </div>
            {/*我们的优势 */}
            <div className=' w-full bg-white'>
                <div className='w-1200 min-h-[548px] py-16'>
                    <h3 className=' text-[38px] font-semibold text-center pb-16'>我们的优势</h3>
                    <ul className='flex gap-x-6'>
                        {ourAdvList.map(it => (
                            <li key={it.text} className='w-full h-[326px] bg-[rgba(241,241,241,0.58)] rounded-[10px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] flex flex-col items-center pt-5'>
                                <Image src={it.imgUrl} alt='' width={155} height={155} sizes="155px"
                                />
                                <p className=' text-primary text-2xl mb-4 font-semibold'>{it.text}</p>
                                <p className=' text-sm max-w-[210px] text-center'>{it.desc}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RiskIdentification;