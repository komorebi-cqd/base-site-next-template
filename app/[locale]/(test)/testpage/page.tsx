'use client';
import React from 'react';
import { motion, Variants } from "framer-motion"
import Image from 'next/image';



const variantsDiv: Variants = {
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: "Spring",
            duration: 0.8,
            delay: 0.2,
            staggerChildren: 0.2,
            delayChildren: 0.5,
        }
    },
    hidden: {
        y: 100,
        opacity: 0
    }
};


const variantsCDiv: Variants = {
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        }
    },
    hidden: {
        y: 400,
        opacity: 0
    }
};

const imgItems = [
    {
        src: '/image/bg1.png',
        width: 238,
        height: 98,
        bottom: "82px",
        left: 0,
        alt: 'bg1'
    },
    {
        src: '/image/bg2.png',
        width: 255,
        height: 94,
        bottom: "228px",
        left: "16.2%",
        alt: 'bg2'
    },
    {
        src: '/image/bg3.png',
        width: 152,
        height: 91,
        bottom: "22px",
        left: "35.7%",
        alt: 'bg3'
    },
    {
        src: '/image/bg4.png',
        width: 107,
        height: 86,
        bottom: "114px",
        left: "57%",
        alt: 'bg4'
    },
    {
        src: '/image/bg5.png',
        width: 221,
        height: 98,
        bottom: "215px",
        left: "86.2%",
        alt: 'bg5'
    },{
        src: '/image/bg6.png',
        width: 241,
        height: 96,
        bottom: "57px",
        left: "100%",
        alt: 'bg6'
    }
]

const TestPage = () => {
    return (
        <div className=' h-[300vh] w-full'>
            <div className='h-[60%]'></div>
            <motion.div variants={variantsDiv} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.8}} className='w-full h-[448px] overflow-hidden relative'>
                {/* <Image src={"/image/homebg.png"} fill={true} alt='bg' /> */}
                <div className='w-full h-[448px] absolute top-0 bottom-0 left-0 right-0'>
                    <Image src={"/image/home/advantagebg.png"} priority={true} fill={true} alt="bg" />
                </div>
                <div className='max-w-[1176px] mx-auto relative h-full'>
                    <motion.div variants={variantsCDiv} className=' absolute top-[25px] bottom-[56px] text-3xl text-white w-full text-center'>
                        全球最前沿和最全风控数据库
                    </motion.div>
                    {/* {imgItems.map(it => (
                        <motion.div key={it.alt} variants={variantsCDiv} className={`absolute bottom-[${it.bottom}] left-[${it.left}]`}>
                            <Image src={it.src} priority={false} alt="" width={it.width} height={it.height} className='object-cover transition-all hover:!scale-110 cursor-pointer' />
                        </motion.div>
                    ))} */}
                    <motion.div variants={variantsCDiv} className=' absolute bottom-[82px] left-0'>
                        <Image src="/image/home/advantage1.png" priority={true} alt="" width={238} height={98} className='object-cover transition-all hover:!scale-110 cursor-pointer' />
                    </motion.div>
                    <motion.div variants={variantsCDiv} className={`absolute bottom-[228px] left-[16.2%]`}>
                        <Image src="/image/home/advantage2.png" priority={true} alt="" width={255} height={94} className='object-cover transition-all hover:!scale-110 cursor-pointer' />
                    </motion.div>
                    <motion.div variants={variantsCDiv} className=' absolute bottom-[22px] left-[35.7%] '>
                        <Image src="/image/home/advantage3.png" priority={true} alt="" width={152} height={91} className='object-cover transition-all hover:!scale-110 cursor-pointer' />
                    </motion.div>
                    <motion.div variants={variantsCDiv} className=' absolute bottom-[114px] right-[43%] '>
                        <Image src="/image/home/advantage4.png" priority={true} alt="" width={107} height={86} className='object-cover transition-all hover:!scale-110 cursor-pointer' />
                    </motion.div>
                    <motion.div variants={variantsCDiv} className=' absolute bottom-[215px] right-[13.8%] '>
                        <Image src="/image/home/advantage5.png" priority={true} alt="" width={221} height={98} className='object-cover transition-all hover:!scale-110 cursor-pointer' />
                    </motion.div>
                    <motion.div variants={variantsCDiv} className=' absolute bottom-[57px] right-0'>
                        <Image src="/image/home/advantage6.png" priority={true} alt="" width={241} height={96} className='object-cover transition-all hover:!scale-110 cursor-pointer' />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}

export default TestPage;