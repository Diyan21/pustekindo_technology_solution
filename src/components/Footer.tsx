import React from 'react';

import {
  Video,
  ShieldCheck,
  MapPin,
  Phone,
  MessageSquare,
  ArrowUp,
  ChevronRight
} from 'lucide-react';

import {
  COMPANY_INFO,
  NAV_LINKS
} from '../data/companyData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const solutionsList = [
    'CCTV',
    'Surveillance System',
    'Remote Monitoring',
    'Security Solution',
    'IT Monitoring'
  ];

  return (
    <footer
      id="main-footer"
      className="
        relative
        overflow-hidden
        text-slate-700
        border-t
        border-emerald-200
        pt-16
        pb-12
      "
    >
      {/* ==========================================
          VIDEO BACKGROUND
      ========================================== */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="
          absolute
          inset-0
          z-0
          w-full
          h-full
          object-cover
          pointer-events-none
        "
      >
        <source
          src="/videos/footer-pustekindo.mp4"
          type="video/mp4"
        />
      </video>

      {/* ==========================================
          OVERLAY HIJAU MUDA
          /85 = video tetap terlihat samar
      ========================================== */}
      <div
        className="
          absolute
          inset-0
          z-[1]
          bg-[#ecfdf5]/85
          pointer-events-none
        "
      />

      {/* ==========================================
          GRADIENT TAMBAHAN
          Biar video lebih soft & clean
      ========================================== */}
      <div
        className="
          absolute
          inset-0
          z-[2]
          bg-gradient-to-b
          from-white/20
          via-transparent
          to-emerald-50/50
          pointer-events-none
        "
      />

      {/* ==========================================
          FOOTER CONTENT
      ========================================== */}
      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* ========================================
            MAIN 4 COLUMNS
        ======================================== */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-12
            gap-10
            lg:gap-8
            pb-12
            border-b
            border-emerald-300/60
          "
        >
          {/* ======================================
              COLUMN 1: BRAND
          ====================================== */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">

              {/* Logo */}
              <div
                className="
                  w-9
                  h-9
                  rounded-lg
                  bg-[#0a192f]
                  flex
                  items-center
                  justify-center
                  shadow-sm
                "
              >
                <Video className="w-5 h-5 text-emerald-300" />
              </div>

              {/* Company Name */}
              <div>
                <span
                  className="
                    text-base
                    font-extrabold
                    text-[#0a192f]
                    font-mono
                    tracking-tight
                    block
                  "
                >
                  {COMPANY_INFO.name}
                </span>

                <span
                  className="
                    text-[10px]
                    font-semibold
                    text-emerald-700
                    uppercase
                    tracking-widest
                    block
                    -mt-0.5
                  "
                >
                  {COMPANY_INFO.subName}
                </span>
              </div>
            </div>

            {/* Description */}
            <p
              className="
                text-xs
                sm:text-sm
                text-slate-700
                leading-relaxed
                max-w-sm
              "
            >
              {COMPANY_INFO.description}
            </p>

            {/* Provider Text */}
            <div
              className="
                pt-1
                text-xs
                font-mono
                text-emerald-800
                flex
                items-center
                space-x-2
              "
            >
              <ShieldCheck
                className="
                  w-4
                  h-4
                  text-emerald-600
                  shrink-0
                "
              />

              <span>
                Solution Provider, bukan sekadar salesman.
              </span>
            </div>
          </div>

          {/* ======================================
              COLUMN 2: QUICK LINKS
          ====================================== */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4
              className="
                text-xs
                font-bold
                uppercase
                tracking-wider
                text-[#0a192f]
                font-mono
              "
            >
              Quick Links
            </h4>

            <ul className="space-y-2 text-xs sm:text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="
                      text-slate-700
                      hover:text-emerald-700
                      transition-colors
                      flex
                      items-center
                      group
                    "
                  >
                    <ChevronRight
                      className="
                        w-3
                        h-3
                        mr-1
                        text-emerald-500
                        group-hover:text-emerald-700
                        group-hover:translate-x-0.5
                        transition-all
                      "
                    />

                    <span>
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ======================================
              COLUMN 3: SOLUTIONS
          ====================================== */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4
              className="
                text-xs
                font-bold
                uppercase
                tracking-wider
                text-[#0a192f]
                font-mono
              "
            >
              Solutions
            </h4>

            <ul className="space-y-2 text-xs sm:text-sm">
              {solutionsList.map((sol, idx) => (
                <li key={idx}>
                  <a
                    href="#solusi"
                    className="
                      text-slate-700
                      hover:text-emerald-700
                      transition-colors
                      flex
                      items-center
                      group
                    "
                  >
                    <span
                      className="
                        w-1.5
                        h-1.5
                        rounded-full
                        bg-emerald-500
                        mr-2
                        shrink-0
                        group-hover:scale-125
                        transition-transform
                      "
                    />

                    <span>
                      {sol}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ======================================
              COLUMN 4: CONTACT
          ====================================== */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4
              className="
                text-xs
                font-bold
                uppercase
                tracking-wider
                text-[#0a192f]
                font-mono
              "
            >
              Contact
            </h4>

            <div className="space-y-3 text-xs sm:text-sm">

              {/* Address */}
              <div className="flex items-start space-x-2.5">
                <MapPin
                  className="
                    w-4
                    h-4
                    text-emerald-600
                    shrink-0
                    mt-0.5
                  "
                />

                <span
                  className="
                    text-slate-700
                    leading-relaxed
                    text-xs
                  "
                >
                  {COMPANY_INFO.address}
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-2.5">
                <Phone
                  className="
                    w-4
                    h-4
                    text-[#25D366]
                    shrink-0
                  "
                />

                <a
                  href={`tel:${COMPANY_INFO.phone.replace(
                    /[^0-9]/g,
                    ''
                  )}`}
                  className="
                    text-[#0a192f]
                    hover:text-emerald-700
                    font-bold
                    text-xs
                    sm:text-sm
                    transition-colors
                  "
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center space-x-2.5">
                <MessageSquare
                  className="
                    w-4
                    h-4
                    text-[#25D366]
                    shrink-0
                  "
                />

                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-emerald-800
                    hover:text-emerald-900
                    hover:underline
                    font-semibold
                    text-xs
                    sm:text-sm
                    transition-colors
                  "
                >
                  Chat WhatsApp (0812-1261-2006)
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================
            BOTTOM BAR / COPYRIGHT
        ======================================== */}
        <div
          className="
            pt-8
            flex
            flex-col
            sm:flex-row
            items-center
            justify-between
            gap-4
            text-xs
            text-slate-600
          "
        >
          <p className="text-center sm:text-left">
            © 2026{' '}

            <strong
              className="
                text-[#0a192f]
                font-semibold
              "
            >
              {COMPANY_INFO.name}{' '}
              {COMPANY_INFO.subName}
            </strong>

            . All Rights Reserved.
          </p>

          {/* Back To Top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="
              flex
              items-center
              space-x-1.5
              px-3
              py-1.5
              rounded-lg
              bg-white/70
              hover:bg-white/90
              backdrop-blur-sm
              text-slate-700
              hover:text-emerald-700
              border
              border-emerald-300/70
              shadow-sm
              transition-all
              text-xs
            "
            aria-label="Kembali ke atas"
          >
            <span>
              Kembali ke Atas
            </span>

            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
