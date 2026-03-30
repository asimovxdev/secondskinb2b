'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Transform background opacity based on scroll
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.8)"]
  );

  const headerBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(12px)"]
  );

  const headerBorder = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.05)"]
  );

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Performance", href: "/#performance" },
    { name: "Why Us", href: "/#why-us" },
  ];

  return (
    <motion.header
      style={{ 
        backgroundColor: headerBg,
        backdropFilter: headerBlur,
        borderBottom: `1px solid`,
        borderColor: headerBorder
      }}
      className="fixed top-0 left-0 right-0 z-[100] transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative w-10 h-10">
            <Image 
              src="/images/logo.svg" 
              alt="Second Skin Style" 
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-xl font-black tracking-[-0.08em] uppercase italic transition-colors group-hover:text-black/70">
            SECONDSKINSTYLE
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-[10px] font-black uppercase tracking-[0.2em] text-black/50 hover:text-black transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black transition-all group-hover:w-full" />
            </Link>
          ))}
          <Link href="/contact">
            <button className="bg-black text-white px-6 py-3 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-black/80 transition-all">
              Initialize Contact
            </button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white border-b border-black/5 p-8 flex flex-col gap-6 md:hidden"
        >
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-black uppercase tracking-tighter"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
            <button className="bg-black text-white w-full py-6 text-xl font-black uppercase tracking-widest">
              Contact Us
            </button>
          </Link>
        </motion.div>
      )}
    </motion.header>
  );
}
