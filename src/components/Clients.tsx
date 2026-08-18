import React from 'react';
import { Building2, CheckCircle, ExternalLink } from 'lucide-react';
import { CLIENT_LIST } from '../data/companyData';

export const Clients: React.FC = () => {
  return (
    <section id="klien" className="scroll-mt-28 py-20 lg:py-24 bg-[#f8fafc] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-[#007bff] border border-blue-100 text-xs font-bold tracking-wider uppercase">
            <Building2 className="w-3.5 h-3.5 text-[#007bff]" />
            <span>Klien & Portfolio Institusi</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a192f] tracking-tight">
            Dipercaya Berbagai Perusahaan & Institusi
          </h2>

          <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
            PUSTEKINDO telah melayani instalasi surveillance dan sistem monitoring pada beragam sektor industri, korporasi manufaktur, aviasi, kesehatan, komersial, hingga residensial.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {CLIENT_LIST.map((client) => {
            const content = (
              <>
                <div className="w-10 h-10 rounded-xl bg-[#0a192f] text-[#00d4ff] font-mono font-bold text-xs flex items-center justify-center shrink-0 group-hover:bg-[#007bff] group-hover:text-white transition-colors">
                  {client.initials}
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-xs sm:text-sm font-bold text-[#0a192f] group-hover:text-[#007bff] transition-colors truncate">
                    {client.name}
                  </h3>
                  <p className="text-[11px] text-slate-500 truncate mt-0.5 font-medium">
                    {client.category}
                  </p>
                </div>

                {client.website && (
                  <div className="shrink-0 w-8 h-8 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center opacity-70 group-hover:opacity-100 group-hover:bg-blue-50 group-hover:text-[#007bff] transition-all">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                )}
              </>
            );

            if (client.website) {
              return (
                <a
                  key={client.id}
                  href={client.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Kunjungi website ${client.name}`}
                  aria-label={`Kunjungi website ${client.name}`}
                  className="bg-white rounded-2xl p-4 border border-slate-200/80 hover:border-blue-300 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex items-center space-x-3.5 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#007bff]/30"
                >
                  {content}
                </a>
              );
            }

            return (
              <div
                key={client.id}
                title="Website resmi belum ditambahkan"
                className="bg-white rounded-2xl p-4 border border-slate-200/80 flex items-center space-x-3.5 group"
              >
                {content}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white border border-slate-200/80 text-slate-600 text-xs sm:text-sm font-medium shadow-sm">
            <CheckCircle className="w-4 h-4 text-[#007bff]" />
            <span>Dan berbagai proyek perusahaan, institusi serta properti lainnya.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
