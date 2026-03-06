"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

// 1. ARCHITECTURAL PRISM COMPONENT (Non-rectangular glass shards)
const PrismShard = ({ d, color, delay, scrollY }: { d: string; color: string; delay: number; scrollY: any }) => {
    const yParallax = useTransform(scrollY, [0, 1], [0, Math.random() * -300]);
    return (
        <motion.svg
            viewBox="0 0 400 400"
            className="absolute w-[400px] h-[400px] z-10 pointer-events-none drop-shadow-2xl"
            style={{ y: yParallax }}
        >
            <motion.path
                d={d}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.15 }}
                transition={{ delay, duration: 4, ease: "easeInOut" }}
                fill="none"
                stroke={color}
                strokeWidth="0.5"
            />
            <motion.path
                d={d}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.03 }}
                transition={{ delay: delay + 2, duration: 3 }}
                fill={color}
                className="backdrop-blur-xl"
            />
        </motion.svg>
    );
};

// 2. KINETIC SCHEMATIC (Self-drawing blueprints)
const KineticSchematic = ({ x, y, size, delay }: { x: string; y: string; size: number; delay: number }) => (
    <motion.div
        style={{ left: x, top: y, width: size, height: size }}
        className="absolute z-20 pointer-events-none opacity-[0.08]"
    >
        <svg viewBox="0 0 100 100" className="w-full h-full">
            <motion.path
                d="M 10 10 L 90 10 L 90 90 L 10 90 Z M 10 50 L 90 50 M 50 10 L 50 90"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay, duration: 5, ease: "linear", repeat: Infinity, repeatType: "loop" }}
                className="text-luxury-gold"
            />
            <circle cx="50" cy="50" r="1" fill="currentColor" className="text-luxury-gold" />
        </svg>
    </motion.div>
);

// 3. ENERGY FILAMENT (Silk-like glowing particles)
const EnergyFilament = ({ index }: { index: number }) => {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = 15 + Math.random() * 20;

    return (
        <motion.div
            initial={{ opacity: 0, x: `${x}%`, y: `${y}%` }}
            animate={{
                y: [`${y}%`, `${y - 20}%`, `${y}%`],
                opacity: [0, 0.3, 0],
                rotate: [0, 180, 360]
            }}
            transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[0.5px] h-32 bg-gradient-to-t from-transparent via-luxury-gold/40 to-transparent z-0 pointer-events-none blur-[0.5px]"
        />
    );
};

// 4. LIQUID LETTER COMPONENT WITH REFRACTION ECHO
const LetterAnimate = ({ letter, index, delay, scrollYProgress }: { letter: string; index: number; delay: number; scrollYProgress: any }) => {
    const echoY = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const echoSkew = useTransform(scrollYProgress, [0, 1], [0, 15]);

    return (
        <span className="relative inline-block overflow-visible pr-2">
            <motion.span
                initial={{ opacity: 0, y: 80, filter: "blur(20px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                    delay: delay + index * 0.08,
                    duration: 2.2,
                    ease: [0.16, 1, 0.3, 1]
                }}
                className="relative z-10 inline-block drop-shadow-sm"
            >
                {letter === " " ? "\u00A0" : letter}
            </motion.span>

            {/* Architectural Refraction Echo */}
            <motion.span
                style={{ y: echoY, skewX: echoSkew, filter: "url(#refraction)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.12 }}
                transition={{ delay: delay + index * 0.08 + 1, duration: 3 }}
                className="absolute inset-0 z-0 text-luxury-stroke-light pointer-events-none italic"
            >
                {letter === " " ? "\u00A0" : letter}
            </motion.span>
        </span>
    );
};

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isMounted, setIsMounted] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // 1. ARCHITECTURAL PARALLAX VALUES
    const yBrand = useTransform(scrollYProgress, [0, 1], [0, -500]);
    const ySub = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const gridPerspective = useTransform(scrollYProgress, [0, 1], [45, 65]);
    const gridScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    const scrollOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

    // 2. SMOOTHED MOUSE PHYSICS (Springified)
    const springX = useSpring(0, { damping: 65, stiffness: 100 });
    const springY = useSpring(0, { damping: 65, stiffness: 100 });

    // Derived values for refracted elements
    const lightX = useTransform(springX, (v) => v - 600);
    const lightY = useTransform(springY, (v) => v - 600);
    const prismX = useTransform(springX, (v) => (v - 960) * 0.04);
    const prismY = useTransform(springY, (v) => (v - 540) * 0.04);

    useEffect(() => {
        setIsMounted(true);
        const handleMouseMove = (e: MouseEvent) => {
            springX.set(e.clientX);
            springY.set(e.clientY);
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [springX, springY]);

    const brand01 = "SECOND".split("");
    const brand02 = "SKIN".split("");
    const brandStyle = "Style.".split("");

    return (
        <section
            ref={containerRef}
            className="relative h-[130vh] min-h-[1000px] w-full flex items-center justify-center overflow-hidden bg-[#fcf9f2] z-0 cursor-none"
        >
            {/* SVG FILTERS (The Distortion Engine) */}
            <svg className="absolute w-0 h-0">
                <defs>
                    <filter id="refraction">
                        <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="15" xChannelSelector="R" yChannelSelector="G" />
                    </filter>
                </defs>
            </svg>

            {/* 1. INFINITE PERSPECTIVE GRID FLOOR */}
            <div className="absolute bottom-0 left-0 w-full h-[50vh] z-0 overflow-hidden opacity-[0.03]">
                <motion.div
                    style={{
                        rotateX: gridPerspective,
                        scale: gridScale,
                        backgroundImage: "linear-gradient(to right, #d4af37 1px, transparent 1px), linear-gradient(to bottom, #d4af37 1px, transparent 1px)",
                        backgroundSize: "60px 60px"
                    }}
                    className="w-full h-[200%] origin-bottom transform-gpu"
                />
            </div>

            {/* 2. ATMOSPHERIC ENERGY (Filaments & Aurora) */}
            <motion.div
                style={{
                    x: lightX,
                    y: lightY,
                    background: "radial-gradient(circle, rgba(212,175,55,0.12) 0%, rgba(247,231,206,0.01) 60%, transparent 80%)"
                }}
                className={`absolute top-0 left-0 w-[1200px] h-[1200px] rounded-full z-0 pointer-events-none mix-blend-multiply blur-[150px] transition-opacity duration-3000 ${isMounted ? "opacity-30" : "opacity-0"}`}
            />

            {isMounted && Array.from({ length: 12 }).map((_, i) => (
                <EnergyFilament key={`fil-${i}`} index={i} />
            ))}

            {/* 3. THE ARCHITECTURAL PRISMS (Non-rectangular glass) */}
            <motion.div style={{ x: prismX, y: prismY }} className="absolute inset-0 pointer-events-none z-10">
                <PrismShard
                    d="M 50 100 L 350 50 L 300 350 L 100 300 Z"
                    color="#d4af37"
                    delay={1}
                    scrollY={scrollYProgress}
                />
                <PrismShard
                    d="M 100 50 L 300 150 L 250 400 L 50 350 Z"
                    color="#f7e7ce"
                    delay={1.5}
                    scrollY={scrollYProgress}
                />
            </motion.div>

            {/* 4. KINETIC SCHEMATICS (HUD Micro-Detail) */}
            <KineticSchematic x="10vw" y="15vh" size={200} delay={2} />
            <KineticSchematic x="80vw" y="60vh" size={150} delay={3} />

            {/* Technical Scanning Line */}
            <motion.div
                animate={{ top: ["-10%", "110%"] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/20 to-transparent z-40 pointer-events-none shadow-[0_0_15px_rgba(212,175,55,0.2)]"
            />

            {/* 5. THE TYPOGRAPHIC SUPREMACY */}
            <motion.div
                style={{ opacity: scrollOpacity }}
                className="relative z-50 w-full max-w-[1920px] mx-auto px-16 lg:px-32 flex flex-col items-center"
            >

                <div className="relative w-full flex flex-col items-center justify-center -space-y-10 md:-space-y-20 lg:-space-y-28">

                    {/* SECONDSKIN (Liquid + Echo Distortion) */}
                    <motion.div style={{ y: yBrand }} className="relative">
                        <h1 className="text-[14vw] lg:text-[13.5vw] font-serif font-light leading-none tracking-[-0.07em] text-graphite py-6">
                            {brand01.map((l, i) => (
                                <LetterAnimate key={`b1-${i}`} letter={l} index={i} delay={0.4} scrollYProgress={scrollYProgress} />
                            ))}
                            <span className="italic font-light">
                                {brand02.map((l, i) => (
                                    <LetterAnimate key={`b2-${i}`} letter={l} index={i + 6} delay={0.4} scrollYProgress={scrollYProgress} />
                                ))}
                            </span>
                        </h1>
                    </motion.div>

                    {/* Style. (The Architectural Signature) */}
                    <motion.div style={{ y: ySub }} className="relative self-end mr-12 lg:mr-64 group">
                        <h2 className="text-[13vw] lg:text-[11.5vw] font-serif italic text-luxury-gold leading-none tracking-[-0.02em]">
                            {brandStyle.map((l, i) => (
                                <LetterAnimate key={`bs-${i}`} letter={l} index={i} delay={1.6} scrollYProgress={scrollYProgress} />
                            ))}
                        </h2>
                        {/* Precision Expansion Line */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={isMounted ? { scaleX: 1 } : {}}
                            transition={{ delay: 3.2, duration: 2.5, ease: [0.19, 1, 0.22, 1] }}
                            className="h-[2px] w-[110%] -left-[5%] bg-gradient-to-r from-transparent via-luxury-gold to-transparent origin-center mt-6 shadow-[0_5px_20px_rgba(212,175,55,0.3)]"
                        />
                    </motion.div>

                </div>

                {/* 6. SUPREMACY ANCHOR & NAVIGATION */}
                <div className="mt-64 w-full grid grid-cols-1 lg:grid-cols-12 gap-24 items-end">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isMounted ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 3.5, duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-4 border-l-2 border-luxury-gold/60 pl-14"
                    >
                        <p className="text-[11px] font-sans font-bold uppercase tracking-[1.4em] text-luxury-gold mb-14 drop-shadow-md">Architectural Supremacy</p>
                        <p className="text-3xl md:text-4xl font-serif italic text-neutral-500 leading-tight">
                            The definitive intersection of elite engineering and avant-garde form.
                        </p>
                    </motion.div>

                    <div className="lg:col-span-4 flex flex-col items-center gap-6">
                        <motion.div
                            animate={{ opacity: [0.3, 0.1, 0.3], scale: [1, 0.98, 1] }}
                            transition={{ duration: 6, repeat: Infinity }}
                            className="w-32 h-32 border-[0.5px] border-luxury-gold/20 rounded-full flex items-center justify-center relative"
                        >
                            <div className="absolute inset-2 border-[0.5px] border-luxury-gold/10 rounded-full animate-[spin_40s_linear_infinite]" />
                            <span className="text-[7px] font-sans font-bold text-luxury-gold/30 tracking-widest uppercase mb-1">Elite</span>
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="h-12 w-[1px] bg-gradient-to-b from-luxury-gold/50 to-transparent"
                        />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isMounted ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 3.8, duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-4 flex justify-center lg:justify-end"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, letterSpacing: "1.2em", backgroundColor: "#0a0a0a", color: "#d4af37" }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative h-28 px-24 bg-graphite text-white font-sans text-[12px] font-bold uppercase tracking-[1em] transition-all duration-800 flex items-center gap-12 border border-luxury-gold/10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)]"
                        >
                            <span className="relative z-10 flex items-center gap-8">
                                ENTER THE STUDIO
                                <ArrowRight size={16} className="group-hover:translate-x-8 transition-transform duration-800" />
                            </span>
                            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.button>
                    </motion.div>
                </div>

            </motion.div>

            {/* PEAK LUXURY OVERLAYS */}
            <div className="absolute inset-0 z-[5] pointer-events-none luxury-grid opacity-[0.012]" />
            <div className="absolute inset-0 z-[100] pointer-events-none noise-kinetic opacity-[0.015]" />

            {/* Dynamic Cursor Light (HUD) */}
            <motion.div
                style={{ x: springX, y: springY }}
                className={`fixed top-0 left-0 w-12 h-12 border border-luxury-gold/30 rounded-full z-[1000] pointer-events-none flex items-center justify-center transition-opacity duration-1000 ${isMounted ? "opacity-100" : "opacity-0"}`}
            >
                <div className="w-1 h-1 bg-luxury-gold rounded-full" />
                <div className="absolute -inset-4 border border-luxury-gold/10 rounded-full scale-[0.8] animate-ping" />
            </motion.div>

        </section>
    );
}
