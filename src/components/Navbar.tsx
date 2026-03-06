"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? "bg-white/80 backdrop-blur-3xl py-3 shadow-[0_1px_0_0_rgba(0,0,0,0.05)]" : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-[1700px] mx-auto px-6 lg:px-20 flex justify-between items-center transition-all duration-700">
                <Link href="/" className="group flex items-center gap-2">
                    <span className="text-xl font-bold tracking-tight text-anthracite uppercase">
                        SECONDSKINSTYLE
                    </span>
                    <div className="h-1.5 w-1.5 bg-neon rounded-full" />
                </Link>

                <div className="hidden lg:flex space-x-12 items-center">
                    {["About", "Solutions", "Range", "Approach"].map((item) => (
                        <NavLink key={item} href={`#${item.toLowerCase()}`}>
                            {item}
                        </NavLink>
                    ))}
                    <Link href="#contact" className="button-premium !h-10 !px-8">
                        Inquire
                    </Link>
                </div>

                <button
                    className="md:hidden text-black p-2 hover:text-neon transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-white z-50 md:hidden flex flex-col p-12"
                    >
                        <div className="flex justify-between items-center mb-24">
                            <span className="text-xl font-black tracking-widest uppercase">Menu</span>
                            <button onClick={() => setIsOpen(false)} className="p-4 bg-black text-white">
                                <X size={24} />
                            </button>
                        </div>

                        <div className="space-y-8 flex flex-col">
                            {["About", "Solutions", "Range", "Approach"].map((item) => (
                                <Link
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-6xl font-black uppercase tracking-tighter text-black hover:text-neon hover:translate-x-4 transition-all duration-500"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>

                        <div className="mt-auto">
                            <Link href="#contact" onClick={() => setIsOpen(false)} className="button-premium w-full text-center !h-16 !text-sm">
                                Start a Project
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="relative text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-400 hover:text-anthracite transition-colors duration-500 group"
        >
            {children}
            <motion.span
                className="absolute -bottom-1 left-0 w-0 h-[2px] bg-neon transition-all duration-700 group-hover:w-full"
            />
        </Link>
    );
}
