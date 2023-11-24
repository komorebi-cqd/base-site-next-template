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
            <PageTop bgImg='/image/anti-fraud/top-bg.png' title='WeTech专注于出海支付风控服务' desc={desc} />
            {/* 传统对比wetech */}
            <div className='w-full h-[48.38rem] bg-gradient-to-b  from-[#F4F7FF] via-[rgba(224,238,255,0)] to-white py-24'>
                <div className='flex flex-col justify-center max-w-[80rem] mx-auto'>
                    <div className='flex justify-between items-center max-w-[77.315rem] mx-auto w-full'>
                        <div className='flex-1'>
                            <div className='text-[#316FE7] text-[1.75rem] font-extrabold'>传统风控</div>
                            <div className=' text-base text-[#171717] mt-3'>
                                传统风控采用人工结合简单规则进行判定，<br />不仅成本高，效率低，还受人为因素邮箱，导致判定结果不理想
                            </div>
                        </div>
                        <div className=' relative w-[27.725rem] h-[13.325rem]'>
                            <Image src="/image/anti-fraud/traditional-risk-control.png" alt='traditional-risk-control' fill={true} />
                        </div>
                    </div>
                    <div className=' relative w-[2.38rem] h-[5.625rem] mx-auto my-3'>
                        <Image src="/image/anti-fraud/multiple-arrow.png" alt='multiple-arrow' fill={true} />
                    </div>
                    <div className='flex justify-between items-center '>
                        <div className=' relative w-[41.9rem] h-[11.5rem]'>
                            <Image src="/image/anti-fraud/wetech-risk-control.png" alt='wetech-risk-control' fill={true} />
                        </div>
                        <div>
                            <div className='text-[#316FE7] text-[1.75rem] font-extrabold'>WeTech风控</div>
                            <div className=' text-base text-[#171717] mt-3'>
                                WeTech信用卡反欺诈，是以人工智能算法为核心，<br />依托实时计算、决策引擎。知识图谱、终端态势感知等技术，<br />并基于对客户业务场景和需求的深度了解，为客户的出海业务保驾护航
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 信用卡反欺诈核心价值 */}
            <div className='w-full h-[57.83rem] earth-bg2'>
                <div className='w-[73.325rem] mx-auto'>
                    <div>
                        <div className='text-center text-4xl text-[#316FE7] pt-12 mb-28'>信用卡反欺诈核心价值</div>
                        <div className='flex justify-between items-center px-12'>
                            <AdvantageItem title='降低欺诈率' desc={(<>精准、实时地做出欺诈风险决策，<br />识别风险用户，拒绝欺诈订单，降低欺诈率</>)} absImg={<div className=' absolute left-1/2 -top-[5.75rem] -translate-x-1/2 w-[13.5rem] h-[13.5rem]'>
                                <Image src="/image/anti-fraud/anti-fraud-value1.png" alt='anti-fraud-value' fill={true} />
                            </div>} />
                            <AdvantageItem title='提高订单通过率及营收' desc={(<>精准、实时地做出欺诈风险决策，<br />提高优质用户的订单通过率，增加加营收</>)} absImg={<div className=' absolute left-1/2 -top-[5.75rem] -translate-x-1/2 w-[13.5rem] h-[13.5rem]'>
                                <Image src="/image/anti-fraud/anti-fraud-value2.png" alt='anti-fraud-value2' fill={true} />
                            </div>} />
                            <AdvantageItem title='消除拒付成本' desc={(<>主动阻止成本，<br />防止拒付和其他成本而影响到你的利润</>)} absImg={<div className=' absolute left-1/2 -top-[8rem] -translate-x-1/2 w-72 h-72'>
                                <Image src="/image/anti-fraud/anti-fraud-value3.png" alt='anti-fraud-value' fill={true} />
                            </div>} />

                        </div>
                    </div>
                    <div className='w-full h-[1px] bg-[rgba(0,0,0,0.25)] mt-10'></div>
                    <div className='w-full'>
                        <div className='text-[#316FE7] text-[1.75rem] text-center mt-10 mb-[4.88rem]'>WeTech专注于出海支付风控服务</div>
                        <div className='flex justify-between items-center text-[#333] text-base'>
                            <div>具备上百个自定义AI特征，<br />拥有一支由上百名名专家组成的团队，专门从事风控业务的持续挖掘和优化<br />确保信用卡反欺诈持续在业界的优势，最大程度的采用自动化决策功能，简<br />化审核，降低欺诈率，最大限度减少拒付，保障你的营收和品牌。</div>
                            <div className=' relative w-[29.25rem] h-[6.25rem]'>
                                <Image src="/image/anti-fraud/intent-anti-fraud.png" alt='intent-anti-fraud' fill={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* AI智能模型，成长型数据模型 */}
            <div className='w-full h-[31.75rem] bg-slate-500'>
                <div className=' font-bold text-2xl py-11 text-center text-[#FFFFFF]'>AI智能模型，成长型数据模型</div>
                <div className='flex justify-between items-center max-w-[85rem] mx-auto'>
                    <div className=' relative w-[21.725rem] h-[18.38rem]'>
                        <Image src="/image/anti-fraud/ai-model1.png" alt='ai-model1' fill={true} />
                    </div>
                    <div className=' relative w-28 h-12'>
                        <Image src="/image/anti-fraud/arrow.png" alt='arrow' fill={true} />
                    </div>
                    <div className=' relative w-[31.9rem] h-[20.75rem]'>
                        <Image src="/image/anti-fraud/ai-model2.png" alt='ai-model2' fill={true} />
                    </div>
                    <div className=' relative w-28 h-12'>
                        <Image src="/image/anti-fraud/arrow.png" alt='arrow' fill={true} />
                    </div>
                    <div className='flex flex-col text-base'>
                        <div className=' mb-24 w-[8.5rem] h-11 leading-10 bg-white border border-[#1989FA] rounded text-center text-[#1989FA]'>YES/<span className='text-[#FA1919]'>NO</span></div>
                        <div className='w-[8.5rem] h-11 leading-10 bg-white border border-[#1989FA] rounded text-center text-[#1989FA]'>Score评分</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AntiFraud;