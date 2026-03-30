import { sportsData } from '@/lib/sportsData';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return sportsData.map((sport) => ({
    id: sport.id,
  }));
}

export default async function SportDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const sport = sportsData.find(s => s.id === id);

  if (!sport) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white pb-32">
      {/* Dynamic Parallax Hero */}
      <section className="relative h-[60vh] md:h-[80vh] flex flex-col justify-end p-6 md:p-24 overflow-hidden bg-black">
        <Image 
          src={sport.img} 
          alt={sport.name} 
          fill 
          className="object-cover opacity-50 grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        
        {/* Navigation Control */}
        <div className="absolute top-32 left-6 md:left-24 z-20">
          <Link href="/#categories" className="flex items-center gap-4 text-white/50 hover:text-white transition-colors group">
            <div className="w-10 h-10 border border-white/20 flex items-center justify-center group-hover:border-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <span className="text-xs font-black tracking-widest uppercase">Back to Categories</span>
          </Link>
        </div>

        <div className="relative z-10 text-white">
          <span className="text-xs font-black tracking-[0.5em] uppercase text-white/50">Vertical // {sport.id}</span>
          <h1 className="text-5xl md:text-[8rem] font-black tracking-tighter uppercase leading-[0.85] mt-6">
            {sport.title}
          </h1>
        </div>
      </section>

      {/* Details Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-24 pt-24 md:pt-32">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24">
          <div className="space-y-16">
            <div>
              <h4 className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-black/30 mb-8 pb-4 border-b border-black/10">Elite Products</h4>
              <ul className="text-xl md:text-4xl font-black uppercase tracking-tighter space-y-4 text-black/80">
                 {sport.products.map(item => (
                   <li key={item} className="flex items-center gap-4 before:content-[''] before:block before:w-8 before:h-1 before:bg-black/10 hover:before:bg-black hover:translate-x-2 transition-all cursor-default">
                     {item}
                   </li>
                 ))}
              </ul>
            </div>
          </div>
          
          <div className="space-y-16">
            <div>
              <h4 className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-black/30 mb-8 pb-4 border-b border-black/10">Elite Customization</h4>
              <ul className="text-lg md:text-2xl font-bold uppercase tracking-tight italic space-y-4 text-black/60">
                 {sport.customization.map(item => (
                   <li key={item} className="flex items-start gap-4 hover:text-black transition-colors">
                     <span className="text-black/20 mt-1">/</span> {item}
                   </li>
                 ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6 pt-12">
               <Link href="/contact" className="group">
                  <button className="w-full bg-black text-white p-8 md:p-10 text-xs md:text-sm font-black uppercase tracking-[0.3em] hover:bg-black/80 transition-all flex items-center justify-between">
                     Upload Your Design <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                  </button>
               </Link>
               <Link href="/contact">
                  <button className="w-full border-2 border-black p-8 md:p-10 text-xs md:text-sm font-black uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all text-left">
                     Request Physical Sample
                  </button>
               </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
