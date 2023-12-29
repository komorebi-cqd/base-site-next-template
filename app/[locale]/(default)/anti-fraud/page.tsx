import React from 'react'
import Image from 'next/image';
import PageTop from '@/app/components/ui/page-top';
import AdvantageItem from '@/app/components/ui/advantage-item';
import getIntl from "../../intl";



const AntiFraud = async ({ params: { locale } }: { params: { locale: string } }) => {
    const intl = await getIntl(locale);
    const desc = (
        <div className={`mx-auto ${locale === "en" ? "max-w-[764px]" : "max-w-[720px]"}`}>{intl.formatMessage({ id: 'anti_fraud_desc' })}</div>
    );
    return (
        <div>
            {/* 顶部大图 */}
            <div className="w-full  bg-[#161616] max-h-[var(--top-h)] h-[var(--top-h)]">
                <div className="max-w-[1440px] mx-auto h-full bg-[url('/image/anti-fraud/anti-fraud-top-bg.png')] bg-contain bg-right-bottom bg-no-repeat  px-6 xl:px-0">
                    <div className="flex flex-col text-white h-full max-w-[1200px] mx-auto pt-48 ">
                        <h3 className=" text-[58px] font-bold">预防欺诈，增加收益</h3>
                        <div className="flex flex-col text-[32px] mt-4 mb-6">
                            <span>WeTech风险管理平台通过交易前后信息</span>
                            <span>为商户提供完善的自动化风控决策</span>
                        </div>
                        <a href="#" className="w-[206px] h-[56px] bg-white rounded leading-[56px] text-primary text-center text-xl font-semibold">立即体验</a>
                    </div>
                </div>
            </div>
            {/* 传统对比wetech */}
            <div className='w-full px-4 py-6 bg-[#F3F5F9]'>
                <div className='max-w-[1200px] mx-auto  flex flex-col items-center gap-y-7 text-sm text-[#171717]'>
                    <div className='w-full min-h-[300px] bg-white flex p-6 gap-x-12'>
                        <ul className='flex-1 leading-6'>
                            <h3 className=' text-primary text-2xl mb-4 mt-10 font-semibold'>传统风控</h3>
                            <li>· 传统风控采用人工结合简单规则进行判定</li>
                            <li>· 成本高，效率低，受人为因素影响，导致判定结果不理想</li>
                        </ul>
                        <div className=' relative flex-shrink-0 w-[692px] h-[248px]'>
                            <Image objectFit='contain' src={locale === "en" ? "/image/anti-fraud/ct-fk-en.png" : "/image/anti-fraud/ct-fk.png"} alt='advantage1' fill={true} />
                        </div>
                    </div>
                    <div className='w-full min-h-[300px] bg-white flex p-6 gap-x-12 flex-row-reverse'>
                        <ul className='flex-1 leading-6'>
                            <h3 className=' text-primary text-2xl mb-4 mt-10 font-semibold'>WeTech支付风控产品</h3>
                            <li>· WeTech信用卡反欺诈，是以人工智能算法为核心</li>
                            <li>· 依托实时计算、决策引擎、知识图谱、终端态势感知等技术</li>
                            <li>· 并基于对客户业务场景和需求的深度了解，为客户的出海业 务保驾护航</li>
                        </ul>
                        <div className=' relative flex-shrink-0 w-[692px] h-[248px]'>
                            <Image objectFit='contain' src={locale === "en" ? "/image/anti-fraud/wc-fk-en.png" : "/image/anti-fraud/wc-fk.png"} alt='advantage1' fill={true} />
                        </div>
                    </div>
                </div>
            </div>
            {/* WeTech专注于出海支付风控服务 */}
            <div className='w-full bg-white pt-16 pb-12'>
                <h3 className='text-center text-[#333] font-semibold text-3xl lg:text-[38px] '>WeTech专注于出海支付风控服务</h3>
                <div className='w-1200 min-w-[1300px] flex justify-center items-center gap-5'>
                    <ul className=' text-base text-[#333333] leading-7'>
                        <li>· 具备上百个自定义AI特征，拥有一支由上百名名专家组成的团队</li>
                        <li>· 专门从事风控业务的持续挖掘和优化确保信用卡反欺诈持续在业界的优势</li>
                        <li>· 最大程度的采用自动化决策功能</li>
                    </ul>
                    <div className=' relative '>
                        <Image src={locale === "en" ? "/image/anti-fraud/wczzhwfk-en.png" : "/image/anti-fraud/wczzhwfk.png"} alt='ai-model1' width={724} height={363} sizes="724px"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }} />
                    </div>
                </div>
            </div>

            {/* AI智能模型，成长型数据模型 */}
            <div className='w-full pt-12 pb-16 bg-[#071532]'>
                <div className=' font-bold text-3xl lg:text-[38px] mb-16 text-center text-[#FFFFFF]'>{intl.formatMessage({ id: 'af_al_model_t' })}</div>
                <div className='flex flex-col md:flex-row justify-between items-center max-w-[85rem] mx-auto'>
                    <div className=' relative '>
                        <Image src={locale === "en" ? "/image/anti-fraud/ai-model1-en.png" : "/image/anti-fraud/ai-model1.png"} alt='ai-model1' width={347} height={294} sizes="347px"
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
                        <Image src={locale === "en" ? "/image/anti-fraud/ai-model2-en.png" : "/image/anti-fraud/ai-model2.png"} alt='ai-model2' width={485} height={332} sizes="485px"
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
                    <div className='flex flex-row md:flex-col gap-y-11 gap-x-6 text-base  leading-10 text-[#1989FA] text-center'>
                        <div className='w-[8.5rem] h-11 bg-white border border-[#1989FA] rounded'>YES/<span className='text-[#FA1919]'>NO</span></div>
                        <div className='w-[8.5rem] h-11 bg-white border border-[#1989FA] rounded'>{locale === "en" ? "Score" : "Score评分"}</div>
                        <div className='w-[8.5rem] h-11 bg-white border border-[#1989FA] rounded'>Others</div>
                    </div>
                </div>
            </div>

            {/* 我们的优势 */}
            <div className='w-full bg-[#F3F5F9] pt-14 pb-16'>
                <div className=' text-[#333] text-center text-3xl lg:text-[38px] font-semibold mb-10'>我们的优势</div>
                <div className='w-1200 grid grid-cols-3 gap-x-6 text-sm text-[#000000]'>
                    <div className='w-full bg-white h-[327px] flex flex-col items-center pt-4 rounded-[10px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)]'>
                        <div className=' relative'>
                            <Image src="/image/anti-fraud/ys1.png" alt='arrow' width={155} height={155} sizes="155px"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                }} />
                        </div>
                        <h3 className='mt-2 mb-4 text-primary text-2xl font-semibold'>降低欺诈率</h3>
                        <div className=' max-w-[210px] leading-6 text-center'>精准、实时地做出欺诈风险决策， 识别风险用户，拒绝欺诈订单， 降低欺诈率</div>
                    </div>
                    <div className='w-full bg-white h-[327px] flex flex-col items-center pt-4 rounded-[10px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)]'>
                        <div className=' relative'>
                            <Image src="/image/anti-fraud/ys2.png" alt='arrow' width={155} height={155} sizes="155px"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                }} />
                        </div>
                        <h3 className='mt-2 mb-4 text-primary text-2xl font-semibold'>提高订单通过率及营收</h3>
                        <div className=' max-w-[210px] leading-6 text-center'>精准、实时地做出欺诈风险决策， 提高优质用户的订单通过率， 增加加营收</div>
                    </div>
                    <div className='w-full bg-white h-[327px] flex flex-col items-center pt-4 rounded-[10px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)]'>
                        <div className=' relative'>
                            <Image src="/image/anti-fraud/ys3.png" alt='arrow' width={155} height={155} sizes="155px"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                }} />
                        </div>
                        <h3 className='mt-2 mb-4 text-primary text-2xl font-semibold'>消除拒付成本</h3>
                        <div className=' max-w-[210px] leading-6 text-center'>主动阻止欺诈行为， 防止拒付和其他成本而影响 到你的利润</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AntiFraud;