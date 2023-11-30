import React from 'react'
import { useRef } from "react";
import { motion, AnimatePresence, useCycle, SVGMotionProps } from "framer-motion";
import { useDimensions } from "../utils/use-dimensions";
import { navList } from "../utils/data";
import Link from 'next/link';
import { usePathname } from 'next/navigation'


const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 100% 0px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(0px at 100% 0px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

const Path = (props: React.JSX.IntrinsicAttributes & SVGMotionProps<SVGPathElement> & React.RefAttributes<SVGPathElement>) => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="#fff"
        strokeLinecap="round"
        {...props}
    />
);


const MenuToggle = ({ toggle }: { toggle: () => void }) => (
    <button onClick={toggle} className=' absolute top-1/2 -translate-y-1/2 w-12 h-12 right-8 flex items-center justify-center'>
        <svg width="23" height="23" viewBox="0 0 23 23">
            <Path
                variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" }
                }}
            />
            <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                }}
                transition={{ duration: 0.1 }}
            />
            <Path
                variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" }
                }}
            />
        </svg>
    </button>
);

const itemIds = [0, 1, 2, 3, 4];

const menuUlVariants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

const menuLiVariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1]}
    }
};

const MobileMenu = () => {
    const pathname = usePathname();
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    return (
        <div className='md:hidden'>
            <motion.nav
                initial={false}
                animate={isOpen ? "open" : "closed"}
                custom={height}
                ref={containerRef}
                className=' absolute top-0 left-0 right-0 bottom-0 w-full'
            >
                <motion.div className=" absolute w-full top-0 left-0 right-0 h-screen bg-[--header-bg]" variants={sidebar} />
                <AnimatePresence>
                    {
                        isOpen &&
                        <motion.ul variants={menuUlVariants} initial="closed" exit="exit" className=' pl-16 pt-36 md:pt-[--header-height] flex flex-col items-start gap-y-7'>
                            {navList.map(it => (
                                <motion.li
                                    key={it.id}
                                    variants={menuLiVariants}
                                >
                                    <Link href={it.link} onClick={() => toggleOpen()} className={`text-[#C7DAFF] transition-all hover:text-white font-bold relative before:absolute before:h-1 before:transition-all before:-bottom-4 before:rounded hover:before:w-5 before:bg-white before:left-0 ${(pathname === "/" && it.link === "/") || (pathname !== "/" && it.link !== "/" && pathname?.startsWith(it.link)) ? "text-white before:w-5" : "before:w-0"}`}>
                                        {it.text}
                                    </Link>
                                </motion.li>
                            ))}
                        </motion.ul>
                    }
                </AnimatePresence>
                <MenuToggle toggle={() => toggleOpen()} />
            </motion.nav>
        </div>
    )
}

export default MobileMenu;