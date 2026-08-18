import React from 'react';
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
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Harga Paket / Brand CCTV */}
      <Brands />

      {/* 3. Trust Indicators */}
      <TrustStats />

      {/* 3. Keunggulan (Mengapa Memilih PUSTEKINDO?) */}
      <Features />

      {/* 4. Tentang Kami (Lebih dari Sekadar Menjual CCTV) */}
      <About />

      {/* 5. Tujuan Sistem (Sistem Keamanan yang Memberikan Manfaat Nyata) */}
      <SystemGoals />

      {/* 6. Produk (Hikvision Categories) */}
      <Products />

      {/* 7. Remote Monitoring (Dark Navy Section with Diagram) */}
      <RemoteMonitoring />

      {/* 8. Solusi Berdasarkan Kebutuhan (10 Sectors & 7 Use Cases) */}
      <Solutions />

      {/* 9. Visi & Misi */}
      <VisionMission />

      {/* 10. Klien (17 Verified Enterprise Clients) */}
      <Clients />

      {/* 11. Galeri Dokumentasi Proyek */}
      <Gallery />

      {/* 12. Big CTA Banner */}
      <CTA />

      {/* 13. Kontak & Formulir WhatsApp */}
      <Contact />
    </main>
  );
};
