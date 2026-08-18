import React, { useState } from 'react';
import { MessageSquare, X, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickQuestions = [
    'Tanya paket CCTV untuk kantor / pabrik',
    'Ingin jadwal survei lokasi di Jakarta',
    'Konsultasi integrasi remote monitoring mobile',
    'Butuh penambahan / perbaikan kamera'
  ];

  const handleQuickChat = (question: string) => {
    const text = encodeURIComponent(`Halo PUSTEKINDO, ${question}.`);
    window.open(`https://wa.me/6281212612006?text=${text}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-5 sm:right-6 z-50 flex flex-col items-end">
      
      {/* Quick Chat Popup Card */}
      {isOpen && (
        <div className="mb-3 w-78 sm:w-84 bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden animate-scaleUp z-50">
          {/* Header */}
          <div className="bg-[#25D366] p-4 text-white flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <MessageSquare className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="text-sm font-bold leading-tight">PUSTEKINDO CS</h4>
                <p className="text-[11px] text-white/90 flex items-center mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-white mr-1.5 animate-pulse" />
                  Online • Siap Membantu
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-white hover:bg-white/20"
              aria-label="Tutup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3 bg-[#f8fafc]">
            <p className="text-xs text-slate-600 leading-relaxed">
              Halo! Ada yang bisa kami bantu seputar kebutuhan CCTV dan surveillance system Anda hari ini?
            </p>

            <div className="space-y-1.5">
              {quickQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuickChat(q)}
                  className="w-full text-left text-xs bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 p-2.5 rounded-xl border border-slate-200 hover:border-emerald-300 transition-colors flex items-center justify-between font-medium group shadow-2xs"
                >
                  <span className="truncate pr-2">{q}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#25D366] shrink-0" />
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-200">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs flex items-center justify-center shadow-sm transition-colors"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Mulai Chat Langsung
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button with Tooltip */}
      <div className="flex items-center space-x-2.5">
        {!isOpen && (
          <div className="hidden sm:flex items-center px-3 py-1.5 rounded-full bg-[#0a192f] text-white text-xs font-semibold shadow-md border border-slate-700 pointer-events-none">
            <span className="w-2 h-2 rounded-full bg-[#25D366] mr-2" />
            Konsultasi CCTV
          </div>
        )}

        <button
          id="floating-whatsapp-btn"
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none"
          aria-label="WhatsApp Konsultasi PUSTEKINDO"
        >
          {/* Subtle pulse wave */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none" />

          {isOpen ? (
            <X className="w-6 h-6 relative z-10" />
          ) : (
            <MessageSquare className="w-6 h-6 relative z-10" />
          )}
        </button>
      </div>

    </div>
  );
};

