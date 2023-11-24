import ClientOnly from "@/app/components/ClientOnly";
import HomeRiskSwiper from "@/app/components/home/home-risk-swiper";
import HalfCirclePosition from "@/app/components/HalfCirclePosition";
import SixAdvantage from "@/app/components/home/six-advantage";
import Image from "next/image";

async function Home() {
    return (
        <main className=''>
            {/* 顶部大图 */}
            <div className='home-bg w-full h-[818px] relative pt-60  pl-44'>
                <div className='flex flex-col text-white'>
                    <div className=' w-6 h-[2px] bg-white' />
                    <div className=' text-6xl font-extrabold mt-11 mb-4'>多场景、大数据</div>
                    <div className=' text-3xl font-medium'>全智能金融科技服务商</div>
                    <div className=' cursor-pointer mt-12 border border-white w-[206px] h-[44px] rounded leading-[40px] text-center text-base'>立即体验</div>
                </div>
            </div>
            {/* AI支付风控，为跨境出海保驾护航 */}
            <div className='w-full h-[896px] relative'>
                <div className="absolute -top-32 inset-0 mx-auto w-[1273px] h-[530px] risk-ai-bg rounded-2xl text-[#333]">
                    {/* title */}
                    <div className="flex items-center justify-center gap-x-5 pt-12 mb-4">
                        <span className=" block w-[22px] h-[22px] rounded-full bg-gradient-to-bl from-white to-[#316FE7] "></span>
                        <span className="  text-[28px] font-semibold">AI支付风控，为跨境出海保驾护航</span>
                        <span className=" block w-[22px] h-[22px] rounded-full bg-gradient-to-bl from-white to-[#316FE7]"></span>
                    </div>
                    <div className="text-center">欺诈提醒--欺诈预防--争议解决--全链路--站式为商户提供专业，快速。易用成熟的支付风控产品</div>
                    <div className="text-center text-[28px] mt-4 mb-6 font-bold">全球欺诈仍在继续</div>
                    {/* 幻灯片 */}
                    <ClientOnly>
                        <HomeRiskSwiper />
                    </ClientOnly>
                </div>
                <div className="pt-[420px]">
                    <div className="max-w-[1337px] h-[476px] relative mx-auto overflow-hidden">
                        <ClientOnly>
                            <HalfCirclePosition />
                        </ClientOnly>
                    </div>
                </div>
            </div>
            {/* 全球最前沿和最全风控数据库 */}
            <ClientOnly>
                <SixAdvantage />
            </ClientOnly>
            {/* 强大技术及深度算法能力 */}
            <div className="w-full h-96 bg-[#F4F7FF] ">
                <div className="pt-6">
                    <div className="text-center text-[#316FE7] text-3xl">强大技术及深度算法能力</div>
                    <div className="max-w-[842px] mx-auto flex justify-between items-center">
                        <div className=" relative">
                            <Image src="/image/home/algorithm-img.png" width={300} height={300} alt="algorithm-img" />
                        </div>
                        <ul className=" flex-shrink-0 flex-grow-0 flex-[378px] text-[rgba(51,51,51,0.85)] font-medium">
                            <li className=" whitespace-normal mb-2 relative before:absolute before:top-3 before:-translate-y-1/2 before:-left-3 before:bg-[#316FE7] before:w-[5px] before:h-[5px] before:rounded-full">拥有全球最顶尖的技术团队及云服务能力</li>
                            <li className=" whitespace-normal relative before:absolute before:top-3 before:-translate-y-1/2 before:-left-3 before:bg-[#316FE7] before:w-[5px] before:h-[5px] before:rounded-full">基于多年沉淀的人工智能深度算法能力，实现对全球各国语言、产品、购买行为等深度分析，并建立标准模型</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* 反欺诈风控产品 */}
            <div className="w-full h-[404px] bg-white">
                <div className=" max-w-[1150px] mx-auto pt-[85px] pb-[60px] flex justify-between items-center">
                    <div className="max-w-[504px]">
                        <div className="text-[#316FE7] text-[40px]  mb-7 pb-7 relative before:absolute before:bottom-0 before:left-0 before:w-48 before:h-[1px] before:bg-[rgba(0,0,0,0.1)]">反欺诈风控产品</div>
                        <div className="text-[rgba(51,51,51,0.85)] text-xl">WeTech信用卡反欺诈，是以人工智能算法为核心， 依托实时计算、决策引擎、知识图谱、终端态势感 知等技术，并基于对客户业务场景和需求的深度了 解，为客户的出海业务保驾护航</div>
                    </div>
                    <div className=" relative">
                        <Image src="/image/home/risk-control.png" width={400} height={218} alt="risk-control" />
                    </div>
                </div>
            </div>
            {/* 争议预警与解决 */}
            <div className=" w-full h-[22.7rem] bg-[#00206F] text-center text-white relative">
                <div className=" text-4xl font-extrabold pt-12 mb-8">争议预警与解决</div>
                <div className=" text-[1.63rem] font-medium">实时获取拒付信息并快速做出响应及处理，<br />有效降低商户拒付率减少财务损失，避免进入卡组监控异常名单</div>
                <div className="ab-c top-auto -bottom-52 shadow-md shadow-[rgba(34,95,212,0.08)] h-56 w-[71rem] bg-white flex justify-center items-center text-[#333333] text-base">
                    <div className=" relative flex flex-col justify-center h-full items-center pr-36 before:absolute before:bottom-1/2 before:right-0 before:w-[1px] before:h-32 before:translate-y-1/2 before:bg-[rgba(0,0,0,0.45)]">
                        <Image src="/image/home/zy1.png" width={96} height={70} alt="1" />
                        <div className=" mt-3">Ethoca 争议拒付预警</div>
                    </div>
                    <div className=" relative flex flex-col justify-center h-full items-center pl-36">
                        <Image src="/image/home/zy2.png" width={96} height={78} alt="2" />
                        <div className="mt-2">RDR/CDRN争议拒付预警</div>
                    </div>
                </div>
            </div>
            <div className="earth-bg mt-32 h-[39.9rem] w-full flex justify-center items-end pb-11 gap-x-28">
                <div className=" w-[25.6rem] h-[28.5rem] bg-white relative rounded shadow-[0_4px_4px_0px_rgba(49,111,231,0.21)]">
                    <div className=" absolute left-1/2 -top-32 -translate-x-1/2 w-[17rem] h-[17rem]">
                        <Image src="/image/home/device-identification.png" fill={true} alt="device-identification" />
                    </div>
                    <div className=" pt-44 text-center">
                        <div className=" text-[#316FE7] text-[1.75rem] font-extrabold mb-[1.4rem]">设备风险识别产品</div>
                        <div className=" text-[#333333]  text-xs leading-[1.5rem]">
                            WeTech设备风险识别，具备全平台的设备可信标识生成能力， <br />包括APP/H5/小程序，移动端大盘十亿级设备落地验证，<br />冲突率/膨胀率/适配率等可控。性能、稳定性、容灾等方面，<br />经过内外产品多次迭代优化。产品能力覆盖面广，<br />从模型特征设计上，对高版本某些特征被限制之后向下兼容的支持，<br />验证过不断迭代升级，经历过AndroidQ和IOS14大升级。
                        </div>
                    </div>
                </div>
                <div className="w-[25.6rem] h-[28.5rem] bg-white relative rounded shadow-[0_4px_4px_0px_rgba(49,111,231,0.21)]">
                    <div className=" absolute left-1/2 -top-32 -translate-x-1/2 w-[17rem] h-[17rem]">
                        <Image src="/image/home/risk-portrait.png" fill={true} alt="risk-portrait" />
                    </div>
                    <div className=" pt-44 text-center">
                        <div className=" text-[#316FE7] text-[1.75rem] font-extrabold mb-14">风险画像</div>
                        <div className=" text-[#333333] text-base">
                            WeTech风险画像，是基于多年沉淀的欺诈<br />团队对抗经验、终端安全技术和数据<br />分析建模能力，可以为客户提供多维风险画像<br />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default Home;
