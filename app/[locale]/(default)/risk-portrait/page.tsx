import React from 'react'
import Image from 'next/image';
import PageTop from '@/app/components/ui/page-top';
import AdvantageItem from '@/app/components/ui/advantage-item';

const desc = (
    <>
        WeTech风险画像，是基于多年沉淀的欺诈团队对抗经验、<br />终端安全技术和数据分析建模能力，可以为客户提供多维风险画像
    </>
)

const RiskPortait = () => {
    return (
        <div>
            {/* 顶部 */}
            <PageTop bgImg='/image/risk-portrait/top-bg.png' title='风险画像' desc={desc} topText='产品->风险画像' />
            {/* 优势 */}
            <div className='w-full h-[28.565rem] risk-advantage-img'>
                <div className=' max-w-[73.4rem] mx-auto'>
                    <div className=' sub-title pt-5 pb-4'>我们的优势</div>
                    <div className='flex justify-between items-center mt-24'>
                        <AdvantageItem title='多维度风险画像' desc={(<>基本AI智能算法，从多个维度进行风险画像，<br />具备全面性和性高准确性</>)} absImg={<div className=' absolute left-1/2 -translate-y-1/2 -translate-x-1/2 w-48 h-48'>
                            <Image src="/image/advantage-icons/yj1.png" alt='多维度风险画像' fill={true} />
                        </div>} />
                        <AdvantageItem title='全球采样数据库' desc={(<>丰富全球生态样能力，<br />高效的大数据分析和智能AI算法</>)} absImg={<div className=' absolute left-1/2 -translate-y-1/2 -translate-x-1/2 w-48 h-48'>
                            <Image src="/image/advantage-icons/yj2.png" alt='全球采样数据库' fill={true} />
                        </div>} />
                        <AdvantageItem title='定制化客户方案' desc={(<>专业定制服务团队，<br />便捷的接入流程和高效的响应机制</>)} absImg={<div className=' absolute left-1/2 -translate-y-1/2 -translate-x-1/2 w-48 h-48'>
                            <Image src="/image/advantage-icons/yj3.png" alt='定制化客户方案' fill={true} />
                        </div>} />
                    </div>
                </div>
            </div>
            <div className=' w-full h-[48.5rem] bg-gradient-to-b  from-[#E7F1FF] to-white'>
                <div className=' max-w-[78.75rem] mx-auto h-full flex flex-col'>
                    <div className='flex-1 flex justify-between items-center px-16'>
                        <div>
                            <div className='sub-title text-left'>大数据分析+AI智能算法</div>
                            <div className='text-[#333333] text-base font-bold mt-5 mb-2'>WeTech专注于出海支付风控服务</div>
                            <div className='text-[#333333] text-base'>我们的风险画像基于海量的海外数据采集，结果大数据分析和整理，依赖AI<br />智能胜算法深度学习和多轮持续模型优化，并能基于海外市场需求，我们从<br />多个维度提供风险画像，主要包含IP画像、手机号画像、邮箱画像和地址画<br />像，并提供综合风险策略，可有效的解决垃圾注册、刷单、撸羊毛、识别风 险行为等多个场景。</div>
                        </div>
                        <div className=' relative w-[23.63rem] h-[23.15rem]'>
                            <Image src="/image/risk-portrait/item1.png" alt='anti-fraud-value' fill={true} />
                        </div>
                    </div>
                    <div className='w-full h-[1px] bg-[rgba(0,0,0,0.15)]'></div>
                    <div className='flex-1 flex justify-between items-center px-16'>
                        <div className=' relative w-[20rem] h-[18.75rem]'>
                            <Image src="/image/risk-portrait/item2.png" alt='anti-fraud-value' fill={true} />
                        </div>
                        <div>
                            <div className='sub-title text-left'>我们的团队</div>
                            <div className='text-[#333333] text-base mt-5'>长期投入上百名风控专家，跟进海外风控动态，<br />挖掘新的风险，洞察新的对抗，持续的优化模型和算法；<br />专业的定制化团队，依照您的要求，制定落地方案，高效执行，快速响应。</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RiskPortait;