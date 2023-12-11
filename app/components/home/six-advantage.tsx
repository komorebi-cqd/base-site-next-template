"use client";
import React from 'react'
import Image from 'next/image';
import { motion, Variants } from "framer-motion"
import { useIntl } from "react-intl";
import AdvantageDots from "./advantage-dots";
import { useParams } from 'next/navigation';



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
    const params = useParams();
    const { formatMessage } = useIntl();
    return (
        <motion.div variants={variantsDiv} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} className='w-full h-[448px] overflow-hidden relative'>
            <div className='w-full h-[448px] absolute top-0 bottom-0 left-0 right-0'>
                <Image src={"/image/home/advantagebg.png"} priority={true} fill={true} alt="bg" />
            </div>
            <div className={`max-w-[1440px] mx-auto relative h-full text-[rgba(255,255,255,0.85)] ${params?.locale === "en" ? " text-xs sm:text-base lg:text-xl" : " text-base md:text-xl lg:text-xl" }`}>
                <div className=' absolute top-[25px] text-lg md:text-2xl lg:text-3xl text-white w-full text-center'>
                    {formatMessage({ id: "advantage_title" })}
                </div>
                <motion.div variants={variantsCDiv} className={`absolute ${params?.locale === "en" ? "left-[2.36%] bottom-[118px]" : "left-[3.6%] md:left-[7.2%] bottom-[128px]"}`}>
                    <div className={`flex-c text-center advantage-block transition-all  hover:!scale-110 cursor-pointer ${params?.locale === "en" ? "w-[165px] h-[40px] sm:w-[220px] sm:h-[53px] lg:w-[276px] lg:h-[66px] px-2" : "w-[196px] h-[34px] md:w-[238px] md:h-[53px]"}`}>
                        <span>{formatMessage({ id: "advantage_one" })}</span>
                        <AdvantageDots />
                    </div>
                </motion.div>
                <motion.div variants={variantsCDiv} className={`absolute  ${params?.locale === "en" ? "left-[6%] bottom-[300px] sm:left-[20.8%] sm:bottom-[250px]" : "left-[5%] md:left-[20.48%] bottom-[318px] sm:bottom-[270px]"}`}>
                    <div className={`flex-c text-center advantage-block transition-all  hover:!scale-110 cursor-pointer ${params?.locale === "en" ? "w-[178px] h-[43px] sm:w-[240px] sm:h-[57.6px] lg:w-[284px] lg:h-[72px] px-2" : "w-[204px] h-[35px] md:w-[255px] md:h-[52px]"}`}>
                        <span>{formatMessage({ id: "advantage_two" })}</span>
                        <AdvantageDots />
                    </div>
                </motion.div>
                <motion.div variants={variantsCDiv} className={`absolute ${params?.locale === "en" ? "bottom-[60px] sm:bottom-[67px] left-[28%] sm:left-[35.7%]" : "bottom-[80px] sm:bottom-[67px] left-[35.7%]"}`}>
                    <div className={`flex-c text-center advantage-block transition-all  hover:!scale-110 cursor-pointer ${params?.locale === "en" ? "w-[162px] h-[28.8px] sm:w-[217px] sm:h-[38px] lg:w-[270px] lg:h-[48px]" : "w-[7.8rem] h-[36px] md:w-[152px] md:h-[48px]"}`}>
                        <span>{formatMessage({ id: "advantage_three" })}</span>
                        <AdvantageDots />
                    </div>
                </motion.div>
                <motion.div variants={variantsCDiv} className={`absolute text-lg ${params?.locale === "en" ? "bottom-[200px] sm:bottom-[178px] left-[26%] sm:left-[49%]" : "left-[30%] sm:left-[46.25%] bottom-[220px] md:bottom-[200px] sm:bottom-[178px] "}`}>
                    <div className={`flex-c text-center advantage-block transition-all  hover:!scale-110 cursor-pointer  ${params?.locale === "en" ? "w-[170px] h-[27px] sm:w-[210px] sm:h-[37px] lg:w-[250px] lg:h-[46px] text-sm sm:text-base lg:text-xl" : " px-2 py-1 text-base lg:text-xl"}`}>
                        <span>{formatMessage({ id: "advantage_four" })}</span>
                        <AdvantageDots />
                    </div>
                </motion.div>
                <motion.div variants={variantsCDiv} className={`absolute  ${params?.locale === "en" ? "bottom-[252px] sm:bottom-[274px] right-[3%] sm:right-[12%] text-sm sm:text-lg lg:text-[22px] " : "bottom-[268px] md:bottom-[274px] right-[5%] md:right-[15%] lg:right-[22.36%] text-lg lg:text-[22px]"}`}>
                    <div className={`flex-c text-center advantage-block transition-all  hover:!scale-110 cursor-pointer ${params?.locale === "en" ? "w-[194px] h-[39px] sm:w-[242px] sm:h-[60px] lg:w-[290px] lg:h-[66px] px-2" : "px-2 py-1 lg:py-3"}`}>
                        <span>{formatMessage({ id: "advantage_five" })}</span>
                        <AdvantageDots />
                    </div>
                </motion.div>
                <motion.div variants={variantsCDiv} className={`absolute  ${params?.locale === "en" ? "right-[4%] sm:right-[4.86%] bottom-[115px] md:bottom-[92px]" : "right-[3%] md:right-[11.11%] bottom-[174px] sm:bottom-[115px] md:bottom-[92px]"}`}>
                    <div className={`flex-c text-center advantage-block transition-all  hover:!scale-110 cursor-pointer ${params?.locale === "en" ? " w-[170px] h-[36px] sm:w-[227px] sm:h-[48px] lg:w-[284px] lg:h-[60px]" : "px-2 py-1 lg:py-2"}`}>
                        <span>{formatMessage({ id: "advantage_six" })}</span>
                        <AdvantageDots />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default SixAdvantage