"use client";
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useParams } from 'next/navigation'
import { useIntl } from "react-intl";


function useGetIntlMessages() {
    const { formatMessage } = useIntl();
    const rdrList = [
        { text: formatMessage({ id: "ew_slide_two_item_one" }) },
        { text: formatMessage({ id: "ew_slide_two_item_two" }) },
        { text: formatMessage({ id: "ew_slide_two_item_three" }) },
        { text: formatMessage({ id: "ew_slide_two_item_four" }) },
    ];

    const cdrnList = [
        { text: formatMessage({ id: "ew_slide_one_item_one" }) },
        { text: formatMessage({ id: "ew_slide_one_item_two" }) },
        { text: formatMessage({ id: "ew_slide_one_item_three" }) },
        { text: formatMessage({ id: "ew_slide_one_item_four" }) },
    ];

    return {
        rdrList,
        cdrnList
    }
}


const EarlyWarningSwiper = () => {
    const { formatMessage } = useIntl();
    const params = useParams();
    const [swiperInstance, setSwiperInstance] = useState<any>(null);
    const { rdrList, cdrnList } = useGetIntlMessages();
    useEffect(() => {
    }, []);
    return (
        <div className=' w-1200 mx-auto flex items-center justify-center gap-x-5 lg:gap-x-16 px-3 md:px-0'>
            <div onClick={() => swiperInstance?.slideNext()} className=' relative w-[3.75rem] h-[3.75rem] rounded-full border-2 border-[#316FE7] flex-shrink-0 cursor-pointer hidden md:block after:block after:w-6 after:h-1 after:bg-[#316FE7] after:rounded-s after:absolute after:top-[19px] after:left-4 after:rotate-45 before:block before:w-6 before:h-1 before:bg-primary before:rounded-s before:absolute before:bottom-[19px] before:left-4 before:-rotate-45 hover:before:bg-white hover:after:bg-white hover:bg-primary rotate-180'>
            </div>
            <div className='flex-1 min-h-[480px] h-full bg-[#F5F9FC] rounded-3xl relative'>
                <Swiper
                    slidesPerView={"auto"}
                    loop={true}
                    onSwiper={(swiper) => setSwiperInstance(swiper)}
                    observer={true}
                    observeParents={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    pagination={{
                        el: ".swiper-pagination",
                        clickable: true
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper h-full"
                >
                    <SwiperSlide className='w-full h-full'>
                        <div className='w-full h-full pt-11 text-[rgba(0,0,0,0.85)] flex flex-col'>
                            <div className={`text-center text-[#333] font-medium ${params?.locale === "en" ? " text-4xl font-black" : "text-2xl md:text-[38px]"}`}>{formatMessage({ id: "ew_slide_two_t" })}</div>
                            <div className={`text-center text-sm md:text-base font-semibold mx-auto ${params?.locale === "en" ? " max-w-[670px] my-5 sm:mt-10 sm:mb-14 " : "mt-10  mb-9"}`}>{formatMessage({ id: "ew_slide_two_desc" })}</div>
                            <ul className={` text-sm mx-auto w-full flex px-5 flex-col ${params?.locale === "en" ? " max-w-[660px] gap-y-3" : "gap-y-7 max-w-[516px] "}`}>
                                {rdrList.map(it => (
                                    <li className='relative pl-5 before:absolute before:top-[10px] before:-translate-y-1/2 before:left-0 before:bg-[#316FE7] before:w-[0.625rem] before:h-[0.625rem] before:rounded-full' key={it.text}>{it.text}</li>
                                ))}
                            </ul>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='w-full h-full'>
                        <div className='w-full h-full pt-11 text-[rgba(0,0,0,0.85)] flex flex-col'>
                            <div className={`text-center text-[#333] font-medium ${params?.locale === "en" ? " text-4xl font-black" : "text-2xl md:text-[38px]"}`}>{formatMessage({ id: "ew_slide_one_t" })}</div>
                            <div className={`text-center mx-auto text-sm md:text-base font-semibold ${params?.locale === "en" ? "max-w-[625px] my-5 sm:mt-10 sm:mb-14 " : "mt-10 mb-9 "}`}>{formatMessage({ id: "ew_slide_one_desc" })}</div>
                            <ul className={`text-sm  mx-auto px-5 w-full flex flex-col ${params?.locale === "en" ? " max-w-[690px] gap-y-3 sm:gap-y-7" : "gap-y-7 max-w-[516px] "}`}>
                                {cdrnList.map(it => (
                                    <li className='relative pl-5 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:bg-[#316FE7] before:w-[0.625rem] before:h-[0.625rem] before:rounded-full' key={it.text}>{it.text}</li>
                                ))}
                            </ul>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="swiper-pagination swiper-pagination-bullets !-bottom-12"></div>
            </div>
            <div onClick={() => swiperInstance?.slidePrev()} className=' relative w-[3.75rem] h-[3.75rem] rounded-full border-2 border-[#316FE7] flex-shrink-0 cursor-pointer hidden md:block after:block after:w-6 after:h-1 after:bg-[#316FE7] after:rounded-s after:absolute after:top-[19px] after:left-4 after:rotate-45 before:block before:w-6 before:h-1 before:bg-primary before:rounded-s before:absolute before:bottom-[19px] before:left-4 before:-rotate-45 hover:before:bg-white hover:after:bg-white hover:bg-primary'>
            </div>
        </div>
    )
}

export default EarlyWarningSwiper;