'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { sportsData } from '@/lib/sportsData';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Shield, Zap, Target, Users, Paintbrush, Award, ArrowUpRight } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" as any }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.15 } }
};

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const imageParallax = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div ref={containerRef} className="relative">
      {/* Premium Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-black z-[110] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Hero Section - Elite Reveal */}
      <motion.section 
        style={{ scale: heroScale, opacity: heroOpacity }}
        className="sticky top-0 h-screen flex items-center justify-center bg-white z-0 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero.png" 
            alt="Elite Athlete" 
            fill 
            className="object-cover opacity-20 grayscale brightness-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white" />
        </div>

        <div className="relative z-10 text-center space-y-8 px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "circOut" }}
          >
            <h1 className="text-7xl md:text-[10rem] font-black tracking-[-0.06em] leading-[0.85] uppercase">
              SECOND<br />SKIN<br />STYLE
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12"
          >
            <p className="text-xl md:text-2xl font-bold tracking-tight uppercase italic underline decoration-2 underline-offset-8">
              Elite Custom Sportswear.
            </p>
            <p className="text-xl md:text-2xl font-light tracking-widest uppercase opacity-40">
              Built for Performance.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-[10px] font-black tracking-[0.3em] uppercase opacity-40">Scroll to Explore</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-black to-transparent" />
        </motion.div>
      </motion.section>

      {/* Content Wrapper - Elevated Above Hero */}
      <div className="relative z-10 bg-white shadow-[0_-50px_100px_-20px_rgba(0,0,0,0.1)]">
        
        {/* About Us - Cinematic Reveal */}
        <section id="about" className="py-32 md:py-64 px-6 md:px-24 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03] pointer-events-none">
             <div className="w-full h-full border-l border-black rotate-12 translate-x-12" />
          </div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-16 items-start relative z-10">
            <motion.div {...fadeIn} className="lg:col-span-4 translate-y-4">
              <span className="text-xs font-black tracking-[0.5em] uppercase text-black/30 border-l-2 border-black pl-4">Identification</span>
              <h2 className="text-4xl font-black mt-4 uppercase">About Us</h2>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="lg:col-span-8"
            >
        {/* Business Introduction */}
        <section id="services" className="py-24 bg-brand-gray-light px-6 md:px-24">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeIn} className="max-w-4xl">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-12">
                Custom Sportswear for<br />Teams & Clubs
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                <p className="text-xl md:text-2xl font-bold leading-tight tracking-tight">
                  We manufacture custom sports uniforms for cricket, soccer, volleyball, running clubs and other
                  sports. Add your team logo, player names, numbers and colors. 
                </p>
                <div className="space-y-6">
                   <p className="text-lg text-black/60 font-medium leading-relaxed italic">
                    Upload your design or request our design support. Samples available before bulk orders.
                  </p>
                  <div className="flex gap-4">
                     <button className="bg-black text-white px-8 py-4 text-xs font-black uppercase tracking-[0.2em] hover:bg-black/80 transition-all">
                       Explore Capabilities
                     </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
            </motion.div>
          </div>
        </section>

        {/* Premium Sports Categories (Bento Grid) */}
        <section id="categories" className="py-32 px-6 md:px-24 border-t border-black/5 bg-brand-gray-light">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeIn} className="mb-16">
               <span className="text-xs font-black tracking-[0.5em] uppercase text-black/30">Industry Verticals</span>
               <h2 className="text-4xl md:text-6xl font-black mt-4 uppercase tracking-tighter">Sports Categories</h2>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-[auto] gap-4 auto-rows-[300px]">
              {sportsData.map((cat, i) => {
                const isSmall = i === 3 || i === 4;
                const bentoClasses = [
                  "md:col-span-2 md:row-span-2", // 1 (Cricket) - Large featured
                  "md:col-span-2 md:row-span-1", // 2 (Soccer) - Wide
                  "md:col-span-2 md:row-span-1", // 3 (Running) - Wide
                  "md:col-span-1 md:row-span-1", // 4 (Custom) - Small square
                  "md:col-span-1 md:row-span-1", // 5 (Volleyball) - Small square
                  "md:col-span-2 md:row-span-1"  // 6 (More Sports) - Wide
                ];
                
                return (
                  <Link 
                    key={cat.id} 
                    href={`/sports/${cat.id}`}
                    className={`relative overflow-hidden group flex flex-col justify-end cursor-pointer bg-black ${bentoClasses[i] || 'md:col-span-1 md:row-span-1'} p-8 md:p-12 hover:scale-[0.98] transition-transform duration-500`}
                  >
                    <Image 
                      src={cat.img} 
                      alt={cat.name} 
                      fill 
                      className="object-cover opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1s]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity group-hover:from-black/70" />
                    
                    <div className="relative z-10 flex flex-col h-full justify-between">
                      <div className="self-end opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 group-hover:translate-x-2 transition-all absolute top-0 right-0 p-4">
                        <ArrowUpRight className="w-8 h-8 text-white" />
                      </div>
                      <div className="mt-auto w-full">
                         <span className="text-[10px] md:text-xs font-black text-white/50 tracking-[0.3em] uppercase block mb-1">0{i+1} // {cat.id}</span>
                         <h3 className={`font-black text-white uppercase tracking-tighter mt-2 group-hover:-translate-y-2 transition-transform duration-500 ${isSmall ? 'text-2xl md:text-3xl leading-none' : 'text-3xl md:text-5xl leading-[0.9]'} break-words`}>{cat.name}</h3>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>


        <section id="performance" className="py-32 md:py-48 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeIn} className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <span className="text-xs font-black tracking-[0.5em] uppercase text-black/30">Target Sectors</span>
                <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mt-4">Designed for<br />Champions</h2>
              </div>
            </motion.div>
            
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid lg:grid-cols-3 gap-6"
            >
              {[
                { 
                  title: "Running Clubs", 
                  desc: "Race tees, singlets, tank tops, and lightweight competition shorts.",
                  img: "/images/running.png",
                  tag: "01"
                },
                { 
                  title: "Multi-Sport Clubs", 
                  desc: "Football, cricket, basketball, volleyball, and fitness team kits.",
                  img: "/images/multi_sport.png",
                  tag: "02"
                },
                { 
                  title: "Corporate & Event Teams", 
                  desc: "Custom marathon and event apparel with strong brand identity.",
                  img: "/images/hero.png", // Reuse hero for corporate
                  tag: "03"
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  variants={fadeIn}
                  className="group relative h-[600px] overflow-hidden bg-black flex items-end p-12"
                >
                  <Image 
                    src={item.img} 
                    alt={item.title} 
                    fill 
                    className="object-cover opacity-40 grayscale group-hover:scale-110 group-hover:opacity-60 transition-all duration-1000"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent z-10" />
                  
                  <div className="relative z-20 space-y-6">
                    <span className="text-4xl font-black text-white/20 group-hover:text-white transition-colors">{item.tag}</span>
                    <h3 className="text-4xl font-black text-white uppercase tracking-tighter">{item.title}</h3>
                    <p className="text-lg text-white/50 font-bold italic translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      {item.desc}
                    </p>
                    <Link href="/contact">
                       <button className="flex items-center gap-2 text-white font-black text-xs uppercase tracking-widest pt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                         Get Project Quote <ArrowUpRight className="w-4 h-4" />
                       </button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Precision Customization - Structural Layout */}
        <section className="py-32 md:py-48 px-6 md:px-24 bg-black text-white rounded-t-[5rem] overflow-hidden relative">
           <div className="absolute top-0 right-0 p-24 opacity-[0.05] pointer-events-none">
              <Shield className="w-[40rem] h-[40rem]" />
           </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div {...fadeIn} className="mb-24">
              <span className="text-xs font-black tracking-[0.5em] uppercase text-white/30">Technology</span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mt-4">Precision<br />Customization</h2>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-16">
              {[
                {
                  title: "Advanced Logo Printing",
                  desc: "Crisp, sharp detailing with long-lasting durability.",
                  icon: Paintbrush
                },
                {
                  title: "Premium Sublimation",
                  desc: "Full-coverage, fade-resistant designs infused into the fabric.",
                  icon: Award
                },
                {
                  title: "Complete Team Branding",
                  desc: "Custom colors, names, numbers, sponsor integration.",
                  icon: Shield
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  {...fadeIn}
                  className="flex flex-col gap-8 group p-8 border border-white/5 hover:border-white/20 transition-colors bg-white/[0.02]"
                >
                  <div className="w-16 h-16 bg-white text-black flex items-center justify-center group-hover:bg-brand-gray-medium transition-colors">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{item.title}</h3>
                    <div className="w-12 h-1 bg-white mb-6 group-hover:w-full transition-all duration-700" />
                    <p className="text-lg text-white/40 font-bold italic">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Performance Range - High Density List (No Images as requested) */}
        <section className="bg-white py-48 px-6 md:px-24">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeIn} className="mb-24 text-center">
              <span className="text-xs font-black tracking-[0.2em] uppercase text-black/30">The Collective</span>
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mt-4">Our Performance Range</h2>
            </motion.div>
            
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {[
                "Elite Performance T-Shirts",
                "Lightweight Tank Tops / Singlets",
                "Competition Shorts",
                "Full Sports Kits",
                "Training Wear",
                "Event & Marathon Apparel",
                "Warm-Up Jackets"
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  variants={fadeIn}
                  className="bg-brand-gray-light p-8 border border-black/5 flex flex-col justify-between group hover:bg-black hover:text-white transition-all duration-500 h-64"
                >
                  <span className="text-4xl font-black opacity-5 group-hover:opacity-20 mb-4">{i + 1}</span>
                  <span className="font-black uppercase tracking-tighter text-2xl leading-none">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Second Skin Style - Visual Layout */}
        <section id="why-us" className="py-32 md:py-48 px-6 md:px-24 overflow-hidden relative bg-brand-gray-light">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-32">
            <motion.div {...fadeIn}>
              <span className="text-xs font-black tracking-[0.5em] uppercase text-black/30">Competitive Advantage</span>
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter mt-4 uppercase italic">Why Second<br />Skin Style</h2>
              <div className="mt-12 h-[400px] relative overflow-hidden group">
                  <Image 
                    src="/images/running.png" 
                    alt="Technical Material" 
                    fill 
                    className="object-cover grayscale brightness-75 transition-transform duration-[2s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <p className="absolute bottom-12 left-12 right-12 text-2xl font-black text-white uppercase italic leading-none">
                    Performance is not an option. It's our DNA.
                  </p>
              </div>
            </motion.div>
            
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              className="space-y-4"
            >
              {[
                "Premium performance fabrics",
                "High-definition sublimation technology",
                "Tailored club identity solutions",
                "Bulk production for teams & events",
                "Professional design consultation",
                "Fast and reliable turnaround"
              ].map((benefit, i) => (
                <motion.div 
                  key={i}
                  variants={fadeIn}
                  className="group flex items-center justify-between py-10 border-b border-black/10 hover:border-black transition-colors"
                >
                  <span className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter">{benefit}</span>
                  <ChevronRight className="w-8 h-8 opacity-20 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Footer / Final CTA - High Impact */}
        <section className="py-64 px-6 md:px-24 bg-black text-white text-center relative overflow-hidden">
           <Image 
              src="/images/multi_sport.png" 
              alt="Final CTA" 
              fill 
              className="object-cover opacity-30 grayscale pointer-events-none"
           />
           <div className="absolute inset-0 bg-black/60" />

          <motion.div 
            {...fadeIn}
            className="max-w-5xl mx-auto space-y-16 relative z-10"
          >
            <div className="space-y-6">
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase italic leading-none">
                Elevate your club.<br />Define your presence.
              </h2>
              <p className="text-2xl md:text-4xl font-light tracking-widest uppercase opacity-40">
                Perform without compromise.
              </p>
            </div>
            
            <Link href="/contact" className="inline-block">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group bg-white text-black px-16 py-8 font-black uppercase tracking-[0.2em] overflow-hidden"
              >
                <span className="relative z-10 text-xl">Initialize Project</span>
                <motion.div 
                  className="absolute inset-0 bg-brand-gray-medium translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                />
              </motion.button>
            </Link>
          </motion.div>
        </section>

        <footer className="py-12 border-t border-black/5 text-center bg-white px-6">
          <p className="text-[10px] font-black tracking-[0.5em] text-black/20 uppercase">
            SECONDSKINSTYLE &copy; {new Date().getFullYear()} // ELITE SPORTSWEAR SYSTEMS // ALL RIGHTS RESERVED
          </p>
        </footer>
      </div>
    </div>
  );
}
