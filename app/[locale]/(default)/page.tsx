import ClientOnly from "@/app/components/ClientOnly";
import HalfCirclePosition from "@/app/components/HalfCirclePosition";
import HomeTop from "@/app/components/home/home-top";
import Image from "next/image";
import getIntl from "../intl";


const fraudTypeList = [
    { id: 1, title: "电子产品", desc: "高危行业，因其单价高，一旦盗刷成功欺诈团伙获利颇高", imgUrl: "/image/home/home-jx-1.png" },
    { id: 2, title: "奢侈品", desc: "退换货政策滥用，优惠券 滥用，容易出现友好型欺诈", imgUrl: "/image/home/home-jx-2.png" },
    { id: 3, title: "游戏、礼品卡", desc: "商户无需发货，欺诈分析可立即转卖且容易脱手", imgUrl: "/image/home/home-jx-3.png" },
    { id: 4, title: "铺货杂货", desc: "针对杂货铺类商户低欺诈攻击在2020年涨30%，是欺诈分子热衷的行业", imgUrl: "/image/home/home-jx-4.png" },
];

const advantageItemOne = [
    { id: 1, title: "全球信用卡卡库" },
    { id: 2, title: "数十亿设备指纹信誉数据" },
    { id: 3, title: "业界最大安全号码库" },
    { id: 4, title: "全球黑IP库" },
    { id: 5, title: "全球风险数据库" },
    { id: 6, title: "业界最大的恶意网址黑库" },
    { id: 7, title: "全球风险邮箱库" },
];

const advantageItemTwo = [
    { id: 1, title: "全球顶尖技术团队" },
    { id: 2, title: "人工智能深度算法" },
    { id: 3, title: "全球语言、产品、购买行为深度分析" },
    { id: 4, title: "标准模型建立" },
    { id: 5, title: "云服务能力" },
];

async function Home({ params: { locale } }: { params: { locale: string } }) {
    const intl = await getIntl(locale);
    return (
        <main>
            {/* 顶部大图 */}
            <div className="w-full  bg-[#242736] max-h-[var(--top-h)] h-[var(--top-h)]">
                <div className="max-w-[1440px] mx-auto h-full bg-[url('/image/home/home-top-bg.png')] bg-contain bg-right-bottom bg-no-repeat">
                    <div className="flex flex-col text-white h-full max-w-[1200px] mx-auto pt-48 ">
                        <h3 className=" text-[58px] font-bold">多场景、大数据</h3>
                        <div className="flex flex-col text-[32px] mt-4 mb-6">
                            <span>全智能金融科技服务商</span>
                            <span>欺诈提醒--欺诈预防--争议解决</span>
                        </div>
                        <a href="#" className="w-[206px] h-[56px] bg-[#0F61FF] rounded leading-[56px] text-center text-xl font-semibold">立即体验</a>
                    </div>
                </div>
            </div>
            {/* <HomeTop locale={locale} /> */}
            {/* 全球欺诈仍在继续 */}
            <div className={`w-full h-auto  relative bg-[rgba(243,245,249,1)]`}>
                <div className="w-1200 mx-auto  pt-16 pb-28 ">
                    <div className="text-center text-[38px] text-[#333] pb-12 font-semibold">全球欺诈仍在继续</div>
                    <ul className="w-full flex gap-x-8 mx-auto justify-center ">
                        {fraudTypeList.map((item) => (
                            <li key={item.id} className="flex flex-col bg-white rounded-[10px] overflow-hidden flex-1">
                                <div className="w-full relative h-[200px]">
                                    <Image src={item.imgUrl} fill={true} alt="" />
                                </div>
                                <div className="flex justify-center flex-col items-center pb-12 pt-7 px-4">
                                    <div className=" pb-3 text-2xl text-center text-primary font-bold">{item.title}</div>
                                    <div className="text-center text-sm">{item.desc}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-full bg-[#F4F8FF] min-h-[696px] overflow-hidden relative">
                    <HalfCirclePosition locale={locale} />
                </div>
            </div>
            {/* 全球最前沿和最全风控数据库 */}
            <div className="w-full min-h-[350px] pt-16">
                <div className="w-1200 flex justify-between items-start h-full text-sm">
                    <ul>
                        <div className="flex items-center mb-4">
                            <Image src="/image/home/home-qqqy.png" width={40} height={40} alt="" />
                            <span className=" text-[#333] text-2xl pl-2">全球最前沿和最全风控数据库</span>
                        </div>
                        {advantageItemOne.map(it => (
                            <li className="ml-3 mt-1 relative before:absolute before:top-3 before:-translate-y-1/2 before:-left-3 before:bg-primary before:w-[5px] before:h-[5px] before:rounded-full" key={it.id}>{it.title}</li>
                        ))}
                    </ul>
                    <ul>
                        <div className="flex items-center mb-4">
                            <Image src="/image/home/home-jssf.png" width={40} height={40} alt="" />
                            <span className=" text-[#333] text-2xl pl-2">强大技术及深度算法能力</span>
                        </div>
                        {advantageItemTwo.map(it => (
                            <li className="ml-3 mt-1 relative before:absolute before:top-3 before:-translate-y-1/2 before:-left-3 before:bg-primary before:w-[5px] before:h-[5px] before:rounded-full" key={it.id}>{it.title}</li>
                        ))}
                    </ul>
                </div>

            </div>
            {/* 我们的服务 */}
            <div className=" bg-[#F3F5F9] pb-10">
                <div className="w-1200 py-9">
                    <div className=" text-center font-semibold text-[38px] text-[#333] mb-8">我们的服务</div>

                    <div className="w-full flex flex-col gap-y-9 items-center text-[#333] text-sm">
                        <div className="flex justify-between bg-white rounded-lg w-full min-h-[360px] pt-[72px] px-28">
                            <div>
                                <div className="text-primary text-2xl font-bold mb-8">信用卡反欺诈</div>
                                <ul className=" leading-6">
                                    <li> · WeTech信用卡反欺诈，是以人工智能算法为核心</li>
                                    <li> · 依托实时计算、决策引擎、知识图谱、终端态势感 知等技术</li>
                                    <li> · 并基于对客户业务场景和需求的深度了解，为客户的出海业务保驾护航</li>
                                </ul>
                            </div>
                            <div className=" relative w-[315px] h-[215px]">
                                <Image src="/image/home/home-serve-1.png" fill alt="" />
                            </div>
                        </div>
                        <div className="flex justify-between bg-white rounded-lg w-full min-h-[360px] pt-[72px] px-28 flex-row-reverse">
                            <div>
                                <div className="text-primary text-2xl font-bold mb-8">设备风险识别</div>
                                <ul className=" leading-6">
                                    <li> · WeTech设备风险识别，具备全平台的设备可信标识生成能力</li>
                                    <li> · 包括APP/H5/小程序，移动端大盘十亿级设备落地验证</li>
                                    <li> · 冲突率/膨胀率/适配率等可控，产品能力覆盖面广</li>
                                </ul>
                            </div>
                            <div className=" relative w-[404px] h-[234px]">
                                <Image src="/image/home/home-serve-2.png" fill alt="" />
                            </div>
                        </div>
                        <div className="flex justify-between bg-white rounded-lg w-full min-h-[360px] pt-[72px] px-28">
                            <div>
                                <div className="text-primary text-2xl font-bold mb-8">风险画像</div>
                                <ul className=" leading-6">
                                    <li> · WeTech风险画像，是基于多年沉淀的欺诈团队对抗经验</li>
                                    <li> · 终端安全技术和数据分析建模能力，可以为客户提供多维风险画像</li>
                                </ul>
                            </div>
                            <div className=" relative w-[323px] h-[233px]">
                                <Image src="/image/home/home-serve-3.png" fill alt="" />
                            </div>
                        </div>
                        <div className="flex justify-between bg-white rounded-lg w-full min-h-[360px] pt-[72px] px-28 flex-row-reverse">
                            <div className="max-w-[524px]">
                                <div className="text-primary text-2xl font-bold">争议预警与解决</div>
                                <div className=" my-6">实时获取拒付信息并快速做出响应及处理，有效降低商户拒付率减少财务损失， 避免进入卡组监控异常名单</div>
                                <div className="flex items-center justify-between text-sm text-[#333]">
                                    <div className="w-[248px] h-[72px] rounded-lg bg-[#F3F5F9] flex items-center justify-center gap-x-2">
                                        <Image src="/image/home/home-zy-1.png" width={56} height={40} alt="" />
                                        <span>Ethoca争议预警及解决</span>
                                    </div>
                                    <div className="w-[248px] h-[72px] rounded-lg bg-[#F3F5F9] flex items-center justify-center gap-x-2">
                                        <Image src="/image/home/home-zy-2.png" width={40} height={40} alt="" />
                                        <span>RDR/CDRN争议与解决</span>
                                    </div>
                                </div>
                            </div>
                            <div className=" relative w-[300px] h-[256px]">
                                <Image src="/image/home/home-serve-4.png" fill alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
}
export default Home;
