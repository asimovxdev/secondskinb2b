import Link from "next/link";
import { ArrowUpRight, Mail, Phone, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-40 pb-20 border-t border-white/5">
      <div className="max-w-[1700px] mx-auto px-6 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-24 mb-40">
          <div className="lg:col-span-6">
            <Link href="/" className="inline-block mb-16">
              <span className="text-4xl font-black tracking-tighter uppercase">
                SECONDSKIN
                <span className="text-black/40">STYLE</span>
              </span>
            </Link>
            <p className="text-xl text-white/40 font-bold leading-tight max-w-xl mb-16 tracking-tight uppercase">
              Elite Custom Sportswear. Built for Performance.
            </p>
            <p className="text-sm text-white/20 font-bold leading-relaxed max-w-md mb-16">
              At Second Skin Style, we design premium custom sportswear engineered to move like your second skin. Built for running clubs, sports teams, and performance-driven communities.
            </p>
            <div className="flex gap-12">
              <FooterSocial label="Instagram" href="#" />
              <FooterSocial label="LinkedIn" href="#" />
              <FooterSocial label="X" href="#" />
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-8">
            <h4 className="text-[11px] font-black uppercase tracking-[0.6em] mb-12 text-white/20">Navigation</h4>
            <ul className="space-y-6">
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#solutions">Customization</FooterLink>
              <FooterLink href="#range">Range</FooterLink>
              <FooterLink href="#approach">Why Us</FooterLink>
            </ul>
          </div>

          <div className="lg:col-span-3 lg:col-start-10">
            <h4 className="text-[11px] font-black uppercase tracking-[0.6em] mb-12 text-white/20">Deployment</h4>
            <div className="space-y-10">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500">
                  <Mail size={20} className="text-white/40 group-hover:text-black" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/20 mb-1">Comm_Channel</span>
                  <Link href="mailto:elite@secondskin.style" className="text-lg font-black hover:text-white/60 transition-colors uppercase tracking-tight">elite@secondskin.style</Link>
                </div>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500">
                  <Phone size={20} className="text-white/40 group-hover:text-black" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/20 mb-1">Direct_Line</span>
                  <span className="text-lg font-black uppercase tracking-tight">+1 (800) SS-STYLE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 flex items-center gap-4">
            <Globe size={12} />
            © {new Date().getFullYear()} SECONDSKINSTYLE. PRO-GRADE SOLUTIONS.
          </div>
          <div className="flex items-center gap-14">
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 hover:text-white cursor-pointer transition-colors">
              Data Privacy
            </div>
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 hover:text-white cursor-pointer transition-colors">
              Protocols
            </div>
            <div className="h-4 w-[1px] bg-white/10" />
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/5">
              SYS_REV_8.8.0
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
      <Link href={href} className="text-[12px] font-black uppercase tracking-[0.3em] text-white/40 hover:text-white hover:translate-x-3 transition-all duration-500 flex items-center group">
        {children}
        <ArrowUpRight size={14} className="ml-3 opacity-0 group-hover:opacity-100 transition-all duration-500" />
      </Link>
    </li>
  );
}

function FooterSocial({ label, href }: { label: string; href: string }) {
  return (
    <Link href={href} className="text-[12px] font-black uppercase tracking-[0.4em] text-white/30 border-b border-white/5 pb-2 hover:border-white hover:text-white transition-all duration-500">
      {label}
    </Link>
  );
}


