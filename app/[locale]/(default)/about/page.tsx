import React from 'react'
import Image from 'next/image';


const About = () => {
    return (
        <div className='w-full'>
            {/* 顶部背景图 */}
            <div className='w-full h-[51.125rem] bg-[url("/image/about/bg-top.png")] bg-no-repeat relative bg-cover bg-center'>
                <div className=' text-sm text-white pt-[8rem] max-w-4xl mx-auto pl-8 mb-3'>{"公司信息->关于我们"}</div>
            </div>
            <div className='w-full py-12 bg-gradient-to-b  from-[#E7F1FF] to-white'>
                <div className='max-w-[78.75rem] mx-auto h-full flex flex-col'>
                    <div className='flex-1 flex flex-col md:flex-row justify-between items-center px-3 md:px-20 pb-7'>
                        <div className='max-w-[20rem] xl:max-w-[32.75rem] lg:max-w-[23rem]'>
                            <div className='sub-title text-left mb-4'>关于我们</div>
                            <div className='text-[#333333] text-base'>WeTech深耕于金融行业，是腾讯在出海金融风控方面深度战略合作伙伴，WeTech专注于出海方向金融风控领域，是多场景、大数据、全智能出海金融科技产品服务商，WeTech拥有全球最前沿的数据库，强大的数据分析能力和风控模型，自动决策引擎，灵活多变的商业方案为辅助，支付公司等，致力于为商户与支付公司提供完善的风控方案，欺诈识别，降低拒付率，提高订单通过率，从而增加收入创造价值</div>
                        </div>
                        <div className=' relative'>
                            <Image src="/image/about/about-r.png" alt='关于WeTech' width={465} height={316} sizes="465px"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                }} />
                        </div>
                    </div>
                    <div className='w-full h-[1px] bg-[rgba(0,0,0,0.15)]'></div>
                    <div className='flex-1 flex items-center justify-center flex-col px-3 sm:p-0'>
                        <div className='sub-title mb-7 mt-14'>联系我们</div>
                        <div className='sm:w-[37.5rem] pb-20 bg-white shadow-[0_8px_8px_0_rgba(0,0,0,0.25)]'>
                            <ul className='flex flex-col gap-y-5 px-12'>
                                <li className=' text-5xl mt-12 mb-3 text-[#203078] font-bold'>WeTech</li>
                                <li className='flex items-start sm:items-center gap-x-1'>
                                    <Image src="/image/about/phone.png" className=' pt-1 sm:pt-0' width={20} height={20} alt='WeTech-phone' />
                                    <span>联系电话：13715293975</span>
                                </li>
                                <li className='flex items-start sm:items-center gap-x-1'>
                                    <Image src="/image/about/email.png" className=' pt-1 sm:pt-0' width={20} height={20} alt='WeTech-email' />
                                    <span>电子邮箱：business@wetech.vip</span>
                                </li>
                                <li className='flex items-start sm:items-center gap-x-1'>
                                    <Image src="/image/about/address.png" className=' pt-1 sm:pt-0' width={20} height={20} alt='WeTech-address' />
                                    <span>公司地址：深圳坂田办公室/深圳南山办公室</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About