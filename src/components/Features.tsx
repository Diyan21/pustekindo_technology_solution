import React, { useState } from 'react';
import {
  Camera,
  CheckCircle2,
  MapPin,
  X,
  ZoomIn
} from 'lucide-react';

interface InstallationPhoto {
  id: number;
  title: string;
  location: string;
  description: string;
  image: string;
}

const INSTALLATION_PHOTOS: InstallationPhoto[] = [
  {
    id: 1,
    title: 'Instalasi Kamera Indoor',
    location: 'Area Kantor & Ruang Kerja',
    description:
      'Pemasangan kamera dilakukan pada titik strategis untuk membantu pemantauan area kerja, akses masuk, dan aktivitas operasional harian.',
    image: '/images/features/technician-installation-1.jpg'
  },
  {
    id: 2,
    title: 'Pemasangan CCTV Outdoor',
    location: 'Gerbang & Perimeter',
    description:
      'Teknisi melakukan instalasi perangkat outdoor untuk area gerbang, pagar perimeter, dan akses kendaraan dengan penyesuaian kondisi lingkungan.',
    image: '/images/features/technician-installation-2.jpg'
  },
  {
    id: 3,
    title: 'Penarikan Kabel & Conduit',
    location: 'Gudang & Area Industri',
    description:
      'Penataan kabel dan pipa conduit dilakukan secara rapi dan terstruktur agar sistem lebih aman, kuat, dan mudah dalam proses perawatan.',
    image: '/images/features/technician-installation-3.jpg'
  },
  {
    id: 4,
    title: 'Setup & Finishing System',
    location: 'Monitoring & Testing',
    description:
      'Setelah pemasangan, teknisi melakukan pengecekan hasil kamera, koneksi recorder, serta memastikan sistem surveillance berjalan dengan baik.',
    image: '/images/features/technician-installation-4.jpg'
  }
];

export const Features: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] =
    useState<InstallationPhoto | null>(null);

  return (
    <section
      id="keunggulan"
      className="scroll-mt-28 py-20 lg:py-24 bg-[#f8fafc] relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[280px] bg-blue-100/30 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#007bff] text-xs font-bold uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4" />

            Dokumentasi Pemasangan
          </div>

          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#0a192f] tracking-tight">
            Proses Pemasangan oleh Tim PUSTEKINDO
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-500 leading-relaxed">
            Dokumentasi kegiatan teknisi saat melakukan instalasi,
            penataan kabel, pemasangan perangkat, serta proses
            pengecekan sistem surveillance.
          </p>
        </div>

        {/* Photo Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {INSTALLATION_PHOTOS.map((item) => (
            <article
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="
                group
                bg-white
                rounded-2xl
                border
                border-slate-200
                overflow-hidden
                hover:border-blue-300
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
                duration-300
                cursor-pointer
              "
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/80 via-[#0a192f]/10 to-transparent" />

                {/* Installation Badge */}
                <div className="
                  absolute
                  top-4
                  left-4
                  inline-flex
                  items-center
                  gap-2
                  px-2.5
                  py-1
                  rounded-full
                  bg-white/95
                  backdrop-blur-sm
                  text-[#007bff]
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-wider
                ">
                  <Camera className="w-3.5 h-3.5" />

                  Instalasi
                </div>

                {/* View Overlay */}
                <div className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                  bg-[#0a192f]/45
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-300
                ">
                  <div className="
                    px-4
                    py-2
                    bg-white
                    rounded-xl
                    text-[#0a192f]
                    text-xs
                    font-bold
                    flex
                    items-center
                    gap-2
                    shadow-xl
                    translate-y-2
                    group-hover:translate-y-0
                    transition-transform
                    duration-300
                  ">
                    <ZoomIn className="w-4 h-4 text-[#007bff]" />

                    View
                  </div>
                </div>

                {/* Image Text */}
                <div className="absolute left-4 right-4 bottom-4">
                  <h3 className="text-white text-base sm:text-lg font-extrabold leading-tight drop-shadow-lg">
                    {item.title}
                  </h3>

                  <div className="mt-1 flex items-center text-slate-200 text-xs">
                    <MapPin className="w-3.5 h-3.5 mr-1" />

                    {item.location}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-100">
                  <span className="text-xs font-semibold text-[#007bff]">
                    Standar instalasi rapi • aman • profesional
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-8 text-center">
          <p className="text-xs sm:text-sm text-slate-500">
            Setiap proses pemasangan dilakukan dengan penyesuaian
            kondisi lokasi, kebutuhan monitoring, dan perangkat
            yang digunakan.
          </p>
        </div>
      </div>

      {/* Lightbox / Modal */}
      {selectedPhoto && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            bg-[#0a192f]/90
            backdrop-blur-md
            flex
            items-center
            justify-center
            p-4
            sm:p-6
          "
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="
              relative
              bg-white
              rounded-2xl
              max-w-5xl
              w-full
              max-h-[92vh]
              overflow-y-auto
              shadow-2xl
              border
              border-white/20
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              aria-label="Tutup gambar"
              className="
                absolute
                top-4
                right-4
                z-30
                w-10
                h-10
                rounded-full
                bg-black/70
                hover:bg-black
                text-white
                flex
                items-center
                justify-center
                transition-colors
              "
            >
              <X className="w-5 h-5" />
            </button>

            {/* Large Image */}
            <div className="relative aspect-video bg-slate-200 overflow-hidden">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/60 via-transparent to-transparent" />

              <div className="absolute left-6 right-16 bottom-6">
                <h3 className="text-xl sm:text-3xl font-extrabold text-white drop-shadow-lg">
                  {selectedPhoto.title}
                </h3>

                <div className="mt-2 flex items-center text-sm text-slate-200">
                  <MapPin className="w-4 h-4 mr-1.5 text-[#00d4ff]" />

                  {selectedPhoto.location}
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#007bff] text-xs font-bold uppercase tracking-wider">
                <Camera className="w-3.5 h-3.5" />

                Dokumentasi Instalasi
              </div>

              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                {selectedPhoto.description}
              </p>

              <div className="mt-5 p-4 rounded-xl bg-[#f8fafc] border border-slate-200">
                <span className="text-xs sm:text-sm font-semibold text-[#007bff]">
                  Standar instalasi rapi • aman • profesional
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
