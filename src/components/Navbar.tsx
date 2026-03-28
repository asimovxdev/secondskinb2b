"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className={`sticky top-0 left-0 right-0 z-50 bg-white py-6 border-b border-black/5 flex items-center h-24`}
        >
            <div className="max-w-[1500px] mx-auto w-full px-6 lg:px-24 flex justify-between items-center text-black">
                <Link href="/" className="group flex items-center gap-2">
                    <span className="text-2xl font-black tracking-[-0.08em] uppercase text-black">
                        SECONDSKINSTYLE
                    </span>
                </Link>

                <div className="hidden lg:flex space-x-14 items-center">
                    {[
                        { name: "About Us", id: "about" },
                        { name: "Customization", id: "solutions" },
                        { name: "Range", id: "range" },
                        { name: "Why Us", id: "approach" }
                    ].map((item) => (
                        <NavLink key={item.name} href={`#${item.id}`}>
                            {item.name}
                        </NavLink>
                    ))}
                    <Link href="#contact" className="button-premium !h-12 !px-10 !bg-black !text-white hover:!bg-zinc-800 transition-colors">
                        Inquiry
                    </Link>
                </div>

                <button
                    className={`lg:hidden p-2 transition-colors text-black`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 bg-white z-40 lg:hidden flex flex-col p-12"
                    >
                        <div className="flex justify-between items-center mb-24">
                            <span className="text-xl font-bold tracking-widest uppercase text-black">Menu</span>
                            <button onClick={() => setIsOpen(false)} className="p-4 bg-black text-white rounded-full">
                                <X size={24} />
                            </button>
                        </div>

                        <div className="space-y-10 flex flex-col">
                            {[
                                { name: "About Us", id: "about" },
                                { name: "Customization", id: "solutions" },
                                { name: "Range", id: "range" },
                                { name: "Why Us", id: "approach" }
                            ].map((item) => (
                                <Link
                                    key={item.name}
                                    href={`#${item.id}`}
                                    className="text-5xl font-black uppercase tracking-tighter text-black hover:text-zinc-500 transition-all duration-300"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        <div className="mt-auto">
                            <Link href="#contact" onClick={() => setIsOpen(false)} className="button-premium w-full text-center !h-16 !text-sm !bg-black !text-white">
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
            className="relative text-[12px] font-black uppercase tracking-[0.2em] transition-colors duration-500 group text-black/40 hover:text-black"
        >
            {children}
            <motion.span
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-black transition-all duration-500 group-hover:w-full"
            />
        </Link>
    );
}


