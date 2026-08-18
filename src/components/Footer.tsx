import React from 'react';
import { Video, ShieldCheck, MapPin, Phone, MessageSquare, ArrowUp, ChevronRight } from 'lucide-react';
import { COMPANY_INFO, NAV_LINKS } from '../data/companyData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const solutionsList = [
    'CCTV',
    'Surveillance System',
    'Remote Monitoring',
    'Security Solution',
    'IT Monitoring'
  ];

  return (
    <footer id="main-footer" className="bg-[#0a192f] text-slate-400 border-t border-slate-800 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-[#007bff] flex items-center justify-center text-white shadow-sm">
                <Video className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-base font-extrabold text-white font-mono tracking-tight block">
                  {COMPANY_INFO.name}
                </span>
                <span className="text-[10px] font-semibold text-[#00d4ff] uppercase tracking-widest block -mt-0.5">
                  {COMPANY_INFO.subName}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              {COMPANY_INFO.description}
            </p>

            <div className="pt-1 text-xs font-mono text-[#00d4ff] flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-[#00d4ff]" />
              <span>Solution Provider, bukan sekadar salesman.</span>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#00d4ff] transition-colors flex items-center group text-slate-300"
                  >
                    <ChevronRight className="w-3 h-3 mr-1 text-slate-500 group-hover:text-[#00d4ff] transition-colors" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Solutions (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Solutions
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {solutionsList.map((sol, idx) => (
                <li key={idx}>
                  <a
                    href="#solusi"
                    className="hover:text-[#00d4ff] transition-colors flex items-center group text-slate-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#007bff] mr-2 group-hover:scale-125 transition-transform" />
                    <span>{sol}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Contact
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#00d4ff] shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-relaxed text-xs">
                  {COMPANY_INFO.address}
                </span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="text-white hover:text-[#00d4ff] font-bold text-xs sm:text-sm transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] hover:underline font-semibold text-xs sm:text-sm"
                >
                  Chat WhatsApp (0812-1261-2006)
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center sm:text-left">
            © 2026 <strong className="text-white font-semibold">{COMPANY_INFO.name} {COMPANY_INFO.subName}</strong>. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 transition-colors text-xs"
            aria-label="Kembali ke atas"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

