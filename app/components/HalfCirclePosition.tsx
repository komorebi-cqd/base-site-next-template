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
                <div className={`text-center font-bold  pt-16 pb-8 ${locale === 'en' ? " text-2xl" : "text-3xl lg:text-[38px] "}`}>
                    {intl.formatMessage({ id: 'home_half_circle_title' })}
                </div>
                <div className={`relative z-10  h-full mx-auto w-full flex flex-col items-center justify-between text-sm pb-[1.875rem] ${locale === "en" ? "md:pt-[6.75rem]" : " pt-3 md:pt-[3.75rem]"}`}>
                    <div className='w-full flex flex-col md:flex-row gap-5 md:gap-0 md:items-start px-10 md:px-[4rem]'>
                        <div className=' relative half-item half-item1 order-5 md:order-1'>
                            <div className={`text-[#333333] text-2xl font-extrabold mb-3  ${locale === "en" ? "w-full md:w-[13.25rem]" : ""}`}>{intl.formatMessage({ id: 'home_half_circle_one_title' })}</div>
                            <div className={`text-[rgba(51,51,51,0.85)] leading-5 ${locale === "en" ? "w-full md:w-[13.25rem]" : ""}`}>{intl.formatMessage({ id: 'home_half_circle_one_desc_one' })}<br />{intl.formatMessage({ id: 'home_half_circle_one_desc_two' })}</div>
                        </div>
                        <div className=' relative mx-auto w-72 lg:w-[412px] h-72 md:h-[413px] flex-shrink-0 order-1 md:order-5'>
                            <Image src="/image/home/home-ai-fk.png" fill={true} className=' object-contain' alt="" />
                        </div>
                        <div className=' relative half-item half-item2 order-10 md:order-10'>
                            <div className={`text-[#333333] text-2xl font-extrabold mb-3 ${locale === "en" ? "w-full md:w-[13.25rem]" : "w-[14.5rem]"}`}>{intl.formatMessage({ id: 'home_half_circle_two_title' })}</div>
                            <div className={`text-[rgba(51,51,51,0.85)] leading-5 ${locale === "en" ? "w-full md:w-[13.25rem]" : ""}`}>{intl.formatMessage({ id: 'home_half_circle_two_desc_one' })}<br />{intl.formatMessage({ id: 'home_half_circle_two_desc_two' })}</div>
                        </div>
                    </div>
                    <div className={`w-full flex justify-start md:justify-center items-center mt-5 ${locale === 'en' ? "px-10 pl-10 md:pl-36" : "px-10 md:px-0 "}`}>
                        <div className=' relative '>
                            <div className={`text-[#333333] text-2xl mx-auto font-extrabold mb-3 relative half-item half-item3 ${locale === "en" ? "" : ""}`}>{intl.formatMessage({ id: 'home_half_circle_three_title' })}</div>
                            <div className={`text-[rgba(51,51,51,0.85)] leading-5 ${locale === "en" ? "" : ""}`}>{intl.formatMessage({ id: 'home_half_circle_three_desc_one' })}<br />{intl.formatMessage({ id: 'home_half_circle_three_desc_two' })}<br />{intl.formatMessage({ id: 'home_half_circle_three_desc_three' })}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HalfCirclePosition;