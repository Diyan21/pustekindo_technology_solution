import React from 'react';
import { Shield, AlertTriangle, Activity, Film, Search, Smartphone } from 'lucide-react';
import { SYSTEM_GOALS } from '../data/companyData';

export const SystemGoals: React.FC = () => {
  const getGoalIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield':
        return <Shield className="w-5 h-5 text-[#007bff]" />;
      case 'AlertTriangle':
        return <AlertTriangle className="w-5 h-5 text-[#007bff]" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-[#007bff]" />;
      case 'Film':
        return <Film className="w-5 h-5 text-[#007bff]" />;
      case 'Search':
        return <Search className="w-5 h-5 text-[#007bff]" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-[#007bff]" />;
      default:
        return <Shield className="w-5 h-5 text-[#007bff]" />;
    }
  };

  return (
    <section id="tujuan-sistem" className="py-20 lg:py-24 bg-[#f8fafc] text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#007bff] text-xs font-bold tracking-wider uppercase">
            <span>Nilai & Manfaat</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a192f] tracking-tight">
            Sistem Keamanan yang Memberikan Manfaat Nyata
          </h2>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
            Investasi surveillance bukan sekadar memasang kamera, melainkan melindungi aset, meningkatkan produktivitas, dan memberikan ketenangan pikiran.
          </p>
        </div>

        {/* 6 Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SYSTEM_GOALS.map((goal, idx) => (
            <div
              key={goal.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-200 group flex items-start space-x-4"
            >
              <div className="shrink-0 w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-[#007bff] group-hover:text-white transition-colors">
                <div className="group-hover:text-white transition-colors">
                  {getGoalIcon(goal.iconName)}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm sm:text-base font-bold text-[#0a192f] group-hover:text-[#007bff] transition-colors">
                    {goal.title}
                  </h3>
                  <span className="text-xs font-mono font-semibold text-slate-400">0{idx + 1}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                  {goal.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

