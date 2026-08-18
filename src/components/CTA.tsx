import React from 'react';
import {
  MessageSquare,
  ShieldCheck,
  PhoneCall,
  Check
} from 'lucide-react';

import { COMPANY_INFO } from '../data/companyData';

export const CTA: React.FC = () => {
  const ctaWaLink =
    'https://wa.me/6281212612006?text=Halo%20PUSTEKINDO,%20saya%20ingin%20konsultasi%20mengenai%20kebutuhan%20CCTV%20dan%20surveillance%20system.';

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
      {/* =========================================
          BACKGROUND DECORATION
      ========================================== */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Blue Glow */}
        <div
          className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[700px]
            h-[500px]
            rounded-full
            bg-blue-100/50
            blur-[140px]
          "
        />

        {/* Cyan Glow */}
        <div
          className="
            absolute
            -right-40
            -bottom-48
            w-[500px]
            h-[500px]
            rounded-full
            bg-cyan-100/40
            blur-[130px]
          "
        />
      </div>

      {/* =========================================
          MAIN CONTAINER
      ========================================== */}

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
            CTA CARD
        ========================================== */}

        <div
          className="
            relative
            overflow-hidden
            rounded-[28px]
            border
            border-slate-200
            bg-[#f8fafc]
            px-6
            py-12
            sm:px-10
            sm:py-14
            lg:px-16
            lg:py-16
            shadow-sm
            text-center
          "
        >
          {/* Inner decorative glow */}
          <div
            className="
              absolute
              -top-32
              left-1/2
              -translate-x-1/2
              w-[500px]
              h-[300px]
              rounded-full
              bg-blue-100/60
              blur-[100px]
              pointer-events-none
            "
          />

          {/* Small grid decoration */}
          <div
            className="
              absolute
              inset-0
              opacity-[0.025]
              pointer-events-none
              bg-[linear-gradient(#0a192f_1px,transparent_1px),linear-gradient(90deg,#0a192f_1px,transparent_1px)]
              [background-size:36px_36px]
            "
          />

          <div className="relative z-10">

            {/* =========================================
                BADGE
            ========================================== */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                px-3.5
                py-1.5
                rounded-full
                bg-blue-50
                border
                border-blue-100
                text-[#007bff]
                text-xs
                sm:text-sm
                font-semibold
                tracking-wide
                mb-6
              "
            >
              <ShieldCheck className="w-4 h-4" />

              <span>
                Konsultasi & Survei Kebutuhan
              </span>
            </div>

            {/* =========================================
                HEADLINE
            ========================================== */}

            <h2
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                font-extrabold
                text-[#0a192f]
                tracking-tight
                leading-tight
                max-w-3xl
                mx-auto
              "
            >
              Butuh Sistem CCTV untuk Bisnis
              <br className="hidden sm:block" />
              {' '}atau Rumah Anda?
            </h2>

            {/* =========================================
                DESCRIPTION
            ========================================== */}

            <p
              className="
                mt-5
                text-sm
                sm:text-base
                text-slate-500
                max-w-2xl
                mx-auto
                leading-relaxed
              "
            >
              Diskusikan kebutuhan surveillance system Anda bersama{' '}

              <strong className="text-[#0a192f] font-bold">
                {COMPANY_INFO.name} {COMPANY_INFO.subName}
              </strong>.

              {' '}Tim kami siap membantu merancang solusi pengawasan
              yang sesuai dengan kebutuhan lokasi Anda.
            </p>

            {/* =========================================
                CTA BUTTONS
            ========================================== */}

            <div
              className="
                mt-9
                flex
                flex-col
                sm:flex-row
                items-center
                justify-center
                gap-3.5
              "
            >
              {/* WhatsApp */}
              <a
                id="big-cta-whatsapp"
                href={ctaWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-full
                  sm:w-auto
                  inline-flex
                  items-center
                  justify-center
                  px-7
                  py-3.5
                  rounded-xl
                  text-sm
                  sm:text-base
                  font-bold
                  text-white
                  bg-[#25D366]
                  hover:bg-[#20ba5a]
                  shadow-md
                  hover:shadow-lg
                  hover:-translate-y-0.5
                  transition-all
                  duration-200
                  active:scale-95
                "
              >
                <MessageSquare className="w-5 h-5 mr-2.5" />

                <span>
                  Hubungi Kami via WhatsApp
                </span>
              </a>

              {/* Phone */}
              <a
                id="big-cta-phone"
                href={`tel:${COMPANY_INFO.phone.replace(
                  /[^0-9]/g,
                  ''
                )}`}
                className="
                  w-full
                  sm:w-auto
                  inline-flex
                  items-center
                  justify-center
                  px-7
                  py-3.5
                  rounded-xl
                  text-sm
                  sm:text-base
                  font-semibold
                  text-[#0a192f]
                  bg-white
                  hover:bg-slate-50
                  border
                  border-slate-200
                  shadow-sm
                  hover:shadow-md
                  hover:border-blue-200
                  transition-all
                  duration-200
                "
              >
                <PhoneCall className="w-4 h-4 mr-2 text-[#007bff]" />

                <span>
                  0812-1261-2006
                </span>
              </a>
            </div>

            {/* =========================================
                MICRO BENEFITS
            ========================================== */}

            <div
              className="
                mt-8
                flex
                flex-wrap
                items-center
                justify-center
                gap-x-7
                gap-y-3
                text-xs
                sm:text-sm
                text-slate-500
                font-medium
              "
            >
              <span className="flex items-center">
                <Check className="w-4 h-4 mr-1.5 text-[#007bff]" />
                Respon Cepat
              </span>

              <span className="flex items-center">
                <Check className="w-4 h-4 mr-1.5 text-[#007bff]" />
                Estimasi Penawaran Jelas
              </span>

              <span className="flex items-center">
                <Check className="w-4 h-4 mr-1.5 text-[#007bff]" />
                Didukung Teknisi Berpengalaman
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
