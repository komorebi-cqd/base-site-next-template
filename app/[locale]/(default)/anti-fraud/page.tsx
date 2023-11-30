import React from 'react'
import Image from 'next/image';
import PageTop from '@/app/components/ui/page-top';
import AdvantageItem from '@/app/components/ui/advantage-item';

const desc = (
    <>
        具备上百个自定义AI特征，拥有一支由上百名名专家组成团队，专门从事风控业务的持续挖掘和优化，<br />确保信用卡反欺诈持续在业界的优势，最大程度的采用自动化决策功能，简化审核流程，降低欺诈率，<br />最大限度减少拒付，保障你的营收和品牌。
    </>
);


const AntiFraud = () => {
    return (
        <div>
            {/* 顶部 */}
            <PageTop bgImg='/image/anti-fraud/top-bg.png' title='WeTech专注于出海支付风控服务' desc={desc} topText='产品->信用反欺诈' />
            {/* 传统对比wetech */}
            <div className='w-full bg-gradient-to-b  from-[#F4F7FF] via-[rgba(224,238,255,0)] to-white py-24'>
                <div className='flex flex-col justify-center max-w-[80rem] mx-auto'>
                    <div className=' px-4 lg:px-0 flex justify-between flex-col md:flex-row items-center mx-auto w-full'>
                        <div className='flex-1'>
                            <div className='sub-title text-left'>传统风控</div>
                            <div className=' text-base text-[#171717] mt-5'>
                                传统风控采用人工结合简单规则进行判定，<br />不仅成本高，效率低，还受人为因素邮箱，导致判定结果不理想
                            </div>
                        </div>
                        <div className=' relative'>
                            <Image src="/image/anti-fraud/traditional-risk-control.png" width={448} height={212} sizes="448px"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                }} alt='traditional-risk-control' />
                        </div>
                    </div>
                    <div className=' relative w-[2.38rem] h-[5.625rem] mx-auto my-3'>
                        <Image src="/image/anti-fraud/multiple-arrow.png" alt='multiple-arrow' fill={true} />
                    </div>
                    <div className='px-4 lg:px-0 flex justify-between items-center flex-col md:flex-row gap-6 md:gap-0'>
                        <div className=' relative'>
                            <Image src="/image/anti-fraud/wetech-risk-control.png" width={670} height={184} sizes="448px"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                }} alt='wetech-risk-control' />
                        </div>
                        <div className='max-w-[28rem]'>
                            <div className='sub-title text-left'>WeTech风控</div>
                            <div className=' text-base text-[#171717] mt-5'>
                                WeTech信用卡反欺诈，是以人工智能算法为核心，依托实时计算、决策引擎。知识图谱、终端态势感知等技术，并基于对客户业务场景和需求的深度了解，为客户的出海业务保驾护航
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 信用卡反欺诈核心价值 */}
            <div className='w-full pt-[1.75rem] pb-[10rem] earth-bg2'>
                <div className='mx-auto max-w-[73.25rem] px-5'>
                    <div>
                        <div className='sub-title pt-12 mb-28'>信用卡反欺诈核心价值</div>
                        <div className='flex flex-col md:flex-row justify-center items-center px-12 gap-x-[5.875rem] gap-y-[6.25rem] md:gap-0'>
                            <AdvantageItem title='降低欺诈率' desc={(<>精准、实时地做出欺诈风险决策，<br />识别风险用户，拒绝欺诈订单，降低欺诈率</>)} absImg={<div className=' absolute left-1/2 -translate-y-1/2 -translate-x-1/2 w-[15rem] h-[15rem]'>
                                <Image src="/image/advantage-icons/advantage1.png" alt='advantage1' fill={true} />
                            </div>} />
                            <AdvantageItem title='提高订单通过率及营收' desc={(<>精准、实时地做出欺诈风险决策，<br />提高优质用户的订单通过率，增加加营收</>)} absImg={<div className=' absolute left-1/2 -translate-y-1/2 -translate-x-1/2 w-[15rem] h-[15rem]'>
                                <Image src="/image/advantage-icons/advantage4.png" alt='advantage2' fill={true} />
                            </div>} />
                            <AdvantageItem title='消除拒付成本' desc={(<>主动阻止成本，<br />防止拒付和其他成本而影响到你的利润</>)} absImg={<div className=' absolute left-1/2 -translate-y-1/2 -translate-x-1/2 w-[15rem] h-[15rem]'>
                                <Image src="/image/advantage-icons/advantage3.png" alt='advantage3' fill={true} />
                            </div>} />

                        </div>
                    </div>
                    <div className='w-full h-[1px] bg-[rgba(0,0,0,0.25)] mt-10'></div>
                    <div className='w-full'>
                        <div className='sub-title mt-10 md:mb-[4.88rem]'>WeTech专注于出海支付风控服务</div>
                        <div className='flex flex-col md:flex-row justify-between items-center text-[#333] text-base'>
                            <div className='mt-10 mb-6 md:m-0'>具备上百个自定义AI特征，<br />拥有一支由上百名名专家组成的团队，专门从事风控业务的持续挖掘和优化<br />确保信用卡反欺诈持续在业界的优势，最大程度的采用自动化决策功能，简<br />化审核，降低欺诈率，最大限度减少拒付，保障你的营收和品牌。</div>
                            <div className=' relative'>
                                <Image src="/image/anti-fraud/intent-anti-fraud.png" width={468} height={100} sizes="468px"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                    }} alt='intent-anti-fraud' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* AI智能模型，成长型数据模型 */}
            <div className='w-full pt-[48px] pb-[50px] bg-slate-500 bg-[url("/image/anti-fraud/model-bg.png")] bg-center bg-no-repeat bg-cover'>
                <div className=' font-bold text-2xl pb-11 text-center text-[#FFFFFF]'>AI智能模型，成长型数据模型</div>
                <div className='flex flex-col md:flex-row justify-between items-center max-w-[85rem] mx-auto'>
                    <div className=' relative '>
                        <Image src="/image/anti-fraud/ai-model1.png" alt='ai-model1' width={347} height={294} sizes="347px"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }} />
                    </div>
                    <div className=' relative rotate-90 md:rotate-0 my-10 md:m-0'>
                        <Image src="/image/anti-fraud/arrow.png" alt='arrow' width={114} height={47} sizes="114px"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }} />
                    </div>
                    <div className=' relative'>
                        <Image src="/image/anti-fraud/ai-model2.png" alt='ai-model2'  width={514} height={210} sizes="514px"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }} />
                    </div>
                    <div className=' relative rotate-90 md:rotate-0  my-10 md:m-0'>
                        <Image src="/image/anti-fraud/arrow.png" alt='arrow' width={114} height={47} sizes="114px"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }} />
                    </div>
                    <div className='flex flex-row md:flex-col gap-x-6 md:gap-0 text-base'>
                        <div className=' mb-24 w-[8.5rem] h-11 leading-10 bg-white border border-[#1989FA] rounded text-center text-[#1989FA]'>YES/<span className='text-[#FA1919]'>NO</span></div>
                        <div className='w-[8.5rem] h-11 leading-10 bg-white border border-[#1989FA] rounded text-center text-[#1989FA]'>Score评分</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AntiFraud;