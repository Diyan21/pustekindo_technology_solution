import React, { useState } from 'react';
import { Eye, X, Camera, MapPin, Tag, Shield, ZoomIn } from 'lucide-react';
import { GALLERY_PROJECTS, ProjectItem } from '../data/companyData';
import { ImagePlaceholder } from './ImagePlaceholder';

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Semua');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ['Semua', 'CCTV Installation', 'Indoor', 'Outdoor', 'Commercial', 'Industrial'];

  const filteredProjects = activeFilter === 'Semua'
    ? GALLERY_PROJECTS
    : GALLERY_PROJECTS.filter((item) => item.category === activeFilter);

  return (
    <section id="galeri" className="py-20 lg:py-24 bg-white text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#007bff] text-xs font-bold tracking-wider uppercase">
            <Camera className="w-3.5 h-3.5 text-[#007bff]" />
            <span>Dokumentasi Lapangan</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a192f] tracking-tight">
            Dokumentasi Project
          </h2>

          <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
            Kumpulan implementasi instalasi surveillance system, penataan kabel pipa conduit terstruktur, dan integrasi remote monitoring.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-[#007bff] text-white shadow-sm'
                  : 'bg-[#f8fafc] text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-[#f8fafc] rounded-2xl border border-slate-200/80 overflow-hidden group cursor-pointer hover:border-blue-200 hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Image Container with Zoom Hover */}
              <div className="relative overflow-hidden">
                <ImagePlaceholder
                  src={project.image}
                  alt={project.title}
                  type="project"
                  title={project.title}
                  subtitle={project.location}
                  cameraCode={`SITE-0${project.id.slice(-1)} [ACTIVE]`}
                  aspectRatio="aspect-[16/10]"
                  className="w-full"
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-[#0a192f]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="px-3.5 py-1.5 rounded-lg bg-white text-[#0a192f] border border-white text-xs font-bold flex items-center space-x-2 transform translate-y-2 group-hover:translate-y-0 transition-transform shadow-lg">
                    <ZoomIn className="w-4 h-4 text-[#007bff]" />
                    <span>Lihat Detail</span>
                  </div>
                </div>
              </div>

              {/* Project Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="inline-flex items-center text-[#007bff] font-mono text-[10px] font-bold bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                      <Tag className="w-3 h-3 mr-1" />
                      {project.category}
                    </span>
                    <span className="flex items-center text-slate-500 text-[11px]">
                      <MapPin className="w-3 h-3 mr-1 text-slate-400" />
                      {project.location}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-[#0a192f] group-hover:text-[#007bff] transition-colors line-clamp-1">
                    {project.title}
                  </h3>

                  <p className="mt-1.5 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {project.cameraSpecs && (
                  <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] font-mono text-[#007bff]">
                    {project.cameraSpecs}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Modal View */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-[#0a192f]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white border border-slate-200 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-900/70 text-white hover:bg-slate-900 transition-colors"
              aria-label="Tutup Detail"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Image View */}
            <div className="relative">
              <ImagePlaceholder
                src={selectedProject.image}
                alt={selectedProject.title}
                type="project"
                title={selectedProject.title}
                subtitle={selectedProject.location}
                cameraCode={`INSPECT-0${selectedProject.id.slice(-1)}`}
                aspectRatio="aspect-[16/9]"
                className="w-full rounded-none"
              />
            </div>

            {/* Modal Body Info */}
            <div className="p-6 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-100 text-[#007bff] text-xs font-bold font-mono">
                  {selectedProject.category}
                </span>
                <span className="text-xs text-slate-500 flex items-center">
                  <MapPin className="w-3.5 h-3.5 mr-1 text-[#007bff]" />
                  {selectedProject.location}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-extrabold text-[#0a192f]">
                {selectedProject.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedProject.description}
              </p>

              {selectedProject.cameraSpecs && (
                <div className="p-3.5 rounded-xl bg-[#f8fafc] border border-slate-200 text-xs font-mono text-[#007bff]">
                  <strong className="text-[#0a192f] block mb-1">Spesifikasi Sistem:</strong>
                  {selectedProject.cameraSpecs}
                </div>
              )}

              <div className="pt-2 flex justify-end">
                <a
                  href={`https://wa.me/6281212612006?text=${encodeURIComponent(`Halo PUSTEKINDO, saya tertarik dengan implementasi sistem seperti project ${selectedProject.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs sm:text-sm shadow-sm transition-colors"
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

