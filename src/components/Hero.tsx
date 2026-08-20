import React from 'react';
import {
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Wrench,
  Network
} from 'lucide-react';

import { COMPANY_INFO } from '../data/companyData';

export const Hero: React.FC = () => {
  const whatsappLink =
    'https://wa.me/6281212612006?text=Halo%20PUSTEKINDO,%20saya%20ingin%20berkonsultasi%20mengenai%20kebutuhan%20CCTV%20dan%20sistem%20keamanan.';

  const openServices = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    window.dispatchEvent(
      new CustomEvent('open-extra-section', {
        detail: '#layanan'
      })
    );
  };

  return (
    <section
      id="beranda"
      className="
        relative
        overflow-hidden
        bg-[#f4fbf7]
        pt-28
        pb-16
        lg:pt-36
        lg:pb-24
        text-slate-800
      "
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute
            -top-40
            right-0
            w-[650px]
            h-[650px]
            rounded-full
            bg-emerald-100/60
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            -bottom-40
            -left-20
            w-[500px]
            h-[500px]
            rounded-full
            bg-green-100/50
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.22]
            bg-[radial-gradient(#86b99b_1px,transparent_1px)]
            [background-size:25px_25px]
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
        {/* Main Hero Card */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[30px]
            border
            border-emerald-100
            bg-white/80
            backdrop-blur-sm
            shadow-[0_25px_70px_-35px_rgba(15,80,55,0.22)]
          "
        >
          {/* Decorative glow */}
          <div
            className="
              absolute
              -right-24
              -top-32
              w-[430px]
              h-[430px]
              rounded-full
              bg-emerald-100/70
              blur-[110px]
              pointer-events-none
            "
          />

          <div
            className="
              relative
              z-10
              px-6
              py-10
              sm:px-10
              sm:py-12
              lg:px-14
              lg:py-14
            "
          >
            {/* Badge */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-emerald-200
                bg-emerald-50
                px-3.5
                py-1.5
                text-xs
                font-bold
                uppercase
                tracking-[0.12em]
                text-emerald-700
              "
            >
              <ShieldCheck className="w-4 h-4" />
              Solusi CCTV & IT Terintegrasi
            </div>

            {/* Content */}
            <div className="mt-6 max-w-4xl">
              <h1
                className="
                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                  lg:text-[56px]
                  font-extrabold
                  tracking-tight
                  leading-[1.08]
                  text-[#102a20]
                "
              >
                Solusi CCTV & Sistem Keamanan
                <span className="block text-emerald-600 mt-1">
                  untuk Bisnis dan Hunian
                </span>
              </h1>

              <p
                className="
                  mt-6
                  max-w-3xl
                  text-base
                  sm:text-lg
                  leading-8
                  text-slate-600
                "
              >
                <strong className="font-bold text-[#102a20]">
                  {COMPANY_INFO.name} {COMPANY_INFO.subName}
                </strong>{' '}
                menyediakan solusi CCTV, surveillance, jaringan, dan
                sistem keamanan berbasis teknologi IT untuk membantu
                bisnis maupun hunian mendapatkan sistem pengawasan
                yang efektif, mudah digunakan, dan dapat diandalkan.
              </p>

              {/* Mini Article */}
              <div
                className="
                  mt-7
                  max-w-3xl
                  border-l-4
                  border-emerald-500
                  pl-5
                  py-1
                "
              >
                <p
                  className="
                    text-sm
                    sm:text-base
                    leading-7
                    text-slate-500
                  "
                >
                  Setiap lokasi memiliki kebutuhan keamanan yang
                  berbeda. Karena itu, solusi kami dirancang berdasarkan
                  kondisi area, kebutuhan pemantauan, infrastruktur
                  jaringan, serta skala penggunaan.
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div
              className="
                mt-8
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-4
                gap-3
                max-w-4xl
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-emerald-100
                  bg-emerald-50/60
                  px-4
                  py-3
                "
              >
                <MapPin className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-sm font-semibold text-slate-700">
                  Survei Lokasi
                </span>
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-emerald-100
                  bg-emerald-50/60
                  px-4
                  py-3
                "
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-sm font-semibold text-slate-700">
                  Perencanaan Sistem
                </span>
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-emerald-100
                  bg-emerald-50/60
                  px-4
                  py-3
                "
              >
                <Wrench className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-sm font-semibold text-slate-700">
                  Instalasi Profesional
                </span>
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-emerald-100
                  bg-emerald-50/60
                  px-4
                  py-3
                "
              >
                <Network className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-sm font-semibold text-slate-700">
                  Integrasi Jaringan
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div
              className="
                mt-9
                flex
                flex-col
                sm:flex-row
                gap-3
              "
            >
              <a
                id="hero-cta-primary"
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-xl
                  bg-emerald-600
                  px-7
                  py-3.5
                  text-sm
                  sm:text-base
                  font-bold
                  text-white
                  shadow-md
                  shadow-emerald-900/10
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-emerald-700
                  hover:shadow-lg
                  active:scale-[0.98]
                "
              >
                <MessageSquare className="w-5 h-5 mr-2.5" />
                Konsultasi via WhatsApp
              </a>

              <a
                id="hero-cta-secondary"
                href="#layanan"
                onClick={openServices}
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-emerald-200
                  bg-white
                  px-7
                  py-3.5
                  text-sm
                  sm:text-base
                  font-semibold
                  text-emerald-800
                  transition-all
                  duration-200
                  hover:border-emerald-300
                  hover:bg-emerald-50
                "
              >
                Lihat Layanan Kami
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>

            {/* Bottom Note */}
            <div
              className="
                mt-9
                pt-6
                border-t
                border-emerald-100
                flex
                flex-col
                sm:flex-row
                sm:items-center
                sm:justify-between
                gap-2
                max-w-4xl
              "
            >
              <p className="text-xs sm:text-sm text-slate-500">
                Solusi disesuaikan dengan kebutuhan lokasi dan skala penggunaan.
              </p>

              <span
                className="
                  text-xs
                  font-bold
                  text-emerald-700
                  uppercase
                  tracking-wider
                "
              >
                CCTV • Surveillance • Network • IT Solution
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
