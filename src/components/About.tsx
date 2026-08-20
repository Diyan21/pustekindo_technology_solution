import React from 'react';
import {
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Quote
} from 'lucide-react';

import { COMPANY_INFO } from '../data/companyData';

export const About: React.FC = () => {
  return (
    <section
      id="tentang"
      className="
        scroll-mt-32
        py-20
        lg:py-24
        bg-white
        relative
        overflow-hidden
      "
    >
      {/* Background soft ambient */}
      <div
        className="
          absolute
          top-0
          right-0
          w-80
          h-80
          bg-blue-50/60
          rounded-full
          blur-3xl
          pointer-events-none
        "
      />

      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          relative
          z-10
        "
      >
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-10
            lg:gap-14
            items-center
          "
        >

          {/* =========================================
              LEFT COLUMN : INSTALLATION PHOTO
          ========================================== */}

          <div className="lg:col-span-6 relative">
            <div className="relative">

              {/* Main Photo */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-2xl
                  bg-[#0a192f]
                  shadow-xl
                  border
                  border-slate-200
                "
              >
                <div className="relative aspect-[4/3] overflow-hidden">

                  <img
                    src="/images/pustekindo-cctv-installation.png"
                    alt="Teknisi PUSTEKINDO melakukan instalasi CCTV"
                    className="
                      absolute
                      inset-0
                      w-full
                      h-full
                      object-cover
                      object-center
                      transition-transform
                      duration-700
                      hover:scale-[1.03]
                    "
                  />

                  {/* Soft photo gradient */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#071426]/45
                      via-transparent
                      to-transparent
                      pointer-events-none
                    "
                  />

                  {/* Top Label */}
                  <div
                    className="
                      absolute
                      top-4
                      left-4

                      inline-flex
                      items-center
                      gap-2

                      px-3
                      py-1.5

                      rounded-full

                      bg-[#071426]/75
                      backdrop-blur-md

                      border
                      border-white/15

                      text-[10px]
                      sm:text-xs
                      font-bold
                      uppercase
                      tracking-wider
                      text-white
                    "
                  >
                    <span
                      className="
                        w-2
                        h-2
                        rounded-full
                        bg-emerald-400
                      "
                    />

                    Instalasi Lapangan
                  </div>

                  {/* Bottom Photo Caption */}
                  <div
                    className="
                      absolute
                      left-5
                      bottom-5
                      sm:left-6
                      sm:bottom-6

                      text-white
                    "
                  >
                    <p
                      className="
                        text-xs
                        sm:text-sm
                        font-extrabold
                        tracking-wide
                      "
                    >
                      PUSTEKINDO FIELD INSTALLATION
                    </p>

                    <p
                      className="
                        mt-1
                        text-[10px]
                        sm:text-xs
                        text-white/70
                        font-medium
                      "
                    >
                      CCTV Installation & Surveillance System
                    </p>
                  </div>

                </div>
              </div>


              {/* =========================================
                  FLOATING QUOTE CARD
              ========================================== */}

              <div
                className="
                  absolute
                  -bottom-5
                  -right-2

                  sm:-bottom-6
                  sm:right-6

                  bg-white

                  rounded-xl

                  p-4
                  sm:p-5

                  border
                  border-slate-200

                  shadow-xl

                  max-w-xs

                  z-20
                "
              >
                <div
                  className="
                    flex
                    items-start
                    space-x-3
                  "
                >
                  <div
                    className="
                      p-2
                      rounded-lg
                      bg-[#007bff]
                      text-white
                      shrink-0
                    "
                  >
                    <Quote className="w-4 h-4" />
                  </div>

                  <div>
                    <p
                      className="
                        text-xs
                        sm:text-sm
                        font-bold
                        text-[#0a192f]
                        leading-snug
                      "
                    >
                      “Solution Provider, bukan sekadar salesman.”
                    </p>

                    <p
                      className="
                        text-[11px]
                        text-slate-500
                        mt-1
                        font-medium
                      "
                    >
                      Filosofi Kerja PUSTEKINDO
                    </p>
                  </div>
                </div>
              </div>


              {/* Decorative accent element */}
              <div
                className="
                  absolute
                  -top-4
                  -left-4
                  w-24
                  h-24
                  bg-blue-500/10
                  rounded-2xl
                  -z-10
                "
              />

            </div>
          </div>


          {/* =========================================
              RIGHT COLUMN : TEXT & SCOPE
          ========================================== */}

          <div
            className="
              lg:col-span-6
              space-y-5
            "
          >

            {/* Badge */}
            <div
              className="
                inline-flex
                items-center
                space-x-2

                px-3.5
                py-1

                rounded-full

                bg-blue-50
                text-[#007bff]

                border
                border-blue-100

                text-xs
                font-bold
                tracking-wider
                uppercase
              "
            >
              <ShieldCheck
                className="
                  w-3.5
                  h-3.5
                  text-[#007bff]
                "
              />

              <span>
                Tentang PUSTEKINDO
              </span>
            </div>


            {/* Heading */}
            <h2
              className="
                text-3xl
                sm:text-4xl
                font-extrabold
                text-[#0a192f]
                tracking-tight
                leading-tight
              "
            >
              Lebih dari Sekadar Menjual CCTV
            </h2>


            {/* Description */}
            <div
              className="
                space-y-3.5
                text-slate-600
                text-sm
                sm:text-base
                leading-relaxed
              "
            >
              <p>
                <strong
                  className="
                    text-[#0a192f]
                    font-semibold
                  "
                >
                  {COMPANY_INFO.name}{' '}
                  {COMPANY_INFO.subName}
                </strong>{' '}
                hadir sebagai solution provider yang membantu pelanggan
                menentukan sistem pemantauan dan pengawasan sesuai
                kebutuhan nyata di lapangan.
              </p>

              <p>
                Didukung pengalaman di bidang surveillance system dan
                teknologi IT, kami tidak hanya berfokus menjual perangkat,
                tetapi juga membantu merancang solusi pemantauan yang
                efektif, mudah digunakan, dan sesuai dengan lingkungan
                implementasinya.
              </p>
            </div>


            {/* =========================================
                CORE APPROACHES
            ========================================== */}

            <div
              className="
                pt-2
                space-y-2.5
              "
            >
              <div
                className="
                  flex
                  items-start
                  space-x-3
                "
              >
                <CheckCircle2
                  className="
                    w-4
                    h-4
                    text-[#007bff]
                    shrink-0
                    mt-0.5
                  "
                />

                <span
                  className="
                    text-xs
                    sm:text-sm
                    text-slate-700
                    font-medium
                  "
                >
                  Analisis mendalam kebutuhan titik blindspot & tata letak kamera.
                </span>
              </div>


              <div
                className="
                  flex
                  items-start
                  space-x-3
                "
              >
                <CheckCircle2
                  className="
                    w-4
                    h-4
                    text-[#007bff]
                    shrink-0
                    mt-0.5
                  "
                />

                <span
                  className="
                    text-xs
                    sm:text-sm
                    text-slate-700
                    font-medium
                  "
                >
                  Integrasi jaringan IT stabil untuk akses multi-device tanpa kendala.
                </span>
              </div>


              <div
                className="
                  flex
                  items-start
                  space-x-3
                "
              >
                <CheckCircle2
                  className="
                    w-4
                    h-4
                    text-[#007bff]
                    shrink-0
                    mt-0.5
                  "
                />

                <span
                  className="
                    text-xs
                    sm:text-sm
                    text-slate-700
                    font-medium
                  "
                >
                  Dukungan instalasi profesional, rapi, terstruktur, dan bergaransi resmi.
                </span>
              </div>
            </div>


            {/* =========================================
                CTA WHATSAPP
            ========================================== */}

            <div className="pt-3">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center

                  text-[#007bff]
                  hover:text-[#0056b3]

                  font-bold

                  text-xs
                  sm:text-sm

                  group
                "
              >
                <span>
                  Konsultasikan Kebutuhan Sistem Anda
                </span>

                <ArrowRight
                  className="
                    w-4
                    h-4
                    ml-2

                    group-hover:translate-x-1.5

                    transition-transform
                  "
                />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
