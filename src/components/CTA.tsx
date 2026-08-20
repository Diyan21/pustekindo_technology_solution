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

  return (
    <section
      id="cta-section"
      className="
        relative
        overflow-hidden
        py-20
        lg:py-28
        bg-gradient-to-br
        from-[#062c24]
        via-[#0a5b47]
        to-[#dff8eb]
      "
    >
      {/* =====================================================
          BACKGROUND TEXTURE
      ===================================================== */}

      <div className="absolute inset-0 pointer-events-none">
        {/* Large glow right */}
        <div
          className="
            absolute
            -top-40
            -right-24
            w-[680px]
            h-[680px]
            rounded-full
            bg-emerald-300/25
            blur-[150px]
          "
        />

        {/* Large glow left */}
        <div
          className="
            absolute
            -bottom-52
            -left-32
            w-[560px]
            h-[560px]
            rounded-full
            bg-green-100/30
            blur-[140px]
          "
        />

        {/* Fine dot texture */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.18]
            bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.28)_1px,transparent_1.5px)]
            [background-size:14px_14px]
          "
        />

        {/* Dark left shade */}
        <div
          className="
            absolute
            inset-y-0
            left-0
            w-[58%]
            bg-gradient-to-r
            from-black/18
            via-black/5
            to-transparent
          "
        />

        {/* Bottom fade */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-44
            bg-gradient-to-t
            from-black/10
            to-transparent
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

          {/* =================================================
              LEFT
          ================================================= */}

          <div>
            {/* Eyebrow */}
            <div
              className="
                inline-flex
                items-center
                gap-2

                px-3.5
                py-1.5

                rounded-full

                bg-white/10
                border
                border-white/15
                backdrop-blur-md

                text-emerald-100

                text-[11px]
                sm:text-xs

                font-extrabold
                uppercase
                tracking-[0.16em]
              "
            >
              <Sparkles className="w-4 h-4 text-emerald-300" />

              Konsultasi Sistem Keamanan
            </div>


            {/* Heading */}
            <h2
              className="
                mt-6

                text-4xl
                sm:text-5xl
                lg:text-[58px]

                font-black

                tracking-[-0.03em]
                leading-[1.02]

                text-white

                max-w-4xl
              "
            >
              Sistem Keamanan yang Tepat
              <span
                className="
                  block
                  mt-2
                  text-transparent
                  bg-clip-text
                  bg-gradient-to-r
                  from-emerald-300
                  via-green-200
                  to-white
                "
              >
                Dimulai dari Perencanaan yang Tepat.
              </span>
            </h2>


            {/* Description */}
            <p
              className="
                mt-7

                max-w-3xl

                text-base
                sm:text-lg

                leading-8

                text-emerald-50/85
              "
            >
              <strong className="text-white font-extrabold">
                {COMPANY_INFO.name} {COMPANY_INFO.subName}
              </strong>{' '}
              membantu kebutuhan CCTV, surveillance system, jaringan,
              access control, dan solusi keamanan berbasis IT untuk
              rumah, kantor, toko, gudang, maupun area bisnis.
            </p>

            <p
              className="
                mt-4

                max-w-3xl

                text-sm
                sm:text-base

                leading-7

                text-emerald-100/70
              "
            >
              Kami menangani proses dari konsultasi awal, survei lokasi,
              analisis kebutuhan, penentuan titik pemasangan, pemilihan
              perangkat, instalasi, konfigurasi, hingga dukungan teknis
              setelah sistem digunakan.
            </p>


            {/* =================================================
                BENEFITS
            ================================================= */}

            <div
              className="
                mt-12

                grid
                grid-cols-1
                sm:grid-cols-2

                gap-x-10
                gap-y-9

                max-w-4xl
              "
            >
              {/* 1 */}
              <div className="flex items-start gap-4">
                <div
                  className="
                    w-12
                    h-12
                    rounded-2xl

                    bg-gradient-to-br
                    from-emerald-300
                    to-emerald-500

                    shadow-[0_8px_24px_rgba(16,185,129,0.30)]

                    flex
                    items-center
                    justify-center

                    shrink-0
                  "
                >
                  <ShieldCheck className="w-6 h-6 text-[#063c30]" />
                </div>

                <div>
                  <h3
                    className="
                      text-base
                      sm:text-lg
                      font-extrabold
                      text-white
                    "
                  >
                    Produk Berkualitas
                  </h3>

                  <p
                    className="
                      mt-1.5
                      text-sm
                      leading-6
                      text-emerald-100/70
                    "
                  >
                    Pemilihan perangkat disesuaikan dengan kebutuhan
                    penggunaan agar sistem stabil, efektif, dan dapat
                    diandalkan dalam jangka panjang.
                  </p>
                </div>
              </div>


              {/* 2 */}
              <div className="flex items-start gap-4">
                <div
                  className="
                    w-12
                    h-12
                    rounded-2xl

                    bg-gradient-to-br
                    from-green-200
                    to-emerald-400

                    shadow-[0_8px_24px_rgba(16,185,129,0.26)]

                    flex
                    items-center
                    justify-center

                    shrink-0
                  "
                >
                  <Wrench className="w-6 h-6 text-[#063c30]" />
                </div>

                <div>
                  <h3
                    className="
                      text-base
                      sm:text-lg
                      font-extrabold
                      text-white
                    "
                  >
                    Teknisi Berpengalaman
                  </h3>

                  <p
                    className="
                      mt-1.5
                      text-sm
                      leading-6
                      text-emerald-100/70
                    "
                  >
                    Instalasi, konfigurasi, dan pengujian dilakukan secara
                    terstruktur oleh tenaga teknis yang memahami kebutuhan
                    di lapangan.
                  </p>
                </div>
              </div>


              {/* 3 */}
              <div className="flex items-start gap-4">
                <div
                  className="
                    w-12
                    h-12
                    rounded-2xl

                    bg-gradient-to-br
                    from-emerald-200
                    to-green-400

                    shadow-[0_8px_24px_rgba(16,185,129,0.24)]

                    flex
                    items-center
                    justify-center

                    shrink-0
                  "
                >
                  <MapPin className="w-6 h-6 text-[#063c30]" />
                </div>

                <div>
                  <h3
                    className="
                      text-base
                      sm:text-lg
                      font-extrabold
                      text-white
                    "
                  >
                    Survei & Perencanaan
                  </h3>

                  <p
                    className="
                      mt-1.5
                      text-sm
                      leading-6
                      text-emerald-100/70
                    "
                  >
                    Posisi kamera, jalur kabel, kebutuhan jaringan, dan
                    perangkat dirancang berdasarkan kondisi serta
                    karakteristik lokasi.
                  </p>
                </div>
              </div>


              {/* 4 */}
              <div className="flex items-start gap-4">
                <div
                  className="
                    w-12
                    h-12
                    rounded-2xl

                    bg-gradient-to-br
                    from-lime-200
                    to-emerald-400

                    shadow-[0_8px_24px_rgba(16,185,129,0.24)]

                    flex
                    items-center
                    justify-center

                    shrink-0
                  "
                >
                  <BadgeCheck className="w-6 h-6 text-[#063c30]" />
                </div>

                <div>
                  <h3
                    className="
                      text-base
                      sm:text-lg
                      font-extrabold
                      text-white
                    "
                  >
                    Dukungan Setelah Instalasi
                  </h3>

                  <p
                    className="
                      mt-1.5
                      text-sm
                      leading-6
                      text-emerald-100/70
                    "
                  >
                    Tim kami siap membantu pengecekan, pengembangan,
                    maupun penyesuaian sistem sesuai kebutuhan
                    operasional.
                  </p>
                </div>
              </div>
            </div>
          </div>


          {/* =================================================
              RIGHT CTA
          ================================================= */}

          <div
            className="
              lg:sticky
              lg:top-28
            "
          >
            <div
              className="
                border-l
                border-white/20

                pl-6
                lg:pl-7
              "
            >
              <p
                className="
                  text-[11px]
                  sm:text-xs

                  font-extrabold
                  uppercase
                  tracking-[0.16em]

                  text-emerald-200
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

                  text-white
                "
              >
                Ceritakan kebutuhan lokasi Anda.
              </h3>

              <p
                className="
                  mt-4

                  text-sm

                  leading-6

                  text-emerald-100/70
                "
              >
                Sampaikan jenis lokasi, area yang ingin dipantau, atau
                sistem yang sedang Anda rencanakan. Tim kami akan membantu
                memberikan arahan awal dan rekomendasi solusi.
              </p>
            </div>


            {/* =================================================
                WHATSAPP 3D BUTTON
            ================================================= */}

            <a
              id="big-cta-whatsapp"
              href={ctaWaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                relative
                overflow-hidden

                mt-8

                w-full

                inline-flex
                items-center
                justify-center

                gap-2.5

                px-6
                py-4

                rounded-2xl

                bg-gradient-to-br
                from-[#064e3b]
                via-[#10b981]
                to-[#6ee7b7]

                border
                border-emerald-200/30

                text-white
                text-sm
                font-extrabold

                shadow-[0_8px_0_#064e3b,0_16px_35px_rgba(16,185,129,0.32)]

                hover:-translate-y-1

                hover:shadow-[0_10px_0_#064e3b,0_22px_45px_rgba(16,185,129,0.40)]

                active:translate-y-[3px]

                active:shadow-[0_4px_0_#064e3b,0_10px_25px_rgba(16,185,129,0.28)]

                transition-all
                duration-200
              "
            >
              {/* Texture */}
              <span
                className="
                  absolute
                  inset-0

                  opacity-30

                  bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.5)_0_1px,transparent_1.5px)]
                  [background-size:8px_8px]

                  pointer-events-none
                "
              />

              {/* Light layer */}
              <span
                className="
                  absolute
                  inset-x-0
                  top-0

                  h-[45%]

                  bg-gradient-to-b
                  from-white/25
                  to-transparent

                  pointer-events-none
                "
              />

              {/* Shine */}
              <span
                className="
                  absolute
                  -left-[55%]
                  top-0

                  h-full
                  w-[40%]

                  skew-x-[-22deg]

                  bg-gradient-to-r
                  from-transparent
                  via-white/25
                  to-transparent

                  group-hover:left-[125%]

                  transition-all
                  duration-700

                  pointer-events-none
                "
              />

              <MessageSquare className="relative z-10 w-5 h-5" />

              <span className="relative z-10">
                Konsultasi via WhatsApp
              </span>

              <ArrowRight
                className="
                  relative
                  z-10

                  w-4
                  h-4

                  group-hover:translate-x-1

                  transition-transform
                "
              />
            </a>


            {/* Phone */}
            <a
              id="big-cta-phone"
              href={`tel:${COMPANY_INFO.phone.replace(
                /[^0-9]/g,
                ''
              )}`}
              className="
                mt-5

                w-full

                inline-flex
                items-center
                justify-center

                gap-2

                px-6
                py-3.5

                rounded-xl

                border
                border-white/20

                bg-white/8
                backdrop-blur-md

                text-sm
                font-bold

                text-white

                hover:bg-white/14
                hover:border-white/30

                transition-all
              "
            >
              <PhoneCall className="w-4 h-4 text-emerald-300" />

              {COMPANY_INFO.phone}
            </a>


            {/* Mini checklist */}
            <div
              className="
                mt-7
                space-y-3
              "
            >
              <div className="flex items-center gap-2.5">
                <CheckCircle2
                  className="
                    w-4
                    h-4
                    text-emerald-300
                    shrink-0
                  "
                />

                <span
                  className="
                    text-sm
                    text-emerald-50/80
                  "
                >
                  Konsultasi kebutuhan sistem
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <CheckCircle2
                  className="
                    w-4
                    h-4
                    text-emerald-300
                    shrink-0
                  "
                />

                <span
                  className="
                    text-sm
                    text-emerald-50/80
                  "
                >
                  Survei dan analisis lokasi
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <CheckCircle2
                  className="
                    w-4
                    h-4
                    text-emerald-300
                    shrink-0
                  "
                />

                <span
                  className="
                    text-sm
                    text-emerald-50/80
                  "
                >
                  Rekomendasi perangkat & instalasi
                </span>
              </div>
            </div>
          </div>
        </div>


        {/* =====================================================
            BOTTOM SOLUTIONS
        ===================================================== */}

        <div
          className="
            mt-16
            pt-8

            border-t
            border-white/15

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
                tracking-[0.16em]

                text-emerald-200
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

                text-white
              "
            >
              Satu sistem, dirancang sesuai kebutuhan lokasi.
            </h4>

            <p
              className="
                mt-2

                text-sm

                leading-6

                text-emerald-100/65

                max-w-2xl
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

              text-white
            "
          >
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              CCTV
            </span>

            <span className="flex items-center gap-2">
              <BadgeCheck className="w-4 h-4 text-emerald-300" />
              Access Control
            </span>

            <span className="flex items-center gap-2">
              <Network className="w-4 h-4 text-emerald-300" />
              Networking
            </span>

            <span className="flex items-center gap-2">
              <Wrench className="w-4 h-4 text-emerald-300" />
              IT Solution
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
