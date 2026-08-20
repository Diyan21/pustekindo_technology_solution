import React, { useState } from 'react';

import {
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Wrench,
  Network,
  ChevronRight,
  X
} from 'lucide-react';

import { COMPANY_INFO } from '../data/companyData';


type FeatureKey =
  | 'survey'
  | 'planning'
  | 'installation'
  | 'network';


export const Hero: React.FC = () => {
  const [activeFeature, setActiveFeature] =
    useState<FeatureKey | null>(null);

  const whatsappLink =
    'https://wa.me/6281212612006?text=Halo%20PUSTEKINDO,%20saya%20ingin%20berkonsultasi%20mengenai%20kebutuhan%20CCTV%20dan%20sistem%20keamanan.';


  const openServices = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();

    window.dispatchEvent(
      new CustomEvent(
        'open-extra-section',
        {
          detail: '#layanan'
        }
      )
    );
  };


  const features = {
    survey: {
      title: 'Survei Lokasi',
      subtitle:
        'Analisis kondisi area sebelum pemasangan sistem.',
      icon: MapPin,
      content:
        'Survei lokasi membantu menentukan kebutuhan sistem secara lebih akurat. Tim akan melihat kondisi area, titik masuk dan keluar, blind spot, pencahayaan, jalur kabel, posisi perangkat, serta kebutuhan monitoring agar sistem CCTV dapat bekerja secara optimal.',
      points: [
        'Analisis titik blind spot dan area prioritas.',
        'Penentuan posisi kamera yang lebih efektif.',
        'Pengecekan jalur kabel dan infrastruktur lokasi.',
        'Identifikasi kebutuhan jaringan dan daya.',
        'Penyesuaian solusi berdasarkan karakteristik area.'
      ]
    },

    planning: {
      title: 'Perencanaan Sistem',
      subtitle:
        'Sistem dirancang berdasarkan kebutuhan nyata di lapangan.',
      icon: CheckCircle2,
      content:
        'Setelah kebutuhan lokasi dipahami, sistem dirancang berdasarkan jumlah titik kamera, jenis perangkat, kapasitas penyimpanan, kebutuhan jaringan, akses monitoring, serta kemungkinan pengembangan sistem di masa depan.',
      points: [
        'Perencanaan jumlah dan tipe kamera.',
        'Penentuan kapasitas NVR dan penyimpanan.',
        'Perhitungan kebutuhan jaringan.',
        'Skema monitoring lokal dan jarak jauh.',
        'Perencanaan sistem yang dapat dikembangkan.'
      ]
    },

    installation: {
      title: 'Instalasi Profesional',
      subtitle:
        'Pemasangan rapi, terstruktur, dan mudah dipelihara.',
      icon: Wrench,
      content:
        'Proses instalasi dilakukan secara terstruktur mulai dari pemasangan perangkat, penarikan kabel, konfigurasi sistem, hingga pengujian fungsi. Tujuannya bukan hanya membuat sistem aktif, tetapi memastikan pemasangan tetap rapi dan mudah dipelihara.',
      points: [
        'Penarikan kabel yang rapi dan terstruktur.',
        'Pemasangan kamera sesuai hasil survei.',
        'Konfigurasi perangkat dan sistem recording.',
        'Pengujian kualitas gambar dan konektivitas.',
        'Pengecekan fungsi sebelum serah terima.'
      ]
    },

    network: {
      title: 'Integrasi Jaringan',
      subtitle:
        'Monitoring CCTV terhubung dengan infrastruktur IT.',
      icon: Network,
      content:
        'Sistem CCTV modern membutuhkan jaringan yang stabil. Integrasi jaringan membantu memastikan perangkat dapat diakses dengan lancar dari berbagai perangkat sekaligus menjaga kestabilan koneksi untuk monitoring lokal maupun remote.',
      points: [
        'Integrasi CCTV dengan jaringan LAN.',
        'Konfigurasi akses monitoring multi-device.',
        'Penyesuaian bandwidth dan konektivitas.',
        'Integrasi perangkat IP dan NVR.',
        'Persiapan akses monitoring jarak jauh.'
      ]
    }
  };


  const activeData =
    activeFeature
      ? features[activeFeature]
      : null;


  return (
    <section
      id="beranda"
      className="
        relative
        overflow-hidden

        bg-[#f4fbf7]

        pt-16
        pb-16

        lg:pt-20
        lg:pb-24

        text-slate-800
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        {/* glow kanan */}
        <div
          className="
            absolute
            -top-56
            -right-40

            w-[760px]
            h-[760px]

            rounded-full

            bg-emerald-200/50

            blur-[170px]
          "
        />

        {/* glow kiri */}
        <div
          className="
            absolute
            -bottom-64
            -left-40

            w-[620px]
            h-[620px]

            rounded-full

            bg-green-100/60

            blur-[160px]
          "
        />

        {/* grid / texture */}
        <div
          className="
            absolute
            inset-0

            opacity-[0.18]

            bg-[radial-gradient(#72b79a_1px,transparent_1px)]
            [background-size:24px_24px]
          "
        />

        {/* soft gradient */}
        <div
          className="
            absolute
            inset-0

            bg-gradient-to-br
            from-white/40
            via-transparent
            to-emerald-50/40
          "
        />
      </div>


      {/* =====================================================
          HERO CONTAINER
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
            MAIN HERO
        ================================================= */}

        <div
          className="
            relative
            overflow-hidden

            rounded-[32px]

            border
            border-emerald-100/80

            bg-white/75

            backdrop-blur-xl

            shadow-[0_35px_100px_-45px_rgba(4,120,87,0.28)]
          "
        >
          {/* card glow */}
          <div
            className="
              absolute
              -top-32
              -right-20

              w-[500px]
              h-[500px]

              rounded-full

              bg-emerald-100/70

              blur-[120px]

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

                bg-emerald-50/90

                px-3.5
                py-1.5

                text-[11px]
                sm:text-xs

                font-extrabold
                uppercase
                tracking-[0.15em]

                text-emerald-700
              "
            >
              <ShieldCheck className="w-4 h-4" />

              Solusi CCTV & IT Terintegrasi
            </div>


            {/* Heading */}
            <div className="mt-6 max-w-4xl">

              <h1
                className="
                  text-4xl
                  sm:text-5xl
                  lg:text-[60px]

                  font-black

                  tracking-[-0.035em]
                  leading-[1.02]

                  text-[#102a20]
                "
              >
                Solusi CCTV & Sistem Keamanan

                <span
                  className="
                    block
                    mt-2

                    text-transparent
                    bg-clip-text

                    bg-gradient-to-r
                    from-emerald-700
                    via-emerald-500
                    to-green-400
                  "
                >
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
                <strong
                  className="
                    font-extrabold
                    text-[#102a20]
                  "
                >
                  {COMPANY_INFO.name}{' '}
                  {COMPANY_INFO.subName}
                </strong>{' '}
                menyediakan solusi CCTV, surveillance, jaringan, dan
                sistem keamanan berbasis teknologi IT untuk membantu
                bisnis maupun hunian mendapatkan sistem pengawasan yang
                efektif, mudah digunakan, dan dapat diandalkan.
              </p>


              {/* Mini article */}
              <div
                className="
                  mt-7

                  max-w-3xl

                  border-l-[3px]
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
                  Setiap lokasi memiliki kebutuhan keamanan yang berbeda.
                  Karena itu, solusi dirancang berdasarkan kondisi area,
                  kebutuhan pemantauan, infrastruktur jaringan, serta
                  skala penggunaan.
                </p>
              </div>
            </div>


            {/* =================================================
                INTERACTIVE FEATURES
            ================================================= */}

            <div
              className="
                mt-9

                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-4

                gap-3

                max-w-5xl
              "
            >
              {(Object.keys(features) as FeatureKey[]).map(
                (key) => {
                  const item =
                    features[key];

                  const Icon =
                    item.icon;

                  const active =
                    activeFeature === key;

                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() =>
                        setActiveFeature(
                          active
                            ? null
                            : key
                        )
                      }
                      className={`
                        group
                        relative
                        overflow-hidden

                        flex
                        items-center
                        justify-between

                        gap-3

                        rounded-2xl

                        border

                        px-4
                        py-4

                        text-left

                        transition-all
                        duration-300

                        ${
                          active
                            ? `
                                bg-gradient-to-br
                                from-emerald-600
                                to-emerald-500

                                border-emerald-500

                                shadow-[0_12px_30px_rgba(5,150,105,0.25)]

                                -translate-y-1
                              `
                            : `
                                bg-emerald-50/65

                                border-emerald-100

                                hover:bg-white
                                hover:border-emerald-200

                                hover:-translate-y-1

                                hover:shadow-[0_12px_30px_rgba(15,118,85,0.10)]
                              `
                        }
                      `}
                    >
                      <div
                        className="
                          flex
                          items-center

                          gap-3
                        "
                      >
                        <div
                          className={`
                            w-9
                            h-9

                            rounded-xl

                            flex
                            items-center
                            justify-center

                            shrink-0

                            transition-colors

                            ${
                              active
                                ? `
                                    bg-white/15
                                  `
                                : `
                                    bg-white
                                    border
                                    border-emerald-100
                                  `
                            }
                          `}
                        >
                          <Icon
                            className={`
                              w-4.5
                              h-4.5

                              ${
                                active
                                  ? 'text-white'
                                  : 'text-emerald-600'
                              }
                            `}
                          />
                        </div>

                        <span
                          className={`
                            text-sm
                            font-extrabold

                            ${
                              active
                                ? 'text-white'
                                : 'text-slate-700'
                            }
                          `}
                        >
                          {item.title}
                        </span>
                      </div>

                      <ChevronRight
                        className={`
                          w-4
                          h-4

                          shrink-0

                          transition-transform
                          duration-300

                          ${
                            active
                              ? `
                                  rotate-90
                                  text-white
                                `
                              : `
                                  text-emerald-400

                                  group-hover:translate-x-0.5
                                `
                          }
                        `}
                      />
                    </button>
                  );
                }
              )}
            </div>


            {/* =================================================
                ARTICLE PANEL
            ================================================= */}

            {activeData && (
              <div
                className="
                  mt-6

                  max-w-5xl

                  relative
                  overflow-hidden

                  rounded-3xl

                  border
                  border-emerald-200/80

                  bg-gradient-to-br
                  from-[#073d32]
                  via-[#0a6650]
                  to-[#0f8a67]

                  text-white

                  shadow-[0_20px_50px_rgba(6,78,59,0.20)]
                "
              >
                {/* texture */}
                <div
                  className="
                    absolute
                    inset-0

                    opacity-[0.12]

                    bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.45)_1px,transparent_1.5px)]
                    [background-size:12px_12px]

                    pointer-events-none
                  "
                />

                <div
                  className="
                    relative
                    z-10

                    grid
                    grid-cols-1
                    lg:grid-cols-[1fr_0.9fr]

                    gap-8

                    p-6
                    sm:p-8
                  "
                >
                  {/* article */}
                  <div>
                    <div
                      className="
                        flex
                        items-start
                        justify-between

                        gap-4
                      "
                    >
                      <div>
                        <p
                          className="
                            text-[10px]
                            sm:text-xs

                            font-extrabold
                            uppercase
                            tracking-[0.15em]

                            text-emerald-200
                          "
                        >
                          Detail Layanan
                        </p>

                        <h3
                          className="
                            mt-2

                            text-2xl
                            sm:text-3xl

                            font-black

                            tracking-tight
                          "
                        >
                          {activeData.title}
                        </h3>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          setActiveFeature(
                            null
                          )
                        }
                        className="
                          w-9
                          h-9

                          rounded-full

                          bg-white/10

                          flex
                          items-center
                          justify-center

                          text-white/70

                          hover:bg-white/20
                          hover:text-white

                          transition-colors
                        "
                        aria-label="Tutup detail"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>


                    <p
                      className="
                        mt-2

                        text-sm
                        sm:text-base

                        font-semibold

                        text-emerald-100
                      "
                    >
                      {activeData.subtitle}
                    </p>

                    <p
                      className="
                        mt-5

                        text-sm
                        sm:text-base

                        leading-7

                        text-emerald-50/80
                      "
                    >
                      {activeData.content}
                    </p>
                  </div>


                  {/* points */}
                  <div
                    className="
                      lg:border-l
                      lg:border-white/15

                      lg:pl-8
                    "
                  >
                    <p
                      className="
                        text-xs

                        font-extrabold
                        uppercase
                        tracking-[0.15em]

                        text-emerald-200
                      "
                    >
                      Yang Kami Perhatikan
                    </p>

                    <div className="mt-4 space-y-3">
                      {activeData.points.map(
                        (point) => (
                          <div
                            key={point}
                            className="
                              flex
                              items-start

                              gap-3
                            "
                          >
                            <CheckCircle2
                              className="
                                w-4
                                h-4

                                mt-0.5

                                text-emerald-300

                                shrink-0
                              "
                            />

                            <span
                              className="
                                text-sm

                                leading-6

                                text-emerald-50/85
                              "
                            >
                              {point}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}


            {/* =================================================
                CTA BUTTONS
            ================================================= */}

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
                  group

                  inline-flex
                  items-center
                  justify-center

                  rounded-xl

                  bg-gradient-to-br
                  from-emerald-600
                  to-emerald-500

                  px-7
                  py-3.5

                  text-sm
                  sm:text-base

                  font-extrabold

                  text-white

                  shadow-[0_8px_20px_rgba(5,150,105,0.20)]

                  hover:-translate-y-0.5
                  hover:shadow-[0_12px_30px_rgba(5,150,105,0.28)]

                  transition-all
                  duration-200
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
                  group

                  inline-flex
                  items-center
                  justify-center

                  rounded-xl

                  border
                  border-emerald-200

                  bg-white/80

                  px-7
                  py-3.5

                  text-sm
                  sm:text-base

                  font-bold

                  text-emerald-800

                  hover:bg-white
                  hover:border-emerald-300

                  hover:-translate-y-0.5

                  transition-all
                  duration-200
                "
              >
                Lihat Layanan Kami

                <ArrowRight
                  className="
                    w-4
                    h-4

                    ml-2

                    group-hover:translate-x-1

                    transition-transform
                  "
                />
              </a>
            </div>


            {/* =================================================
                BOTTOM
            ================================================= */}

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

                gap-3

                max-w-5xl
              "
            >
              <p
                className="
                  text-xs
                  sm:text-sm

                  text-slate-500
                "
              >
                Solusi disesuaikan dengan kebutuhan lokasi dan skala penggunaan.
              </p>

              <span
                className="
                  text-[10px]
                  sm:text-xs

                  font-extrabold

                  text-emerald-700

                  uppercase
                  tracking-[0.13em]
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
