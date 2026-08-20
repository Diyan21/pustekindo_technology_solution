import React from 'react';

import {
  MessageSquare,
  PhoneCall,
  ShieldCheck,
  MapPin,
  Wrench,
  BadgeCheck,
  Network,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from 'lucide-react';

import { COMPANY_INFO } from '../data/companyData';

export const CTA: React.FC = () => {
  const ctaWaLink =
    'https://wa.me/6281212612006?text=Halo%20PUSTEKINDO,%20saya%20ingin%20berkonsultasi%20mengenai%20kebutuhan%20CCTV%20dan%20sistem%20keamanan.';

  const projectLogos = [
    {
      name: 'Project 01',
      logo: '/images/client-01.png'
    },
    {
      name: 'Project 02',
      logo: '/images/client-02.png'
    },
    {
      name: 'Project 03',
      logo: '/images/client-03.png'
    },
    {
      name: 'Project 04',
      logo: '/images/client-04.png'
    },
    {
      name: 'Project 05',
      logo: '/images/client-05.png'
    }
  ];

  return (
    <section
      id="cta-section"
      className="
        relative
        overflow-hidden
        bg-white
        py-20
        lg:py-24
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute
            -top-48
            right-[-120px]
            w-[620px]
            h-[620px]
            rounded-full
            bg-emerald-50
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            -bottom-56
            -left-40
            w-[560px]
            h-[560px]
            rounded-full
            bg-green-50
            blur-[145px]
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.10]
            bg-[radial-gradient(#8bd7b0_1px,transparent_1px)]
            [background-size:22px_22px]
          "
        />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          max-w-6xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* =================================================
            MAIN CTA
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[1fr_340px]
            gap-12
            lg:gap-16
            items-start
          "
        >
          {/* LEFT */}
          <div>
            <div
              className="
                inline-flex
                items-center
                gap-2
                px-3.5
                py-1.5
                rounded-full
                border
                border-emerald-200
                bg-emerald-50
                text-[11px]
                sm:text-xs
                font-extrabold
                uppercase
                tracking-[0.14em]
                text-emerald-700
              "
            >
              <Sparkles className="w-4 h-4" />
              Konsultasi Sistem Keamanan
            </div>

            <h2
              className="
                mt-6
                max-w-4xl
                text-4xl
                sm:text-5xl
                lg:text-[56px]
                font-black
                tracking-[-0.035em]
                leading-[1.03]
                text-[#102a20]
              "
            >
              Sistem Keamanan yang Tepat

              <span
                className="
                  block
                  mt-2
                  text-emerald-600
                "
              >
                Dimulai dari Perencanaan yang Tepat.
              </span>
            </h2>

            <p
              className="
                mt-7
                max-w-3xl
                text-base
                sm:text-lg
                leading-8
                text-[#41584d]
              "
            >
              <strong className="font-extrabold text-[#102a20]">
                {COMPANY_INFO.name} {COMPANY_INFO.subName}
              </strong>{' '}
              membantu kebutuhan CCTV, surveillance system, jaringan,
              access control, dan solusi keamanan berbasis IT untuk rumah,
              kantor, toko, gudang, maupun area bisnis.
            </p>

            <p
              className="
                mt-4
                max-w-3xl
                text-sm
                sm:text-base
                leading-7
                text-[#587064]
              "
            >
              Kami menangani proses mulai dari konsultasi awal, survei
              lokasi, analisis kebutuhan, penentuan titik pemasangan,
              pemilihan perangkat, instalasi, konfigurasi, hingga dukungan
              teknis setelah sistem digunakan.
            </p>

            {/* =================================================
                BENEFITS
            ================================================= */}

            <div
              className="
                mt-11
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-x-10
                gap-y-8
                max-w-4xl
              "
            >
              <div className="flex items-start gap-4">
                <div
                  className="
                    w-11
                    h-11
                    rounded-xl
                    bg-emerald-100
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >
                  <ShieldCheck className="w-5 h-5 text-emerald-700" />
                </div>

                <div>
                  <h3 className="text-base font-extrabold text-[#102a20]">
                    Produk Berkualitas
                  </h3>

                  <p className="mt-1.5 text-sm leading-6 text-[#587064]">
                    Perangkat dipilih sesuai kebutuhan agar sistem stabil,
                    efektif, dan dapat diandalkan dalam penggunaan
                    sehari-hari.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="
                    w-11
                    h-11
                    rounded-xl
                    bg-emerald-100
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >
                  <Wrench className="w-5 h-5 text-emerald-700" />
                </div>

                <div>
                  <h3 className="text-base font-extrabold text-[#102a20]">
                    Teknisi Berpengalaman
                  </h3>

                  <p className="mt-1.5 text-sm leading-6 text-[#587064]">
                    Instalasi, konfigurasi, dan pengujian dilakukan secara
                    terstruktur sesuai kebutuhan lokasi.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="
                    w-11
                    h-11
                    rounded-xl
                    bg-emerald-100
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >
                  <MapPin className="w-5 h-5 text-emerald-700" />
                </div>

                <div>
                  <h3 className="text-base font-extrabold text-[#102a20]">
                    Survei & Perencanaan
                  </h3>

                  <p className="mt-1.5 text-sm leading-6 text-[#587064]">
                    Posisi kamera, jalur kabel, jaringan, dan perangkat
                    dirancang berdasarkan kondisi serta karakteristik
                    lokasi.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="
                    w-11
                    h-11
                    rounded-xl
                    bg-emerald-100
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >
                  <BadgeCheck className="w-5 h-5 text-emerald-700" />
                </div>

                <div>
                  <h3 className="text-base font-extrabold text-[#102a20]">
                    Dukungan Setelah Instalasi
                  </h3>

                  <p className="mt-1.5 text-sm leading-6 text-[#587064]">
                    Tim kami siap membantu pengecekan, pengembangan, dan
                    penyesuaian sistem sesuai kebutuhan operasional.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT CONTACT
          ================================================= */}

          <div className="lg:pt-5">
            <div
              className="
                border-l-2
                border-emerald-400
                pl-6
              "
            >
              <p
                className="
                  text-[11px]
                  sm:text-xs
                  font-extrabold
                  uppercase
                  tracking-[0.15em]
                  text-emerald-700
                "
              >
                Mulai Konsultasi
              </p>

              <h3
                className="
                  mt-3
                  text-2xl
                  sm:text-3xl
                  font-black
                  tracking-tight
                  leading-tight
                  text-[#102a20]
                "
              >
                Ceritakan kebutuhan lokasi Anda.
              </h3>

              <p
                className="
                  mt-4
                  text-sm
                  leading-6
                  text-[#587064]
                "
              >
                Sampaikan jenis lokasi, area yang ingin dipantau, atau
                sistem yang sedang direncanakan. Tim kami akan membantu
                memberikan arahan awal dan rekomendasi solusi.
              </p>
            </div>

            {/* WHATSAPP */}
            <a
              id="big-cta-whatsapp"
              href={ctaWaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                mt-8
                w-full
                inline-flex
                items-center
                justify-center
                gap-2.5
                px-6
                py-4
                rounded-xl
                bg-emerald-600
                hover:bg-emerald-700
                text-white
                text-sm
                font-extrabold
                shadow-[0_8px_20px_rgba(5,150,105,0.20)]
                hover:-translate-y-0.5
                hover:shadow-[0_12px_30px_rgba(5,150,105,0.28)]
                transition-all
                duration-200
              "
            >
              <MessageSquare className="w-5 h-5" />

              Konsultasi via WhatsApp

              <ArrowRight
                className="
                  w-4
                  h-4
                  group-hover:translate-x-1
                  transition-transform
                "
              />
            </a>

            {/* PHONE */}
            <a
              id="big-cta-phone"
              href={`tel:${COMPANY_INFO.phone.replace(
                /[^0-9]/g,
                ''
              )}`}
              className="
                mt-3
                w-full
                inline-flex
                items-center
                justify-center
                gap-2
                px-6
                py-3.5
                rounded-xl
                border
                border-emerald-200
                bg-white
                text-sm
                font-bold
                text-[#102a20]
                hover:bg-emerald-50
                hover:border-emerald-300
                transition-all
              "
            >
              <PhoneCall className="w-4 h-4 text-emerald-600" />
              {COMPANY_INFO.phone}
            </a>

            {/* CHECKLIST */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-sm text-[#587064]">
                  Konsultasi kebutuhan sistem
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-sm text-[#587064]">
                  Survei dan analisis lokasi
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-sm text-[#587064]">
                  Rekomendasi perangkat & instalasi
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            PROJECT MARQUEE
        ===================================================== */}

        <div
          className="
            mt-20
            pt-12
            border-t
            border-emerald-100
          "
        >
          <div className="text-center">
            <div
              className="
                inline-flex
                items-center
                gap-2
                text-[11px]
                sm:text-xs
                font-extrabold
                uppercase
                tracking-[0.16em]
                text-emerald-700
              "
            >
              <ShieldCheck className="w-4 h-4" />
              Dipercaya untuk Berbagai Proyek
            </div>

            <h3
              className="
                mt-3
                text-2xl
                sm:text-3xl
                font-black
                tracking-tight
                text-[#102a20]
              "
            >
              Pengalaman Proyek PUSTEKINDO
            </h3>

            <p
              className="
                mt-2
                max-w-2xl
                mx-auto
                text-sm
                sm:text-base
                leading-7
                text-[#587064]
              "
            >
              Pengalaman implementasi sistem keamanan dan teknologi untuk
              berbagai perusahaan, institusi, properti, dan kebutuhan area
              komersial.
            </p>
          </div>

          {/* RUNNING LOGO */}
          <div className="client-marquee mt-10">
            <div className="client-marquee-track">
              <div className="client-marquee-group">
                {projectLogos.map((client, index) => (
                  <div
                    key={`group-1-${index}`}
                    className="client-logo-card"
                  >
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="client-logo-image"
                    />
                  </div>
                ))}
              </div>

              <div
                className="client-marquee-group"
                aria-hidden="true"
              >
                {projectLogos.map((client, index) => (
                  <div
                    key={`group-2-${index}`}
                    className="client-logo-card"
                  >
                    <img
                      src={client.logo}
                      alt=""
                      className="client-logo-image"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM SOLUTIONS
        ===================================================== */}

        <div
          className="
            mt-14
            pt-8
            border-t
            border-emerald-100
            flex
            flex-col
            lg:flex-row
            lg:items-end
            lg:justify-between
            gap-6
          "
        >
          <div>
            <p
              className="
                text-[11px]
                sm:text-xs
                font-extrabold
                uppercase
                tracking-[0.15em]
                text-emerald-700
              "
            >
              Solusi Terintegrasi
            </p>

            <h4
              className="
                mt-2
                text-lg
                sm:text-xl
                font-extrabold
                text-[#102a20]
              "
            >
              Satu sistem, dirancang sesuai kebutuhan lokasi.
            </h4>

            <p
              className="
                mt-2
                max-w-2xl
                text-sm
                leading-6
                text-[#587064]
              "
            >
              Solusi dapat disesuaikan untuk rumah, kantor, toko, gudang,
              area komersial, hingga kebutuhan proyek yang lebih kompleks.
            </p>
          </div>

          <div
            className="
              flex
              flex-wrap
              gap-x-6
              gap-y-3
              text-xs
              sm:text-sm
              font-extrabold
              text-[#102a20]
            "
          >
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              CCTV
            </span>

            <span className="flex items-center gap-2">
              <BadgeCheck className="w-4 h-4 text-emerald-600" />
              Access Control
            </span>

            <span className="flex items-center gap-2">
              <Network className="w-4 h-4 text-emerald-600" />
              Networking
            </span>

            <span className="flex items-center gap-2">
              <Wrench className="w-4 h-4 text-emerald-600" />
              IT Solution
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
