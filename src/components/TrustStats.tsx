import React from 'react';
import { ShieldCheck, Wrench, Cpu, Headphones } from 'lucide-react';
import { TRUST_ITEMS } from '../data/companyData';

export const TrustStats: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#007bff]" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-[#007bff]" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-[#007bff]" />;
      case 'Headphones':
        return <Headphones className="w-6 h-6 text-[#007bff]" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-[#007bff]" />;
    }
  };

  return (
    <section id="trust-section" className="relative -mt-6 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.id}
              className="flex items-start space-x-3.5 p-3 rounded-xl hover:bg-slate-50/80 transition-colors group"
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-blue-50/80 border border-blue-100 flex items-center justify-center group-hover:bg-[#007bff] transition-all">
                <div className="group-hover:text-white transition-colors">
                  {getIcon(item.iconName)}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-sm sm:text-base font-bold text-[#0a192f] tracking-tight group-hover:text-[#007bff] transition-colors">
                  {item.title}
                </h2>
                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

