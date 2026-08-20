import React from 'react';
import {
  MessageSquare,
  PhoneCall,
  ShieldCheck,
  MapPin,
  Wrench
} from 'lucide-react';

import { COMPANY_INFO } from '../data/companyData';

export const CTA: React.FC = () => {
  const ctaWaLink =
    'https://wa.me/6281212612006?text=Halo%20PUSTEKINDO,%20saya%20ingin%20berkonsultasi%20mengenai%20kebutuhan%20CCTV%20dan%20sistem%20keamanan.';

  return (
    <section
      id="cta-section"
      className="relative overflow-hidden bg-white py-12 lg:py-16"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[350px]
            w-[700px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-blue-100/50
            blur-[130px]
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
        <div
          className="
            relative
            overflow-hidden
            rounded-[28px]
            border
            border-slate-200
            bg-gradient-to-br
            from-slate-50
            via-white
            to-blue-50/60
            shadow-[0_20px_60px_-30px_rgba(15,23,42,0.25)]
          "
        >
          {/* Decorative Glow */}
          <div
            className="
              absolute
              -right-24
              -top-24
              h-72
              w-72
              rounded-full
              bg-blue-100/70
              blur-[90px]
              pointer-events-none
            "
          />

          <div
            className="
              relative
              z-10
              grid
              lg:grid-cols-[1fr_auto]
              gap-8
              lg:gap-12
              items-center
              px-6
              py-9
              sm:px-10
              sm:py-11
              lg:px-12
              lg:py-12
            "
          >
            {/* LEFT CONTENT */}
            <div>
              {/* Label */}
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-[#007bff]
                  text-xs
                  sm:text-sm
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  mb-4
                "
              >
                <ShieldCheck className="w-4 h-4" />
                Konsultasi Sistem Keamanan
              </div>

              {/* Heading */}
              <h2
                className="
                  text-2xl
                  sm:text-3xl
                  lg:text-[38px]
                  font-extrabold
                  text-[#0a192f]
                  tracking-tight
                  leading-[1.15]
                  max-w-2xl
                "
              >
                Keamanan yang Lebih Baik
                <br className="hidden sm:block" />
                {' '}Dimulai dari Sistem yang Tepat
              </h2>

              {/* Description */}
              <p
                className="
                  mt-4
                  text-sm
                  sm:text-base
                  text-slate-500
                  leading-relaxed
                  max-w-2xl
                "
              >
                Konsultasikan kebutuhan CCTV dan sistem keamanan untuk
                rumah, kantor, toko, maupun area bisnis Anda bersama{' '}
                <strong className="text-[#0a192f] font-semibold">
                  {COMPANY_INFO.name} {COMPANY_INFO.subName}
                </strong>.
              </p>

              {/* Benefits */}
              <div
                className="
                  mt-6
                  flex
                  flex-wrap
                  gap-x-6
                  gap-y-3
                  text-xs
                  sm:text-sm
                  text-slate-600
                  font-medium
                "
              >
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#007bff]" />
                  Survei & Analisis Lokasi
                </span>

                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#007bff]" />
                  Rekomendasi Sistem
                </span>

                <span className="flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-[#007bff]" />
                  Teknisi Berpengalaman
                </span>
              </div>
            </div>

            {/* RIGHT CTA */}
            <div
              className="
                flex
                flex-col
                gap-3
                w-full
                lg:w-[265px]
                lg:border-l
                lg:border-slate-200
                lg:pl-10
              "
            >
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-slate-400
                  mb-1
                "
              >
                Hubungi Tim Kami
              </p>

              {/* WhatsApp */}
              <a
                id="big-cta-whatsapp"
                href={ctaWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  w-full
                  px-5
                  py-3.5
                  rounded-xl
                  text-sm
                  font-bold
                  text-white
                  bg-[#25D366]
                  hover:bg-[#20ba5a]
                  shadow-sm
                  hover:shadow-md
                  hover:-translate-y-0.5
                  transition-all
                  duration-200
                  active:scale-[0.98]
                "
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Konsultasi WhatsApp
              </a>

              {/* Phone */}
              <a
                id="big-cta-phone"
                href={`tel:${COMPANY_INFO.phone.replace(
                  /[^0-9]/g,
                  ''
                )}`}
                className="
                  inline-flex
                  items-center
                  justify-center
                  w-full
                  px-5
                  py-3.5
                  rounded-xl
                  text-sm
                  font-semibold
                  text-[#0a192f]
                  bg-white
                  border
                  border-slate-200
                  hover:border-blue-200
                  hover:bg-blue-50/40
                  transition-all
                  duration-200
                "
              >
                <PhoneCall className="w-4 h-4 mr-2 text-[#007bff]" />
                0812-1261-2006
              </a>

              <span className="text-[11px] text-slate-400 text-center mt-1">
                Konsultasi kebutuhan & survei lokasi
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
