import React, { useState } from 'react';
import {
  X,
  Camera,
  MapPin,
  Tag,
  ZoomIn,
  ImageOff
} from 'lucide-react';

import { GALLERY_PROJECTS } from '../data/companyData';
import type { ProjectItem } from '../data/companyData';

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ProjectImage: React.FC<ProjectImageProps> = ({
  src,
  alt,
  className = ''
}) => {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={`
          w-full
          bg-[#0a192f]
          flex
          flex-col
          items-center
          justify-center
          text-white
          ${className}
        `}
      >
        <ImageOff className="w-8 h-8 text-[#00d4ff] mb-2" />

        <span className="text-xs text-slate-300">
          Gambar tidak ditemukan
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setError(true)}
      className={`w-full h-full object-cover ${className}`}
    />
  );
};

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] =
    useState<string>('Semua');

  const [selectedProject, setSelectedProject] =
    useState<ProjectItem | null>(null);

  const categories = [
    'Semua',
    'CCTV Installation',
    'Indoor',
    'Outdoor',
    'Commercial',
    'Industrial'
  ];

  const filteredProjects =
    activeFilter === 'Semua'
      ? GALLERY_PROJECTS
      : GALLERY_PROJECTS.filter(
          (item) => item.category === activeFilter
        );

  return (
    <section
      id="galeri"
      className="scroll-mt-28 py-20 lg:py-24 bg-white text-slate-800 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">

          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#007bff] text-xs font-bold tracking-wider uppercase">
            <Camera className="w-3.5 h-3.5 text-[#007bff]" />

            <span>
              Dokumentasi Lapangan
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a192f] tracking-tight">
            Dokumentasi Project
          </h2>

          <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
            Kumpulan implementasi instalasi surveillance system,
            penataan kabel pipa conduit terstruktur, dan integrasi
            remote monitoring.
          </p>

        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">

          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`
                px-4
                py-2
                rounded-xl
                text-xs
                sm:text-sm
                font-semibold
                transition-all
                duration-200
                ${
                  activeFilter === cat
                    ? 'bg-[#007bff] text-white shadow-sm'
                    : 'bg-[#f8fafc] text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80'
                }
              `}
            >
              {cat}
            </button>
          ))}

        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredProjects.map((project) => (
            <article
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="
                bg-[#f8fafc]
                rounded-2xl
                border
                border-slate-200/80
                overflow-hidden
                group
                cursor-pointer
                hover:border-blue-300
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
                duration-300
                flex
                flex-col
              "
            >

              {/* REAL PROJECT IMAGE */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">

                <ProjectImage
                  src={project.image}
                  alt={project.title}
                  className="
                    absolute
                    inset-0
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />

                {/* Dark gradient */}
                <div className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#0a192f]/50
                  via-transparent
                  to-transparent
                  pointer-events-none
                " />

                {/* Title on image */}
                <div className="absolute left-4 right-4 bottom-4">
                  <h3 className="text-white font-bold text-sm sm:text-base drop-shadow-lg">
                    {project.title}
                  </h3>

                  <div className="flex items-center mt-1 text-[10px] text-slate-200">
                    <MapPin className="w-3 h-3 mr-1" />

                    {project.location}
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="
                  absolute
                  inset-0
                  bg-[#0a192f]/55
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-300
                  flex
                  items-center
                  justify-center
                ">

                  <div className="
                    px-3.5
                    py-1.5
                    rounded-lg
                    bg-white
                    text-[#0a192f]
                    text-xs
                    font-bold
                    flex
                    items-center
                    space-x-2
                    shadow-lg
                    translate-y-2
                    group-hover:translate-y-0
                    transition-transform
                  ">

                    <ZoomIn className="w-4 h-4 text-[#007bff]" />

                    <span>
                      Lihat Detail
                    </span>

                  </div>

                </div>

              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">

                <div>

                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">

                    <span className="
                      inline-flex
                      items-center
                      text-[#007bff]
                      font-mono
                      text-[10px]
                      font-bold
                      bg-blue-50
                      px-2
                      py-0.5
                      rounded
                      border
                      border-blue-100
                    ">
                      <Tag className="w-3 h-3 mr-1" />

                      {project.category}
                    </span>

                    <span className="flex items-center text-slate-500 text-[11px]">
                      <MapPin className="w-3 h-3 mr-1 text-slate-400" />

                      {project.location}
                    </span>

                  </div>

                  <h3 className="
                    text-sm
                    sm:text-base
                    font-bold
                    text-[#0a192f]
                    group-hover:text-[#007bff]
                    transition-colors
                    line-clamp-1
                  ">
                    {project.title}
                  </h3>

                  <p className="
                    mt-1.5
                    text-xs
                    text-slate-500
                    line-clamp-2
                    leading-relaxed
                  ">
                    {project.description}
                  </p>

                </div>

                {project.cameraSpecs && (
                  <div className="
                    mt-4
                    pt-3
                    border-t
                    border-slate-200/60
                    text-[11px]
                    font-mono
                    text-[#007bff]
                  ">
                    {project.cameraSpecs}
                  </div>
                )}

              </div>

            </article>
          ))}

        </div>

      </div>

      {/* LIGHTBOX */}
      {selectedProject && (

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
          onClick={() => setSelectedProject(null)}
        >

          <div
            className="
              bg-white
              border
              border-slate-200
              rounded-2xl
              max-w-4xl
              w-full
              max-h-[90vh]
              overflow-y-auto
              shadow-2xl
              relative
            "
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="
                absolute
                top-4
                right-4
                z-20
                w-10
                h-10
                rounded-full
                bg-black/70
                text-white
                hover:bg-black
                transition-colors
                flex
                items-center
                justify-center
              "
              aria-label="Tutup Detail"
            >
              <X className="w-5 h-5" />
            </button>

            {/* REAL MODAL IMAGE */}
            <div className="relative aspect-video bg-slate-200">

              <ProjectImage
                src={selectedProject.image}
                alt={selectedProject.title}
                className="absolute inset-0"
              />

              <div className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#0a192f]/50
                via-transparent
                to-transparent
                pointer-events-none
              " />

            </div>

            {/* Modal Info */}
            <div className="p-6 sm:p-8 space-y-4">

              <div className="flex flex-wrap items-center gap-3">

                <span className="
                  px-2.5
                  py-0.5
                  rounded-full
                  bg-blue-50
                  border
                  border-blue-100
                  text-[#007bff]
                  text-xs
                  font-bold
                  font-mono
                ">
                  {selectedProject.category}
                </span>

                <span className="text-xs text-slate-500 flex items-center">
                  <MapPin className="w-3.5 h-3.5 mr-1 text-[#007bff]" />

                  {selectedProject.location}
                </span>

              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0a192f]">
                {selectedProject.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                {selectedProject.description}
              </p>

              {selectedProject.cameraSpecs && (

                <div className="
                  p-4
                  rounded-xl
                  bg-[#f8fafc]
                  border
                  border-slate-200
                  text-xs
                  font-mono
                  text-[#007bff]
                ">

                  <strong className="text-[#0a192f] block mb-1">
                    Spesifikasi Sistem:
                  </strong>

                  {selectedProject.cameraSpecs}

                </div>

              )}

              <div className="pt-3 flex justify-end">

                <a
                  href={`https://wa.me/6281212612006?text=${encodeURIComponent(
                    `Halo PUSTEKINDO, saya tertarik dengan implementasi sistem seperti project ${selectedProject.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    px-5
                    py-2.5
                    rounded-lg
                    bg-[#25D366]
                    hover:bg-[#20ba5a]
                    text-white
                    font-bold
                    text-xs
                    sm:text-sm
                    shadow-sm
                    transition-colors
                  "
                >
                  Konsultasi Project Serupa
                </a>

              </div>

            </div>

          </div>

        </div>

      )}

    </section>
  );
};
