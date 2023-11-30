"use client";
import React from 'react'
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
            delayChildren: 0.25,
        }
    },
    hidden: {
        y: 0,
        opacity: 1
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


const SixAdvantage = () => {
    return (
        <motion.div variants={variantsDiv} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1}} className='w-full h-[448px] overflow-hidden relative'>
            {/* <Image src={"/image/homebg.png"} fill={true} alt='bg' /> */}
            <div className='w-full h-[448px] absolute top-0 bottom-0 left-0 right-0'>
                <Image src={"/image/home/advantagebg.png"} priority={true} fill={true} alt="bg" />
            </div>
            <div className='max-w-[1176px] mx-auto relative h-full'>
                <div className=' absolute top-[25px] bottom-[56px] text-3xl text-white w-full text-center'>
                    全球最前沿和最全风控数据库
                </div>
                {/* {imgItems.map(it => (
                        <motion.div key={it.alt} variants={variantsCDiv} className={`absolute bottom-[${it.bottom}] left-[${it.left}]`}>
                            <Image src={it.src} priority={false} alt="" width={it.width} height={it.height} className='object-cover transition-all hover:!scale-110 cursor-pointer' />
                        </motion.div>
                    ))} */}
                <motion.div variants={variantsCDiv} className='  absolute bottom-[96px] left-0 w-[11.9rem] h-[4.9rem] md:w-[14.875rem] md:h-[6.125rem]'>
                    <Image src="/image/home/advantage1.png" priority={true} alt="每日千万级用户上报" fill={true} className=' transition-all hover:!scale-110 cursor-pointer' />
                </motion.div>
                <motion.div variants={variantsCDiv} className={`absolute bottom-[260px] sm:bottom-[228px] left-[5%] md:left-[16.2%] w-[12.7rem] h-[4.7rem] md:w-[15.875rem] md:h-[5.875rem]`}>
                    <Image src="/image/home/advantage2.png" priority={true} alt="十亿设备指纹信誉数据"  fill={true} className='object-cover transition-all hover:!scale-110 cursor-pointer' />
                </motion.div>
                <motion.div variants={variantsCDiv} className='  absolute bottom-[40px] sm:bottom-[22px] left-[35.7%] w-[7.6rem] h-[4.5rem] md:w-[9.5rem] md:h-[5.625rem]'>
                    <Image src="/image/home/advantage3.png" priority={true} alt="全球风险邮箱库" fill={true} className='object-cover transition-all hover:!scale-110 cursor-pointer' />
                </motion.div>
                <motion.div variants={variantsCDiv} className=' absolute bottom-[178px] sm:bottom-[114px] right-[43%] w-[5.4rem] h-[4.3rem] md:w-[6.75rem] md:h-[5.375rem]'>
                    <Image src="/image/home/advantage4.png" priority={true} alt="全球黑IP库" fill={true} className='object-cover transition-all hover:!scale-110 cursor-pointer' />
                </motion.div>
                <motion.div variants={variantsCDiv} className='  absolute bottom-[226px] sm:bottom-[215px] right-[5%] md:right-[13.8%] w-[11rem] h-[4.9rem] md:w-[13.75rem] md:h-[6.125rem]'>
                    <Image src="/image/home/advantage5.png" priority={true} alt="业界最大安全号码库" fill={true} className='object-cover transition-all hover:!scale-110 cursor-pointer' />
                </motion.div>
                <motion.div variants={variantsCDiv} className=' absolute bottom-[115px] md:bottom-[57px] right-0 w-[12rem] h-[4.8rem] md:w-[15rem] md:h-[6rem]'>
                    <Image src="/image/home/advantage6.png" priority={true} alt="业界最大的恶意网址黑库" fill={true} className='object-cover transition-all hover:!scale-110 cursor-pointer' />
                </motion.div>
            </div>
        </motion.div>
    )
}

export default SixAdvantage