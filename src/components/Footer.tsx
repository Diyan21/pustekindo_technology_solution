import React from 'react';

import {
  Video,
  ShieldCheck,
  MapPin,
  Phone,
  MessageSquare,
  ArrowUp
} from 'lucide-react';

import {
  COMPANY_INFO
} from '../data/companyData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer
      id="main-footer"
      className="
        relative
        overflow-hidden
        text-white
        border-t
        border-white/10
        pt-16
        pb-8
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
          DARK NEUTRAL OVERLAY
      ========================================== */}

      <div
        className="
          absolute
          inset-0
          z-[1]
          bg-[#071426]/86
          pointer-events-none
        "
      />

      {/* ==========================================
          SUBTLE GRADIENT
      ========================================== */}

      <div
        className="
          absolute
          inset-0
          z-[2]
          bg-gradient-to-b
          from-black/10
          via-transparent
          to-black/30
          pointer-events-none
        "
      />


      {/* ==========================================
          CONTENT
      ========================================== */}

      <div
        className="
          relative
          z-10
          max-w-6xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* ========================================
            MAIN CONTENT
        ======================================== */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[1.4fr_1fr]
            gap-12
            lg:gap-20
            items-start
            pb-12
          "
        >
          {/* ======================================
              BRAND
          ====================================== */}

          <div>
            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <div
                className="
                  w-11
                  h-11
                  rounded-xl
                  bg-white/10
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  shrink-0
                "
              >
                <Video
                  className="
                    w-5
                    h-5
                    text-emerald-300
                  "
                />
              </div>

              <div>
                <div
                  className="
                    text-xl
                    sm:text-2xl
                    font-extrabold
                    tracking-tight
                    text-white
                  "
                >
                  {COMPANY_INFO.name}
                </div>

                <div
                  className="
                    mt-0.5
                    text-[11px]
                    sm:text-xs
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-emerald-300
                  "
                >
                  {COMPANY_INFO.subName}
                </div>
              </div>
            </div>

            <p
              className="
                mt-6
                max-w-2xl
                text-sm
                sm:text-base
                leading-7
                text-slate-300
              "
            >
              {COMPANY_INFO.description}
            </p>

            <div
              className="
                mt-6
                flex
                items-center
                gap-2.5
                text-sm
                font-semibold
                text-emerald-300
              "
            >
              <ShieldCheck
                className="
                  w-5
                  h-5
                  shrink-0
                "
              />

              <span>
                Solution Provider, bukan sekadar salesman.
              </span>
            </div>
          </div>


          {/* ======================================
              CONTACT
          ====================================== */}

          <div>
            <p
              className="
                text-xs
                sm:text-sm
                font-extrabold
                uppercase
                tracking-[0.16em]
                text-emerald-300
              "
            >
              Hubungi Kami
            </p>

            <h3
              className="
                mt-3
                text-2xl
                sm:text-3xl
                font-extrabold
                leading-tight
                text-white
              "
            >
              Konsultasikan kebutuhan sistem keamanan Anda.
            </h3>

            <div
              className="
                mt-7
                space-y-5
              "
            >
              {/* ADDRESS */}

              <div
                className="
                  flex
                  items-start
                  gap-3
                "
              >
                <MapPin
                  className="
                    w-5
                    h-5
                    mt-0.5
                    text-emerald-300
                    shrink-0
                  "
                />

                <div>
                  <p
                    className="
                      text-xs
                      uppercase
                      tracking-wider
                      font-bold
                      text-slate-400
                    "
                  >
                    Alamat
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      sm:text-base
                      leading-6
                      text-slate-200
                    "
                  >
                    {COMPANY_INFO.address}
                  </p>
                </div>
              </div>


              {/* PHONE */}

              <div
                className="
                  flex
                  items-start
                  gap-3
                "
              >
                <Phone
                  className="
                    w-5
                    h-5
                    mt-0.5
                    text-emerald-300
                    shrink-0
                  "
                />

                <div>
                  <p
                    className="
                      text-xs
                      uppercase
                      tracking-wider
                      font-bold
                      text-slate-400
                    "
                  >
                    Telepon
                  </p>

                  <a
                    href={`tel:${COMPANY_INFO.phone.replace(
                      /[^0-9]/g,
                      ''
                    )}`}
                    className="
                      mt-1
                      inline-block
                      text-base
                      sm:text-lg
                      font-extrabold
                      text-white
                      hover:text-emerald-300
                      transition-colors
                    "
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>


              {/* WHATSAPP */}

              <div
                className="
                  flex
                  items-start
                  gap-3
                "
              >
                <MessageSquare
                  className="
                    w-5
                    h-5
                    mt-0.5
                    text-emerald-300
                    shrink-0
                  "
                />

                <div>
                  <p
                    className="
                      text-xs
                      uppercase
                      tracking-wider
                      font-bold
                      text-slate-400
                    "
                  >
                    WhatsApp
                  </p>

                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-1
                      inline-block
                      text-sm
                      sm:text-base
                      font-bold
                      text-emerald-300
                      hover:text-emerald-200
                      transition-colors
                    "
                  >
                    Chat WhatsApp (0812-1261-2006)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* ========================================
            BOTTOM
        ======================================== */}

        <div
          className="
            pt-6
            border-t
            border-white/10

            flex
            flex-col
            sm:flex-row

            items-center
            justify-between

            gap-4
          "
        >
          <p
            className="
              text-xs
              sm:text-sm
              text-slate-400
              text-center
              sm:text-left
            "
          >
            © 2026{' '}

            <strong
              className="
                text-white
                font-semibold
              "
            >
              {COMPANY_INFO.name}{' '}
              {COMPANY_INFO.subName}
            </strong>

            . All Rights Reserved.
          </p>


          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Kembali ke atas"
            className="
              inline-flex
              items-center
              gap-2

              text-xs
              sm:text-sm
              font-semibold

              text-slate-300

              hover:text-emerald-300

              transition-colors
            "
          >
            <span>
              Kembali ke Atas
            </span>

            <ArrowUp
              className="
                w-4
                h-4
              "
            />
          </button>
        </div>
      </div>
    </footer>
  );
};
