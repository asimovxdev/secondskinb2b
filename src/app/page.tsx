"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import Hero from "@/components/Hero";

// Elite Performance Physic
const transitionElite = {
    duration: 1.2,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
};

export default function Home() {
    const containerRef = useRef(null);

    return (
        <main ref={containerRef} className="bg-white min-h-screen text-brand-primary relative selection:bg-brand-accent selection:text-white overflow-x-hidden">
            <Hero />

            <section id="about" className="py-40 md:py-60 px-6 lg:px-24 bg-black text-white relative overflow-hidden">
                <div className="absolute inset-0 luxury-grid opacity-5 pointer-events-none" />
                <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 relative z-10 items-center">
                    <div className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={transitionElite}
                        >
                            <h2 className="text-6xl md:text-9xl font-black mb-16 leading-[0.85] uppercase tracking-tighter">
                                About <br />
                                <span className="text-white/20">Us.</span>
                            </h2>
                        </motion.div>
                        <p className="text-2xl md:text-4xl font-black text-white/60 mb-20 leading-[1.1] tracking-tight">
                            At Second Skin Style, we design premium custom sportswear engineered to move like your <span className="text-white">second skin</span>. Created for running clubs, sports teams, and performance-driven communities, our apparel combines technical fabric, precision printing, and bold identity.
                        </p>
                    </div>

                    <div className="lg:col-span-4 flex flex-col justify-end">
                        <div className="space-y-12 border-l border-white/5 pl-16">
                            <SectorBlock label="Running Clubs" desc="Race tees, singlets, tank tops, and lightweight competition shorts." />
                            <SectorBlock label="Multi-Sport Clubs" desc="Football, cricket, basketball, volleyball, and fitness team kits." />
                            <SectorBlock label="Corporate & Event Teams" desc="Custom marathon and event apparel with strong brand identity." />
                        </div>
                    </div>
                </div>
            </section>

            <section id="solutions" className="py-40 md:py-60 px-6 lg:px-24 bg-white">
                <div className="max-w-[1500px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-32 border-b border-black/[0.05] pb-24 items-end">
                        <div className="lg:col-span-12">
                            <h2 className="text-5xl md:text-9xl font-black text-black mb-8 uppercase tracking-tighter leading-[0.85]">Precision <br />Customization.</h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                        <SpecBlock
                            title="Advanced Logo Printing"
                            desc="Crisp, sharp detailing with long-lasting durability."
                        />
                        <SpecBlock
                            title="Premium Sublimation"
                            desc="Full-coverage, fade-resistant designs infused into the fabric."
                        />
                        <SpecBlock
                            title="Complete Team Branding"
                            desc="Custom colors, names, numbers, sponsor integration."
                        />
                    </div>
                </div>
            </section>

            {/* SEC_3: PERFORMANCE RANGE (BENTO GRID) */}
            <section id="range" className="py-40 md:py-60 bg-[#111111] text-white overflow-hidden relative border-t border-white/5">
                <div className="px-6 lg:px-24 mb-32">
                    <h2 className="text-6xl md:text-9xl font-black mb-16 uppercase tracking-tighter text-white leading-[0.85]">
                        Performance <br /><span className="text-white/20">Range.</span>
                    </h2>
                </div>

                <div className="relative px-6 lg:px-24">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 auto-rows-[300px] md:auto-rows-[400px]">
                        {[
                            { name: "Elite Performance T-Shirts", img: "/images/elite_performance_tshirt_1772819066664.png", code: "EPS-01", span: "md:col-span-2 md:row-span-2" },
                            { name: "Lightweight Tank Tops", img: "/images/lightweight_tank_top_1772819106853.png", code: "LWT-02", span: "md:col-span-1 md:row-span-1" },
                            { name: "Competition Shorts", img: "/images/competition_shorts_1772819134578.png", code: "CMS-03", span: "md:col-span-1 md:row-span-2" },
                            { name: "Full Sports Kits", img: "/images/hero-kit.png", code: "FSK-04", span: "md:col-span-1 md:row-span-1" },
                            { name: "Training Wear", img: "/images/training_wear_set_athletic_1772819192134.png", code: "TRW-05", span: "md:col-span-2 md:row-span-1" },
                            { name: "Event & Marathon", img: "/images/marathon_event_apparel_1772819224570.png", code: "EMA-06", span: "md:col-span-1 md:row-span-1" },
                            { name: "Warm-Up Jackets", img: "/images/training_wear_set_athletic_1772819192134.png", code: "WUJ-07", span: "md:col-span-1 md:row-span-1" }
                        ].map((item, i) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.8 }}
                                className={`group relative bg-[#1A1A1A] overflow-hidden ${item.span}`}
                            >
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000 filter grayscale"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                                <div className="absolute bottom-10 left-10 right-10 flex flex-col items-start gap-4">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] mb-2">{item.code}</span>
                                        <h4 className="text-3xl font-black uppercase text-white leading-none tracking-tighter group-hover:text-[#F5F5F5] transition-colors">{item.name}</h4>
                                    </div>
                                    <div className="h-[1px] w-0 group-hover:w-full bg-white/20 transition-all duration-700" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SEC_4: WHY US */}
            <section id="approach" className="py-40 md:py-60 px-6 lg:px-24 bg-white relative overflow-hidden">
                <div className="max-w-[1500px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24 items-end">
                        <div className="lg:col-span-12">
                            <h2 className="text-6xl md:text-9xl font-black text-black mb-10 uppercase tracking-tighter leading-[0.85]">
                                Strategic <br />
                                <span className="text-black/10">Advantage.</span>
                            </h2>
                        </div>
                    </div>

                    <div className="space-y-0 border-t border-black/5 mb-40">
                        <WhyListRow text="Premium performance fabrics." />
                        <WhyListRow text="High-definition sublimation technology." />
                        <WhyListRow text="Tailored club identity solutions." />
                        <WhyListRow text="Bulk production for teams & events." />
                        <WhyListRow text="Professional design consultation." />
                        <WhyListRow text="Fast and reliable turnaround." />
                    </div>

                    {/* Minimal Neumorphic Closing Section */}
                    <div className="p-12 md:p-24 bg-[#F5F5F5] rounded-3xl shadow-[inset_10px_10px_20px_#e5e5e5,inset_-10px_-10px_20px_#ffffff] flex flex-col items-center text-center relative overflow-hidden max-w-4xl mx-auto">
                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-3xl font-black mb-10 tracking-tight uppercase text-black/60 leading-tight">Elevate your club. Define your presence. <br /><span className="text-black">Perform without compromise.</span></h3>
                            <button className="h-20 px-16 bg-black text-white hover:bg-zinc-800 transition-all duration-500 text-xl font-black uppercase tracking-widest shadow-lg">
                                Begin Brief
                            </button>
                        </div>
                    </div>
                </div>
            </section >

            {/* SEC_6: INQUIRY */}
            <section id="contact" className="py-40 md:py-60 px-6 lg:px-24 bg-black relative overflow-hidden">
                <div className="max-w-[1200px] mx-auto relative z-10">
                    <div className="mb-32 text-center">
                        <h2 className="text-6xl md:text-9xl font-black text-white mb-10 uppercase tracking-tighter leading-[0.85]">Inquire.</h2>
                    </div>

                    <form className="p-12 lg:p-24 bg-[#111111] border border-white/5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Name</label>
                                <input type="text" placeholder="Your Name" className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-white transition-colors font-black text-xl placeholder:text-white/5 text-white" />
                            </div>
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Organization</label>
                                <input type="text" placeholder="Club or Team Name" className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-white transition-colors font-black text-xl placeholder:text-white/5 text-white" />
                            </div>
                            <div className="space-y-4 md:col-span-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Email</label>
                                <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-white transition-colors font-black text-xl placeholder:text-white/5 text-white" />
                            </div>
                            <div className="space-y-4 md:col-span-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Brief</label>
                                <textarea rows={1} placeholder="Tell us about your project..." className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-white transition-colors font-black text-xl resize-none placeholder:text-white/5 text-white"></textarea>
                            </div>
                        </div>
                        <div className="mt-20">
                            <button className="h-20 w-full group !bg-white !text-black hover:!bg-zinc-200 transition-colors duration-500 font-black text-xl uppercase tracking-widest flex items-center justify-center gap-6">
                                SUBMIT BRIEF
                                <ArrowRight size={24} className="group-hover:translate-x-4 transition-transform duration-500" />
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}

/* INDUSTRIAL B&W SUB-COMPONENTS */

function WhyListRow({ text }: { text: string }) {
    return (
        <div className="group border-b border-black/[0.05] py-14 flex flex-col lg:flex-row lg:items-center gap-10 transition-all duration-500 px-8 hover:bg-black hover:text-white">
            <div className="flex-1">
                <h3 className="text-3xl lg:text-5xl font-black transition-all duration-500 uppercase tracking-tighter group-hover:text-white">
                    {text}
                </h3>
            </div>
            <div className="lg:ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-500">
                <ArrowRight className="text-white" size={32} strokeWidth={1} />
            </div>
        </div>
    );
}

function SectorBlock({ label, desc }: { label: string; desc: string }) {
    return (
        <div className="flex gap-10 group cursor-default border-b border-white/5 pb-12 transition-all duration-500 hover:translate-x-2">
            <div className="flex-1">
                <h4 className="text-2xl font-black text-white mb-3 uppercase tracking-tighter transition-colors duration-500 group-hover:text-zinc-400">
                    {label}
                </h4>
                <p className="text-white/40 text-lg leading-snug font-bold transition-colors duration-500 group-hover:text-white/80">
                    {desc}
                </p>
            </div>
        </div>
    );
}

function SpecBlock({ title, desc }: { title: string; desc: string }) {
    return (
        <div className="p-12 border border-black/5 bg-white flex flex-col items-start gap-8 group transition-all duration-500 hover:bg-black hover:border-black">
            <div className="flex justify-between w-full items-center">
                <h4 className="text-2xl font-black uppercase tracking-tighter group-hover:text-white transition-colors duration-500">{title}</h4>
            </div>
            <p className="text-black/40 text-lg leading-snug font-bold group-hover:text-white/60 transition-colors duration-500">
                {desc}
            </p>
        </div>
    );
}

