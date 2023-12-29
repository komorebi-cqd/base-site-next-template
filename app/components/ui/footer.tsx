import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import getIntl from "@/app/[locale]/intl";



const Footer = async ({ locale }: { locale: string }) => {
    const intl = await getIntl(locale);
    const productList = [
        { id: 2, text: intl.formatMessage({ id: 'foot_nav_one' }), link: "/anti-fraud" },
        { id: 3, text: intl.formatMessage({ id: 'nav_three' }), link: "/early-warning" },
        { id: 4, text: intl.formatMessage({ id: 'nav_four' }), link: "/risk-identification" },
        { id: 5, text: intl.formatMessage({ id: 'nav_five' }), link: "/risk-portrait" },
    ]
    return (
        <footer className='w-full pb-12 md:pb-[13.375rem] bg-[#071532] pt-[82px] px-10 md:px-0'>
            <div className='w-1200 text-white flex flex-col md:flex-row justify-between items-start gap-y-6'>
                {/* 左边联系 */}
                <div>
                    <div className=' mb-8 relative'>
                        <Image src="/image/foot-logo.png" width={296} height={73} alt='WeTech' />
                    </div>
                    <ul className='flex flex-col gap-y-5 text-sm'>
                        <li className='flex items-center gap-x-1'>
                            <Image src="/image/footer/phone.png" width={20} height={20} alt='WeTech-phone' />
                            <span>{intl.formatMessage({ id: 'phone' })}</span>
                        </li>
                        <li className='flex items-center gap-x-1'>
                            <Image src="/image/footer/email.png" width={20} height={20} alt='WeTech-email' />
                            <span>{intl.formatMessage({ id: 'email' })}</span>
                        </li>
                        <li className='flex items-center gap-x-1'>
                            <Image src="/image/footer/address.png" width={20} height={20} alt='WeTech-address' />
                            <span>{intl.formatMessage({ id: 'address' })}</span>
                        </li>
                        <li className='flex flex-col'>
                            <span>深圳云享家网络科技有限公司版权所有</span>
                            <a className=' transition-all hover:text-[--text-primary]' target='_blank' href="https://beian.miit.gov.cn/">粤ICP备2021094662号-3</a>
                        </li>
                    </ul>
                </div>

                {/* 右边产品和公司信息 */}
                <div className={`flex flex-col md:flex-row text-[#96BAFF] gap-y-6 md:gap-y-0  ${locale === "en" ? " gap-x-10" : "md:gap-x-44"}`}>
                    {/* 产品 */}
                    <div>
                        <div className='text-white text-base font-semibold mb-5'>{intl.formatMessage({ id: 'foot_t' })}</div>
                        <ul className='flex flex-col gap-y-2 text-sm'>
                            {productList.map(product => (<li key={product.id} className=''>
                                <Link href={locale === "en" ? "/en" + product.link : product.link}>{product.text}</Link>
                            </li>))}
                        </ul>
                    </div>
                    {/* 公司信息 */}
                    <div>
                        <div className='text-white text-base font-semibold mb-5 whitespace-nowrap'>{intl.formatMessage({ id: 'foot_company' })}</div>
                        <ul className=' mb-6 text-sm'>
                            <li><Link href={locale === "en" ? "/en/about" : "/about"}>{intl.formatMessage({ id: 'nav_six' })}</Link></li>
                        </ul>
                        <Image src="/image/footer/foot-ewm.png" width={140} height={140} alt='WeTech-phone' />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;