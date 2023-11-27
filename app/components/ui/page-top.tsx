"use client";
import React from 'react'

type Props = {
    bgImg: string;
    title: string;
    desc: React.ReactNode;
}

const PageTop: React.FC<Props> = ({ bgImg, title, desc }) => {
    const handleJump = () => {
        const id = "jump-wetech";
        let a = document.createElement("a");
        a.setAttribute("href", "https://plat.wetech-rc.com/");
        a.setAttribute("target", "_blank");
        a.setAttribute("id", id);
        if(!document.getElementById(id)) {                               
            document.body.appendChild(a);      
         }
        a.click();  
    }
    return (
        <div className={`w-full h-[51.125rem] bg-center bg-no-repeat relative bg-cover mb-[14.5rem]`} style={{ backgroundImage: `url(${bgImg})` }}>
            <div className='flex flex-col justify-between items-center absolute -bottom-52 left-1/2 -translate-x-1/2 w-[77.315rem] h-[20.25rem] bg-gradient-to-b from-[#EEF6FF] to-white rounded-[1.69rem] shadow-[0_12px_3px_0px_rgba(49,111,231,0.1)]'>
                {/* 标题 */}
                <div className='flex items-center justify-center gap-x-5 pt-12 mb-4'>
                    <span className='block w-[22px] h-[22px] rounded-full bg-gradient-to-bl from-white to-[#316FE7]'></span>
                    <div className=' text-4xl text-[#316FE7] font-semibold'>{title}</div>
                    <span className='block w-[22px] h-[22px] rounded-full bg-gradient-to-bl from-white to-[#316FE7]'></span>
                </div>
                {/* 介绍 */}
                <div className="text-[#333] text-2xl text-center flex-1">
                    {desc}
                </div>
                {/* 按钮 */}
                <button className=' rounded border border-[#316FE7] text-[#316FE7] w-52 h-11 leading-10 text-center mb-11' onClick={() => handleJump()}>立即体验</button>
            </div>
        </div>
    )
}

export default PageTop;