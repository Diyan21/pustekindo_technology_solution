import React, {
  useEffect,
  useState
} from 'react';

import { VideoIntro } from '../components/VideoIntro';
import { Hero } from '../components/Hero';
import { Brands } from '../components/Brands';
import { About } from '../components/About';
import { VisionMission } from '../components/VisionMission';
import { Clients } from '../components/Clients';
import { Gallery } from '../components/Gallery';
import { Features } from '../components/Features';
import { Services } from '../components/Services';
import { Contact } from '../components/Contact';
import { CTA } from '../components/CTA';

export const Home: React.FC = () => {
  const [activeExtraSection, setActiveExtraSection] =
    useState<string | null>(null);

  useEffect(() => {
    const handleOpenSection = (event: Event) => {
      const customEvent =
        event as CustomEvent<string>;

      setActiveExtraSection(
        customEvent.detail
      );

      setTimeout(() => {
        const target =
          document.querySelector(
            customEvent.detail
          );

        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    };

    window.addEventListener(
      'open-extra-section',
      handleOpenSection
    );

    return () => {
      window.removeEventListener(
        'open-extra-section',
        handleOpenSection
      );
    };
  }, []);

  return (
    <main className="min-h-screen">

      {/* =========================================
          HOMEPAGE UTAMA
      ========================================== */}

      {/* 1. Video Intro */}
      <VideoIntro />

      {/* 2. Hero */}
      <Hero />

      {/* 3. Harga Paket / Produk */}
      <Brands />

      {/* 4. Galeri */}
      <Gallery />

      {/* 5. CTA + Running Logo Project */}
      <CTA />


      {/* =========================================
          SECTION TAMBAHAN
          MUNCUL SAAT MENU DIKLIK
      ========================================== */}

      {/* Tentang Kami */}
      {activeExtraSection === '#tentang' && (
        <>
          <About />
          <VisionMission />
        </>
      )}

      {/* Visi & Misi */}
      {activeExtraSection === '#visi-misi' && (
        <VisionMission />
      )}

      {/* Layanan Kami */}
      {activeExtraSection === '#layanan' && (
        <Services />
      )}

      {/* Dokumentasi Pemasangan */}
      {activeExtraSection === '#keunggulan' && (
        <Features />
      )}

      {/* Klien */}
      {activeExtraSection === '#klien' && (
        <Clients />
      )}

      {/* Kontak */}
      {activeExtraSection === '#kontak' && (
        <Contact />
      )}

    </main>
  );
};
