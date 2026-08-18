import React from 'react';
import {
  Building2,
  Factory,
  Cross,
  Warehouse,
  Store,
  Building,
  Home,
  DoorOpen,
  Landmark,
  ShoppingBag,
  CheckCircle2,
  Layers,
  ArrowRight
} from 'lucide-react';
import { SECTOR_SOLUTIONS, USE_CASES, COMPANY_INFO } from '../data/companyData';

export const Solutions: React.FC = () => {
  const getSectorIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-5 h-5 text-[#007bff]" />;
      case 'Factory':
        return <Factory className="w-5 h-5 text-[#007bff]" />;
      case 'Cross':
        return <Cross className="w-5 h-5 text-[#007bff]" />;
      case 'Warehouse':
        return <Warehouse className="w-5 h-5 text-[#007bff]" />;
      case 'Store':
        return <Store className="w-5 h-5 text-[#007bff]" />;
      case 'Building':
        return <Building className="w-5 h-5 text-[#007bff]" />;
      case 'Home':
        return <Home className="w-5 h-5 text-[#007bff]" />;
      case 'DoorOpen':
        return <DoorOpen className="w-5 h-5 text-[#007bff]" />;
      case 'Landmark':
        return <Landmark className="w-5 h-5 text-[#007bff]" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-[#007bff]" />;
      default:
        return <Building2 className="w-5 h-5 text-[#007bff]" />;
    }
  };

  return (
    <section id="solusi" className="py-20 lg:py-24 bg-[#f8fafc] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header 1: Solusi Berdasarkan Kebutuhan */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-[#007bff] border border-blue-100 text-xs font-bold tracking-wider uppercase">
            <Layers className="w-3.5 h-3.5 text-[#007bff]" />
            <span>Sektor & Industri</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a192f] tracking-tight">
            Satu Sistem, Berbagai Kebutuhan
          </h2>

          <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
            Setiap bangunan memiliki karakteristik perimeter dan tingkat risiko yang unik. Kami menyesuaikan topologi CCTV dan kamera yang tepat untuk setiap jenis properti.
          </p>
        </div>

        {/* 10 Solutions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-20">
          {SECTOR_SOLUTIONS.map((sol) => (
            <div
              key={sol.id}
              className="bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-3.5 group-hover:bg-[#007bff] group-hover:text-white transition-colors">
                  <div className="group-hover:text-white transition-colors">
                    {getSectorIcon(sol.iconName)}
                  </div>
                </div>

                <div className="text-[10px] font-bold uppercase tracking-wider text-[#007bff] mb-1 font-mono">
                  {sol.sectorBadge}
                </div>

                <h3 className="text-sm sm:text-base font-bold text-[#0a192f] group-hover:text-[#007bff] transition-colors">
                  {sol.title}
                </h3>

                <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                  {sol.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-[11px] font-semibold text-slate-400 group-hover:text-[#007bff]">
                <span>Siap Pasang</span>
                <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Section 2: Use Cases (Monitoring yang Fleksibel untuk Bisnis Anda) */}
        <div className="bg-[#0a192f] rounded-2xl p-7 sm:p-10 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
            
            {/* Left side text */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#00d4ff] text-xs font-bold tracking-wider uppercase">
                <span>Skenario Penggunaan</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                Monitoring yang Fleksibel untuk Bisnis Anda
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                Kemudahan mengontrol stabilitas bisnis dan perlindungan keluarga dari satu genggaman, kapan pun dan di mana pun Anda berada.
              </p>

              <div className="pt-2">
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs sm:text-sm font-bold shadow-md transition-colors"
                >
                  Konsultasi Skenario Sistem
                </a>
              </div>
            </div>

            {/* Right side checklist grid */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {USE_CASES.map((useCase, i) => (
                  <div
                    key={i}
                    className="flex items-start space-x-3 p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-[#00d4ff]/40 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#00d4ff] shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-200 font-medium leading-snug">
                      {useCase}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

