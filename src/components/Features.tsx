import React from 'react';
import { Award, Users, Network, LifeBuoy, ArrowUpRight } from 'lucide-react';
import { ADVANTAGES } from '../data/companyData';

export const Features: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-6 h-6 text-[#007bff]" />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#007bff]" />;
      case 'Network':
        return <Network className="w-6 h-6 text-[#007bff]" />;
      case 'LifeBuoy':
        return <LifeBuoy className="w-6 h-6 text-[#007bff]" />;
      default:
        return <Award className="w-6 h-6 text-[#007bff]" />;
    }
  };

  return (
    <section id="keunggulan" className="py-20 lg:py-24 bg-[#f8fafc] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-[#007bff] border border-blue-100 text-xs font-bold tracking-wider uppercase">
            <span>Keunggulan Layanan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a192f] tracking-tight">
            Mengapa Memilih PUSTEKINDO?
          </h2>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
            Kombinasi keahlian teknis hardware surveillance dan penguasaan infrastruktur IT untuk menghadirkan sistem keamanan andal dan berjangka panjang.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ADVANTAGES.map((adv, index) => (
            <div
              key={adv.id}
              className="relative bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Top Badge Number & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-[#007bff] group-hover:text-white transition-all duration-300">
                    <div className="group-hover:text-white transition-colors">
                      {getIcon(adv.iconName)}
                    </div>
                  </div>
                  <span className="font-mono text-xl font-bold text-slate-300 group-hover:text-[#007bff]/40 transition-colors">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#0a192f] group-hover:text-[#007bff] transition-colors">
                  {adv.title}
                </h3>

                <p className="mt-2 text-slate-500 text-xs sm:text-sm leading-relaxed">
                  {adv.description}
                </p>
              </div>

              {/* Bottom decorative bar */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#007bff]">
                <span>Standar Pustekindo</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

