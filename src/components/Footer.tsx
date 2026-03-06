import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/5 pt-20 pb-12">
      <div className="max-w-[1600px] mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">
          <div className="lg:col-span-6">
            <Link href="/" className="inline-block group mb-12">
              <span className="text-3xl font-bold tracking-tight text-anthracite block mb-4 uppercase transition-all group-hover:text-neon">SECONDSKINSTYLE</span>
              <span className="editorial-text !text-neutral-400">Elite Custom Sportswear • Engineered for Performance</span>
            </Link>
            <p className="text-2xl text-neutral-400 font-medium leading-tight max-w-lg mb-16">
              The union of <span className="text-anthracite font-bold italic">athletic peak</span> and absolute <span className="text-anthracite font-bold italic">identity</span>.
            </p>
            <div className="flex gap-10">
              <FooterSocial label="Instagram" href="#" />
              <FooterSocial label="LinkedIn" href="#" />
              <FooterSocial label="X" href="#" />
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] mb-12 text-neutral-200">Catalog</h4>
            <ul className="space-y-6">
              <FooterLink href="#about">Mission</FooterLink>
              <FooterLink href="#solutions">Solutions</FooterLink>
              <FooterLink href="#range">Products</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </ul>
          </div>

          <div className="lg:col-span-3 lg:col-start-10">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-10 text-neutral-300">Inquiries</h4>
            <Link href="mailto:elite@secondskin.style" className="text-xl font-bold uppercase tracking-tight border-b border-neon pb-2 hover:bg-neon hover:text-black px-2 transition-all duration-500">
              elite@secondskin.style
            </Link>
          </div>
        </div>

        <div className="pt-20 border-t border-black/[0.03] flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-300">
            © {new Date().getFullYear()} SECONDSKINSTYLE / GLOBAL PERFORMANCE HUB
          </div>
          <div className="flex items-center gap-8">
            <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
              Verified Production Spec
            </div>
            <div className="h-4 w-[1px] bg-black/5" />
            <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
              Ver: 8.0.1
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-xs font-black uppercase tracking-[0.3em] text-neutral-400 hover:text-neon hover:translate-x-3 transition-all duration-700 flex items-center group">
        {children}
        <ArrowUpRight size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-500 text-neon" />
      </Link>
    </li>
  );
}

function FooterSocial({ label, href }: { label: string; href: string }) {
  return (
    <Link href={href} className="text-[10px] font-black uppercase tracking-[0.4em] text-black border-b border-black/10 pb-1 hover:border-neon hover:text-neon transition-all duration-500">
      {label}
    </Link>
  );
}
