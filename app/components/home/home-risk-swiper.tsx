"use client";
import React from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

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
]

const HomeRiskSwiper = () => {
    return (
        <div className='max-w-[720px] mx-auto'>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 10,
                    // scale: 0.8,
                    depth: 160,
                    modifier: 2,
                    slideShadows: false, //阴影
                }}
                // freeMode={true}
                // initialSlide={2}
                loop={true}
                observer={true}
                observeParents={true}
                pagination={true}
                // pagination={{
                //     el: ".swiper-pagination"
                // }}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper w-full py-3"
            >
                {slideList.map(it => (
                    <SwiperSlide className='!w-[204px] !h-[244px]' key={it.id}>
                        <div className='w-full h-full bg-white flex flex-col items-center shadow-md'>
                            <div className="w-32 h-32 mx-auto relative mt-5">
                                <Image src={it.src} fill={true} alt={it.alt} />
                            </div>
                            <div className='bg-[rgba(49,111,231,0.15)] rounded-lg px-2 text-[#316FE7] text-[13px] h-4 leading-4 my-3'>{it.title}</div>
                            <div className=' text-xs text-[#333333] whitespace-normal px-4'>{it.desc}</div>
                        </div>
                    </SwiperSlide>
                ))}
                {/* <div className="swiper-pagination"></div> */}
                {/* <SwiperSlide className='w-[204px] h-[244px]'>
                    <div>
                        <Image src="/image/home/risk-item-1.png" fill={true} alt="risk-item-1"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <Image src="/image/home/risk-item-2.png" fill={true} alt="risk-item-2"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <Image src="/image/home/risk-item-3.png" fill={true} alt="risk-item-3"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <Image src="/image/home/risk-item-4.png" fill={true} alt="risk-item-4"/>
                    </div>
                </SwiperSlide> */}
            </Swiper>
        </div>
    )
}

export default HomeRiskSwiper