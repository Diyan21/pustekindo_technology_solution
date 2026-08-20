import React, { useEffect, useState } from 'react';

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
  ShieldCheck,
  X,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  article: string;
  scopes: string[];
  suitableFor: string;
  icon: React.ReactNode;
}

const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: 'CCTV Security System',
    description:
      'Instalasi CCTV indoor maupun outdoor untuk kantor, rumah, gudang, showroom, area industri, dan lokasi komersial.',
    article:
      'PUSTEKINDO menyediakan solusi CCTV untuk membantu meningkatkan pengawasan dan keamanan area. Sistem dapat disesuaikan berdasarkan luas lokasi, titik rawan, kondisi pencahayaan, kebutuhan penyimpanan rekaman, serta kebutuhan pemantauan melalui smartphone maupun komputer.',
    scopes: [
      'Survey lokasi dan penentuan titik kamera',
      'Instalasi kamera indoor dan outdoor',
      'Setup DVR / NVR dan media penyimpanan',
      'Konfigurasi remote monitoring',
      'Penataan kabel dan conduit',
      'Maintenance dan troubleshooting'
    ],
    suitableFor:
      'Kantor, rumah, pabrik, gudang, showroom, toko, apartemen, hotel, rumah sakit dan area komersial.',
    icon: <Camera className="w-6 h-6" />
  },

  {
    id: 2,
    title: 'Access Door',
    description:
      'Sistem kontrol akses pintu menggunakan kartu, PIN, biometric, dan perangkat keamanan akses lainnya.',
    article:
      'Access Door membantu perusahaan membatasi akses ke ruangan tertentu berdasarkan hak pengguna. Sistem dapat menggunakan kartu RFID, PIN, fingerprint, biometric maupun kombinasi beberapa metode autentikasi.',
    scopes: [
      'Access controller',
      'RFID card reader',
      'PIN dan biometric reader',
      'Magnetic lock / electric lock',
      'Exit button dan emergency release',
      'Integrasi dengan sistem keamanan'
    ],
    suitableFor:
      'Kantor, ruang server, gudang, laboratorium, hotel, ruang administrasi dan area terbatas.',
    icon: <DoorOpen className="w-6 h-6" />
  },

  {
    id: 3,
    title: 'Fingerprint',
    description:
      'Pemasangan mesin fingerprint untuk absensi, kontrol kehadiran, dan akses area tertentu.',
    article:
      'Sistem fingerprint membantu perusahaan melakukan pencatatan kehadiran karyawan secara digital. Data dapat digunakan untuk kebutuhan absensi, monitoring jam kerja dan kontrol akses sesuai perangkat yang digunakan.',
    scopes: [
      'Instalasi mesin fingerprint',
      'Registrasi pengguna',
      'Konfigurasi jam kerja',
      'Setup koneksi jaringan',
      'Sinkronisasi dan export data',
      'Maintenance perangkat'
    ],
    suitableFor:
      'Kantor, pabrik, gudang, sekolah, klinik, showroom dan perusahaan dengan kebutuhan absensi karyawan.',
    icon: <Fingerprint className="w-6 h-6" />
  },

  {
    id: 4,
    title: 'Tata Suara',
    description:
      'Instalasi sistem audio, speaker, amplifier, public address, dan kebutuhan tata suara gedung.',
    article:
      'PUSTEKINDO menyediakan instalasi tata suara untuk kebutuhan informasi, pengumuman dan distribusi audio pada berbagai area gedung. Sistem dapat dirancang berdasarkan jumlah zona serta kebutuhan volume dan cakupan suara.',
    scopes: [
      'Public Address System',
      'Speaker indoor dan outdoor',
      'Amplifier dan mixer',
      'Microphone',
      'Pembagian zona suara',
      'Penarikan dan penataan kabel audio'
    ],
    suitableFor:
      'Kantor, sekolah, rumah sakit, hotel, pabrik, gudang, tempat ibadah dan gedung komersial.',
    icon: <Volume2 className="w-6 h-6" />
  },

  {
    id: 5,
    title: 'Hotel Lock',
    description:
      'Sistem kunci hotel menggunakan kartu akses untuk kamar, area terbatas, dan kebutuhan hospitality.',
    article:
      'Hotel Lock memberikan kemudahan pengelolaan akses kamar menggunakan kartu elektronik. Hak akses dapat diatur sesuai nomor kamar dan masa berlaku kartu sehingga operasional hotel menjadi lebih praktis dan terkontrol.',
    scopes: [
      'Electronic door lock',
      'RFID hotel card',
      'Card encoder',
      'Management software',
      'Emergency access',
      'Instalasi dan konfigurasi'
    ],
    suitableFor:
      'Hotel, guest house, apartemen, villa, resort dan properti hospitality.',
    icon: <KeyRound className="w-6 h-6" />
  },

  {
    id: 6,
    title: 'Fire Alarm',
    description:
      'Pemasangan perangkat fire alarm, detector, alarm system, serta kebutuhan monitoring keamanan kebakaran.',
    article:
      'Fire Alarm System membantu mendeteksi indikasi kebakaran sedini mungkin dan memberikan peringatan kepada pengguna gedung. Perangkat dipasang berdasarkan kebutuhan area dan jenis sistem yang digunakan.',
    scopes: [
      'Smoke detector',
      'Heat detector',
      'Manual call point',
      'Alarm bell / sounder',
      'Fire alarm control panel',
      'Testing dan maintenance'
    ],
    suitableFor:
      'Kantor, gudang, pabrik, hotel, apartemen, rumah sakit dan bangunan komersial.',
    icon: <Flame className="w-6 h-6" />
  },

  {
    id: 7,
    title: 'Networking',
    description:
      'Instalasi LAN, jaringan kantor, access point, router, switch, rack network, dan penarikan kabel jaringan.',
    article:
      'PUSTEKINDO menyediakan solusi jaringan untuk membantu perangkat dan sistem perusahaan saling terhubung secara stabil. Instalasi dapat mencakup jaringan kabel, wireless, perangkat distribusi jaringan dan rack system.',
    scopes: [
      'LAN & structured cabling',
      'Router dan switch',
      'Access Point / Wi-Fi',
      'Rack network',
      'Patch panel dan termination',
      'Troubleshooting jaringan'
    ],
    suitableFor:
      'Kantor, pabrik, gudang, hotel, showroom, sekolah dan berbagai fasilitas bisnis.',
    icon: <Network className="w-6 h-6" />
  },

  {
    id: 8,
    title: 'PABX',
    description:
      'Instalasi dan konfigurasi sistem komunikasi telepon internal untuk kantor dan operasional perusahaan.',
    article:
      'Sistem PABX memungkinkan komunikasi telepon internal antar bagian perusahaan menjadi lebih praktis. Sistem dapat digunakan untuk extension antar ruangan sekaligus mendukung komunikasi keluar sesuai konfigurasi.',
    scopes: [
      'PABX system',
      'Extension telephone',
      'Programming extension',
      'Penarikan kabel telepon',
      'Distribusi line',
      'Troubleshooting PABX'
    ],
    suitableFor:
      'Kantor, hotel, pabrik, rumah sakit, sekolah dan perusahaan dengan banyak extension telepon.',
    icon: <PhoneCall className="w-6 h-6" />
  },

  {
    id: 9,
    title: 'Parabola',
    description:
      'Pemasangan parabola, sistem distribusi sinyal, dan perangkat pendukung televisi maupun receiver.',
    article:
      'Layanan parabola meliputi pemasangan perangkat penerima sinyal serta distribusi tayangan ke perangkat yang membutuhkan. Sistem dapat disesuaikan dengan kondisi bangunan dan kebutuhan titik televisi.',
    scopes: [
      'Pemasangan antena parabola',
      'Receiver',
      'Distribusi sinyal',
      'Penarikan kabel coaxial',
      'Setting arah dan kualitas sinyal',
      'Maintenance sistem'
    ],
    suitableFor:
      'Hotel, apartemen, rumah, mess, kantor dan fasilitas yang membutuhkan distribusi tayangan.',
    icon: <Satellite className="w-6 h-6" />
  },

  {
    id: 10,
    title: 'Mechanical',
    description:
      'Pekerjaan dan instalasi sistem mekanikal untuk kebutuhan gedung, fasilitas, dan infrastruktur pendukung.',
    article:
      'Layanan mechanical merupakan bagian dari kebutuhan teknis gedung yang berkaitan dengan sistem mekanikal dan perangkat pendukung operasional. Pelaksanaan pekerjaan disesuaikan dengan kebutuhan serta kondisi lapangan.',
    scopes: [
      'Survey kebutuhan mekanikal',
      'Instalasi perangkat pendukung',
      'Penataan sistem',
      'Maintenance',
      'Perbaikan dan troubleshooting',
      'Pekerjaan mekanikal pendukung gedung'
    ],
    suitableFor:
      'Gedung perkantoran, pabrik, gudang, fasilitas komersial dan area industri.',
    icon: <Cog className="w-6 h-6" />
  },

  {
    id: 11,
    title: 'Electrical',
    description:
      'Instalasi dan pekerjaan kelistrikan untuk gedung, perangkat, panel, dan sistem pendukung.',
    article:
      'PUSTEKINDO melayani pekerjaan electrical untuk mendukung kebutuhan sistem kelistrikan dan perangkat gedung. Pekerjaan dapat disesuaikan dengan kondisi instalasi serta kebutuhan operasional lokasi.',
    scopes: [
      'Instalasi jalur listrik',
      'Panel dan distribusi',
      'Penataan kabel',
      'Power outlet',
      'Pengecekan sistem listrik',
      'Maintenance dan troubleshooting'
    ],
    suitableFor:
      'Kantor, gedung, pabrik, gudang, showroom dan fasilitas komersial.',
    icon: <Zap className="w-6 h-6" />
  },

  {
    id: 12,
    title: 'Plumbing',
    description:
      'Pekerjaan instalasi plumbing, jalur air, pipa, dan kebutuhan utilitas bangunan lainnya.',
    article:
      'Layanan plumbing mencakup pekerjaan jalur perpipaan dan distribusi air untuk mendukung kebutuhan utilitas bangunan. Instalasi dilakukan berdasarkan kondisi bangunan dan kebutuhan penggunaan.',
    scopes: [
      'Instalasi jalur pipa',
      'Distribusi air',
      'Pengecekan kebocoran',
      'Perbaikan jalur plumbing',
      'Maintenance',
      'Instalasi utilitas pendukung'
    ],
    suitableFor:
      'Kantor, gudang, pabrik, hotel, rumah, gedung komersial dan fasilitas lainnya.',
    icon: <Pipette className="w-6 h-6" />
  }
];

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] =
    useState<ServiceItem | null>(null);

  /* =====================================================
     MENERIMA KLIK DARI NAVBAR
     contoh: Networking / CCTV / PABX
  ===================================================== */

  useEffect(() => {
    const handleSelectService = (event: Event) => {
      const customEvent =
        event as CustomEvent<string>;

      const service =
        SERVICES.find(
          (item) =>
            item.title === customEvent.detail
        );

      if (!service) {
        return;
      }

      setSelectedService(service);

      setTimeout(() => {
        document
          .querySelector('#layanan')
          ?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
      }, 100);
    };

    window.addEventListener(
      'select-service',
      handleSelectService
    );

    return () => {
      window.removeEventListener(
        'select-service',
        handleSelectService
      );
    };
  }, []);

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

          <p
            className="
              mt-3
              text-xs
              font-semibold
              text-emerald-700
            "
          >
            Klik layanan untuk melihat informasi selengkapnya.
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
              role="button"
              tabIndex={0}
              onClick={() => setSelectedService(service)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedService(service);
                }
              }}
              className="
                group
                bg-white/95
                rounded-2xl
                border
                border-emerald-100
                p-5
                cursor-pointer
                hover:border-emerald-300
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
                duration-300
                outline-none
                focus:ring-2
                focus:ring-emerald-400
              "
            >
              {/* Icon */}
              <div className="flex items-start justify-between gap-3">
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

                <ArrowUpRight
                  className="
                    w-4
                    h-4
                    text-slate-300
                    group-hover:text-emerald-600
                    transition-colors
                  "
                />
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
                  flex
                  items-center
                  justify-between
                  gap-3
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

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-wide
                    text-slate-400
                    group-hover:text-emerald-600
                  "
                >
                  Detail
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

      {/* =====================================================
          SERVICE MODAL / ARTIKEL KECIL
      ===================================================== */}

      {selectedService && (
        <div
          className="
            fixed
            inset-0
            z-[120]
            bg-[#071426]/85
            backdrop-blur-md
            flex
            items-center
            justify-center
            p-4
            sm:p-6
          "
          onClick={() => setSelectedService(null)}
        >
          <div
            className="
              relative
              w-full
              max-w-3xl
              max-h-[90vh]
              overflow-y-auto
              bg-white
              rounded-3xl
              shadow-2xl
              border
              border-white/20
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              className="
                relative
                p-6
                sm:p-8
                bg-gradient-to-br
                from-[#0a192f]
                to-[#10335a]
                overflow-hidden
              "
            >
              <div
                className="
                  absolute
                  -top-20
                  -right-20
                  w-56
                  h-56
                  bg-emerald-400/20
                  rounded-full
                  blur-3xl
                "
              />

              <button
                type="button"
                onClick={() => setSelectedService(null)}
                aria-label="Tutup"
                className="
                  absolute
                  top-4
                  right-4
                  z-20
                  w-10
                  h-10
                  rounded-full
                  bg-white/10
                  hover:bg-white/20
                  text-white
                  flex
                  items-center
                  justify-center
                  transition-colors
                "
              >
                <X className="w-5 h-5" />
              </button>

              <div
                className="
                  relative
                  z-10
                  w-14
                  h-14
                  rounded-2xl
                  bg-emerald-400
                  text-[#0a192f]
                  flex
                  items-center
                  justify-center
                  shadow-lg
                "
              >
                {selectedService.icon}
              </div>

              <div className="relative z-10 mt-5 pr-10">
                <div
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-emerald-300
                  "
                >
                  Layanan PUSTEKINDO
                </div>

                <h3
                  className="
                    mt-2
                    text-2xl
                    sm:text-3xl
                    font-extrabold
                    text-white
                  "
                >
                  {selectedService.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    sm:text-base
                    text-slate-300
                    leading-relaxed
                    max-w-2xl
                  "
                >
                  {selectedService.description}
                </p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8">
              {/* Article */}
              <div>
                <h4
                  className="
                    text-lg
                    font-extrabold
                    text-[#0a192f]
                  "
                >
                  Tentang Layanan
                </h4>

                <p
                  className="
                    mt-3
                    text-sm
                    sm:text-base
                    text-slate-600
                    leading-7
                  "
                >
                  {selectedService.article}
                </p>
              </div>

              {/* Scope */}
              <div
                className="
                  mt-7
                  p-5
                  sm:p-6
                  rounded-2xl
                  bg-[#ecfdf5]
                  border
                  border-emerald-100
                "
              >
                <h4
                  className="
                    text-base
                    font-extrabold
                    text-[#0a192f]
                  "
                >
                  Cakupan Layanan
                </h4>

                <div
                  className="
                    mt-4
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    gap-3
                  "
                >
                  {selectedService.scopes.map((scope) => (
                    <div
                      key={scope}
                      className="
                        flex
                        items-start
                        gap-2.5
                        text-sm
                        text-slate-600
                      "
                    >
                      <CheckCircle2
                        className="
                          w-4
                          h-4
                          mt-0.5
                          shrink-0
                          text-emerald-600
                        "
                      />

                      <span>{scope}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Suitable For */}
              <div
                className="
                  mt-6
                  p-5
                  rounded-2xl
                  bg-slate-50
                  border
                  border-slate-200
                "
              >
                <div
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-wider
                    text-slate-400
                  "
                >
                  Cocok untuk
                </div>

                <p
                  className="
                    mt-2
                    text-sm
                    sm:text-base
                    font-semibold
                    text-[#0a192f]
                    leading-relaxed
                  "
                >
                  {selectedService.suitableFor}
                </p>
              </div>

              {/* Footer */}
              <div
                className="
                  mt-6
                  pt-6
                  border-t
                  border-slate-100
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
                      text-sm
                      font-bold
                      text-[#0a192f]
                    "
                  >
                    PUSTEKINDO Technology Solution
                  </div>

                  <div
                    className="
                      mt-1
                      text-xs
                      text-slate-500
                    "
                  >
                    Instalasi • Maintenance • Support
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="
                    px-5
                    py-2.5
                    rounded-xl
                    bg-[#0a192f]
                    hover:bg-emerald-700
                    text-white
                    text-sm
                    font-bold
                    transition-colors
                  "
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
