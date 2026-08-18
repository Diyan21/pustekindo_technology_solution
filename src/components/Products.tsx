import React, { useState } from 'react';
import { Camera, Check, MessageSquare, Shield, Info, ArrowUpRight } from 'lucide-react';
import { PRODUCT_CATEGORIES, COMPANY_INFO, ProductCategory } from '../data/companyData';
import { ImagePlaceholder } from './ImagePlaceholder';

export const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductCategory | null>(null);

  const getProductWhatsappUrl = (productTitle: string) => {
    const text = encodeURIComponent(
      `Halo PUSTEKINDO, saya ingin konsultasi mengenai produk surveillance ${productTitle} untuk kebutuhan saya.`
    );
    return `https://wa.me/6281212612006?text=${text}`;
  };

  return (
    <section id="produk" className="py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-[#007bff] border border-blue-100 text-xs font-bold tracking-wider uppercase">
              <Shield className="w-3.5 h-3.5 text-[#007bff]" />
              <span>Surveillance Hardware</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a192f] tracking-tight">
              Produk & Surveillance Solution
            </h2>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
              Solusi perangkat kamera pengawas berstandar industri dengan keandalan tinggi dan dukungan ekosistem brand global terkemuka.
            </p>
          </div>

          {/* Brand Partner Badge */}
          <div className="bg-[#f8fafc] p-4 rounded-xl border border-slate-200/80 shadow-sm flex items-center space-x-4 shrink-0">
            <div className="w-10 h-10 rounded-lg bg-[#0a192f] flex items-center justify-center text-[#00d4ff] font-extrabold font-mono text-sm tracking-tighter">
              HIK
            </div>
            <div>
              <div className="text-[11px] text-slate-500 font-medium">Featured Brand</div>
              <div className="text-base font-bold text-[#0a192f] tracking-wide">
                Hikvision
              </div>
            </div>
          </div>
        </div>

        {/* 4 Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'fixed-indoor',
    title: 'Fixed Indoor Camera',
    category: 'Indoor Surveillance',
    badge: 'Hikvision Official Standard',
    description:
      'CCTV untuk kebutuhan pemantauan area indoor dengan desain elegan, lensa tajam, dan sudut pandang optimal untuk ruangan kantor, toko, atau hunian.',
    features: [
      'Desain ringkas dan estetis untuk interior',
      'Sudut pandang luas (Wide Angle View)',
      'Smart IR Night Vision untuk kondisi minim cahaya',
      'Kompatibel dengan NVR & DVR Hikvision'
    ],
    image: '/images/products/fixed-indoor-camera.jpg'
  },

  {
    id: 'fixed-outdoor',
    title: 'Fixed Outdoor Camera',
    category: 'Outdoor Surveillance',
    badge: 'Weatherproof Enclosure',
    description:
      'Kamera untuk kebutuhan area luar ruangan dengan perlindungan terhadap debu, hujan, dan perubahan cuaca untuk mengawasi perimeter bangunan.',
    features: [
      'Proteksi tahan cuaca IP66 / IP67',
      'Infrared jarak jauh untuk malam hari',
      'Bodi kokoh untuk penggunaan outdoor',
      'Deteksi gerakan di area terbuka'
    ],
    image: '/images/products/fixed-outdoor-camera.jpg'
  },

  {
    id: 'heavy-duty',
    title: 'Heavy Duty Weatherproof Camera',
    category: 'Industrial / Extreme Env',
    badge: 'High Durability Standard',
    description:
      'Solusi kamera untuk penggunaan pada lingkungan yang membutuhkan perangkat lebih tahan terhadap kondisi luar, area industri, debu pekat, atau panas ekstrem.',
    features: [
      'Housing industri logam berkekuatan tinggi',
      'Toleransi suhu dan kelembaban ekstrem',
      'Perlindungan optimal untuk area pabrik & industri',
      'Jangkauan visual perimeter jarak jauh'
    ],
    image: '/images/products/heavy-duty-weatherproof-camera.jpg'
  },

  {
    id: 'ptz-speed-dome',
    title: 'PTZ / Speed Dome Camera',
    category: 'Wide Area Monitoring',
    badge: 'Pan-Tilt-Zoom Active Control',
    description:
      'Pan Tilt Zoom Camera untuk kebutuhan monitoring area luas dengan kemampuan rotasi fleksibel dan pembesaran optik untuk membantu pemantauan objek jarak jauh.',
    features: [
      'Rotasi Pan & Tilt untuk cakupan area luas',
      'Optical Zoom untuk melihat objek jarak jauh',
      'Preset tour & patrol positioning',
      'Ideal untuk area parkir, gedung, pabrik, dan perimeter'
    ],
    image: '/images/products/ptz-speed-dome-camera.jpg'
  }
];
              <div className="p-3.5 bg-slate-100/60">
                <ImagePlaceholder
                  src={prod.image}
                  alt={prod.title}
                  type="product"
                  title={prod.title}
                  subtitle={prod.badge}
                  cameraCode="HIK-SYS [HD]"
                  aspectRatio="aspect-[4/3]"
                  className="w-full rounded-xl"
                />
              </div>

              {/* Content Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-[10px] font-bold text-[#007bff] bg-blue-50 px-2.5 py-0.5 rounded border border-blue-100 mb-2">
                    {prod.category}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#0a192f] group-hover:text-[#007bff] transition-colors">
                    {prod.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {prod.description}
                  </p>

                  {/* Bullet features */}
                  <ul className="mt-4 space-y-1.5 pt-3 border-t border-slate-200/60">
                    {prod.features.map((feat, i) => (
                      <li key={i} className="flex items-start text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-[#007bff] mr-2 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA Button */}
                <div className="mt-5 pt-3.5 border-t border-slate-200/60">
                  <a
                    href={getProductWhatsappUrl(prod.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center py-2.5 px-4 rounded-lg text-xs sm:text-sm font-bold text-white bg-[#0a192f] hover:bg-[#25D366] transition-colors duration-200 shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    <span>Konsultasi Produk</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Note Footer below products */}
        <div className="mt-10 text-center bg-blue-50/50 border border-blue-100 rounded-2xl p-5 max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm text-slate-600">
            <strong className="text-[#0a192f] font-semibold">Catatan Konsultasi:</strong> Setiap konfigurasi kamera, kapasitas hard drive, tipe NVR/DVR, dan kebutuhan lensa ditentukan berdasarkan survei & diskusi teknis mendalam untuk memastikan efisiensi biaya serta akurasi coverage pengawasan.
          </p>
        </div>

      </div>
    </section>
  );
};

