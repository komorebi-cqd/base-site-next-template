import React from 'react'
import Image from 'next/image';
import Link from 'next/link'

const productList = [
    { id: 2, text: "反欺诈风控", link: "/anti-fraud" },
    { id: 3, text: "争议预警与解决", link: "/early-warning" },
    { id: 4, text: "设备风险识别", link: "/risk-identification" },
    { id: 5, text: "风险画像", link: "/risk-portrait" },
]

const Footer = () => {
    return (
        <footer className='w-full pb-12 md:pb-[13.375rem] bg-[#071532] pt-[82px] px-10 md:px-0'>
            <div className='max-w-[1040px] mx-auto text-white flex flex-col md:flex-row justify-between items-start gap-y-6'>
                {/* 左边联系 */}
                <div>
                    <div className=' mb-8 relative'>
                        <Image src="/image/foot-logo.png" width={296} height={73} alt='WeTech' />
                    </div>
                    <ul className='flex flex-col gap-y-5 text-sm'>
                        <li className='flex items-center gap-x-1'>
                            <Image src="/image/footer/phone.png" width={20} height={20} alt='WeTech-phone' />
                            <span>联系电话：13715293975</span>
                        </li>
                        <li className='flex items-center gap-x-1'>
                            <Image src="/image/footer/email.png" width={20} height={20} alt='WeTech-email' />
                            <span>电子邮箱：business@wetech.vip</span>
                        </li>
                        <li className='flex items-center gap-x-1'>
                            <Image src="/image/footer/address.png" width={20} height={20} alt='WeTech-address' />
                            <span>公司地址：深圳坂田办公室/深圳南山办公室</span>
                        </li>
                    </ul>
                </div>

                {/* 右边产品和公司信息 */}
                <div className='flex flex-col md:flex-row text-[#96BAFF] gap-y-6 md:gap-y-0 md:gap-x-44'>
                    {/* 产品 */}
                    <div>
                        <div className='text-white text-base font-semibold mb-5'>产品</div>
                        <ul className='flex flex-col gap-y-2 text-sm'>
                            {productList.map(product => (<li key={product.id} className=''>
                                <Link href={product.link}>{product.text}</Link>
                            </li>))}
                        </ul>
                    </div>
                    {/* 公司信息 */}
                    <div>
                        <div className='text-white text-base font-semibold mb-5'>公司信息</div>
                        <ul className=' mb-6 text-sm'>
                            <li><Link href="/about">关于我们</Link></li>
                        </ul>
                        <Image src="/image/footer/foot-ewm.png" width={140} height={140} alt='WeTech-phone' />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;