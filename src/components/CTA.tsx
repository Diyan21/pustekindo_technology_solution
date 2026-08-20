import React from 'react';
import {
  MessageSquare,
  PhoneCall,
  ShieldCheck,
  MapPin,
  Wrench,
  BadgeCheck,
  Network,
  CheckCircle2
} from 'lucide-react';

import { COMPANY_INFO } from '../data/companyData';

export const CTA: React.FC = () => {
  const ctaWaLink =
    'https://wa.me/6281212612006?text=Halo%20PUSTEKINDO,%20saya%20ingin%20berkonsultasi%20mengenai%20kebutuhan%20CCTV%20dan%20sistem%20keamanan.';

  return (
    <section
      id="cta-section"
      className="
        relative
        overflow-hidden
        bg-[#f4fbf7]
        py-16
        lg:py-20
      "
    >
      {/* Soft Background Accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute
            -top-40
            right-0
            w-[600px]
            h-[600px]
            rounded-full
            bg-emerald-100/45
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            -bottom-48
            -left-32
            w-[500px]
            h-[500px]
            rounded-full
            bg-green-100/40
            blur-[140px]
          "
        />
      </div>

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
        {/* =========================================
            TOP CONTENT
        ========================================== */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[1fr_320px]
            gap-10
            lg:gap-16
            items-start
          "
        >
          {/* LEFT */}
          <div>
            {/* Label */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                text-emerald-700
                text-xs
                sm:text-sm
                font-bold
                uppercase
                tracking-[0.12em]
                mb-5
              "
            >
              <ShieldCheck className="w-4 h-4" />
              Konsultasi Sistem Keamanan
            </div>

            {/* Heading */}
            <h2
              className="
                text-3xl
                sm:text-4xl
                lg:text-[46px]
                font-extrabold
                text-[#102a20]
                tracking-tight
                leading-[1.12]
                max-w-3xl
              "
            >
              Butuh Sistem CCTV yang Tepat
              <span className="block text-emerald-600">
                untuk Lokasi Anda?
              </span>
            </h2>

            {/* Description */}
            <p
              className="
                mt-5
                text-base
                sm:text-lg
                text-slate-600
                leading-8
                max-w-3xl
              "
            >
              <strong className="text-[#102a20] font-bold">
                {COMPANY_INFO.name} {COMPANY_INFO.subName}
              </strong>{' '}
              membantu kebutuhan CCTV, surveillance system, jaringan,
              access control, dan solusi keamanan berbasis IT untuk
              rumah, kantor, toko, gudang, maupun area bisnis.
            </p>

            <p
              className="
                mt-4
                text-sm
                sm:text-base
                text-slate-500
                leading-7
                max-w-3xl
              "
            >
              Kami membantu mulai dari konsultasi awal, survei lokasi,
              analisis kebutuhan, penentuan titik pemasangan, pemilihan
              perangkat, instalasi, konfigurasi sistem, hingga dukungan
              teknis setelah pemasangan.
            </p>

            {/* =========================================
                BENEFITS GRID
            ========================================== */}

            <div
              className="
                mt-10
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-x-10
                gap-y-8
                max-w-4xl
              "
            >
              {/* Benefit 1 */}
              <div className="flex items-start gap-4">
                <div
                  className="
                    w-12
                    h-12
                    rounded-xl
                    bg-emerald-100
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >
                  <ShieldCheck className="w-6 h-6 text-emerald-700" />
                </div>

                <div>
                  <h3
                    className="
                      text-base
                      font-extrabold
                      text-[#102a20]
                    "
                  >
                    Produk Berkualitas
                  </h3>

                  <p
                    className="
                      mt-1.5
                      text-sm
                      text-slate-500
                      leading-6
                    "
                  >
                    Pemilihan perangkat disesuaikan dengan kebutuhan
                    penggunaan untuk menghasilkan sistem yang stabil,
                    efektif, dan dapat diandalkan.
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="flex items-start gap-4">
                <div
                  className="
                    w-12
                    h-12
                    rounded-xl
                    bg-emerald-100
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >
                  <Wrench className="w-6 h-6 text-emerald-700" />
                </div>

                <div>
                  <h3
                    className="
                      text-base
                      font-extrabold
                      text-[#102a20]
                    "
                  >
                    Teknisi Berpengalaman
                  </h3>

                  <p
                    className="
                      mt-1.5
                      text-sm
                      text-slate-500
                      leading-6
                    "
                  >
                    Proses instalasi, konfigurasi, dan pengujian sistem
                    ditangani secara terstruktur oleh tenaga teknis yang
                    memahami kebutuhan lapangan.
                  </p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="flex items-start gap-4">
                <div
                  className="
                    w-12
                    h-12
                    rounded-xl
                    bg-emerald-100
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >
                  <MapPin className="w-6 h-6 text-emerald-700" />
                </div>

                <div>
                  <h3
                    className="
                      text-base
                      font-extrabold
                      text-[#102a20]
                    "
                  >
                    Survei & Perencanaan
                  </h3>

                  <p
                    className="
                      mt-1.5
                      text-sm
                      text-slate-500
                      leading-6
                    "
                  >
                    Penempatan kamera, jalur kabel, jaringan, serta
                    kebutuhan perangkat direncanakan berdasarkan kondisi
                    dan karakteristik lokasi.
                  </p>
                </div>
              </div>

              {/* Benefit 4 */}
              <div className="flex items-start gap-4">
                <div
                  className="
                    w-12
                    h-12
                    rounded-xl
                    bg-emerald-100
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >
                  <BadgeCheck className="w-6 h-6 text-emerald-700" />
                </div>

                <div>
                  <h3
                    className="
                      text-base
                      font-extrabold
                      text-[#102a20]
                    "
                  >
                    Dukungan Setelah Instalasi
                  </h3>

                  <p
                    className="
                      mt-1.5
                      text-sm
                      text-slate-500
                      leading-6
                    "
                  >
                    Tim kami siap membantu kebutuhan pengecekan,
                    pengembangan, maupun penyesuaian sistem sesuai
                    kebutuhan operasional.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================
              RIGHT CONTACT
          ========================================== */}

          <div
            className="
              lg:pt-8
            "
          >
            <div
              className="
                border-l-2
                border-emerald-400
                pl-6
              "
            >
              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.14em]
                  text-emerald-700
                "
              >
                Konsultasikan Kebutuhan Anda
              </p>

              <h3
                className="
                  mt-3
                  text-xl
                  sm:text-2xl
                  font-extrabold
                  text-[#102a20]
                  leading-snug
                "
              >
                Mulai dari kebutuhan sederhana hingga sistem terintegrasi.
              </h3>

              <p
                className="
                  mt-3
                  text-sm
                  text-slate-500
                  leading-6
                "
              >
                Sampaikan jenis lokasi, area yang ingin dipantau, atau
                kebutuhan sistem Anda. Tim kami akan membantu memberikan
                arahan awal dan rekomendasi solusi.
              </p>
            </div>

            {/* WhatsApp */}
            <a
              id="big-cta-whatsapp"
              href={ctaWaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-7
                w-full
                inline-flex
                items-center
                justify-center
                px-6
                py-3.5
                rounded-xl
                text-sm
                font-bold
                text-white
                bg-emerald-600
                hover:bg-emerald-700
                shadow-md
                shadow-emerald-900/10
                hover:-translate-y-0.5
                transition-all
                duration-200
                active:scale-[0.98]
              "
            >
              <MessageSquare className="w-5 h-5 mr-2.5" />
              Konsultasi via WhatsApp
            </a>

            {/* Phone */}
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
                px-6
                py-3.5
                rounded-xl
                text-sm
                font-semibold
                text-emerald-800
                border
                border-emerald-200
                bg-transparent
                hover:bg-emerald-50
                transition-all
                duration-200
              "
            >
              <PhoneCall className="w-4 h-4 mr-2" />
              0812-1261-2006
            </a>

            {/* Mini info */}
            <div
              className="
                mt-6
                space-y-3
              "
            >
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />

                <span className="text-sm text-slate-500">
                  Konsultasi kebutuhan sistem
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />

                <span className="text-sm text-slate-500">
                  Survei dan analisis lokasi
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />

                <span className="text-sm text-slate-500">
                  Rekomendasi perangkat dan instalasi
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================
            BOTTOM SOLUTION BAR
        ========================================== */}

        <div
          className="
            mt-14
            pt-7
            border-t
            border-emerald-200/70
            flex
            flex-col
            lg:flex-row
            lg:items-center
            lg:justify-between
            gap-5
          "
        >
          <div>
            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.14em]
                text-emerald-700
              "
            >
              Solusi Terintegrasi
            </p>

            <p
              className="
                mt-2
                text-sm
                text-slate-500
                max-w-2xl
                leading-6
              "
            >
              Solusi dapat disesuaikan dengan skala rumah, usaha, kantor,
              gudang, maupun kebutuhan proyek yang lebih kompleks.
            </p>
          </div>

          <div
            className="
              flex
              flex-wrap
              gap-x-5
              gap-y-3
              text-xs
              sm:text-sm
              font-bold
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
