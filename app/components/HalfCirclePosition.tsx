import Image from 'next/image';
import getIntl from "@/app/[locale]/intl";


type Props = {
    locale: string;
}


const HalfCirclePosition: React.FC<Props> = async ({ locale }) => {
    const intl = await getIntl(locale);
    return (
        <>
            <div className='ab-c border-[60px] border-white w-halfcircleW h-halfcircleH rounded-full hidden lg:block'></div>
            <div className='w-1200'>
                <div className=' text-center text-3xl lg:text-[38px] font-bold  pt-16 pb-8 '>
                    AI支付风控，为跨境出海保驾护航
                </div>
                <div className={`relative z-10  h-full mx-auto w-full flex flex-col items-center justify-between text-sm pb-[1.875rem] ${locale === "en" ? "pt-[6.75rem]" : " pt-3 md:pt-[3.75rem]"}`}>
                    <div className='w-full flex flex-col md:flex-row gap-5 md:gap-0 md:items-start px-10 md:px-[4rem]'>
                        <div className=' relative half-item half-item1 order-5 md:order-1'>
                            <div className={`text-[#333333] text-2xl font-extrabold mb-3  ${locale === "en" ? "w-[13.25rem]" : ""}`}>欺诈提醒</div>
                            <div className={`text-[rgba(51,51,51,0.85)] leading-5 ${locale === "en" ? "w-[13.25rem]" : ""}`}>通过自研风控产品，运用大模型+小模型结合<br />AI自动引擎实现风控自动提醒，由商户自行决策 </div>
                        </div>
                        <div className=' relative mx-auto w-72 lg:w-[412px] h-72 md:h-[413px] flex-shrink-0 order-1 md:order-5'>
                            <Image src="/image/home/home-ai-fk.png" fill={true} objectFit='contain' alt="" />
                        </div>
                        <div className=' relative half-item half-item2 order-10 md:order-10'>
                            <div className={`text-[#333333] text-2xl font-extrabold mb-3 ${locale === "en" ? "w-[13.25rem]" : "w-[14.5rem]"}`}>欺诈预防</div>
                            <div className={`text-[rgba(51,51,51,0.85)] leading-5 ${locale === "en" ? "w-[13.25rem]" : ""}`}>通过信用卡反欺诈/设备风险识别等自研风控产品<br /> 大模型+小模型结合，通过AI自动引擎，实现风控自动决策</div>
                        </div>
                    </div>
                    <div className=' px-10 md:px-0 w-full flex justify-start md:justify-center items-center mt-5'>
                        <div className=' relative '>
                            <div className={`text-[#333333] text-2xl mx-auto font-extrabold mb-3 relative half-item half-item3 ${locale === "en" ? " md:w-44" : ""}`}>争议解决</div>
                            <div className={`text-[rgba(51,51,51,0.85)] leading-5 ${locale === "en" ? " md:w-[43.75rem]" : ""}`}>携手Visa，实现拒付自动退款<br />携手Ethoca，实时获取拒付信息并及时做出响应<br /> 降低拒付率和财务损失</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HalfCirclePosition;