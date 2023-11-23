import HomeRiskSwiper from "@/app/components/ui/home-risk-swiper";
import HalfCirclePosition from "@/app/components/HalfCirclePosition";
import ClientOnly from "@/app/components/ClientOnly";

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
            {/*  */}
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
        </main>
    );
}
export default Home;
