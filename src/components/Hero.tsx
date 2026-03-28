"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMounted, setIsMounted] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
    const opacityHero = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
    const scaleHero = useTransform(scrollYProgress, [0, 0.4], [1, 0.99]);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative h-[calc(100vh-6rem)] min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-[#F9F9F9] z-0"
        >
            {/* High-End Editorial Imagery */}
            <motion.div 
                style={{ y: yBackground }}
                className="absolute inset-0 z-0 flex justify-center items-center"
            >
                {/* Legibility Layer: Radial Light Mask */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,249,249,0.8)_0%,transparent_70%)] z-10 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#F9F9F9] via-[#F9F9F9]/20 to-transparent z-10" />
                
                <img 
                    src="/images/competition_shorts_1772819134578.jpg" 
                    alt="Elite Performance Sportswear" 
                    className="w-full h-full object-cover opacity-[0.75] filter grayscale contrast-[115%] brightness-[108%] select-none"
                    draggable={false}
                />
            </motion.div>

            {/* Pure B2B Editorial Content */}
            <motion.div
                style={{ opacity: opacityHero, scale: scaleHero }}
                className="relative z-20 w-full max-w-[1700px] mx-auto px-6 lg:px-24 flex flex-col items-center text-center"
            >
                {/* Soft Clarity Card (Global Visibility Fix) */}
                <div className="absolute inset-0 -m-20 bg-white/5 backdrop-blur-sm rounded-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

                <div className="relative overflow-hidden mb-10 z-10">
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={isMounted ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[12px] font-black uppercase tracking-[1em] text-black/30"
                    >
                        THE FUTURE OF ATHLETIC IDENTITY
                    </motion.p>
                </div>

                <div className="relative mb-28 z-10 px-10 py-6 bg-white/5 backdrop-blur-sm rounded-full">
                    <motion.h1
                        initial={{ y: 100, opacity: 0 }}
                        animate={isMounted ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[10vw] md:text-[8vw] font-black leading-none tracking-[-0.08em] text-black uppercase"
                    >
                        SECONDSKINSTYLE
                    </motion.h1>
                </div>

                <div className="relative overflow-hidden mb-24 z-10">
                    <motion.p
                        initial={{ y: 30, opacity: 0 }}
                        animate={isMounted ? { y: 0, opacity: 1 } : {}}
                        transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-2xl md:text-3xl font-black text-black max-w-4xl tracking-tight uppercase leading-[1.1]"
                    >
                        Elite Custom Sportswear. <br />
                        <span className="text-black/30">Built for Performance.</span>
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isMounted ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="z-10"
                >
                    <button className="h-24 px-32 group bg-black text-white hover:bg-zinc-900 transition-all duration-700 ease-[0.16,1,0.3,1] flex items-center gap-12 border-none shadow-2xl overflow-hidden relative">
                        <span className="relative z-10 text-2xl font-black uppercase tracking-widest">
                            Inquire Now
                        </span>
                        <ArrowRight size={32} className="group-hover:translate-x-4 transition-transform duration-700 ease-[0.16,1,0.3,1]" />
                    </button>
                    <div className="mt-14 text-[10px] font-black text-black/20 uppercase tracking-[0.4em]">
                        Performance Engineering for Elite Clubs
                    </div>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 text-black/10 flex flex-col items-center gap-6 cursor-pointer hover:text-black transition-colors duration-500"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
                <div className="w-[1px] h-24 bg-current opacity-20" />
            </motion.div>
        </section>
    );
}




