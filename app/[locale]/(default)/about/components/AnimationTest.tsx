"use client"
import React from 'react'
import { motion,Variants } from "framer-motion"

const variantsUl = {
    show: {
        transition: { staggerChildren: 0.3,when: 'beforeChildren', } 
    },
    hidden: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

const variantsLi:Variants = {
    show: {
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: 0.8,
          delay: 0.2
        }
    },
    hidden: {
        x: -100,
        opacity: 0
    }
};

const itemIds = [0, 1, 2, 3, 4];
const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

const AnimationTest = () => {
    return (
        <div>
            <motion.ul>
                {itemIds.map(i => (
                    <motion.li className=' h-[600px] flex justify-center items-center w-full' variants={variantsLi} key={i} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.5 }}>
                        <div className=" w-10 h-10 rounded-full flex-initial mr-12" style={{ border: `2px solid ${colors[i]}` }} />
                        <div className="w-[200px] h-[200px] rounded flex-1" style={{ border: `2px solid ${colors[i]}` }} />
                    </motion.li>
                ))}
            </motion.ul>
        </div>
    )
}

export default AnimationTest