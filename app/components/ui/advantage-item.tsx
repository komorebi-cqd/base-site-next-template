import React from 'react'
import Image from 'next/image';

type Props = {
    absImg: React.ReactNode;
    title: string;
    desc: React.ReactNode;
}

const AdvantageItem: React.FC<Props> = ({ absImg, title, desc }) => {
    return (
        <div className=' w-72 h-64 bg-white rounded shadow-[0px_4px_4px_0px_rgba(49,111,231,0.21)] relative'>
            {absImg}
            <div className='flex flex-col items-center justify-end h-full'>
                <div className=' text-xl font-bold text-[#316FE7]'>{title}</div>
                <div className=' text-xs text-[#000000] text-center mt-3 mb-11'>{desc}</div>
            </div>
        </div>
    )
}

export default AdvantageItem