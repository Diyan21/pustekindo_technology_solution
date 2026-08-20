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
    const handleOpenSection = (
      event: Event
    ) => {
      const customEvent =
        event as CustomEvent<string>;

      const section =
        customEvent.detail;

      setActiveExtraSection(
        section
      );

      /*
       * Tunggu React render section
       * lalu scroll ke section tersebut.
       */
      setTimeout(() => {
        const target =
          document.querySelector(
            section
          );

        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 200);
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

      <VideoIntro />

      <Hero />

      <Gallery />

      <CTA />


      {/* =========================================
          HARGA PAKET
          HANYA MUNCUL KETIKA NAVBAR DIKLIK
      ========================================== */}

      {activeExtraSection === '#harga-paket' && (
        <section
          id="harga-paket"
          className="scroll-mt-24"
        >
          <Brands />
        </section>
      )}


      {/* =========================================
          TENTANG KAMI
      ========================================== */}

      {activeExtraSection === '#tentang' && (
        <section
          id="tentang"
          className="scroll-mt-24"
        >
          <About />
          <VisionMission />
        </section>
      )}


      {/* =========================================
          VISI MISI
      ========================================== */}

      {activeExtraSection === '#visi-misi' && (
        <section
          id="visi-misi"
          className="scroll-mt-24"
        >
          <VisionMission />
        </section>
      )}


      {/* =========================================
          LAYANAN
      ========================================== */}

      {activeExtraSection === '#layanan' && (
        <section
          id="layanan"
          className="scroll-mt-24"
        >
          <Services />
        </section>
      )}


      {/* =========================================
          DOKUMENTASI
      ========================================== */}

      {activeExtraSection === '#keunggulan' && (
        <section
          id="keunggulan"
          className="scroll-mt-24"
        >
          <Features />
        </section>
      )}


      {/* =========================================
          KLIEN
      ========================================== */}

      {activeExtraSection === '#klien' && (
        <section
          id="klien"
          className="scroll-mt-24"
        >
          <Clients />
        </section>
      )}


      {/* =========================================
          KONTAK
      ========================================== */}

      {activeExtraSection === '#kontak' && (
        <section
          id="kontak"
          className="scroll-mt-24"
        >
          <Contact />
        </section>
      )}

    </main>
  );
};
