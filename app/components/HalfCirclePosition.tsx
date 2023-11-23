"use client";
import React, { useEffect } from 'react';
import { useRef,useState } from "react";

const HalfCirclePosition = () => {
    const hollowCircle = useRef<HTMLDivElement>(null);
    const [hollowCircleHeight, setHollowCircleHeight] = useState(0);
    useEffect(() => {
        setHollowCircleHeight(hollowCircle.current?.clientWidth || 0);
    }, []);
    return (
        <>
            <div ref={hollowCircle} className='w-full border-[110px] border-[#F7FAFF] rounded-full ab-c' style={{height: hollowCircleHeight + "px"}}></div>
            <div className='w-[890px] h-[890px] ab-c bg-[rgba(238,244,255,0.65)] ab-c rounded-full'></div>
        </>
    )
}

export default HalfCirclePosition;