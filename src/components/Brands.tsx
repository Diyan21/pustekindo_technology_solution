import React, { useEffect, useMemo, useState } from 'react';

import {
  ArrowRight,
  BadgeDollarSign,
  Check,
  MessageCircle,
  ShieldCheck
} from 'lucide-react';

import {
  BRAND_ORDER,
  CCTV_PRICE_DATA,
  formatRupiah
} from '../data/priceData';

import type {
  BrandKey,
  CCTVBrandPrice,
  CCTVPackage
} from '../data/priceData';

import { COMPANY_INFO } from '../data/companyData';

const BrandLogo: React.FC<{
  brand: CCTVBrandPrice;
  selected: boolean;
}> = ({ brand, selected }) => {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <span
        className={`text-xl sm:text-2xl font-black tracking-tight transition-colors ${
          selected ? 'text-[#007bff]' : 'text-[#0a192f]'
        }`}
      >
        {brand.name}
      </span>
    );
  }

  return (
    <img
      src={brand.logo}
      alt={`Logo ${brand.name}`}
      loading="lazy"
      onError={() => setImageError(true)}
      className="max-h-11 sm:max-h-12 max-w-[150px] object-contain"
    />
  );
};

const PackageCard: React.FC<{
  brand: CCTVBrandPrice;
  categoryName: string;
  data: CCTVPackage;
}> = ({ brand, categoryName, data }) => {
  const whatsappMessage = [
    'Halo PUSTEKINDO,',
    '',
    'Saya tertarik dengan paket CCTV berikut:',
    `Merek: ${brand.name}`,
    `Kategori: ${categoryName}`,
    `Paket: ${data.title}`,
    data.price
      ? `Harga: ${formatRupiah(data.price)}`
      : 'Harga: Mohon informasi harga terbaru',
    '',
    'Mohon informasi lebih lanjut mengenai ketersediaan dan pemasangan.',
    '',
    'Terima kasih.'
  ].join('\n');

  const whatsappUrl =
    `https://wa.me/6281212612006?text=${encodeURIComponent(
      whatsappMessage
    )}`;

  return (
    <article
      className="
        relative bg-white
        border border-slate-200
        rounded-2xl
        overflow-hidden
        shadow-sm
        hover:shadow-xl
        hover:-translate-y-1
        transition-all
        duration-300
        flex
        flex-col
      "
    >
      {data.badge && (
        <div className="absolute top-3 right-3 z-10">
          <span className="inline-flex px-2.5 py-1 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/20 text-[#007bff] text-[9px] font-black uppercase tracking-wider">
            {data.badge}
          </span>
        </div>
      )}

      {/* Header */}
      <div className="bg-[#0a192f] px-5 pt-5 pb-6 text-white relative overflow-hidden">
        <div className="absolute w-36 h-36 rounded-full bg-[#007bff]/15 -right-12 -top-12" />

        <div className="relative z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white text-[#0a192f] text-xs font-bold">
            {data.title}
          </div>

          <div className="mt-5">
            {data.price !== null ? (
              <>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.16em]">
                  Harga Paket
                </p>

                <p className="mt-1 text-2xl sm:text-[26px] font-black text-white tracking-tight">
                  {formatRupiah(data.price)}
                </p>
              </>
            ) : (
              <>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.16em]">
                  Harga Paket
                </p>

                <p className="mt-1 text-xl sm:text-2xl font-black text-[#00d4ff]">
                  Hubungi Kami
                </p>
              </>
            )}
          </div>

          <div className="mt-3 border-t border-white/10 pt-3">
            <p className="text-sm font-bold text-[#00d4ff]">
              {data.resolution}
            </p>
          </div>
        </div>
      </div>

      {/* Package Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="text-center mb-4">
          <span className="inline-flex px-5 py-1.5 bg-blue-50 rounded-full text-[10px] font-black uppercase tracking-wider text-[#007bff]">
            Termasuk
          </span>
        </div>

        <div className="space-y-3 flex-1">
          {data.features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-2.5"
            >
              <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 mt-[1px]">
                <Check className="w-3 h-3 text-emerald-600 stroke-[3]" />
              </div>

              <span className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {feature}
              </span>
            </div>
          ))}
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-6
            w-full
            h-11
            rounded-full
            bg-[#007bff]
            hover:bg-[#0068d9]
            text-white
            flex
            items-center
            justify-center
            gap-2
            text-xs
            font-black
            uppercase
            tracking-wider
            transition-all
            duration-200
            hover:shadow-lg
            hover:shadow-blue-500/20
            active:scale-[0.98]
          "
        >
          <MessageCircle className="w-4 h-4" />

          {data.price !== null
            ? 'Order Now'
            : 'Minta Harga'}
        </a>
      </div>
    </article>
  );
};

export const Brands: React.FC = () => {
  const [selectedBrand, setSelectedBrand] =
    useState<BrandKey>('hikvision');

  const selectedBrandData =
    CCTV_PRICE_DATA[selectedBrand];

  const [activeCategory, setActiveCategory] =
    useState(
      selectedBrandData.categories[0].id
    );

  /*
   * Mendengarkan event dari Navbar.
   *
   * Contoh:
   * window.dispatchEvent(
   *   new CustomEvent('select-cctv-brand', {
   *     detail: 'dahua'
   *   })
   * );
   */
  useEffect(() => {
    const handleSelectBrand = (
      event: Event
    ) => {
      const customEvent =
        event as CustomEvent<BrandKey>;

      const brand = customEvent.detail;

      if (
        brand &&
        CCTV_PRICE_DATA[brand]
      ) {
        setSelectedBrand(brand);

        setActiveCategory(
          CCTV_PRICE_DATA[brand]
            .categories[0].id
        );
      }
    };

    window.addEventListener(
      'select-cctv-brand',
      handleSelectBrand
    );

    return () => {
      window.removeEventListener(
        'select-cctv-brand',
        handleSelectBrand
      );
    };
  }, []);

  const currentCategory = useMemo(() => {
    return (
      selectedBrandData.categories.find(
        (category) =>
          category.id === activeCategory
      ) ??
      selectedBrandData.categories[0]
    );
  }, [
    selectedBrandData,
    activeCategory
  ]);

  const handleBrandChange = (
    brandId: BrandKey
  ) => {
    setSelectedBrand(brandId);

    const firstCategory =
      CCTV_PRICE_DATA[brandId]
        .categories[0];

    setActiveCategory(
      firstCategory.id
    );

    window.history.replaceState(
      null,
      '',
      `#brand-${brandId}`
    );
  };

  return (
    <section
      id="harga-paket"
      className="
        scroll-mt-28
        py-16
        lg:py-20
        bg-[#f8fafc]
        border-y
        border-slate-100
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#007bff] text-[10px] sm:text-xs font-black uppercase tracking-[0.14em]">
            <BadgeDollarSign className="w-4 h-4" />

            Harga Paket CCTV
          </div>

          <h2 className="mt-4 text-3xl sm:text-4xl font-black text-[#0a192f] tracking-tight">
            Pilih Merek CCTV
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-500 leading-relaxed">
            Pilih merek dan jenis sistem surveillance
            yang sesuai dengan kebutuhan lokasi Anda.
          </p>
        </div>

        {/* Brand Selection */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {BRAND_ORDER.map(
            (brandId) => {
              const brand =
                CCTV_PRICE_DATA[brandId];

              const selected =
                brand.id === selectedBrand;

              return (
                <button
                  key={brand.id}
                  id={`brand-${brand.id}`}
                  type="button"
                  onClick={() =>
                    handleBrandChange(
                      brand.id
                    )
                  }
                  className={`
                    scroll-mt-32
                    min-h-[118px]
                    sm:min-h-[130px]
                    bg-white
                    border
                    rounded-2xl
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-4
                    px-4
                    py-5
                    transition-all
                    duration-300
                    ${
                      selected
                        ? 'border-[#007bff] shadow-lg shadow-blue-500/10 -translate-y-1 ring-1 ring-[#007bff]/10'
                        : 'border-slate-200 hover:border-blue-200 hover:shadow-md'
                    }
                  `}
                >
                  <BrandLogo
                    brand={brand}
                    selected={selected}
                  />

                  <span
                    className={`
                      text-[10px]
                      font-black
                      uppercase
                      tracking-wider
                      ${
                        selected
                          ? 'text-[#007bff]'
                          : 'text-slate-500'
                      }
                    `}
                  >
                    {selected
                      ? 'Sedang Dilihat'
                      : 'Lihat Harga'}
                  </span>
                </button>
              );
            }
          )}
        </div>

        {/* Brand Title */}
        <div className="mt-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
          <div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#007bff]" />

              <span className="text-xs uppercase tracking-[0.17em] font-black text-[#007bff]">
                Paket CCTV
              </span>
            </div>

            <h3 className="mt-2 text-3xl sm:text-4xl font-black text-[#0a192f]">
              {selectedBrandData.name}
            </h3>
          </div>

          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#007bff] hover:text-[#0056b3]"
          >
            Konsultasi Paket Custom

            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Category Tabs */}
        <div
          className="
            mt-8
            flex
            items-center
            gap-2
            overflow-x-auto
            pb-2
            scrollbar-hide
          "
        >
          {selectedBrandData.categories.map(
            (category) => {
              const active =
                category.id ===
                currentCategory.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() =>
                    setActiveCategory(
                      category.id
                    )
                  }
                  className={`
                    shrink-0
                    px-5
                    py-3
                    rounded-xl
                    text-xs
                    sm:text-sm
                    font-black
                    transition-all
                    ${
                      active
                        ? 'bg-[#007bff] text-white shadow-md shadow-blue-500/20'
                        : 'bg-white border border-slate-200 text-slate-600 hover:border-[#007bff] hover:text-[#007bff]'
                    }
                  `}
                >
                  {category.label}
                </button>
              );
            }
          )}
        </div>

        {/* Category Description */}
        <div className="mt-5 bg-white border border-slate-200 rounded-xl px-4 py-3">
          <p className="text-xs sm:text-sm text-slate-500">
            <strong className="text-[#0a192f]">
              {currentCategory.label}:
            </strong>{' '}

            {currentCategory.description}
          </p>
        </div>

        {/* Packages */}
        <div
          key={`${selectedBrand}-${currentCategory.id}`}
          className="
            mt-8
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-4
            gap-5
          "
        >
          {currentCategory.packages.map(
            (item) => (
              <PackageCard
                key={item.id}
                brand={
                  selectedBrandData
                }
                categoryName={
                  currentCategory.label
                }
                data={item}
              />
            )
          )}
        </div>

        {/* Information */}
        <div className="mt-8 bg-blue-50/70 border border-blue-100 rounded-2xl p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <BadgeDollarSign className="w-5 h-5 text-[#007bff] shrink-0 mt-0.5" />

            <div>
              <h4 className="text-sm font-black text-[#0a192f]">
                Informasi Harga
              </h4>

              <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Harga paket dapat berubah
                menyesuaikan tipe perangkat,
                kapasitas harddisk, jumlah dan
                jenis kamera, panjang kabel,
                kondisi lokasi serta kebutuhan
                instalasi. Silakan konsultasikan
                kebutuhan Anda untuk mendapatkan
                penawaran yang sesuai.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
