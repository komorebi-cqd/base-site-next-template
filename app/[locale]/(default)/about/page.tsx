import React from 'react'
import Image from 'next/image';
import getIntl from "../../intl";


const About = async ({ params: { locale } }: { params: { locale: string } }) => {
    const intl = await getIntl(locale);
    return (
        <div className='w-full  text-[#333]'>
            {/* 顶部大图 */}
            <div className="w-full  bg-[#262626] max-h-[var(--top-h)] h-[var(--top-h)] bg-[url('/image/about/top-bg.png')] bg-contain bg-right-bottom bg-no-repeat">
                <div className="max-w-[1440px] mx-auto h-full  bg-no-repeat  px-6 xl:px-0">
                    <div className="flex flex-col text-white h-full max-w-[1200px] mx-auto pt-48 ">
                        <h3 className=" text-[58px] font-bold">AI支付风控</h3>
                        <div className="flex flex-col text-3xl mt-4 mb-6">
                            <span>为跨境出海保驾护航</span>
                            <span>一站式为商户提供专业、快速、易用成熟的支付风控产品</span>
                        </div>
                        <a href="#" className="w-[206px] h-[56px] bg-white rounded leading-[56px] text-primary text-center text-xl font-semibold">立即体验</a>
                    </div>
                </div>
            </div>
            <div className='w-full bg-white pt-[170px] pb-[122px]'>
                <div className='w-1200 flex gap-x-28'>
                    <div className='max-w-[563px] w-full'>
                        <h3 className=' text-[38px] font-semibold'>{intl.formatMessage({ id: 'about_title' })}</h3>
                        <p className=' py-[30px] font-semibold text-base'>WeTech深耕于金融行业专注于出海方向的金融风控领域，是多场景、大数据、全智能出海金融科技产品服务商。</p>
                        <div className=' text-sm leading-7 pb-4'>
                            <p>WeTech拥有全球最前沿的数据库，强大的数据分析能力和风控模型，自动决策引擎，灵活多变的商业方案为辅助，高标准的客户服务水平为前提，已服务于众多独立站头部卖家、建站公司、支付公司等。</p>
                            <p>致力于为商户与支付公司提供完善的风控方案，欺诈识别，降低拒付率，提高订单通过率，从而增加收入创造价值。</p>
                        </div>
                    </div>
                    <div className='flex-1 relative w-full h-auto'>
                        <Image src="/image/about/aboutus-bg.png" alt='about-WeTech' fill className=' object-contain' />
                    </div>
                </div>
            </div>
            <div className=' w-full bg-[rgba(49,111,231,0.05)] min-h-[556px] pt-11 pb-16'>
                <h3 className=' text-[38px] text-center font-semibold mb-12'>{intl.formatMessage({ id: 'about_contact_us' })}</h3>
                <div className='max-w-[678px] w-full pb-20 bg-white shadow-[0_4px_40px_0_rgba(43,89,255,0.08)] mx-auto pl-32'>
                    <ul className='flex flex-col gap-y-5 px-12 text-sm'>
                        <li className='relative -ml-8 pt-10'>
                            <Image src="/image/about-logo.png" width={254} height={60} alt='WeTech' />
                        </li>
                        <li className='flex items-start sm:items-center gap-x-1'>
                            <Image src="/image/about/phone.png" className=' pt-1 sm:pt-0' width={16} height={16} alt='WeTech-phone' />
                            <span>{intl.formatMessage({ id: 'phone' })}</span>
                        </li>
                        <li className='flex items-start sm:items-center gap-x-1'>
                            <Image src="/image/about/email.png" className=' pt-1 sm:pt-0' width={16} height={16} alt='WeTech-email' />
                            <span>{intl.formatMessage({ id: 'email' })}</span>
                        </li>
                        <li className='flex items-start gap-x-1'>
                            <Image src="/image/about/address.png" className=' pt-1' width={16} height={16} alt='WeTech-address' />
                            <div className='flex'>
                                <span className=' flex-shrink-0'>{intl.formatMessage({ id: 'address_text' })}</span>
                                <div className=' md:max-w-[300px]'>{intl.formatMessage({ id: 'address_detials' })}</div>
                            </div>
                        </li>
                        {locale !== "en" && <li>
                            <a href={process.env.NEXT_PUBLIC_JUMP_URL} target="_blank" className="py-2 px-3 bg-indigo-500 text-white text-sm font-semibold rounded-md shadow focus:outline-none">加入渠道联盟</a>
                        </li>}
                    </ul>
                </div>
            </div>
           
        </div>
    )
}

export default About