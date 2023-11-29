import React from 'react'
import Image from 'next/image';
import PageTop from '@/app/components/ui/page-top';
import AdvantageItem from '@/app/components/ui/advantage-item';

const desc = (
    <>
        基于多维度的设备，通过大数据分析、AI智能算法，为每一台移动设备计算生成唯一<br />的可信设备ID标识，在此基础上加上智能风控系统的使用，可有效对抗设备伪造，<br />机控，褥羊毛等恶意的行为，为您的安全防护保障。
    </>
)

const RiskIdentification = () => {
    return (
        <div>
            {/* 顶部 */}
            <PageTop bgImg='/image/risk-identification/top-bg.png' title='设备风险识别' desc={desc} topText='产品->设备风险识别' />
            {/* 优势 */}
            <div className='w-full h-[28.565rem] risk-advantage-img'>
                <div className=' max-w-[73.4rem] mx-auto'>
                    <div className=' sub-title pt-5 pb-4'>我们的优势</div>
                    <div className='flex justify-between items-center mt-24'>
                        <AdvantageItem title='模型准确率高，稳定可靠' desc={(<>动静态特征相结合，AI智能模型，<br />提高准确性，确保稳定性</>)} absImg={<div className=' absolute left-1/2 -translate-y-1/2 -translate-x-1/2 w-48 h-48'>
                            <Image src="/image/advantage-icons/yj1.png" alt='advantage1' fill={true} />
                        </div>} />
                        <AdvantageItem title='全平台、适配性好' desc={(<>动静态特征相结合，AI智能模型，高兼容，<br />有效对抗设备信息篡改</>)} absImg={<div className=' absolute left-1/2 -translate-y-1/2 -translate-x-1/2 w-48 h-48'>
                            <Image src="/image/advantage-icons/yj2.png" alt='advantage1' fill={true} />
                        </div>} />
                        <AdvantageItem title='多维度、反咋骗能力强' desc={(<>多维度设备信息、大数据分析、AI智能算法<br />和智能风控系统，有效对抗伪造，机控和撸羊毛</>)} absImg={<div className=' absolute left-1/2 -translate-y-1/2 -translate-x-1/2 w-48 h-48'>
                            <Image src="/image/advantage-icons/yj3.png" alt='advantage1' fill={true} />
                        </div>} />
                    </div>
                </div>
            </div>
            <div className=' w-full h-[48.5rem] bg-gradient-to-b  from-[#E7F1FF] to-white'>
                <div className=' max-w-[78.75rem] mx-auto h-full flex flex-col'>
                    <div className='flex-1 flex justify-between items-center px-20'>
                        <div>
                            <div className='sub-title text-left '>大数据分析+AI智能算法</div>
                            <div className='text-[#333333] text-base font-bold mt-5 mb-2'>WeTech专注于出海支付风控服务</div>
                            <div className='text-[#333333] text-base'>基于多维度的设备信息，通过大数据分析、<br />AI智能算法，为每一台移动设备计算生成唯一的可信设备ID标识，<br />在此基础上加上智能风控系统的使用，可有效对抗设备伪造，<br />机控，褥羊毛等恶意的行为，为您的出海加上安全防护保障。</div>
                        </div>
                        <div className=' relative w-[19.25rem] h-[16.9rem]'>
                            <Image src="/image/risk-identification/sf.png" alt='anti-fraud-value' fill={true} />
                        </div>
                    </div>
                    <div className='w-full h-[1px] bg-[rgba(0,0,0,0.15)]'></div>
                    <div className='flex-1 flex justify-between items-center px-20'>
                        <div className=' relative w-[17.25rem] h-[16.25rem]'>
                            <Image src="/image/risk-identification/dsj.png" alt='anti-fraud-value' fill={true} />
                        </div>
                        <div>
                            <div className='sub-title text-left'>大数据</div>
                            <div className='text-[#333333] text-base mt-5'>WeTech拥有上亿的移动设备生态，具有上百人的专业团队，<br />可支撑设备风险识别业务的后续持续优化和更新迭代，<br />具备海外设备变化的洞察先机，帮助业务提前感知潜在风险。</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RiskIdentification;