'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Send, Mail, Phone, MapPin } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
};

const inputStyles = "w-full bg-transparent border-b-2 border-black/10 py-4 text-xl md:text-2xl font-bold tracking-tight focus:outline-none focus:border-black transition-colors placeholder:text-black/20";
const labelStyles = "text-[10px] font-black uppercase tracking-[0.3em] text-black/40 mb-2 block";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-white selection:bg-black selection:text-white">
      {/* Contact Content */}

      <section className="pt-48 pb-24 px-6 md:px-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24">
          {/* Header & Info */}
          <div className="space-y-16">
            <motion.div {...fadeIn}>
              <h1 className="text-6xl md:text-9xl font-black tracking-[-0.06em] leading-[0.8] uppercase mb-8">
                GET IN<br />TOUCH
              </h1>
              <p className="text-2xl md:text-3xl font-bold italic tracking-tight text-black/40">
                Partner with us to define your club's elite identity.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-6 group">
                <Mail className="w-6 h-6 opacity-20 group-hover:opacity-100 transition-all" />
                <span className="text-xl font-black uppercase italic tracking-tighter">partnership@secondskin.style</span>
              </div>
              <div className="flex items-center gap-6 group">
                <Phone className="w-6 h-6 opacity-20 group-hover:opacity-100 transition-all" />
                <span className="text-xl font-black uppercase italic tracking-tighter">+1 234 567 890</span>
              </div>
              <div className="flex items-center gap-6 group">
                <MapPin className="w-6 h-6 opacity-20 group-hover:opacity-100 transition-all" />
                <span className="text-xl font-black uppercase italic tracking-tighter">Elite Design Studio, London</span>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubmit}
                  className="space-y-12"
                >
                  <div className="grid md:grid-cols-2 gap-12">
                    <div>
                      <label className={labelStyles}>Full Name</label>
                      <input type="text" required placeholder="John Doe" className={inputStyles} />
                    </div>
                    <div>
                      <label className={labelStyles}>Email Address</label>
                      <input type="email" required placeholder="john@example.com" className={inputStyles} />
                    </div>
                  </div>

                  <div>
                    <label className={labelStyles}>Club / Team Name</label>
                    <input type="text" required placeholder="Elite Running Club" className={inputStyles} />
                  </div>

                  <div>
                    <label className={labelStyles}>Interest Sector</label>
                    <select aria-label="Select Interest Sector" className={inputStyles + " appearance-none cursor-pointer"}>
                      <option value="running">Running Clubs</option>
                      <option value="multi-sport">Multi-Sport Clubs</option>
                      <option value="corporate">Corporate & Event Teams</option>
                      <option value="custom">Bespoke Design</option>
                    </select>
                  </div>

                  <div>
                    <label className={labelStyles}>Project Brief</label>
                    <textarea 
                      required 
                      rows={4} 
                      placeholder="Tell us about your requirements..." 
                      className={inputStyles + " resize-none"}
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isLoading}
                    className="w-full bg-black text-white p-8 font-black uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-black/90 transition-all disabled:opacity-50"
                  >
                    {isLoading ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <span className="text-xl">Initialize Contact</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-black text-white p-16 md:p-24 rounded-[3rem] text-center space-y-8"
                >
                  <CheckCircle2 className="w-24 h-24 mx-auto mb-12 animate-pulse" />
                  <h2 className="text-5xl font-black uppercase tracking-tighter italic">Message Received</h2>
                  <p className="text-2xl font-bold text-white/50 italic">
                    Our elite design consultation team will contact you within 24 hours.
                  </p>
                  <Link href="/" className="inline-block mt-12 bg-white text-black px-12 py-5 font-black uppercase tracking-widest hover:bg-brand-gray-medium transition-all">
                    Return to Portal
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <footer className="py-24 border-t border-black/5 px-6 md:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-black tracking-[0.5em] text-black/20 uppercase">
            SEC_SKIN_ELITE // DATA_SECURED_ENDPOINT
          </p>
          <div className="flex gap-12">
            {["INSTAGRAM", "TWITTER", "LINKEDIN"].map(social => (
              <span key={social} className="text-[10px] font-black tracking-widest text-black/40 hover:text-black cursor-pointer transition-colors">
                {social}
              </span>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
