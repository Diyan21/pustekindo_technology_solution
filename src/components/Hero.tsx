import React, { useState, useEffect } from 'react';
import { MessageSquare, ArrowRight, ShieldCheck, Video, Cpu, Server, Wifi, Eye, Radio, Shield } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { ImagePlaceholder } from './ImagePlaceholder';

export const Hero: React.FC = () => {
  const [activeCam, setActiveCam] = useState<number>(1);
  const [liveTime, setLiveTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLiveTime(now.toTimeString().split(' ')[0]);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const camFeeds = [
    { id: 1, name: 'CAM-01 [MAIN ENTRANCE]', loc: 'Gate 1 Perimeter', status: 'ONLINE', fps: '30 FPS' },
    { id: 2, name: 'CAM-02 [WAREHOUSE RACK]', loc: 'Zone B Logistics', status: 'ONLINE', fps: '30 FPS' },
    { id: 3, name: 'CAM-03 [FACTORY FLOOR]', loc: 'Line 2 Production', status: 'ONLINE', fps: '30 FPS' },
    { id: 4, name: 'CAM-04 [SERVER ROOM]', loc: 'Data Center HQ', status: 'ONLINE', fps: '60 FPS' },
  ];

  return (
    <section
      id="beranda"
      className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-[#f8fafc] text-slate-800 overflow-hidden"
    >
      {/* Background Subtle Tech Geometry */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-100/50 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.4] bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Clean Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-[#007bff] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-100 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-[#007bff]" />
              <span>Professional Surveillance & IT Solution</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#0a192f] leading-[1.15]">
              Solusi Surveillance System untuk Keamanan yang{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007bff] to-[#00d4ff]">
                Lebih Cerdas
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              <strong className="text-[#0a192f] font-semibold">PUSTEKINDO TECHNOLOGY SOLUTION</strong> menghadirkan sistem CCTV dan pemantauan berbasis teknologi IT untuk membantu bisnis dan hunian mendapatkan sistem keamanan yang efektif, mudah digunakan dan dapat diandalkan.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                id="hero-cta-primary"
                href="https://wa.me/6281212612006?text=Halo%20PUSTEKINDO,%20saya%20ingin%20konsultasi%20mengenai%20kebutuhan%20CCTV%20dan%20surveillance%20system."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-lg text-sm sm:text-base font-bold text-white bg-[#0a192f] hover:bg-slate-800 shadow-lg shadow-blue-950/15 hover:shadow-blue-900/25 transition-all duration-200 active:scale-95 group"
              >
                <MessageSquare className="w-4 h-4 mr-2.5 text-[#00d4ff] group-hover:scale-110 transition-transform" />
                <span>Konsultasikan Kebutuhan Anda</span>
              </a>

              <a
                id="hero-cta-secondary"
                href="#solusi"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-lg text-sm sm:text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all duration-200 shadow-sm"
              >
                <span>Lihat Solusi Kami</span>
                <ArrowRight className="w-4 h-4 ml-2 text-[#007bff]" />
              </a>
            </div>

            {/* Clean Minimalism Micro Highlights Cards */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-[#007bff] shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0a192f]">Produk Berkualitas</div>
                  <div className="text-[11px] text-slate-500">Keandalan jangka panjang</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                <div className="w-10 h-10 bg-cyan-50 rounded-lg flex items-center justify-center text-[#00d4ff] shrink-0">
                  <Wifi className="w-5 h-5 text-cyan-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0a192f]">IT Based Solution</div>
                  <div className="text-[11px] text-slate-500">Integrasi jaringan modern</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Deep Navy Monitor Console */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#0a192f] border border-slate-800 shadow-2xl p-4 sm:p-5 text-white overflow-hidden">
              
              {/* Background glow inside monitor */}
              <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

              {/* Top Console Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00d4ff] animate-pulse" />
                  <span className="text-white font-bold tracking-wider">PUSTEKINDO MONITORING CORE</span>
                </div>
                <div className="text-[#00d4ff] font-semibold">
                  {liveTime || '00:00:00'} <span className="text-slate-400 font-normal text-[10px]">WIB</span>
                </div>
              </div>

              {/* Main View Area */}
              <div className="mt-3 relative">
                <ImagePlaceholder
                  src="/images/hero-cctv.jpg"
                  alt="PUSTEKINDO Surveillance System"
                  type="hero"
                  title={camFeeds.find(c => c.id === activeCam)?.name || 'SURVEILLANCE FEED'}
                  subtitle={camFeeds.find(c => c.id === activeCam)?.loc || 'Perimeter Active'}
                  cameraCode={`CAM-0${activeCam} [LIVE]`}
                  aspectRatio="aspect-[16/10]"
                  className="rounded-xl shadow-inner border border-slate-800"
                />

                {/* Live Floating Badge */}
                <div className="absolute top-3 left-3 bg-[#0a192f]/90 border border-[#00d4ff]/40 rounded px-2.5 py-1 text-[10px] font-mono text-[#00d4ff] flex items-center space-x-1.5 shadow">
                  <Radio className="w-3 h-3 text-red-500 animate-ping" />
                  <span className="font-bold">LIVE STREAM</span>
                </div>
              </div>

              {/* Multi-Channel Switcher Tabs */}
              <div className="mt-3 grid grid-cols-4 gap-2">
                {camFeeds.map((feed) => (
                  <button
                    key={feed.id}
                    onClick={() => setActiveCam(feed.id)}
                    className={`p-2 rounded-lg text-left transition-all border font-mono ${
                      activeCam === feed.id
                        ? 'bg-blue-950/80 border-[#00d4ff]/80 text-[#00d4ff] shadow-sm'
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    <div className="text-[10px] font-bold truncate">CAM 0{feed.id}</div>
                    <div className="text-[9px] text-slate-400 truncate flex items-center mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] mr-1" />
                      {feed.status}
                    </div>
                  </button>
                ))}
              </div>

              {/* System Specs Footer inside Hero Card */}
              <div className="mt-3 pt-2.5 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span className="flex items-center">
                  <Server className="w-3.5 h-3.5 mr-1 text-[#00d4ff]" /> NVR Storage OK
                </span>
                <span className="flex items-center">
                  <Wifi className="w-3.5 h-3.5 mr-1 text-[#25D366]" /> 1Gbps Link
                </span>
                <span className="flex items-center text-slate-400">
                  <Cpu className="w-3.5 h-3.5 mr-1 text-[#007bff]" /> AI Motion
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

