import React from 'react'
import Image from 'next/image';
import PageTop from '@/app/components/ui/page-top'
import EarlyWarningSwiper from '@/app/components/ui/early-warning-swiper';

const desc = (
    <>
        实时获取拒付信息并快速做出响应及处理，<br />有效降低商户拒付率减少财务损失，避免进入卡组监控异常名单
    </>
);


const EarlyWarning = () => {
    return (
        <div>
            {/* 顶部 */}
            <PageTop bgImg='/image/early-warning/top-bg.png' title='争议预警于解决' desc={desc} topText='产品->争议预警与解决'/>
            {/* 两个幻灯片 */}
            <div className='w-full h-[43.375rem] pt-20 bg-[url("/image/early-warning/swiper-bg.png")] bg-center bg-no-repeat bg-cover'>
                <EarlyWarningSwiper />
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
            <div className='w-full min-h-[42.25rem] bg-[url("/image/early-warning/advantage-bg.png")] bg-center bg-no-repeat bg-cover'>
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
            {/* Ethoca拒付预警服务 */}
            <div className='min-h-[22.5rem] h-[22.5rem] w-full bg-[#00206E]'>
                <div className=' max-w-[80.875rem] h-full mx-auto flex justify-between items-center'>
                    <div className='relative w-[35.5rem] h-[10.875rem] flex-shrink-0'>
                        <Image src="/image/early-warning/fw.png" fill={true} alt="Ethoca拒付预警服务" />
                    </div>
                    <div className=' text-white'>
                        <div className=' font-extrabold text-[1.75rem] mb-4 '>Ethoca拒付预警服务</div>
                        <ul className=' text-base flex flex-col gap-y-2'>
                            <li>通过分层防御来实现：</li>
                            <li>
                                <div>1.消除： </div>
                                <div className='indent-8'>通过实时向持卡人和发卡机构提供详细的商户订单和购买历史信息，阻止善意欺诈</div>
                            </li>
                            <li>
                                <div>2.预警：</div>
                                <div className='indent-8'>通过向商家提供欺诈和纠纷的预警，打击欺诈和退款</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* WeTech Ethoca拒付预警可以为您实现 */}
            <div className='w-full min-h-[45.25.rem] '>
                <div className='h-full pt-9 pb-16 w-[59.5rem] mx-auto'>
                    <div className=' w-full text-[#316FE7] text-2xl font-extrabold text-center mb-14'>WeTech Ethoca拒付预警可以为您实现</div>
                    <div className='w-full flex items-center justify-between flex-wrap gap-y-[3.875rem] gap-36'>
                        <div className='flex flex-col items-center w-[13.25rem]'>
                            <div className=' relative w-[11.125rem] h-[11.125rem]'>
                                <Image src="/image/advantage-icons/advantage1.png" fill={true} alt="Ethoca拒付预警服务" />
                            </div>
                            <div className=' text-[#316FE7] text-base my-2'>反欺诈</div>
                            <div className=' text-xs text-[#000] whitespace-nowrap'>采取行动阻止欺诈性订单的履行</div>
                        </div>
                        <div className='flex flex-col items-center w-[13.25rem]'>
                            <div className=' relative w-[14rem] h-[10rem]'>
                                <Image src="/image/advantage-icons/advantage8.png" fill={true} alt="Ethoca拒付预警服务" />
                            </div>
                            <div className=' text-[#316FE7] text-base my-2'>停止拒付</div>
                            <div className=' text-xs text-[#000] whitespace-nowrap'>消除更多拒付并降低相关成本</div>
                        </div>
                        <div className='flex flex-col items-center w-[13.25rem]'>
                            <div className=' relative w-[11rem] h-[10.75rem]'>
                                <Image src="/image/advantage-icons/advantage9.png" fill={true} alt="Ethoca拒付预警服务" />
                            </div>
                            <div className=' text-[#316FE7] text-base my-2'>减少未来的欺诈</div>
                            <div className=' text-xs text-[#000] whitespace-nowrap'>加强欺诈筛意，以识别未来欺诈行为并防止出现高峰</div>
                        </div>
                        <div className='flex flex-col items-center w-[13.25rem]'>
                            <div className=' relative w-[13.25rem] h-[11.125rem]'>
                                <Image src="/image/advantage-icons/advantage5.png" fill={true} alt="Ethoca拒付预警服务" />
                            </div>
                            <div className=' text-[#316FE7] text-base my-2'>查找相关欺诈</div>
                            <div className=' text-xs text-[#000] whitespace-nowrap'>使用链接分析来消除相关欺诈订单</div>
                        </div>
                        <div className='flex flex-col items-center w-[13.25rem]'>
                            <div className=' relative w-[12rem] h-[12rem]'>
                                <Image src="/image/advantage-icons/advantage6.png" fill={true} alt="Ethoca拒付预警服务" />
                            </div>
                            <div className=' text-[#316FE7] text-base my-2'>增加接受度</div>
                            <div className=' text-xs text-[#000] whitespace-nowrap'>发放更多退款可提高接受度并改善客户体验</div>
                        </div>
                        <div className='flex flex-col items-center w-[13.25rem]'>
                            <div className=' relative w-[10.75rem] h-[11.625rem]'>
                                <Image src="/image/advantage-icons/advantage7.png" fill={true} alt="Ethoca拒付预警服务" />
                            </div>
                            <div className=' text-[#316FE7] text-base my-2'>提高满意度</div>
                            <div className=' text-xs text-[#000] whitespace-nowrap'>客户不再需要经历漫长而令人沮丧的退款流程</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EarlyWarning