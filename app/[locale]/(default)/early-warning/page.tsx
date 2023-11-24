import React from 'react'
import PageTop from '@/app/components/ui/page-top'
import Image from 'next/image';

const desc = (
    <>
        实时获取拒付信息并快速做出响应及处理，<br />有效降低商户拒付率减少财务损失，避免进入卡组监控异常名单
    </>
);


const EarlyWarning = () => {
    return (
        <div>
            {/* 顶部 */}
            <PageTop bgImg='/image/early-warning/top-bg.png' title='争议预警于解决' desc={desc} />
            {/* 两个幻灯片 */}
            <div className='w-full h-[43.375rem] bg-[url("/image/early-warning/swiper-bg.png")] bg-center bg-no-repeat bg-cover'>

            </div>
            {/* RDR和CDRN拒付解决服务能够做 */}
            <div className='w-full min-h-[28.5rem] bg-[#F4F7FF]'>
                <div className='max-w-[78.75rem] mx-auto'>
                    <div className=' text-[1.75rem] text-[#316FE7] text-center pt-[2.625rem] font-extrabold'>RDR和CDRN拒付解决服务能够做什么？</div>
                    <div className='flex items-center flex-1'>
                        <ul className='text-[0.9375rem] text-[rgba(0,0,0,0.85)] flex flex-col gap-y-1 py-4'>
                            <li>
                                <p>1.解决因商户本身行为等造成的拒付率过高的问题；</p>
                            </li>
                            <li>
                                <p>2.快速解决争议： </p>
                                <p>可以自动解决拒付，自动退款，无需商户人工操作；</p>
                            </li>
                            <li>
                                <p>3.保障持卡人争议解决时效：</p>
                                <p>通过商户在72小时内发起交易退款解决拒付，减少人力成本，还能提高用户体验感；</p>
                            </li>
                            <li>
                                <p>4.降低风险：</p>
                                <p>减少与争议管理相关的运营需求和成本，同时避免高风险监控计划的限制</p>
                            </li>
                            <li>
                                <p>5.改善体验：</p>
                                <p>通过自动退款，快速解决争议，提升客户体验并提高忠诚度</p>
                            </li>
                            <li>
                                <p>6.避免争议监控程序： </p>
                                <p>通过及时的解决手段避免待处理拒付的堆积从而保护商家的账户，最重要的是不计入拒付率！</p>
                            </li>
                        </ul>
                        <div className=' relative w-[41.69rem] h-[19.875rem] flex-shrink-0'>
                            <Image src="/image/early-warning/lc.png" fill={true} alt="RDR和CDRN拒付解决服务" />
                        </div>
                    </div>
                </div>
            </div>
            {/* 我们的优点 */}
            <div className='w-full min-h-[42.25rem]'>
                <div className='max-w-[67.56rem] mx-auto'>
                    <div className='text-[#316FE7] text-2xl text-center font-bold pt-12 mb-10'>我们的优点</div>
                    <div className=' text-sm text-[#333] w-full flex flex-wrap justify-center items-center gap-x-40'>
                        <div className='flex flex-col items-center'>
                            <div className=' relative w-[11.125rem] h-[11.125rem]'>
                                <Image src="/image/advantage-icons/advantage1.png" fill={true} alt="避免争议以及拒付产生的高昂费用" />
                            </div>
                            <span>避免争议以及拒付产生的高昂费用</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <div className=' relative w-[13.3125rem] h-[13.3125rem]'>
                                <Image src="/image/advantage-icons/advantage4.png" fill={true} alt="覆盖全卡组" />
                            </div>
                            <span>覆盖全卡组</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <div className=' relative w-[13.3125rem] h-[13.3125rem]'>
                                <Image src="/image/advantage-icons/advantage3.png" fill={true} alt="减少争议和退款处理人工成本" />
                            </div>
                            <span>减少争议和退款处理人工成本</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <div className=' relative w-[13.4375rem] h-[13.4375rem]'>
                                <Image src="/image/advantage-icons/advantage2.png" fill={true} alt="自动决策、自动退款，减少运营操作" />
                            </div>
                            <span>自动决策、自动退款，减少运营操作</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <div className=' relative w-[14.0625rem] h-[9.8125rem]'>
                                <Image src="/image/advantage-icons/advantage8.png" fill={true} alt="降低拒付率，不计入考核" />
                            </div>
                            <span>降低拒付率，不计入考核</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default EarlyWarning