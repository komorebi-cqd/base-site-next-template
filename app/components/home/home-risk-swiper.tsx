"use client";
import React, { useState } from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { EffectCoverflow } from 'swiper/modules';

const slideList = [
    {
        id: 1,
        src: "/image/home/risk-item-1.png",
        alt: "risk-item-1",
        title: "电子产品",
        desc: "高危行业，因其单价高，一旦盗刷成功欺诈团伙获利颇高"
    },
    {
        id: 2,
        src: "/image/home/risk-item-2.png",
        alt: "risk-item-2",
        title: "奢侈品",
        desc: "退换货政策滥用，优惠券滥用，容易出现友好型欺诈"
    },
    {
        id: 3,
        src: "/image/home/risk-item-3.png",
        alt: "risk-item-3",
        title: "游戏、礼品卡",
        desc: "商户无需发货，欺诈分析可立即转卖且容易脱手"
    },
    {
        id: 4,
        src: "/image/home/risk-item-4.png",
        alt: "risk-item-4",
        title: "铺货杂货",
        desc: "针对杂货类商户低欺诈攻击在2020年涨3.0%，是欺诈分子热衷的行业"
    },
    {
        id: 5,
        src: "/image/home/risk-item-1.png",
        alt: "risk-item-1",
        title: "电子产品",
        desc: "高危行业，因其单价高，一旦盗刷成功欺诈团伙获利颇高"
    }, {
        id: 6,
        src: "/image/home/risk-item-2.png",
        alt: "risk-item-2",
        title: "奢侈品",
        desc: "退换货政策滥用，优惠券滥用，容易出现友好型欺诈"
    },
    {
        id: 7,
        src: "/image/home/risk-item-3.png",
        alt: "risk-item-3",
        title: "游戏、礼品卡",
        desc: "商户无需发货，欺诈分析可立即转卖且容易脱手"
    },
    {
        id: 8,
        src: "/image/home/risk-item-4.png",
        alt: "risk-item-4",
        title: "铺货杂货",
        desc: "针对杂货类商户低欺诈攻击在2020年涨3.0%，是欺诈分子热衷的行业"
    },
];

const pag = [0, 1, 2, 3];

const HomeRiskSwiper = () => {

    const [realIndex, setRealIndex] = useState(0);
    return (
        <div className='lg:w-[46.25rem] mx-auto'>
            <div className='w-full mx-auto h-[15.25rem] relative'>
                <Swiper
                    slidesOffsetBefore={30}
                    effect='coverflow'
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={4}
                    // freeMode={true}
                    // initialSlide={3}
                    loop={true}
                    observeParents={true}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 70,
                        modifier: 1,
                        slideShadows: false
                    }}
                    observer={true}
                    loopAdditionalSlides={1}
                    onSlideChange={(e) => {
                        setRealIndex(e.realIndex);
                    }}
                    modules={[EffectCoverflow]}
                    className="mySwiper w-full h-full relative"
                >
                    {
                        slideList.map(it => (
                            <SwiperSlide className='!w-[12.75rem] h-full' key={it.id}>
                                <div className='w-full h-full bg-white flex flex-col items-center shadow-md'>
                                    <div className="w-32 h-32 mx-auto relative mt-5">
                                        <Image src={it.src} priority={true} fill={true} alt={it.alt} />
                                    </div>
                                    <div className='bg-[rgba(49,111,231,0.15)] rounded-lg px-2 text-[#316FE7] text-[13px] h-4 leading-4 my-3'>{it.title}</div>
                                    <div className=' text-xs text-[#333333] whitespace-normal px-4'>{it.desc}</div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <ul className='flex items-center justify-center gap-x-1 mt-8'>
                {pag.map(it => {
                    const opacity = Math.abs((realIndex % 4) - it) === 0 ? 1 : 1 - Math.abs((realIndex % 4) - it) * 0.25;
                    return (
                        <li key={it} className={`w-[0.375rem] h-[0.375rem] rounded-full bg-[#316FE7] transition-all`} style={{ opacity: opacity }}></li>
                    )
                })}
            </ul>
        </div >
    )
}

export default HomeRiskSwiper