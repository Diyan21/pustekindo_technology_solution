import React from 'react';

import { VideoIntro } from '../components/VideoIntro';
import { Hero } from '../components/Hero';
import { Brands } from '../components/Brands';
import { TrustStats } from '../components/TrustStats';
import { Features } from '../components/Features';
import { About } from '../components/About';
import { SystemGoals } from '../components/SystemGoals';
import { Products } from '../components/Products';
import { RemoteMonitoring } from '../components/RemoteMonitoring';
import { Solutions } from '../components/Solutions';
import { VisionMission } from '../components/VisionMission';
import { Clients } from '../components/Clients';
import { Gallery } from '../components/Gallery';
import { CTA } from '../components/CTA';
import { Contact } from '../components/Contact';

export const Home: React.FC = () => {
  return (
    <main className="min-h-screen">

      {/* 0. Full Screen Video Intro */}
      <VideoIntro />

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Harga Paket / Brand CCTV */}
      <Brands />

      {/* 3. Trust Indicators */}
      <TrustStats />

      {/* 4. Keunggulan - Mengapa Memilih PUSTEKINDO? */}
      <Features />

      {/* 5. Tentang Kami - Lebih dari Sekadar Menjual CCTV */}
      <About />

      {/* 6. Tujuan Sistem */}
      <SystemGoals />

      {/* 7. Produk - Hikvision Categories */}
      <Products />

      {/* 8. Remote Monitoring */}
      <RemoteMonitoring />

      {/* 9. Solusi Berdasarkan Kebutuhan */}
      <Solutions />

      {/* 10. Visi & Misi */}
      <VisionMission />

      {/* 11. Klien */}
      <Clients />

      {/* 12. Galeri Dokumentasi Proyek */}
      <Gallery />

      {/* 13. Big CTA Banner */}
      <CTA />

      {/* 14. Kontak & Formulir WhatsApp */}
      <Contact />

    </main>
  );
};
