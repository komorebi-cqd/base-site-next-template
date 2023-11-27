"use client";
import React, { useEffect } from 'react';
import { useRef, useState } from "react";
import Image from 'next/image';

const HalfCirclePosition = () => {
    const hollowCircle = useRef<HTMLDivElement>(null);
    const [hollowCircleHeight, setHollowCircleHeight] = useState(0);
    useEffect(() => {
        setHollowCircleHeight(hollowCircle.current?.clientWidth || 0);
    }, []);
    return (
        <>
            <div ref={hollowCircle} className='w-full border-[110px] border-[#F7FAFF] rounded-full ab-c' style={{ height: hollowCircleHeight + "px" }}></div>
            <div className='w-[55.625rem] h-[55.625rem] ab-c bg-[rgba(238,244,255,0.65)] ab-c rounded-full'></div>
            <div className=' relative z-10  h-full mx-auto w-[55.625rem] flex flex-col items-center justify-between pt-[3.75rem] pb-[1.875rem]'>
                <div className='w-full flex items-start pl-[4rem] pr-[1.25rem]'>
                    <div className=' relative half-item half-item1'>
                        <div className='text-[#333333] text-base font-extrabold mb-3'>欺诈预防-支付风控</div>
                        <div className=' text-xs text-[rgba(51,51,51,0.85)] leading-5'>通过信用卡欺诈/设备风险识别等自研<br />支付风控类产品，运用大小模型+小模型<br />结合，并通过AI自动引擎实现风控自动决策</div>
                    </div>
                    <div className=' relative w-[18.75rem] h-[18.75rem] flex-shrink-0'>
                        <Image src="/image/early-warning/arrow.png" fill={true} alt="" />
                    </div>
                    <div className=' relative half-item half-item2'>
                        <div className='text-[#333333] text-base font-extrabold mb-3'>风控预警-支付风控</div>
                        <div className=' text-xs text-[rgba(51,51,51,0.85)] leading-5'>携手VISA,针对VISA卡组，实现拒付自动<br />退款，不计入考核，降低商户拒付率<br />携手ethoca,针对全卡组，是实现争议预警，<br />定制化解决，不计入考核降低拒付率</div>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center'>
                    <div className=' relative half-item half-item3'>
                        <div className='text-[#333333] text-base font-extrabold mb-3'>风控预警-支付风控</div>
                        <div className=' text-xs text-[rgba(51,51,51,0.85)] leading-5'>通过自研风控类产品，运用大模型+小模型结合，并通过<br />AI自动引擎实现风控自动提醒，由商户自行决策</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HalfCirclePosition;