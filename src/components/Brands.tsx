import React, { useState } from 'react';
import { ArrowRight, BadgeDollarSign } from 'lucide-react';
import { BRAND_ITEMS, COMPANY_INFO } from '../data/companyData';
import type { BrandItem } from '../data/companyData';

const BrandLogo: React.FC<{ brand: BrandItem }> = ({ brand }) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="h-12 flex items-center justify-center text-2xl sm:text-3xl font-black tracking-tight text-[#0a192f]">
        {brand.name}
      </div>
    );
  }

  return (
    <img
      src={brand.logo}
      alt={`${brand.name} CCTV`}
      className="max-h-12 max-w-[170px] object-contain mx-auto"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
};

export const Brands: React.FC = () => {
  const buildWhatsAppUrl = (brandName: string) => {
    const message = `Halo PUSTEKINDO, saya ingin melihat harga paket CCTV ${brandName}.`;

    return `https://wa.me/6281212612006?text=${encodeURIComponent(message)}`;
  };

  return (
    <section
      id="harga-paket"
      className="scroll-mt-28 py-14 lg:py-16 bg-white border-y border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#007bff]">
              <BadgeDollarSign className="w-4 h-4" />
              Harga Paket CCTV
            </div>

            <h2 className="mt-2 text-2xl sm:text-3xl font-black text-[#0a192f] tracking-tight">
              Pilih Merek Sesuai Kebutuhan Anda
            </h2>

            <p className="mt-2 text-sm sm:text-base text-slate-500 max-w-2xl">
              Klik merek untuk konsultasi paket dan harga sesuai jumlah kamera,
              lokasi, serta kebutuhan instalasi.
            </p>
          </div>

          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-bold text-[#007bff] hover:text-[#0056b3]"
          >
            Tanya Paket Custom
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>

        {/* Brand Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {BRAND_ITEMS.map((brand) => (
            <article
              key={brand.id}
              id={`brand-${brand.id}`}
              className="scroll-mt-32 group bg-white border border-slate-200 rounded-2xl px-4 py-6 sm:p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-14 flex items-center justify-center">
                <BrandLogo brand={brand} />
              </div>

              <p className="mt-4 min-h-[40px] text-[11px] sm:text-xs leading-relaxed text-slate-500 text-center">
                {brand.description}
              </p>

              <a
                href={buildWhatsAppUrl(brand.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 w-full h-9 rounded-full border border-slate-300 group-hover:border-[#007bff] group-hover:text-[#007bff] flex items-center justify-center text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-600 transition-colors"
              >
                Lihat Harga
              </a>
            </article>
          ))}
        </div>

        <p className="mt-5 text-[11px] text-slate-400">
          *Harga menyesuaikan spesifikasi perangkat, jumlah titik kamera,
          panjang kabel, dan kondisi lokasi instalasi.
        </p>

      </div>
    </section>
  );
};
