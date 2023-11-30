"use client";
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const rdrList = [
    { text: "根据商户设定的规则，通过强大的决策引擎自动解决争议" },
    { text: "符合规则的争议将通过自动退款，以实时解决" },
    { text: "客户发起争议时自动解决，以改善客户体验" },
    { text: "RDR覆盖VISA卡组" },
];

const cdrnList = [
    { text: "通过闭环网络接收以及直接交付" },
    { text: "停止未来重复交易的争议" },
    { text: "避免昂贵的费用，罚款" },
    { text: "CDRN覆盖全卡组" },
];


const EarlyWarningSwiper = () => {
    const [swiperInstance, setSwiperInstance] = useState<any>(null);

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
                            <div className='text-center text-[#316FE7] text-3xl md:text-[2rem] font-medium'>快速争议解决（RDR）</div>
                            <div className='text-center text-base md:text-lg mt-10 mb-14'>通过为商户量身定做的强大的决策引擎，自动解决参与RDR发卡行推送的争议交易，以实现实时解决。</div>
                            <ul className=' text-lg md:text-xl mx-auto flex flex-col gap-y-7 md:pl-7'>
                                {rdrList.map(it => (
                                    <li className='relative pl-5 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:bg-[#316FE7] before:w-[0.625rem] before:h-[0.625rem] before:rounded-full' key={it.text}>{it.text}</li>
                                ))}
                            </ul>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='w-full h-full'>
                        <div className='w-full h-full pt-11 text-[rgba(0,0,0,0.85)] flex flex-col px-2 md:px-0'>
                            <div className='text-center text-[#316FE7] text-3xl md:text-[2rem] font-medium'>持卡人争议解决网络（CDRN）</div>
                            <div className='text-center text-base md:text-lg mt-10 mb-14'>通过卖家发起的退款，在72小时内解决参与CDRN发卡推送的争议交易</div>
                            <ul className=' text-lg md:text-xl  mx-auto flex flex-col gap-y-7 md:pr-20'>
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