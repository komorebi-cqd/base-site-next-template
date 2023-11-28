import React from 'react'
import Image from 'next/image';


const About = () => {
    return (
        <div className='w-full'>
            {/* 顶部背景图 */}
            <div className='w-full h-[51.125rem] bg-[url("/image/about/bg-top.png")] bg-no-repeat relative bg-cover bg-center'>
                <div className=' text-sm text-white pt-[8rem] max-w-4xl mx-auto pl-8 mb-3'>{"公司信息->关于我们"}</div>
            </div>
            <div className='w-full h-[59.565rem] bg-gradient-to-b  from-[#E7F1FF] to-white'>
                <div className='max-w-[78.75rem] mx-auto h-full flex flex-col'>
                    <div className='flex-1 flex justify-between items-center px-20'>
                        <div>
                            <div className='text-[#316FE7] text-[2rem] font-extrabold mb-4'>关于我们</div>
                            <div className='text-[#333333] text-base'>WeTech深耕于金融行业，是腾讯在出海金融风控方面深度战略合作伙伴，<br />WeTech专注于出海方向金融风控领域，是多场景、大数据、全智能出海<br />金融科技产品服务商，WeTech拥有全球最前沿的数据库，强大的数据分<br />析能力和风控模型，自动决策引擎，灵活多变的商业方案为辅助，支付公<br />司等，致力于为商户与支付公司提供完善的风控方案，欺诈识别，降低拒<br />付率，提高订单通过率，从而增加收入创造价值</div>
                        </div>
                        <div className=' relative w-[29.065rem] h-[19.75rem]'>
                            <Image src="/image/about/about-r.png" alt='关于WeTech' fill={true} />
                        </div>
                    </div>
                    <div className='w-full h-[1px] bg-[rgba(0,0,0,0.15)]'></div>
                    <div className='flex-1 flex items-center justify-center flex-col pb-10'>
                        <div className='text-[#316FE7] text-[2rem] font-extrabold mb-7'>联系我们</div>
                        <div className='w-[37.5rem] h-[19.625rem] bg-white shadow-[0_8px_8px_0_rgba(0,0,0,0.25)] flex flex-col justify-start items-start'>
                            <ul className='flex flex-col gap-y-5 px-12'>
                                <li className=' text-5xl mt-8 mb-5'>WeTech</li>
                                <li className='flex items-center gap-x-1'>
                                    <Image src="/image/about/phone.png" width={20} height={20} alt='WeTech-phone' />
                                    <span>联系电话：13715293975</span>
                                </li>
                                <li className='flex items-center gap-x-1'>
                                    <Image src="/image/about/email.png" width={20} height={20} alt='WeTech-email' />
                                    <span>电子邮箱：business@wetech.vip</span>
                                </li>
                                <li className='flex items-center gap-x-1'>
                                    <Image src="/image/about/address.png" width={20} height={20} alt='WeTech-address' />
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