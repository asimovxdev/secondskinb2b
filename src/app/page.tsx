"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

// Elite Performance Physic
const transitionElite = {
    duration: 1.2,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
};

export default function Home() {
    const containerRef = useRef(null);

    // Slider state for Range Section
    const [rangeIndex, setRangeIndex] = useState(0);
    const rangeItems = [
        { name: "Elite Performance T-Shirts", img: "/images/elite_performance_tshirt_1772819066664.png" },
        { name: "Lightweight Tank Tops / Singlets", img: "/images/lightweight_tank_top_1772819106853.png" },
        { name: "Competition Shorts", img: "/images/competition_shorts_1772819134578.png" },
        { name: "Full Sports Kits", img: "/images/hero-kit.png" },
        { name: "Training Wear", img: "/images/training_wear_set_athletic_1772819192134.png" },
        { name: "Event & Marathon Apparel", img: "/images/marathon_event_apparel_1772819224570.png" },
        { name: "Warm-Up Jackets", img: "/images/training_wear_set_athletic_1772819192134.png" }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setRangeIndex((prev) => (prev + 1) % rangeItems.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [rangeItems.length]);

    return (
        <main ref={containerRef} className="bg-cream min-h-screen text-anthracite relative minimal-grid selection:bg-neon selection:text-black">
            <Navbar />
            <Hero />

            {/* SEC_02: THE STORY - OBSIDIAN CONTRAST FIX */}
            <section id="about" className="py-32 md:py-56 px-6 lg:px-24 bg-obsidian text-cream relative overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 luxury-grid opacity-5 pointer-events-none" />
                <div className="max-w-[1700px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 relative z-10 items-center">
                    <div className="lg:col-span-7">
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={transitionElite}
                            className="luxury-headline !text-white opacity-[0.4] mb-16 select-none"
                        >
                            The <br />
                            <span className="text-luxury-stroke-light !not-italic">Story.</span>
                        </motion.h2>
                        <p className="editorial-text !text-cream !text-3xl md:!text-6xl mb-24 leading-[1.05] drop-shadow-sm">
                            We design premium custom sportswear engineered to move like your <span className="text-luxury-gold italic">secondskinstyle</span>.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-3xl border-t border-white/5 pt-20">
                            <div>
                                <p className="text-[9px] font-sans font-bold uppercase tracking-[0.6em] text-luxury-gold mb-6">Core Objective</p>
                                <p className="text-xl text-neutral-300 leading-relaxed font-serif italic">To provide elite performance wear for sport clubs and communities that demand professional standards.</p>
                            </div>
                            <div>
                                <p className="text-[9px] font-sans font-bold uppercase tracking-[0.6em] text-luxury-gold mb-6">Design DNA</p>
                                <p className="text-xl text-neutral-300 leading-relaxed font-serif italic">A fusion of advanced technical fibers and precision couture tailoring.</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 flex flex-col justify-end">
                        <div className="space-y-16 border-l border-white/10 pl-16">
                            <SectorBlock index="01" label="Elite Clubs" desc="Competition-grade gear for professional performance." />
                            <SectorBlock index="02" label="Global Teams" desc="Unified identity solutions for sports organizations." />
                            <SectorBlock index="03" label="Performance Events" desc="Technical apparel for marathons and corporate challenges." />
                        </div>
                    </div>
                </div>
            </section>

            {/* SEC_03: TECHNICAL SPECS - REFINED ALIGNMENT */}
            <section id="solutions" className="py-32 md:py-56 px-6 lg:px-24 bg-cream">
                <div className="max-w-[1700px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-32 border-b border-graphite/5 pb-24 items-end">
                        <div className="lg:col-span-8">
                            <h2 className="luxury-headline text-graphite mb-8">Precision.</h2>
                            <p className="editorial-text max-w-2xl text-neutral-500">Visual and technical accuracy at every stage of production.</p>
                        </div>
                        <div className="lg:col-span-4 flex flex-col justify-end items-end">
                            <div className="flex gap-12">
                                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-neutral-300">Auth. 2026</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
                        <SpecBlock
                            title="Advanced Logo Printing"
                            desc="Crisp, sharp detailing with long-lasting durability for professional team identities."
                            item="01"
                        />
                        <SpecBlock
                            title="Premium Sublimation"
                            desc="Full-coverage, fade-resistant designs infused directly into the performance fabric."
                            item="02"
                        />
                        <SpecBlock
                            title="Complete Team Branding"
                            desc="Custom colors, names, numbers, and sponsor integration for a unified presence."
                            item="03"
                        />
                    </div>
                </div>
            </section>

            {/* SEC_04: RANGE SLIDER - LUXURY WRAPPER */}
            <section id="range" className="py-32 md:py-56 bg-obsidian text-cream overflow-hidden relative">
                <div className="px-6 lg:px-24 mb-32 flex flex-col lg:flex-row justify-between items-end gap-16">
                    <div className="max-w-4xl">
                        <h2 className="luxury-headline !text-white mb-8">
                            The <br /><span className="text-luxury-gold !not-italic">Collection.</span>
                        </h2>
                        <p className="editorial-text !text-neutral-400">A curated selection of performance gear designed for the modern athlete.</p>
                    </div>

                    <div className="flex gap-8 pb-4">
                        <button
                            onClick={() => setRangeIndex((prev) => (prev - 1 + rangeItems.length) % rangeItems.length)}
                            className="w-16 h-16 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group"
                        >
                            <ArrowRight size={24} strokeWidth={1} className="rotate-180 group-hover:-translate-x-2 transition-transform" />
                        </button>
                        <button
                            onClick={() => setRangeIndex((prev) => (prev + 1) % rangeItems.length)}
                            className="w-16 h-16 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group"
                        >
                            <ArrowRight size={24} strokeWidth={1} className="group-hover:translate-x-2 transition-transform" />
                        </button>
                    </div>
                </div>

                <div className="relative px-6 lg:px-24">
                    <div className="overflow-hidden">
                        <motion.div
                            className="flex gap-8"
                            animate={{ x: `-${rangeIndex * (100 / (typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 3.5))}%` }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {rangeItems.map((item, i) => (
                                <div key={item.name} className="flex-none w-full md:w-[calc(30%-16px)] group cursor-pointer">
                                    <div className="aspect-[3/4] bg-graphite/50 mb-10 overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-1000 ease-in-out">
                                        <div className="absolute inset-0 bg-white/5 z-10" />
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-1000 ease-out"
                                        />
                                        <div className="absolute bottom-8 left-8 text-white/10 text-6xl font-serif italic transition-opacity group-hover:opacity-0">0{i + 1}</div>
                                    </div>
                                    <h4 className="text-3xl font-serif italic text-white mb-4 group-hover:text-luxury-gold transition-colors duration-700">{item.name}</h4>
                                    <div className="flex items-center gap-6 text-[9px] font-sans font-bold uppercase tracking-[0.4em] text-neutral-500">
                                        <span>Haute Performance</span>
                                        <div className="w-1 h-[1px] bg-white/20" />
                                        <span>Elite Series</span>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SEC_05: THE WHY - COUTURE LIST LAYOUT */}
            <section id="approach" className="py-32 md:py-56 px-6 lg:px-24 bg-cream relative overflow-hidden">
                <div className="max-w-[1700px] mx-auto">
                    {/* Editorial Header */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 items-end">
                        <div className="lg:col-span-8">
                            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-luxury-gold mb-8 block">Distinction</span>
                            <h2 className="luxury-headline text-graphite mb-10">
                                The SecondSkinStyle <br />
                                <span className="text-luxury-stroke !not-italic">Philosophy.</span>
                            </h2>
                        </div>
                        <div className="lg:col-span-4">
                            <p className="editorial-text text-neutral-500">
                                Engineering the edge. Every stitch, every pixel, every fiber focused on your presence.
                            </p>
                        </div>
                    </div>

                    {/* Couture List - Replaced Grid for Perfect Alignment */}
                    <div className="space-y-0 border-t border-graphite/10">
                        <WhyListRow index="01" label="Performance Fabrics" desc="Engineered for superior breathability and kinetic freedom." />
                        <WhyListRow index="02" label="HD Sublimation" desc="Vibrant, permanent color infusion that never fades or peels." />
                        <WhyListRow index="03" label="Club Identity" desc="Custom designs that embody the heritage and future of your team." />
                        <WhyListRow index="04" label="Global Infra" desc="Seamless production and distribution from studio to pitch." />
                        <WhyListRow index="05" label="Elite Consultation" desc="Direct access to our senior design leads for absolute precision." />
                    </div>

                    {/* Refined CTA Banner */}
                    <div className="mt-32 p-16 md:p-32 bg-graphite text-cream flex flex-col lg:flex-row justify-between items-center gap-16 relative overflow-hidden group">
                        <div className="absolute inset-0 luxury-grid opacity-10 pointer-events-none" />
                        <div className="relative z-10 max-w-2xl text-center lg:text-left">
                            <h3 className="text-5xl md:text-8xl font-serif italic mb-10 tracking-tight leading-none">Establish <br />Presence.</h3>
                            <p className="editorial-text !text-neutral-400">Stop blending into the pack. Define your presence with professional-grade identity gear.</p>
                        </div>
                        <div className="relative z-10">
                            <button className="button-premium !bg-luxury-gold !text-white !border-none group">
                                <span className="flex items-center gap-6">
                                    Initialize Inquiry
                                    <ArrowRight size={18} className="group-hover:translate-x-4 transition-transform duration-1000" />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </section >

            {/* SEC_06: LUXURY CONTACT */}
            <section id="contact" className="py-32 md:py-56 px-6 lg:px-24 bg-cream relative overflow-hidden border-t border-graphite/5">
                <div className="max-w-[1200px] mx-auto relative z-10">
                    <div className="mb-32 text-center">
                        <h2 className="luxury-headline text-graphite mb-10">Ready?</h2>
                        <p className="editorial-text max-w-xl mx-auto">Initialize a partnership. Tell us about your club&apos;s vision for performance.</p>
                    </div>

                    <form className="p-12 lg:p-32 bg-white/50 backdrop-blur-3xl border border-graphite/5 shadow-[0_80px_150px_-30px_rgba(0,0,0,0.05)]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            <div className="space-y-4">
                                <label className="text-[9px] font-sans font-bold uppercase tracking-[0.5em] text-neutral-400">Identity Name</label>
                                <input type="text" placeholder="Your Name" className="w-full bg-transparent border-b border-graphite/10 py-6 outline-none focus:border-luxury-gold transition-colors font-serif italic text-2xl placeholder:text-neutral-300" />
                            </div>
                            <div className="space-y-4">
                                <label className="text-[9px] font-sans font-bold uppercase tracking-[0.5em] text-neutral-400">Organization</label>
                                <input type="text" placeholder="Club or Team Name" className="w-full bg-transparent border-b border-graphite/10 py-6 outline-none focus:border-luxury-gold transition-colors font-serif italic text-2xl placeholder:text-neutral-300" />
                            </div>
                            <div className="space-y-4 md:col-span-2">
                                <label className="text-[9px] font-sans font-bold uppercase tracking-[0.5em] text-neutral-400">Communication Link</label>
                                <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-graphite/10 py-6 outline-none focus:border-luxury-gold transition-colors font-serif italic text-2xl placeholder:text-neutral-300" />
                            </div>
                            <div className="space-y-4 md:col-span-2">
                                <label className="text-[9px] font-sans font-bold uppercase tracking-[0.5em] text-neutral-400">Requirement Manifest</label>
                                <textarea rows={1} placeholder="Tell us about your project..." className="w-full bg-transparent border-b border-graphite/10 py-6 outline-none focus:border-luxury-gold transition-colors font-serif italic text-2xl resize-none placeholder:text-neutral-300"></textarea>
                            </div>
                        </div>
                        <div className="mt-24">
                            <button className="button-premium !w-full group !border-none">
                                <span className="flex items-center justify-center gap-8 text-lg">
                                    SUBMIT INQUIRY
                                    <ArrowRight size={22} className="group-hover:translate-x-6 transition-transform duration-1000" />
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </section >

            <Footer />
        </main>
    );
}

/* LUXURY SUB-COMPONENTS */

function WhyListRow({ index, label, desc }: { index: string; label: string; desc: string }) {
    return (
        <div className="group border-b border-graphite/10 py-16 flex flex-col lg:flex-row lg:items-center gap-10 transition-all duration-700 px-8 hover:translate-x-4">
            <span className="text-[10px] font-sans font-bold uppercase tracking-[1em] text-neutral-300 transition-all duration-700 group-hover:text-luxury-gold group-hover:scale-110">
                {index}
            </span>
            <div className="lg:w-1/3 relative">
                <h3 className="text-4xl lg:text-5xl font-serif italic text-graphite transition-all duration-700">
                    {label}
                </h3>
                <div className="absolute -bottom-2 left-0 w-0 h-[1.5px] bg-luxury-gold transition-all duration-700 ease-[0.16,1,0.3,1] group-hover:w-24" />
            </div>
            <p className="editorial-text !text-neutral-500 lg:w-1/2 !text-xl lg:!text-2xl transition-all duration-700 group-hover:text-graphite">
                {desc}
            </p>
            <div className="lg:ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-700">
                <ArrowRight className="text-luxury-gold" size={40} strokeWidth={0.5} />
            </div>
        </div>
    );
}

function SectorBlock({ index, label, desc }: { index: string; label: string; desc: string }) {
    return (
        <div className="flex gap-10 group cursor-default border-b border-white/5 pb-16 transition-all duration-700 hover:translate-x-4">
            <span className="text-luxury-gold font-bold text-[10px] pt-2 tracking-[0.5em] uppercase transition-all duration-700 group-hover:scale-125 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]">
                {index}
            </span>
            <div className="flex-1">
                <div className="relative inline-block mb-6">
                    <h4 className="text-3xl font-serif italic text-white transition-colors duration-700">
                        {label}
                    </h4>
                    <div className="absolute -bottom-2 left-0 w-0 h-[2px] bg-luxury-gold transition-all duration-700 ease-[0.16,1,0.3,1] group-hover:w-full" />
                </div>
                <p className="text-neutral-300 text-lg leading-relaxed font-serif transition-colors duration-700 group-hover:text-white">
                    {desc}
                </p>
            </div>
        </div>
    );
}

function SpecBlock({ title, desc, item }: { title: string; desc: string; item: string }) {
    return (
        <div className="py-20 flex flex-col items-start gap-12 group transition-all duration-1000">
            <div className="flex justify-between w-full items-center">
                <div className="h-[1px] w-16 bg-graphite/10 group-hover:w-full group-hover:bg-luxury-gold transition-all duration-1000 ease-[0.16,1,0.3,1]" />
                <span className="text-[9px] font-bold text-neutral-300 ml-8 tracking-[0.4em]">ELITE_SPEC_{item}</span>
            </div>
            <div>
                <h3 className="text-4xl font-serif italic text-graphite mb-8">{title}</h3>
                <p className="text-neutral-500 font-serif text-xl leading-relaxed group-hover:text-graphite transition-colors duration-700">{desc}</p>
            </div>
            <div className="p-4 border border-graphite/10 group-hover:bg-graphite group-hover:border-graphite transition-all duration-700">
                <ArrowRight size={20} className="text-graphite group-hover:text-white group-hover:translate-x-3 transition-all duration-700" />
            </div>
        </div>
    );
}

