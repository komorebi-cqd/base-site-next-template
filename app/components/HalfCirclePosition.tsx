"use client";
import { useRef, useState, useEffect } from "react";
import Image from 'next/image';
import { useIntl } from "react-intl";
import { useParams } from "next/navigation";



const HalfCirclePosition = () => {
    const { formatMessage } = useIntl();
    const params = useParams();
    const hollowCircle = useRef<HTMLDivElement>(null);
    const [hollowCircleHeight, setHollowCircleHeight] = useState(0);
    useEffect(() => {
        setHollowCircleHeight(hollowCircle.current?.clientWidth || 0);
    }, []);
    return (
        <>
            <div ref={hollowCircle} className='w-full border-[110px] border-[#F7FAFF] rounded-full ab-c hidden xl:block' style={{ height: hollowCircleHeight + "px" }}></div>
            <div className='lg:w-[55.625rem] lg:h-[55.625rem] ab-c bg-[rgba(238,244,255,0.65)] ab-c rounded-full hidden xl:block'></div>
            <div className={`relative z-10  h-full mx-auto w-full xl:w-[55.625rem] flex flex-col items-center justify-between  pb-[1.875rem] ${params?.locale === "en" ? "pt-[6.75rem]" : "pt-[3.75rem]"}`}>
                <div className='w-auto flex flex-col md:flex-row gap-5 md:gap-0 md:items-start md:pl-[4rem] md:pr-[1.25rem]'>
                    <div className=' relative half-item half-item1 order-5 md:order-1'>
                        <div className={`text-[#333333] text-base font-extrabold mb-3  ${params?.locale === "en" ? "w-[13.25rem]" : ""}`}>{formatMessage({ id: "home_half_circle_one_title" })}</div>
                        <div className={`text-xs text-[rgba(51,51,51,0.85)] leading-5 ${params?.locale === "en" ? "w-[13.25rem]" : "w-[14.5rem]"}`}>{formatMessage({ id: "home_half_circle_one_desc" })}</div>
                    </div>
                    <div className=' relative mx-auto w-[15rem] h-[15rem] lg:w-[19rem] lg:h-[19rem] flex-shrink-0 order-1 md:order-5'>
                        <Image src="/image/home/home-center.png" fill={true} alt="" />
                    </div>
                    <div className=' relative half-item half-item2 order-10 md:order-10'>
                        <div className={`text-[#333333] text-base font-extrabold mb-3 ${params?.locale === "en" ? "w-[13.25rem]" : "w-[14.5rem]"}`}>{formatMessage({ id: "home_half_circle_two_title" })}</div>
                        <div className={`text-xs text-[rgba(51,51,51,0.85)] leading-5 ${params?.locale === "en" ? "w-[13.25rem]" : "w-[14.5rem]"}`}>{formatMessage({ id: "home_half_circle_two_desc" })}<br />{formatMessage({ id: "home_half_circle_two_desc_two" })}</div>
                    </div>
                </div>
                <div className='w-[15rem] md:w-full flex justify-center items-center mt-5'>
                    <div className=' relative '>
                        <div className={`text-[#333333] text-base mx-auto font-extrabold mb-3 relative half-item half-item3 ${params?.locale === "en" ? " md:w-44" : ""}`}>{formatMessage({ id: "home_half_circle_three_title" })}</div>
                        <div className={`text-xs text-[rgba(51,51,51,0.85)] leading-5 ${params?.locale === "en" ? " md:w-[43.75rem]" : ""}`}>{formatMessage({ id: "home_half_circle_three_desc" })}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HalfCirclePosition;