import React from 'react';

import {
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
  Pipette,
  ShieldCheck
} from 'lucide-react';

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: 'CCTV Security System',
    description:
      'Instalasi CCTV indoor maupun outdoor untuk kantor, rumah, gudang, showroom, area industri, dan lokasi komersial.',
    icon: <Camera className="w-6 h-6" />
  },
  {
    id: 2,
    title: 'Access Door',
    description:
      'Sistem kontrol akses pintu menggunakan kartu, PIN, biometric, dan perangkat keamanan akses lainnya.',
    icon: <DoorOpen className="w-6 h-6" />
  },
  {
    id: 3,
    title: 'Fingerprint',
    description:
      'Pemasangan mesin fingerprint untuk absensi, kontrol kehadiran, dan akses area tertentu.',
    icon: <Fingerprint className="w-6 h-6" />
  },
  {
    id: 4,
    title: 'Tata Suara',
    description:
      'Instalasi sistem audio, speaker, amplifier, public address, dan kebutuhan tata suara gedung.',
    icon: <Volume2 className="w-6 h-6" />
  },
  {
    id: 5,
    title: 'Hotel Lock',
    description:
      'Sistem kunci hotel menggunakan kartu akses untuk kamar, area terbatas, dan kebutuhan hospitality.',
    icon: <KeyRound className="w-6 h-6" />
  },
  {
    id: 6,
    title: 'Fire Alarm',
    description:
      'Pemasangan perangkat fire alarm, detector, alarm system, serta kebutuhan monitoring keamanan kebakaran.',
    icon: <Flame className="w-6 h-6" />
  },
  {
    id: 7,
    title: 'Networking',
    description:
      'Instalasi LAN, jaringan kantor, access point, router, switch, rack network, dan penarikan kabel jaringan.',
    icon: <Network className="w-6 h-6" />
  },
  {
    id: 8,
    title: 'PABX',
    description:
      'Instalasi dan konfigurasi sistem komunikasi telepon internal untuk kantor dan operasional perusahaan.',
    icon: <PhoneCall className="w-6 h-6" />
  },
  {
    id: 9,
    title: 'Parabola',
    description:
      'Pemasangan parabola, sistem distribusi sinyal, dan perangkat pendukung televisi maupun receiver.',
    icon: <Satellite className="w-6 h-6" />
  },
  {
    id: 10,
    title: 'Mechanical',
    description:
      'Pekerjaan dan instalasi sistem mekanikal untuk kebutuhan gedung, fasilitas, dan infrastruktur pendukung.',
    icon: <Cog className="w-6 h-6" />
  },
  {
    id: 11,
    title: 'Electrical',
    description:
      'Instalasi dan pekerjaan kelistrikan untuk kebutuhan gedung, perangkat, panel, dan sistem pendukung.',
    icon: <Zap className="w-6 h-6" />
  },
  {
    id: 12,
    title: 'Plumbing',
    description:
      'Pekerjaan instalasi plumbing, jalur air, pipa, dan kebutuhan utilitas bangunan lainnya.',
    icon: <Pipette className="w-6 h-6" />
  }
];

export const Services: React.FC = () => {
  return (
    <section
      id="layanan"
      className="
        scroll-mt-28
        py-20
        lg:py-24
        bg-[#ecfdf5]
        relative
        overflow-hidden
      "
    >
      {/* Background Accent */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[750px]
          h-[300px]
          bg-emerald-100/50
          blur-3xl
          rounded-full
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
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-3.5
              py-1.5
              rounded-full
              bg-emerald-50
              border
              border-emerald-200
              text-emerald-700
              text-xs
              font-bold
              uppercase
              tracking-wider
            "
          >
            <ShieldCheck className="w-4 h-4" />
            Layanan PUSTEKINDO
          </div>

          <h2
            className="
              mt-4
              text-3xl
              sm:text-4xl
              font-extrabold
              text-[#0a192f]
              tracking-tight
            "
          >
            Security, IT, Communication & Engineering Solution
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
            PUSTEKINDO menyediakan layanan CCTV, access control,
            jaringan, komunikasi, tata suara, sistem keamanan,
            serta kebutuhan mechanical, electrical dan plumbing.
          </p>
        </div>

        {/* Service Cards */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            gap-5
          "
        >
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="
                group
                bg-white/95
                rounded-2xl
                border
                border-emerald-100
                p-5
                hover:border-emerald-300
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
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
                  duration-300
                "
              >
                {service.icon}
              </div>

              {/* Text */}
              <h3
                className="
                  mt-4
                  text-base
                  font-extrabold
                  text-[#0a192f]
                "
              >
                {service.title}
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  text-slate-600
                  leading-relaxed
                "
              >
                {service.description}
              </p>

              <div
                className="
                  mt-4
                  pt-4
                  border-t
                  border-emerald-100
                "
              >
                <span
                  className="
                    text-xs
                    font-semibold
                    text-emerald-700
                  "
                >
                  Instalasi • Maintenance • Support
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Box */}
        <div
          className="
            mt-10
            bg-[#0a192f]
            rounded-2xl
            p-6
            sm:p-8
            text-center
            shadow-xl
          "
        >
          <h3
            className="
              text-xl
              sm:text-2xl
              font-extrabold
              text-white
            "
          >
            Butuh Solusi yang Disesuaikan dengan Lokasi?
          </h3>

          <p
            className="
              mt-2
              text-sm
              sm:text-base
              text-slate-300
              max-w-2xl
              mx-auto
            "
          >
            Tim PUSTEKINDO dapat membantu menentukan kebutuhan
            perangkat, instalasi, jaringan, sistem keamanan,
            komunikasi, serta kebutuhan teknis gedung sesuai
            kondisi lapangan.
          </p>
        </div>
      </div>
    </section>
  );
};
