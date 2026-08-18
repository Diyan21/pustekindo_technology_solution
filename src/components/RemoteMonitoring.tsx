import React from 'react';
import { 
  Server, 
  Globe, 
  Users, 
  PlayCircle, 
  Lock, 
  Grid, 
  Camera, 
  HardDrive, 
  Wifi, 
  MonitorSmartphone,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { REMOTE_MONITORING_FEATURES, WORKFLOW_STEPS } from '../data/companyData';

export const RemoteMonitoring: React.FC = () => {
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server':
        return <Server className="w-5 h-5 text-[#00d4ff]" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-[#00d4ff]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#00d4ff]" />;
      case 'PlayCircle':
        return <PlayCircle className="w-5 h-5 text-[#00d4ff]" />;
      case 'Lock':
        return <Lock className="w-5 h-5 text-[#00d4ff]" />;
      case 'Grid':
        return <Grid className="w-5 h-5 text-[#00d4ff]" />;
      default:
        return <Globe className="w-5 h-5 text-[#00d4ff]" />;
    }
  };

  const getWorkflowIcon = (iconName: string) => {
    switch (iconName) {
      case 'Camera':
        return <Camera className="w-6 h-6 text-[#00d4ff]" />;
      case 'HardDrive':
        return <HardDrive className="w-6 h-6 text-[#00d4ff]" />;
      case 'Wifi':
        return <Wifi className="w-6 h-6 text-[#00d4ff]" />;
      case 'MonitorSmartphone':
        return <MonitorSmartphone className="w-6 h-6 text-[#00d4ff]" />;
      default:
        return <Camera className="w-6 h-6 text-[#00d4ff]" />;
    }
  };

  return (
    <section id="remote-monitoring" className="py-20 lg:py-24 bg-[#0a192f] text-white relative overflow-hidden">
      {/* Visual background ambient glow */}
      <div className="absolute top-1/2 -left-20 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-0 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#00d4ff] text-xs font-bold tracking-wider uppercase">
            <Wifi className="w-3.5 h-3.5 text-[#00d4ff]" />
            <span>IT & Remote Surveillance</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Pantau Lokasi Anda dari Mana Saja
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Solusi surveillance PUSTEKINDO dirancang untuk kebutuhan monitoring fleksibel, baik melalui jaringan lokal (LAN) maupun internet publik sesuai dengan infrastruktur yang diterapkan di lokasi Anda.
          </p>
        </div>

        {/* Concept Architecture Flow: Camera → Recorder / System → Network → Smartphone / PC */}
        <div className="mb-14 bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-xl">
          <div className="text-center mb-8">
            <h3 className="text-xs font-mono text-[#00d4ff] uppercase tracking-widest font-bold">
              Arsitektur Alur Sistem Monitoring
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Integrasi end-to-end dari perangkat tangkap optik hingga ke layar kendali pengguna
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 relative">
            {WORKFLOW_STEPS.map((step, idx) => (
              <div key={step.step} className="relative flex flex-col items-center text-center group">
                {/* Step Card */}
                <div className="w-full bg-[#0a192f]/90 border border-slate-800 rounded-xl p-5 hover:border-[#00d4ff]/50 transition-all duration-300 flex flex-col items-center h-full">
                  
                  {/* Step number badge */}
                  <span className="font-mono text-[10px] font-bold text-[#00d4ff] mb-3 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-800/40">
                    STEP {step.step}
                  </span>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-3.5 group-hover:border-[#00d4ff]/50 transition-all">
                    {getWorkflowIcon(step.iconName)}
                  </div>

                  {/* Title */}
                  <h4 className="text-sm sm:text-base font-bold text-white mb-1.5 group-hover:text-[#00d4ff] transition-colors">
                    {step.title}
                  </h4>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed mt-auto">
                    {step.desc}
                  </p>
                </div>

                {/* Arrow connector for desktop */}
                {idx < WORKFLOW_STEPS.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-[#00d4ff]/60 pointer-events-none">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 6 Remote Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REMOTE_MONITORING_FEATURES.map((feat) => (
            <div
              key={feat.id}
              className="bg-slate-900/60 rounded-2xl p-5 sm:p-6 border border-slate-800 hover:border-[#00d4ff]/40 transition-all duration-200 group"
            >
              <div className="w-11 h-11 rounded-xl bg-[#0a192f] border border-slate-800 flex items-center justify-center mb-3.5 group-hover:border-[#00d4ff]/40 transition-colors">
                {getFeatureIcon(feat.iconName)}
              </div>
              <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-[#00d4ff] transition-colors">
                {feat.title}
              </h4>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

