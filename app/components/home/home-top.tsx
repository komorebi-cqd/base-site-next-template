"use client";
import React from 'react'

const HomeTop = () => {
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
        <div className='home-bg w-full h-[51.125rem] transition-all px-20 relative pt-40 xl:pt-60 lg:pl-44'>
            <div className='flex flex-col text-white lg:w-[68.75rem] mx-auto'>
                <div className=' w-6 h-[2px] bg-white' />
                <div className=' text-5xl md:text-6xl font-extrabold mt-11 mb-4'>多场景、大数据</div>
                <div className=' text-2xl md:text-3xl font-medium'>全智能金融科技服务商</div>
                <div className=' cursor-pointer mt-12 border border-white w-[12.875rem] h-[2.75rem] rounded leading-[2.6rem] text-center text-base' onClick={() => handleJump()}>立即体验</div>
            </div>
        </div>
    )
}

export default HomeTop