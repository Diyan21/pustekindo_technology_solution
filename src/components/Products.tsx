import React, { useState } from 'react';
import {
  Check,
  MessageSquare,
  Shield,
  ZoomIn,
  X
} from 'lucide-react';

import { PRODUCT_CATEGORIES } from '../data/companyData';
import type { ProductCategory } from '../data/companyData';

export const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] =
    useState<ProductCategory | null>(null);

  const getProductWhatsappUrl = (productTitle: string) => {
    const text = encodeURIComponent(
      `Halo PUSTEKINDO, saya ingin konsultasi mengenai produk surveillance ${productTitle} untuk kebutuhan saya.`
    );

    return `https://wa.me/6281212612006?text=${text}`;
  };

  return (
    <section
      id="produk"
      className="py-20 lg:py-24 bg-white relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">

          <div className="max-w-2xl space-y-3">

            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-[#007bff] border border-blue-100 text-xs font-bold tracking-wider uppercase">
              <Shield className="w-3.5 h-3.5" />

              <span>
                Surveillance Hardware
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a192f] tracking-tight">
              Produk & Surveillance Solution
            </h2>

            <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
              Solusi perangkat kamera pengawas berstandar industri
              dengan keandalan tinggi dan dukungan ekosistem brand
              global terkemuka.
            </p>

          </div>

          {/* BRAND */}
          <div className="bg-[#f8fafc] p-4 rounded-xl border border-slate-200/80 shadow-sm flex items-center space-x-4 shrink-0">

            <div className="w-10 h-10 rounded-lg bg-[#0a192f] flex items-center justify-center text-[#00d4ff] font-extrabold font-mono text-sm tracking-tighter">
              HIK
            </div>

            <div>
              <div className="text-[11px] text-slate-500 font-medium">
                Featured Brand
              </div>

              <div className="text-base font-bold text-[#0a192f] tracking-wide">
                Hikvision
              </div>
            </div>

          </div>

        </div>


        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {PRODUCT_CATEGORIES.map((prod) => (

            <div
              key={prod.id}
              className="
                group
                bg-white
                rounded-2xl
                border
                border-slate-200
                overflow-hidden
                shadow-sm
                hover:shadow-xl
                hover:border-blue-300
                hover:-translate-y-1
                transition-all
                duration-300
                flex
                flex-col
              "
            >

              {/* PRODUCT IMAGE */}
              <button
                type="button"
                onClick={() => setSelectedProduct(prod)}
                className="relative block w-full bg-slate-100 overflow-hidden cursor-pointer"
                aria-label={`Lihat ${prod.title}`}
              >

                <div className="aspect-[4/3] overflow-hidden">

                  <img
                    src={prod.image}
                    alt={prod.title}
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

                </div>

                {/* IMAGE GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/60 via-transparent to-transparent" />

                {/* VIEW */}
                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    bg-[#0a192f]/30
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-300
                  "
                >
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-[#0a192f] text-xs font-bold shadow-xl">

                    <ZoomIn className="w-4 h-4 text-[#007bff]" />

                    View

                  </div>
                </div>

                {/* PRODUCT NAME ON IMAGE */}
                <div className="absolute left-4 right-4 bottom-4 text-left">

                  <div className="text-[10px] text-blue-100 font-semibold mb-1">
                    {prod.badge}
                  </div>

                  <h3 className="text-white text-base font-extrabold leading-tight drop-shadow-md">
                    {prod.title}
                  </h3>

                </div>

              </button>


              {/* CONTENT */}
              <div className="p-5 flex-1 flex flex-col justify-between">

                <div>

                  {/* CATEGORY */}
                  <div className="inline-block text-[10px] font-bold text-[#007bff] bg-blue-50 px-2.5 py-0.5 rounded border border-blue-100 mb-2">
                    {prod.category}
                  </div>

                  {/* TITLE */}
                  <h3 className="text-base sm:text-lg font-bold text-[#0a192f] group-hover:text-[#007bff] transition-colors">
                    {prod.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {prod.description}
                  </p>


                  {/* FEATURES */}
                  <ul className="mt-4 space-y-1.5 pt-3 border-t border-slate-200/60">

                    {prod.features.map((feat, index) => (

                      <li
                        key={`${prod.id}-${index}`}
                        className="flex items-start text-xs text-slate-600"
                      >

                        <Check className="w-3.5 h-3.5 text-[#007bff] mr-2 shrink-0 mt-0.5" />

                        <span>
                          {feat}
                        </span>

                      </li>

                    ))}

                  </ul>

                </div>


                {/* CTA */}
                <div className="mt-5 pt-3.5 border-t border-slate-200/60">

                  <a
                    href={getProductWhatsappUrl(prod.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      w-full
                      flex
                      items-center
                      justify-center
                      py-2.5
                      px-4
                      rounded-lg
                      text-xs
                      sm:text-sm
                      font-bold
                      text-white
                      bg-[#0a192f]
                      hover:bg-[#25D366]
                      transition-colors
                      duration-200
                      shadow-sm
                    "
                  >

                    <MessageSquare className="w-4 h-4 mr-2" />

                    <span>
                      Konsultasi Produk
                    </span>

                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>


        {/* NOTE */}
        <div className="mt-10 text-center bg-blue-50/50 border border-blue-100 rounded-2xl p-5 max-w-3xl mx-auto">

          <p className="text-xs sm:text-sm text-slate-600">

            <strong className="text-[#0a192f] font-semibold">
              Catatan Konsultasi:
            </strong>{' '}

            Setiap konfigurasi kamera, kapasitas hard drive,
            tipe NVR/DVR, dan kebutuhan lensa ditentukan
            berdasarkan survei & diskusi teknis untuk memastikan
            efisiensi biaya serta akurasi coverage pengawasan.

          </p>

        </div>

      </div>


      {/* PRODUCT MODAL */}
      {selectedProduct && (

        <div
          className="
            fixed
            inset-0
            z-[200]
            bg-[#0a192f]/90
            backdrop-blur-md
            flex
            items-center
            justify-center
            p-4
            sm:p-6
          "
          onClick={() => setSelectedProduct(null)}
        >

          <div
            className="
              relative
              w-full
              max-w-5xl
              bg-white
              rounded-2xl
              overflow-hidden
              shadow-2xl
              max-h-[92vh]
              overflow-y-auto
            "
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE */}
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
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
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>


            {/* LARGE IMAGE */}
            <div className="relative bg-slate-100">

              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="
                  w-full
                  max-h-[65vh]
                  object-contain
                  bg-slate-100
                "
              />

            </div>


            {/* MODAL INFO */}
            <div className="p-6 sm:p-8">

              <div className="inline-block text-[10px] font-bold text-[#007bff] bg-blue-50 px-2.5 py-1 rounded border border-blue-100">
                {selectedProduct.category}
              </div>

              <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold text-[#0a192f]">
                {selectedProduct.title}
              </h3>

              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                {selectedProduct.description}
              </p>


              {/* MODAL FEATURES */}
              <div className="mt-6 grid sm:grid-cols-2 gap-3">

                {selectedProduct.features.map((feat, index) => (

                  <div
                    key={`modal-${selectedProduct.id}-${index}`}
                    className="flex items-start gap-2 bg-slate-50 border border-slate-200 rounded-xl p-3"
                  >

                    <Check className="w-4 h-4 text-[#007bff] shrink-0 mt-0.5" />

                    <span className="text-sm text-slate-600">
                      {feat}
                    </span>

                  </div>

                ))}

              </div>


              {/* MODAL WHATSAPP */}
              <a
                href={getProductWhatsappUrl(selectedProduct.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-6
                  inline-flex
                  items-center
                  justify-center
                  px-6
                  py-3
                  rounded-xl
                  bg-[#25D366]
                  hover:bg-[#1ebe5d]
                  text-white
                  text-sm
                  font-bold
                  transition-colors
                "
              >

                <MessageSquare className="w-4 h-4 mr-2" />

                Konsultasi {selectedProduct.title}

              </a>

            </div>

          </div>

        </div>

      )}

    </section>
  );
};
