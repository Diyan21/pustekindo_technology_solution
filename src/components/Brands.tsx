import React, {
  useEffect,
  useMemo,
  useState
} from 'react';

import {
  BadgeDollarSign,
  Camera,
  DoorOpen,
  Fingerprint,
  Volume2,
  KeyRound,
  Flame,
  Network,
  PhoneCall,
  Satellite,
  Cog,
  Zap,
  Droplets,
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  X,
  ChevronRight
} from 'lucide-react';

import {
  BRAND_ORDER,
  CCTV_PRICE_DATA,
  formatRupiah
} from '../data/priceData';

import type {
  BrandKey,
  CCTVBrandPrice
} from '../data/priceData';

import {
  COMPANY_INFO
} from '../data/companyData';

/* =====================================================
   TYPES
===================================================== */

interface ProductItem {
  id: number;
  slug: string;
  title: string;
  description: string;
  price: number;
  icon: React.ReactNode;
  featured?: boolean;
}

/* =====================================================
   DATA 12 PRODUK / LAYANAN
   HARGA DUMMY - NANTI TINGGAL GANTI
===================================================== */

const PRODUCTS: ProductItem[] = [
  {
    id: 1,
    slug: 'cctv',
    title: 'CCTV Security System',
    description:
      'Sistem CCTV indoor dan outdoor untuk rumah, kantor, gudang, toko dan area industri.',
    price: 3999000,
    icon: <Camera className="w-6 h-6" />,
    featured: true
  },
  {
    id: 2,
    slug: 'access-door',
    title: 'Access Door',
    description:
      'Kontrol akses pintu menggunakan kartu, PIN, RFID maupun biometric.',
    price: 2750000,
    icon: <DoorOpen className="w-6 h-6" />
  },
  {
    id: 3,
    slug: 'fingerprint',
    title: 'Fingerprint',
    description:
      'Sistem absensi dan kontrol kehadiran karyawan berbasis fingerprint.',
    price: 1850000,
    icon: <Fingerprint className="w-6 h-6" />
  },
  {
    id: 4,
    slug: 'tata-suara',
    title: 'Tata Suara',
    description:
      'Speaker, amplifier dan public address system untuk berbagai kebutuhan gedung.',
    price: 4500000,
    icon: <Volume2 className="w-6 h-6" />
  },
  {
    id: 5,
    slug: 'hotel-lock',
    title: 'Hotel Lock',
    description:
      'Electronic hotel lock menggunakan kartu RFID untuk kamar dan area terbatas.',
    price: 2200000,
    icon: <KeyRound className="w-6 h-6" />
  },
  {
    id: 6,
    slug: 'fire-alarm',
    title: 'Fire Alarm',
    description:
      'Fire alarm panel, smoke detector, heat detector dan perangkat pendukung.',
    price: 5500000,
    icon: <Flame className="w-6 h-6" />
  },
  {
    id: 7,
    slug: 'networking',
    title: 'Networking',
    description:
      'Instalasi LAN, router, switch, access point, rack dan structured cabling.',
    price: 3500000,
    icon: <Network className="w-6 h-6" />
  },
  {
    id: 8,
    slug: 'pabx',
    title: 'PABX',
    description:
      'Sistem komunikasi telepon internal untuk operasional perusahaan dan gedung.',
    price: 4250000,
    icon: <PhoneCall className="w-6 h-6" />
  },
  {
    id: 9,
    slug: 'parabola',
    title: 'Parabola',
    description:
      'Pemasangan parabola, receiver dan sistem distribusi sinyal televisi.',
    price: 1750000,
    icon: <Satellite className="w-6 h-6" />
  },
  {
    id: 10,
    slug: 'mechanical',
    title: 'Mechanical',
    description:
      'Pekerjaan sistem mekanikal dan infrastruktur pendukung kebutuhan gedung.',
    price: 6500000,
    icon: <Cog className="w-6 h-6" />
  },
  {
    id: 11,
    slug: 'electrical',
    title: 'Electrical',
    description:
      'Instalasi kelistrikan, panel, jalur kabel dan kebutuhan electrical gedung.',
    price: 5250000,
    icon: <Zap className="w-6 h-6" />
  },
  {
    id: 12,
    slug: 'plumbing',
    title: 'Plumbing',
    description:
      'Instalasi jalur air, perpipaan dan kebutuhan utilitas bangunan.',
    price: 4750000,
    icon: <Droplets className="w-6 h-6" />
  }
];

/* =====================================================
   BRAND LOGO CCTV
===================================================== */

const BrandLogo: React.FC<{
  brand: CCTVBrandPrice;
}> = ({ brand }) => {
  const [imageError, setImageError] =
    useState(false);

  if (imageError) {
    return (
      <span
        className="
          text-base
          sm:text-lg
          font-black
          text-[#0a192f]
          tracking-tight
        "
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
      onError={() =>
        setImageError(true)
      }
      className="
        max-h-8
        max-w-[110px]
        object-contain
      "
    />
  );
};

/* =====================================================
   HELPER: HARGA CCTV TERENDAH PER BRAND
===================================================== */

const getBrandStartingPrice = (
  brand: CCTVBrandPrice
) => {
  const prices =
    brand.categories.flatMap(
      (category) =>
        category.packages
          .map((pkg) => pkg.price)
          .filter(
            (price): price is number =>
              typeof price === 'number'
          )
    );

  if (prices.length === 0) {
    return null;
  }

  return Math.min(...prices);
};

/* =====================================================
   COMPONENT
===================================================== */

export const Brands: React.FC = () => {
  const [selectedProduct, setSelectedProduct] =
    useState<ProductItem | null>(null);

  const [selectedBrand, setSelectedBrand] =
    useState<BrandKey>('hikvision');

  const [cctvModalOpen, setCctvModalOpen] =
    useState(false);

  const selectedBrandData =
    CCTV_PRICE_DATA[selectedBrand];

  /* ===================================================
     NAVBAR CCTV EVENT
     Tetap support menu:
     Hikvision / Dahua / HiLook / EZVIZ / IMOU
  =================================================== */

  useEffect(() => {
    const handleSelectBrand = (
      event: Event
    ) => {
      const customEvent =
        event as CustomEvent<BrandKey>;

      const brand =
        customEvent.detail;

      if (
        brand &&
        CCTV_PRICE_DATA[brand]
      ) {
        setSelectedBrand(brand);
        setCctvModalOpen(true);

        setTimeout(() => {
          document
            .querySelector(
              '#harga-paket'
            )
            ?.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
        }, 100);
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

  /* ===================================================
     CCTV CATEGORY RINGKAS
  =================================================== */

  const selectedBrandCategories =
    useMemo(() => {
      return selectedBrandData.categories;
    }, [selectedBrandData]);

  const selectedBrandStartingPrice =
    useMemo(() => {
      return getBrandStartingPrice(
        selectedBrandData
      );
    }, [selectedBrandData]);

  /* ===================================================
     WHATSAPP GENERIC PRODUCT
  =================================================== */

  const getProductWhatsappUrl = (
    product: ProductItem
  ) => {
    const message = [
      'Halo PUSTEKINDO,',
      '',
      `Saya tertarik dengan layanan ${product.title}.`,
      `Harga mulai: ${formatRupiah(product.price)}`,
      '',
      'Mohon informasi detail mengenai perangkat, pekerjaan dan biaya pemasangan.',
      '',
      'Terima kasih.'
    ].join('\n');

    return `https://wa.me/6281212612006?text=${encodeURIComponent(
      message
    )}`;
  };

  /* ===================================================
     WHATSAPP CCTV
  =================================================== */

  const getCctvWhatsappUrl = () => {
    const message = [
      'Halo PUSTEKINDO,',
      '',
      'Saya tertarik dengan CCTV Security System.',
      `Merek: ${selectedBrandData.name}`,
      selectedBrandStartingPrice
        ? `Harga mulai: ${formatRupiah(
            selectedBrandStartingPrice
          )}`
        : 'Harga: Mohon informasi harga',
      '',
      'Mohon informasi paket CCTV dan biaya pemasangan.',
      '',
      'Terima kasih.'
    ].join('\n');

    return `https://wa.me/6281212612006?text=${encodeURIComponent(
      message
    )}`;
  };

  return (
    <section
      id="harga-paket"
      className="
        scroll-mt-28
        py-16
        lg:py-20
        bg-[#ecfdf5]
        border-y
        border-emerald-100
        relative
        overflow-hidden
      "
    >
      {/* =================================================
          BACKGROUND ACCENT
      ================================================= */}

      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[800px]
          h-[320px]
          bg-emerald-100/50
          blur-3xl
          rounded-full
          pointer-events-none
        "
      />

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <div
          className="
            text-center
            max-w-3xl
            mx-auto
          "
        >
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-3.5
              py-1.5
              rounded-full
              bg-white/70
              backdrop-blur-sm
              border
              border-emerald-200
              text-emerald-700
              text-[10px]
              sm:text-xs
              font-black
              uppercase
              tracking-[0.14em]
            "
          >
            <BadgeDollarSign className="w-4 h-4" />

            Produk & Layanan
          </div>

          <h2
            className="
              mt-4
              text-3xl
              sm:text-4xl
              font-black
              text-[#0a192f]
              tracking-tight
            "
          >
            Solusi PUSTEKINDO
          </h2>

          <p
            className="
              mt-3
              text-sm
              sm:text-base
              text-slate-600
              leading-relaxed
            "
          >
            Pilih kebutuhan sistem Anda.
            Harga yang ditampilkan merupakan
            harga mulai dan dapat disesuaikan
            dengan perangkat, kapasitas,
            kondisi lokasi serta kebutuhan
            instalasi.
          </p>
        </div>

        {/* =================================================
            12 PRODUCT CARDS
        ================================================= */}

        <div
          className="
            mt-10
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            gap-4
          "
        >
          {PRODUCTS.map((product) => {
            const isCctv =
              product.slug === 'cctv';

            return (
              <article
                key={product.id}
                onClick={() => {
                  if (isCctv) {
                    setCctvModalOpen(true);
                  } else {
                    setSelectedProduct(
                      product
                    );
                  }
                }}
                className={`
                  group
                  relative
                  bg-white/90
                  backdrop-blur-sm
                  border
                  rounded-2xl
                  p-5
                  cursor-pointer
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl

                  ${
                    product.featured
                      ? `
                        border-emerald-400
                        shadow-md
                        shadow-emerald-900/5
                      `
                      : `
                        border-emerald-100
                        hover:border-emerald-300
                      `
                  }
                `}
              >
                {/* Featured */}
                {product.featured && (
                  <div
                    className="
                      absolute
                      top-4
                      right-4
                      px-2.5
                      py-1
                      rounded-full
                      bg-emerald-50
                      border
                      border-emerald-200
                      text-[9px]
                      font-black
                      uppercase
                      tracking-wider
                      text-emerald-700
                    "
                  >
                    Populer
                  </div>
                )}

                {/* Icon */}
                <div
                  className="
                    w-12
                    h-12
                    rounded-xl
                    bg-[#0a192f]
                    text-emerald-300
                    flex
                    items-center
                    justify-center
                    shadow-sm
                    group-hover:bg-emerald-600
                    group-hover:text-white
                    transition-colors
                  "
                >
                  {product.icon}
                </div>

                {/* Title */}
                <h3
                  className="
                    mt-4
                    text-base
                    font-black
                    text-[#0a192f]
                  "
                >
                  {product.title}
                </h3>

                {/* CCTV Brands */}
                {isCctv && (
                  <div
                    className="
                      mt-3
                      flex
                      flex-wrap
                      gap-1.5
                    "
                  >
                    {BRAND_ORDER.map(
                      (brandId) => (
                        <span
                          key={brandId}
                          className="
                            px-2
                            py-1
                            rounded-md
                            bg-emerald-50
                            border
                            border-emerald-100
                            text-[9px]
                            font-bold
                            text-emerald-700
                          "
                        >
                          {
                            CCTV_PRICE_DATA[
                              brandId
                            ].name
                          }
                        </span>
                      )
                    )}
                  </div>
                )}

                {/* Description */}
                <p
                  className="
                    mt-3
                    text-xs
                    sm:text-sm
                    text-slate-600
                    leading-relaxed
                    min-h-[60px]
                  "
                >
                  {product.description}
                </p>

                {/* Price */}
                <div
                  className="
                    mt-5
                    pt-4
                    border-t
                    border-emerald-100
                  "
                >
                  <div
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-wider
                      text-slate-400
                    "
                  >
                    Mulai dari
                  </div>

                  <div
                    className="
                      mt-1
                      text-xl
                      font-black
                      text-emerald-700
                    "
                  >
                    {formatRupiah(
                      product.price
                    )}
                  </div>
                </div>

                {/* Detail */}
                <div
                  className="
                    mt-4
                    flex
                    items-center
                    justify-between
                  "
                >
                  <span
                    className="
                      text-xs
                      font-bold
                      text-[#0a192f]
                    "
                  >
                    Lihat Detail
                  </span>

                  <ArrowRight
                    className="
                      w-4
                      h-4
                      text-emerald-600
                      group-hover:translate-x-1
                      transition-transform
                    "
                  />
                </div>
              </article>
            );
          })}
        </div>

        {/* =================================================
            INFORMATION
        ================================================= */}

        <div
          className="
            mt-8
            bg-white/65
            backdrop-blur-md
            border
            border-emerald-200
            rounded-2xl
            p-5
            sm:p-6
          "
        >
          <div
            className="
              flex
              items-start
              gap-3
            "
          >
            <BadgeDollarSign
              className="
                w-5
                h-5
                text-emerald-600
                shrink-0
                mt-0.5
              "
            />

            <div>
              <h4
                className="
                  text-sm
                  font-black
                  text-[#0a192f]
                "
              >
                Informasi Harga
              </h4>

              <p
                className="
                  mt-1
                  text-xs
                  sm:text-sm
                  text-slate-600
                  leading-relaxed
                "
              >
                Harga di atas merupakan
                estimasi harga mulai.
                Penawaran akhir dapat
                menyesuaikan merek, tipe
                perangkat, jumlah perangkat,
                kapasitas, panjang kabel,
                kondisi lokasi dan kebutuhan
                instalasi.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          CCTV MODAL
      ===================================================== */}

      {cctvModalOpen && (
        <div
          className="
            fixed
            inset-0
            z-[150]
            bg-[#071426]/80
            backdrop-blur-md
            flex
            items-center
            justify-center
            p-4
          "
          onClick={() =>
            setCctvModalOpen(false)
          }
        >
          <div
            className="
              relative
              w-full
              max-w-3xl
              max-h-[90vh]
              overflow-y-auto
              bg-[#f0fdf4]
              rounded-3xl
              shadow-2xl
              border
              border-emerald-200
            "
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            {/* Close */}
            <button
              type="button"
              onClick={() =>
                setCctvModalOpen(false)
              }
              className="
                absolute
                top-4
                right-4
                z-20
                w-10
                h-10
                rounded-full
                bg-white
                border
                border-emerald-100
                text-[#0a192f]
                flex
                items-center
                justify-center
                shadow-sm
                hover:bg-emerald-50
              "
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div
              className="
                p-6
                sm:p-8
                border-b
                border-emerald-200
              "
            >
              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-[#0a192f]
                  text-emerald-300
                  flex
                  items-center
                  justify-center
                "
              >
                <Camera className="w-7 h-7" />
              </div>

              <div
                className="
                  mt-5
                  text-[10px]
                  uppercase
                  tracking-[0.16em]
                  font-black
                  text-emerald-700
                "
              >
                CCTV Security System
              </div>

              <h3
                className="
                  mt-1
                  text-2xl
                  sm:text-3xl
                  font-black
                  text-[#0a192f]
                "
              >
                Pilih Merek CCTV
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  text-slate-600
                "
              >
                Tersedia beberapa merek CCTV
                yang dapat disesuaikan dengan
                kebutuhan dan anggaran.
              </p>
            </div>

            {/* Brand Buttons */}
            <div
              className="
                p-6
                sm:p-8
              "
            >
              <div
                className="
                  grid
                  grid-cols-2
                  sm:grid-cols-3
                  lg:grid-cols-5
                  gap-3
                "
              >
                {BRAND_ORDER.map(
                  (brandId) => {
                    const brand =
                      CCTV_PRICE_DATA[
                        brandId
                      ];

                    const active =
                      selectedBrand ===
                      brandId;

                    return (
                      <button
                        key={brandId}
                        type="button"
                        onClick={() =>
                          setSelectedBrand(
                            brandId
                          )
                        }
                        className={`
                          min-h-[88px]
                          px-3
                          rounded-xl
                          border
                          flex
                          items-center
                          justify-center
                          transition-all

                          ${
                            active
                              ? `
                                bg-white
                                border-emerald-500
                                shadow-md
                                ring-1
                                ring-emerald-300
                              `
                              : `
                                bg-white/60
                                border-emerald-100
                                hover:border-emerald-300
                              `
                          }
                        `}
                      >
                        <BrandLogo
                          brand={brand}
                        />
                      </button>
                    );
                  }
                )}
              </div>

              {/* Selected Brand */}
              <div
                className="
                  mt-6
                  bg-white
                  border
                  border-emerald-200
                  rounded-2xl
                  p-5
                  sm:p-6
                "
              >
                <div
                  className="
                    flex
                    flex-col
                    sm:flex-row
                    sm:items-center
                    justify-between
                    gap-4
                  "
                >
                  <div>
                    <div
                      className="
                        text-[10px]
                        uppercase
                        tracking-wider
                        font-black
                        text-emerald-700
                      "
                    >
                      Merek Dipilih
                    </div>

                    <h4
                      className="
                        mt-1
                        text-2xl
                        font-black
                        text-[#0a192f]
                      "
                    >
                      {
                        selectedBrandData.name
                      }
                    </h4>
                  </div>

                  <div
                    className="
                      sm:text-right
                    "
                  >
                    <div
                      className="
                        text-[10px]
                        uppercase
                        font-bold
                        tracking-wider
                        text-slate-400
                      "
                    >
                      Harga mulai
                    </div>

                    <div
                      className="
                        mt-1
                        text-xl
                        font-black
                        text-emerald-700
                      "
                    >
                      {selectedBrandStartingPrice
                        ? formatRupiah(
                            selectedBrandStartingPrice
                          )
                        : 'Hubungi Kami'}
                    </div>
                  </div>
                </div>

                {/* Categories */}
                <div
                  className="
                    mt-5
                    flex
                    flex-wrap
                    gap-2
                  "
                >
                  {selectedBrandCategories.map(
                    (category) => (
                      <span
                        key={category.id}
                        className="
                          inline-flex
                          px-3
                          py-1.5
                          rounded-full
                          bg-emerald-50
                          border
                          border-emerald-100
                          text-xs
                          font-bold
                          text-emerald-800
                        "
                      >
                        {category.label}
                      </span>
                    )
                  )}
                </div>

                <a
                  href={getCctvWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-6
                    w-full
                    h-11
                    rounded-xl
                    bg-emerald-600
                    hover:bg-emerald-700
                    text-white
                    flex
                    items-center
                    justify-center
                    gap-2
                    text-xs
                    font-black
                    uppercase
                    tracking-wider
                    transition-colors
                  "
                >
                  <MessageCircle className="w-4 h-4" />

                  Konsultasi Paket CCTV
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================
          PRODUCT DETAIL MODAL
      ===================================================== */}

      {selectedProduct && (
        <div
          className="
            fixed
            inset-0
            z-[150]
            bg-[#071426]/80
            backdrop-blur-md
            flex
            items-center
            justify-center
            p-4
          "
          onClick={() =>
            setSelectedProduct(null)
          }
        >
          <div
            className="
              relative
              w-full
              max-w-lg
              bg-[#f0fdf4]
              rounded-3xl
              border
              border-emerald-200
              shadow-2xl
              p-6
              sm:p-8
            "
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            <button
              type="button"
              onClick={() =>
                setSelectedProduct(null)
              }
              className="
                absolute
                top-4
                right-4
                w-10
                h-10
                rounded-full
                bg-white
                border
                border-emerald-100
                flex
                items-center
                justify-center
                text-[#0a192f]
              "
            >
              <X className="w-5 h-5" />
            </button>

            <div
              className="
                w-14
                h-14
                rounded-2xl
                bg-[#0a192f]
                text-emerald-300
                flex
                items-center
                justify-center
              "
            >
              {selectedProduct.icon}
            </div>

            <h3
              className="
                mt-5
                pr-10
                text-2xl
                font-black
                text-[#0a192f]
              "
            >
              {selectedProduct.title}
            </h3>

            <p
              className="
                mt-3
                text-sm
                text-slate-600
                leading-relaxed
              "
            >
              {selectedProduct.description}
            </p>

            <div
              className="
                mt-6
                p-5
                bg-white
                rounded-2xl
                border
                border-emerald-200
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-emerald-700
                "
              >
                <ShieldCheck className="w-4 h-4" />

                <span
                  className="
                    text-xs
                    uppercase
                    tracking-wider
                    font-black
                  "
                >
                  Estimasi Harga
                </span>
              </div>

              <div
                className="
                  mt-3
                  text-sm
                  text-slate-500
                "
              >
                Mulai dari
              </div>

              <div
                className="
                  mt-1
                  text-3xl
                  font-black
                  text-emerald-700
                "
              >
                {formatRupiah(
                  selectedProduct.price
                )}
              </div>

              <p
                className="
                  mt-3
                  text-xs
                  text-slate-500
                  leading-relaxed
                "
              >
                Harga dapat berubah
                menyesuaikan kebutuhan,
                perangkat, material dan
                kondisi lokasi.
              </p>
            </div>

            <a
              href={getProductWhatsappUrl(
                selectedProduct
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-6
                w-full
                h-11
                rounded-xl
                bg-emerald-600
                hover:bg-emerald-700
                text-white
                flex
                items-center
                justify-center
                gap-2
                text-xs
                font-black
                uppercase
                tracking-wider
                transition-colors
              "
            >
              <MessageCircle className="w-4 h-4" />

              Konsultasi Sekarang
            </a>

            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-3
                flex
                items-center
                justify-center
                gap-1.5
                text-xs
                font-bold
                text-emerald-700
                hover:text-emerald-900
              "
            >
              Hubungi PUSTEKINDO

              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </section>
  );
};
