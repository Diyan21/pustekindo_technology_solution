import React from 'react';
import { ChevronDown } from 'lucide-react';

export const VideoIntro: React.FC = () => {
  const scrollToHero = () => {
    const hero = document.getElementById('beranda');

    if (hero) {
      hero.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section
      id="video-intro"
      className="relative w-full h-[100svh] min-h-[600px] overflow-hidden bg-[#020817]"
    >
      {/* =========================
          DESKTOP / TABLET VIDEO
         ========================= */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="
          hidden md:block
          absolute inset-0
          w-full h-full
          object-cover
        "
      >
        <source
          src="/videos/pustekindo-hero.mp4"
          type="video/mp4"
        />
      </video>

      {/* =========================
          MOBILE / PORTRAIT VIDEO
         ========================= */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="
          block md:hidden
          absolute inset-0
          w-full h-full
          object-cover
        "
      >
        <source
          src="/videos/pustekindo-hero-potret.mp4"
          type="video/mp4"
        />
      </video>

      {/* Subtle Dark Overlay */}
      <div className="absolute inset-0 bg-[#020817]/10 pointer-events-none" />


      {/* =========================
          SCROLL INDICATOR
         ========================= */}
      <button
        type="button"
        onClick={scrollToHero}
        aria-label="Lihat selengkapnya"
        className="
          absolute
          bottom-7 sm:bottom-8
          left-1/2
          -translate-x-1/2
          z-20
          flex flex-col
          items-center
          gap-2
          text-white
          transition-all
          duration-300
          hover:-translate-y-1
        "
      >
        <span
          className="
            text-[10px] sm:text-xs
            font-semibold
            uppercase
            tracking-[0.25em]
            drop-shadow-md
          "
        >
          Explore
        </span>

        <div
          className="
            w-10 h-10
            rounded-full
            border border-white/30
            bg-black/20
            backdrop-blur-md
            flex
            items-center
            justify-center
            shadow-lg
          "
        >
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
      </button>
    </section>
  );
};
