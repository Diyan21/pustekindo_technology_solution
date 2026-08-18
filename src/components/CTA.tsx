import React from 'react';
import { MessageSquare, ShieldCheck, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const CTA: React.FC = () => {
  const ctaWaLink = 'https://wa.me/6281212612006?text=Halo%20PUSTEKINDO,%20saya%20ingin%20konsultasi%20mengenai%20kebutuhan%20CCTV%20dan%20surveillance%20system.';

  return (
    <section id="cta-section" className="py-20 lg:py-24 bg-[#0a192f] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[20rem] bg-blue-600/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#00d4ff] text-xs sm:text-sm font-semibold tracking-wide mb-6">
          <ShieldCheck className="w-4 h-4 text-[#00d4ff]" />
          <span>Konsultasi & Survei Kebutuhan</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
          Butuh Sistem CCTV untuk Bisnis atau Rumah Anda?
        </h2>

        {/* Subtext */}
        <p className="mt-5 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Diskusikan kebutuhan surveillance system Anda bersama <strong className="text-white font-bold">{COMPANY_INFO.name} {COMPANY_INFO.subName}</strong>. Tim kami siap membantu merancang solusi pengawasan terbaik.
        </p>

        {/* Big WhatsApp Button & Quick Action */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <a
            id="big-cta-whatsapp"
            href={ctaWaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-sm sm:text-base font-bold text-white bg-[#25D366] hover:bg-[#20ba5a] shadow-lg transition-all duration-200 active:scale-95 group"
          >
            <MessageSquare className="w-5 h-5 mr-2.5 text-white" />
            <span>Hubungi Kami via WhatsApp</span>
          </a>

          <a
            id="big-cta-phone"
            href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-colors"
          >
            <PhoneCall className="w-4 h-4 mr-2 text-[#00d4ff]" />
            <span>0812-1261-2006</span>
          </a>
        </div>

        {/* Micro points */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-400 font-medium">
          <span className="flex items-center">✓ Respon Cepat</span>
          <span className="flex items-center">✓ Estimasi Penawaran Jelas</span>
          <span className="flex items-center">✓ Didukung Teknisi Berpengalaman</span>
        </div>

      </div>
    </section>
  );
};

