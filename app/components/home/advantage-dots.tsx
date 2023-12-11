"use client";
import React from 'react'

const AdvantageDots = () => {
    const items = [1, 2, 3, 4];
    return (
        <div className=' absolute -bottom-1 left-1/2 -translate-x-1/2 translate-y-full flex flex-col-reverse items-center gap-y-[2px]'>
            {items.map(it => (<span style={{width: it * 3 + "px",height: it * 3 + "px", opacity: it * 0.25}} className=' bg-white rounded-full' key={it}></span>)) }
        </div>
    )
}

export default AdvantageDots;