"use client";
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useParams } from 'next/navigation'
import { useIntl } from "react-intl";


function useGetIntlMessages() {
    const { formatMessage } = useIntl();
    const rdrList = [
        { text: formatMessage({ id: "ew_slide_two_item_one" }) },
        { text: formatMessage({ id: "ew_slide_two_item_two" })  },
        { text: formatMessage({ id: "ew_slide_two_item_three" })  },
        { text: formatMessage({ id: "ew_slide_two_item_four" })  },
    ];
    
    const cdrnList = [
        { text: formatMessage({ id: "ew_slide_one_item_one" }) },
        { text: formatMessage({ id: "ew_slide_one_item_two" })  },
        { text: formatMessage({ id: "ew_slide_one_item_three" })  },
        { text: formatMessage({ id: "ew_slide_one_item_four" })  },
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
        <div className=' max-w-[84.125rem] h-[33.5rem]  mx-auto flex items-center justify-center gap-x-5 lg:gap-x-16 px-2 xl:px-0'>
            <div onClick={() => swiperInstance?.slideNext()} className=' relative w-[3.75rem] h-[3.75rem] flex-shrink-0 rotate-180 cursor-pointer hidden md:block'>
                <Image src="/image/early-warning/arrow.png" fill={true} alt="WeTech-arrow" />
            </div>
            <div className='flex-1 h-full bg-[rgba(255,255,255,0.75)] rounded-3xl relative'>
                <Swiper
                    slidesPerView={"auto"}
                    loop={true}
                    onSwiper={(swiper) => setSwiperInstance(swiper)}
                    observer={true}
                    observeParents={true}
                    pagination={{
                        el: ".swiper-pagination",
                        clickable: true
                    }}
                    modules={[Pagination]}
                    className="mySwiper h-full"
                >
                    <SwiperSlide className='w-full h-full'>
                        <div className='w-full h-full pt-11 text-[rgba(0,0,0,0.85)] flex flex-col px-2 md:px-0'>
                            <div className='text-center text-[#316FE7] text-3xl md:text-[2rem] font-medium'>{formatMessage({ id: "ew_slide_two_t" })}</div>
                            <div className={`text-center text-base md:text-lg mx-auto ${params?.locale === "en"? " max-w-[770px] my-5 sm:mt-10 sm:mb-14 " : "mt-10 mb-14 "}`}>{formatMessage({ id: "ew_slide_two_desc" })}</div>
                            <ul className={`text-base  mx-auto flex flex-col ${params?.locale === "en"? " max-w-[660px] gap-y-3 md:text-lg lg:text-xl" : "md:pl-7  gap-y-7 md:text-xl"}`}>
                                {rdrList.map(it => (
                                    <li className='relative pl-5 before:absolute before:top-3 before:-translate-y-1/2 before:left-0 before:bg-[#316FE7] before:w-[0.625rem] before:h-[0.625rem] before:rounded-full' key={it.text}>{it.text}</li>
                                ))}
                            </ul>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='w-full h-full'>
                        <div className='w-full h-full pt-11 text-[rgba(0,0,0,0.85)] flex flex-col px-2 md:px-0'>
                            <div className='text-center text-[#316FE7] text-3xl md:text-[2rem] font-medium'>{formatMessage({ id: "ew_slide_one_t" })}</div>
                            <div className={`text-center text-base md:text-lg ${params?.locale === "en"? "my-5 sm:mt-10 sm:mb-14 " : "mt-10 mb-14 "}`}>{formatMessage({ id: "ew_slide_one_desc" })}</div>
                            <ul className={`text-base  mx-auto flex flex-col ${params?.locale === "en"? " max-w-[690px] md:text-lg lg:text-xl gap-y-3 sm:gap-y-7" : "md:pr-20 md:text-xl gap-y-7"}`}>
                                {cdrnList.map(it => (
                                    <li className='relative pl-5 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:bg-[#316FE7] before:w-[0.625rem] before:h-[0.625rem] before:rounded-full' key={it.text}>{it.text}</li>
                                ))}
                            </ul>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="swiper-pagination swiper-pagination-bullets !-bottom-12"></div>
            </div>
            <div onClick={() => swiperInstance?.slidePrev()} className=' relative w-[3.75rem] h-[3.75rem] flex-shrink-0 cursor-pointer hidden md:block'>
                <Image src="/image/early-warning/arrow.png" fill={true} alt="WeTech-arrow" />
            </div>
        </div>
    )
}

export default EarlyWarningSwiper;