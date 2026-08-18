import React, { useEffect, useState } from 'react';

import { VideoIntro } from '../components/VideoIntro';
import { Hero } from '../components/Hero';
import { Brands } from '../components/Brands';
import { About } from '../components/About';
import { VisionMission } from '../components/VisionMission';
import { Clients } from '../components/Clients';
import { Gallery } from '../components/Gallery';
import { Contact } from '../components/Contact';
import { CTA } from '../components/CTA';

export const Home: React.FC = () => {
  const [activeExtraSection, setActiveExtraSection] =
    useState<string | null>(null);

  useEffect(() => {
    const handleOpenSection = (event: Event) => {
      const customEvent = event as CustomEvent<string>;

      setActiveExtraSection(customEvent.detail);

      setTimeout(() => {
        const target = document.querySelector(
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

      {/* =========================
          HOMEPAGE UTAMA
      ========================== */}

      {/* 1. Video Intro */}
      <VideoIntro />

      {/* 2. Hero */}
      <Hero />

      {/* 3. Harga Paket */}
      <Brands />


      {/* =========================
          SECTION TAMBAHAN
          HANYA MUNCUL SAAT MENU DIKLIK
      ========================== */}

      {activeExtraSection === '#tentang' && (
        <>
          <About />
          <VisionMission />
        </>
      )}

      {activeExtraSection === '#visi-misi' && (
        <VisionMission />
      )}

      {activeExtraSection === '#galeri' && (
        <Gallery />
      )}

      {activeExtraSection === '#klien' && (
        <Clients />
      )}

      {activeExtraSection === '#kontak' && (
        <>
          <CTA />
          <Contact />
        </>
      )}

    </main>
  );
};
