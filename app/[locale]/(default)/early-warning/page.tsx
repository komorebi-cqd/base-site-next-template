import React from 'react'
import Image from 'next/image';
import PageTop from '@/app/components/ui/page-top'
import EarlyWarningSwiper from '@/app/components/ui/early-warning-swiper';
import getIntl from "../../intl";






const EarlyWarning = async ({ params: { locale } }: { params: { locale: string } }) => {
    const intl = await getIntl(locale);

    const warnList = [
        {
            src: "/image/advantage-icons/yj1.png",
            title: intl.formatMessage({ id: 'ew_jf_sx_one_t' }),
            desc: intl.formatMessage({ id: 'ew_jf_sx_one_desc' })
        },
        {
            src: "/image/advantage-icons/yj2.png",
            title: intl.formatMessage({ id: 'ew_jf_sx_two_t' }),
            desc: intl.formatMessage({ id: 'ew_jf_sx_two_desc' })
        },
        {
            src: "/image/advantage-icons/yj3.png",
            title: intl.formatMessage({ id: 'ew_jf_sx_three_t' }),
            desc: intl.formatMessage({ id: 'ew_jf_sx_three_desc' })
        },
        {
            src: "/image/advantage-icons/yj4.png",
            title: intl.formatMessage({ id: 'ew_jf_sx_four_t' }),
            desc: intl.formatMessage({ id: 'ew_jf_sx_four_desc' })
        },
        {
            src: "/image/advantage-icons/yj5.png",
            title: intl.formatMessage({ id: 'ew_jf_sx_five_t' }),
            desc: intl.formatMessage({ id: 'ew_jf_sx_five_desc' })
        },
        {
            src: "/image/advantage-icons/yj6.png",
            title: intl.formatMessage({ id: 'ew_jf_sx_six_t' }),
            desc: intl.formatMessage({ id: 'ew_jf_sx_six_desc' })
        },
    ]
    const desc = (
        <div className={`mx-auto ${locale === "en" ? "max-w-[850px]" : "max-w-[450px]"}`}>{intl.formatMessage({ id: 'early_warning_desc' })}</div>
    )
    return (
        <div>
            {/* 顶部大图 */}
            <div className="w-full  bg-[#020F15] max-h-[var(--top-h)] h-[var(--top-h)]">
                <div className="max-w-[1440px] mx-auto h-full bg-[url('/image/early-warning/top-bg.png')] bg-contain bg-right-bottom bg-no-repeat  px-6 xl:px-0">
                    <div className="flex flex-col text-white h-full max-w-[1200px] mx-auto pt-48 ">
                        <h3 className=" text-[58px] font-bold">争议预警与解决</h3>
                        <div className="flex flex-col text-[32px] mt-4 mb-6">
                            <span>实时获取拒付信息、快速响应 </span>
                            <span>有效降低商户拒付率</span>
                        </div>
                        <a href="#" className="w-[206px] h-[56px] bg-white rounded leading-[56px] text-primary text-center text-xl font-semibold">立即体验</a>
                    </div>
                </div>
            </div>
            {/* 幻灯片 */}
            <div className='w-full pt-16 pb-32 bg-white '>
                <EarlyWarningSwiper />
            </div>
            {/* 拒付流程 */}
            <div className=' bg-[rgba(199,218,255,0.1)] w-full pt-[72px] pb-12'>
                <div className='w-1200 flex justify-stretch items-stretch gap-x-14 flex-col md:flex-row px-5 md:px-0'>
                    <div className=' bg-white shadow-[-15px_15px_50px_15px_rgba(0,0,0,0.05)] rounded-[10px] pt-16 pb-14 md:pb-28 flex-1 box-border '>
                        <ul className=' relative flex flex-col gap-y-[76px] px-12 pb-12 text-[rgba(51,51,51,0.95)] text-sm before:block before:absolute before:h-full before:w-[1px] before:bg-primary before:left-[63px] before:top-0 before:-bottom-6'>
                            <li className=' pl-11 before:content-["1"] list-style-n'>顾客向发卡行针对交易发起拒付</li>
                            <li className=' pl-11 before:content-["2"] list-style-n'>拒付会推送至RESOLVE</li>
                            <li className=' pl-11 before:content-["3"] list-style-n'>
                                <div>
                                    <span className=' font-semibold'>CDRN拒付：</span>
                                    <p>支持商家直接解决（CDRN）方案的发卡会暂停拒付</p>
                                </div>
                                <div>
                                    <span className=' font-semibold'>Visa RDR 拒付：</span>
                                    <p>支持RDR的发卡行会通过决策引擎，自动处理拒付</p>
                                </div>
                            </li>
                            <li className=' pl-11 before:content-["4"] list-style-n'>成功避免拒付</li>
                        </ul>
                    </div>
                    <div className=' relative w-full h-96 md:h-auto flex-auto md:flex-1'>
                        <Image src="/image/early-warning/jylc.png" objectFit='contain' fill alt="" />
                    </div>
                </div>
            </div>

            <div className="w-full min-h-[505px] bg-[url('/image/early-warning/ys-bg.png')] bg-cover bg-no-repeat pt-16 pb-28 text-[#333333]">
                <div className='  text-[38px] font-semibold text-center pb-10 lg:pb-20'>我们的优势</div>
                <div className='w-1200'>
                    <ul className='flex items-center justify-between text-sm px-8 xl:px-0 flex-wrap lg:flex-nowrap gap-y-5'>
                        <li className=' w-[155px] flex flex-col items-center lg:gap-y-5 flex-[100%] md:flex-[50%] lg:flex-1'>
                            <div className=' relative w-full h-[155px]'>
                                <Image src="/image/early-warning/ys1.png" objectFit='contain' fill alt="" />
                            </div>
                            <p className=' text-center whitespace-nowrap'>避免争议以及拒付产生的高昂费用</p>
                        </li>
                        <li className=' w-[155px] flex flex-col items-center lg:gap-y-5 flex-[100%] md:flex-[50%] lg:flex-1'>
                            <div className=' relative w-full h-[155px]'>
                                <Image src="/image/early-warning/ys2.png" objectFit='contain' fill alt="" />
                            </div>
                            <p className=' text-center whitespace-nowrap'>自动决策、自动退款，减少运营操作</p>
                        </li>
                        <li className=' w-[155px] flex flex-col items-center lg:gap-y-5 flex-[100%] md:flex-[50%] lg:flex-1'>
                            <div className=' relative w-full h-[155px]'>
                                <Image src="/image/early-warning/ys3.png" objectFit='contain' fill alt="" />
                            </div>
                            <p className=' text-center whitespace-nowrap'>减少争议和退款处理人工成本</p>
                        </li>
                        <li className=' w-[155px] flex flex-col items-center lg:gap-y-5 flex-[100%] md:flex-[50%] lg:flex-1'>
                            <div className=' relative w-full h-[155px]'>
                                <Image src="/image/early-warning/ys4.png" objectFit='contain' fill alt="" />
                            </div>
                            <p className=' text-center whitespace-nowrap'>降低拒付率，不计入考核</p>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Ethoca争议预警与解决 */}
            <div className='w-full min-h-[515px] bg-gradient-to-b from-[rgba(220,232,255,0.65)] to-[rgba(220,232,255,0)] text-[#333] pt-16'>
                <h3 className=' text-3xl text-[38px] text-center font-semibold mb-9'>Ethoca争议预警与解决</h3>
                <div className='w-1200 flex justify-between items-center relative'>
                    <div className=' z-10 rounded-2xl shadow-[0px_8px_16px_0px_rgba(0,0,0,0.1)] flex bg-[#EFF5FF] w-[580px] min-h-[270px] relative pt-[70px] pb-10 pl-8 pr-[50px]'>
                        <div className=' relative w-full h-auto'>
                            <Image src="/image/early-warning/zyyjj.png" fill alt='' className=' object-contain' />
                        </div>
                    </div>
                    <div className='z-10 w-[350px] min-h-[300px] rounded-2xl bg-white shadow-[0px_8px_4px_0px_rgba(0,0,0,0.05)] pt-6 pr-3 pb-8 pl-6 text-sm'>
                        <h3 className=' text-2xl'>Ethoca拒付预警服务</h3>
                        <p className=' text-sm mb-7 mt-1'>通过分层防御来实现</p>
                        <div className='w-full min-h-[72px] bg-[rgba(233,233,233,0.49)] rounded-[5px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.08)] text-[rgba(51,51,51,0.9)] py-[6px] px-2 leading-5 mb-5'>
                            <p className=' font-normal'>预警：</p>
                            <p>通过实时向持卡人和发卡机构提供详细的商户订单和购买历史信息，阻止善意欺诈</p>
                        </div>
                        <div className='w-full min-h-[72px] bg-[rgba(233,233,233,0.49)] rounded-[5px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.08)] text-[rgba(51,51,51,0.9)] py-[6px] px-2 leading-5'>
                            <p className=' font-normal'>消除：</p>
                            <p>通过向商家提供欺诈和纠纷的预警，打击欺诈和退款</p>
                        </div>
                    </div>
                    <div style={{background: "linear-gradient(90deg, rgba(204,221,255,0.21) 0%, #FFFFFF 100%)"}} className=' absolute top-1/4 left-[48%] w-[287px] h-[155px] overflow-hidden before:block before:absolute before:bg-[#f3f7ff] before:left-0 before:right-0 before:-top-2 before:h-[64px] before:rounded-[0_0_50%_50%] after:bg-[#f8fbff] after:absolute after:left-0 after:right-0 after:-bottom-5 after:h-[80px] after:rounded-[50%_50%_0_0] after:shadow-[4px_0px_0px_4px_rgba(0,0,0,0.1)]'></div>
                </div>
            </div>
            {/* 我们的优势2 */}
            <div className=' bg-[#F3F5F9] w-full pb-14 pt-[60px] lg:pb-[134px]'>
                <h3 className='text-3xl text-[38px] text-center font-semibold mb-10'>我们的优势</h3>
                <ul className='w-1200 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 px-5 lg:px-0'>
                    <li className='h-[327px] w-full bg-white rounded-[10px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] flex flex-col items-center py-6'>
                        <div className=' relative w-[155px] h-[155px]'>
                            <Image src="/image/early-warning/adv-1.png" objectFit='contain' fill alt="" />
                        </div>
                        <h3 className=' text-primary text-2xl mt-5 mb-4'>反欺诈</h3>
                        <p className=' text-[#000000] text-sm'>采取行动阻止欺诈性订单的履行</p>
                    </li>
                    <li className='h-[327px] w-full bg-white rounded-[10px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] flex flex-col items-center py-6'>
                        <div className=' relative w-[155px] h-[155px]'>
                            <Image src="/image/early-warning/adv-2.png" objectFit='contain' fill alt="" />
                        </div>
                        <h3 className=' text-primary text-2xl mt-5 mb-4'>停止拒付</h3>
                        <p className=' text-[#000000] text-sm'>消除更多拒付并降低相关成本</p>
                    </li>
                    <li className='h-[327px] w-full bg-white rounded-[10px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] flex flex-col items-center py-6'>
                        <div className=' relative w-[155px] h-[155px]'>
                            <Image src="/image/early-warning/adv-3.png" objectFit='contain' fill alt="" />
                        </div>
                        <h3 className=' text-primary text-2xl mt-5 mb-4'>减少未来的欺诈</h3>
                        <p className=' text-[#000000] text-sm max-w-[224px] text-center'>加强欺诈筛意，以识别未来欺诈行为并防止出现高峰</p>
                    </li>
                    <li className='h-[327px] w-full bg-white rounded-[10px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] flex flex-col items-center py-6'>
                        <div className=' relative w-[155px] h-[155px]'>
                            <Image src="/image/early-warning/adv-4.png" objectFit='contain' fill alt="" />
                        </div>
                        <h3 className=' text-primary text-2xl mt-5 mb-4'>查找相关欺诈</h3>
                        <p className=' text-[#000000] text-sm'>使用链接分析来消除相关欺诈订单</p>
                    </li>
                    <li className='h-[327px] w-full bg-white rounded-[10px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] flex flex-col items-center py-6'>
                        <div className=' relative w-[155px] h-[155px]'>
                            <Image src="/image/early-warning/adv-5.png" objectFit='contain' fill alt="" />
                        </div>
                        <h3 className=' text-primary text-2xl mt-5 mb-4'>增加接受度</h3>
                        <p className=' text-[#000000] text-sm'>发放更多退款可提高接受度并改善客户体验</p>
                    </li>
                    <li className='h-[327px] w-full bg-white rounded-[10px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] flex flex-col items-center py-6'>
                        <div className=' relative w-[155px] h-[155px]'>
                            <Image src="/image/early-warning/adv-6.png" objectFit='contain' fill alt="" />
                        </div>
                        <h3 className=' text-primary text-2xl mt-5 mb-4'>提高满意度</h3>
                        <p className=' text-[#000000] text-sm'>发放更多退款可提高接受度并改善客户体验</p>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default EarlyWarning