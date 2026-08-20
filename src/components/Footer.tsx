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
        bg-[#ecfdf5]
        text-slate-600
        border-t
        border-emerald-100
        pt-16
        pb-12
        relative
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main 4 Columns Grid */}
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
            border-emerald-200
          "
        >

          {/* Column 1 */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">

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

            <p
              className="
                text-xs
                sm:text-sm
                text-slate-600
                leading-relaxed
                max-w-sm
              "
            >
              {COMPANY_INFO.description}
            </p>

            <div
              className="
                pt-1
                text-xs
                font-mono
                text-emerald-700
                flex
                items-center
                space-x-2
              "
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" />

              <span>
                Solution Provider, bukan sekadar salesman.
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
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
                      text-slate-600
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
                        text-emerald-400
                        group-hover:text-emerald-700
                        transition-colors
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

          {/* Column 3: Solutions */}
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
                      text-slate-600
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

          {/* Column 4: Contact */}
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
                    text-slate-600
                    leading-relaxed
                    text-xs
                  "
                >
                  {COMPANY_INFO.address}
                </span>
              </div>

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
                    text-emerald-700
                    hover:text-emerald-800
                    hover:underline
                    font-semibold
                    text-xs
                    sm:text-sm
                  "
                >
                  Chat WhatsApp (0812-1261-2006)
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
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
            text-slate-500
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
              {COMPANY_INFO.name} {COMPANY_INFO.subName}
            </strong>
            . All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="
              flex
              items-center
              space-x-1.5
              px-3
              py-1.5
              rounded-lg
              bg-white/80
              hover:bg-white
              text-slate-600
              hover:text-emerald-700
              border
              border-emerald-200
              shadow-sm
              transition-colors
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
