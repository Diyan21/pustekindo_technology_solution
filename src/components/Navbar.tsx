import React, { useEffect, useState } from 'react';

import {
  ChevronDown,
  ChevronRight,
  Menu,
  MessageSquare,
  Phone,
  Search,
  Video,
  X
} from 'lucide-react';

import {
  COMPANY_INFO,
  NAV_LINKS
} from '../data/companyData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const [
    openDesktopMenu,
    setOpenDesktopMenu
  ] = useState<string | null>(null);

  const [
    openMobileMenu,
    setOpenMobileMenu
  ] = useState<string | null>(null);

  const [
    activeSection,
    setActiveSection
  ] = useState('beranda');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map(
        (link) => link.href.substring(1)
      );

      const scrollPosition =
        window.scrollY + 160;

      for (
        let i = sections.length - 1;
        i >= 0;
        i--
      ) {
        const sectionEl =
          document.getElementById(
            sections[i]
          );

        if (
          sectionEl &&
          sectionEl.offsetTop <=
            scrollPosition
        ) {
          setActiveSection(
            sections[i]
          );

          break;
        }
      }
    };

    handleScroll();

    window.addEventListener(
      'scroll',
      handleScroll
    );

    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll
      );
    };
  }, []);

  const handleNavClick = (
    href: string
  ) => {
    setMobileMenuOpen(false);
    setOpenDesktopMenu(null);
    setOpenMobileMenu(null);

    // ==========================
    // BRAND DROPDOWN
    // ==========================

    if (href.startsWith('#brand-')) {
      const brandId =
        href.replace(
          '#brand-',
          ''
        );

      window.dispatchEvent(
        new CustomEvent(
          'select-cctv-brand',
          {
            detail: brandId
          }
        )
      );

      const priceSection =
        document.querySelector(
          '#harga-paket'
        );

      if (priceSection) {
        priceSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }

      return;
    }

    // ==========================
    // NORMAL NAVIGATION
    // ==========================

   const target =
  document.querySelector(href);

if (target) {
  target.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });

  return;
}

/*
 * Kalau section belum dirender di homepage,
 * minta Home.tsx untuk munculin dulu
 */
window.dispatchEvent(
  new CustomEvent(
    'open-extra-section',
    {
      detail: href
    }
  )
);
      `}
    >
      {/* Top Accent Line */}
      <div
        className="
          h-1
          bg-gradient-to-r
          from-[#0a192f]
          via-[#007bff]
          to-[#00d4ff]
        "
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="h-[74px] flex items-center justify-between">

          {/* ==========================
              LOGO
          ========================== */}

          <a
            href="#beranda"
            onClick={(e) => {
              e.preventDefault();

              handleNavClick(
                '#beranda'
              );
            }}
            className="
              flex
              items-center
              gap-3
              shrink-0
            "
          >
            <div
              className="
                w-10
                h-10
                rounded-xl
                bg-[#0a192f]
                flex
                items-center
                justify-center
                shadow-sm
              "
            >
              <Video className="w-5 h-5 text-[#00d4ff]" />
            </div>

            <div className="leading-none">

              <div
                className="
                  text-lg
                  sm:text-xl
                  font-black
                  tracking-tight
                  text-[#0a192f]
                "
              >
                {COMPANY_INFO.name}
              </div>

              <div
                className="
                  mt-1
                  text-[9px]
                  sm:text-[10px]
                  font-bold
                  tracking-[0.18em]
                  text-[#007bff]
                  uppercase
                "
              >
                {COMPANY_INFO.subName}
              </div>

            </div>

          </a>

          {/* ==========================
              DESKTOP NAVIGATION
          ========================== */}

          <nav
            className="hidden lg:flex items-center h-full"
            aria-label="Main Navigation"
          >

            {NAV_LINKS.map(
              (link) => {
                const children =
                  'children' in link
                    ? link.children
                    : undefined;

                const hasChildren =
                  Array.isArray(
                    children
                  ) &&
                  children.length > 0;

                const isActive =
                  activeSection ===
                  link.href.substring(1);

                return (
                  <div
                    key={link.name}
                    className="
                      relative
                      h-full
                      flex
                      items-center
                    "
                    onMouseEnter={() => {
                      if (
                        hasChildren
                      ) {
                        setOpenDesktopMenu(
                          link.name
                        );
                      }
                    }}
                    onMouseLeave={() => {
                      if (
                        hasChildren
                      ) {
                        setOpenDesktopMenu(
                          null
                        );
                      }
                    }}
                  >

                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();

                        handleNavClick(
                          link.href
                        );
                      }}
                      className={`
                        h-full
                        px-3
                        xl:px-4
                        flex
                        items-center
                        gap-1.5
                        text-[13px]
                        font-semibold
                        tracking-wide
                        transition-colors
                        border-b-2
                        ${
                          isActive
                            ? 'text-[#0a192f] border-[#0a192f]'
                            : 'text-slate-700 border-transparent hover:text-[#0a192f]'
                        }
                      `}
                    >
                      {link.name}

                      {hasChildren && (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </a>

                    {/* ==========================
                        DESKTOP DROPDOWN
                    ========================== */}

                    {hasChildren &&
                      openDesktopMenu ===
                        link.name && (

                        <div
                          className="
                            absolute
                            top-[72px]
                            left-1/2
                            -translate-x-1/2
                            w-56
                            bg-white
                            border
                            border-slate-200
                            rounded-b-xl
                            shadow-xl
                            py-2
                            overflow-hidden
                          "
                        >

                          {children?.map(
                            (
                              child
                            ) => (

                              <a
                                key={
                                  child.name
                                }
                                href={
                                  child.href
                                }
                                onClick={(
                                  e
                                ) => {
                                  e.preventDefault();

                                  handleNavClick(
                                    child.href
                                  );
                                }}
                                className="
                                  flex
                                  items-center
                                  justify-between
                                  px-5
                                  py-3
                                  text-sm
                                  font-medium
                                  text-slate-600
                                  hover:text-[#0a192f]
                                  hover:bg-slate-50
                                  transition-colors
                                "
                              >

                                <span>
                                  {
                                    child.name
                                  }
                                </span>

                                <ChevronRight
                                  className="
                                    w-4
                                    h-4
                                    text-slate-300
                                  "
                                />

                              </a>

                            )
                          )}

                        </div>
                      )}

                  </div>
                );
              }
            )}

            {/* ==========================
                SEARCH
            ========================== */}

            <button
              type="button"
              aria-label="Cari"
              className="
                ml-2
                w-10
                h-10
                rounded-full
                bg-slate-100
                hover:bg-slate-200
                text-slate-600
                hover:text-[#0a192f]
                flex
                items-center
                justify-center
                transition-colors
              "
            >
              <Search className="w-4 h-4" />
            </button>

          </nav>

          {/* ==========================
              DESKTOP WHATSAPP
          ========================== */}

          <div
            className="
              hidden
              xl:flex
              items-center
              ml-4
            "
          >

            <a
              href={
                COMPANY_INFO.whatsappUrl
              }
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                px-4
                py-2.5
                rounded-full
                bg-[#25D366]
                hover:bg-[#20ba5a]
                text-white
                text-xs
                font-bold
                shadow-sm
                hover:shadow-md
                transition-all
              "
            >
              <MessageSquare className="w-4 h-4 mr-2" />

              Konsultasi
            </a>

          </div>

          {/* ==========================
              MOBILE ACTIONS
          ========================== */}

          <div className="lg:hidden flex items-center gap-2">

            <a
              href={
                COMPANY_INFO.whatsappUrl
              }
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-9
                h-9
                rounded-full
                bg-[#25D366]
                text-white
                flex
                items-center
                justify-center
              "
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() =>
                setMobileMenuOpen(
                  !mobileMenuOpen
                )
              }
              className="
                w-10
                h-10
                rounded-lg
                bg-slate-100
                hover:bg-slate-200
                text-[#0a192f]
                flex
                items-center
                justify-center
                transition-colors
              "
              aria-expanded={
                mobileMenuOpen
              }
              aria-label="Buka menu"
            >

              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}

            </button>

          </div>

        </div>

      </div>

      {/* ==========================
          MOBILE MENU
      ========================== */}

      {mobileMenuOpen && (

        <div
          className="
            lg:hidden
            bg-white
            border-t
            border-slate-100
            shadow-xl
            max-h-[calc(100vh-80px)]
            overflow-y-auto
          "
        >

          <div className="px-4 py-4 space-y-1">

            {NAV_LINKS.map(
              (link) => {
                const children =
                  'children' in link
                    ? link.children
                    : undefined;

                const hasChildren =
                  Array.isArray(
                    children
                  ) &&
                  children.length > 0;

                const expanded =
                  openMobileMenu ===
                  link.name;

                const isActive =
                  activeSection ===
                  link.href.substring(1);

                return (
                  <div
                    key={link.name}
                  >

                    <div className="flex items-center">

                      <a
                        href={
                          link.href
                        }
                        onClick={(
                          e
                        ) => {
                          e.preventDefault();

                          handleNavClick(
                            link.href
                          );
                        }}
                        className={`
                          flex-1
                          px-3
                          py-3
                          rounded-lg
                          text-sm
                          font-semibold
                          transition-colors
                          ${
                            isActive
                              ? 'text-[#0a192f] bg-slate-100'
                              : 'text-slate-700 hover:bg-slate-50 hover:text-[#0a192f]'
                          }
                        `}
                      >
                        {
                          link.name
                        }
                      </a>

                      {hasChildren && (

                        <button
                          type="button"
                          onClick={() =>
                            setOpenMobileMenu(
                              expanded
                                ? null
                                : link.name
                            )
                          }
                          className="
                            w-10
                            h-10
                            flex
                            items-center
                            justify-center
                            text-slate-500
                          "
                          aria-label={`Buka submenu ${link.name}`}
                        >

                          <ChevronDown
                            className={`
                              w-4
                              h-4
                              transition-transform
                              ${
                                expanded
                                  ? 'rotate-180'
                                  : ''
                              }
                            `}
                          />

                        </button>

                      )}

                    </div>

                    {/* ==========================
                        MOBILE SUBMENU
                    ========================== */}

                    {hasChildren &&
                      expanded && (

                        <div
                          className="
                            ml-3
                            pl-3
                            border-l
                            border-slate-200
                            mb-2
                          "
                        >

                          {children?.map(
                            (
                              child
                            ) => (

                              <a
                                key={
                                  child.name
                                }
                                href={
                                  child.href
                                }
                                onClick={(
                                  e
                                ) => {
                                  e.preventDefault();

                                  handleNavClick(
                                    child.href
                                  );
                                }}
                                className="
                                  block
                                  px-3
                                  py-2.5
                                  text-sm
                                  text-slate-500
                                  hover:text-[#0a192f]
                                  hover:bg-slate-50
                                  rounded-lg
                                  transition-colors
                                "
                              >
                                {
                                  child.name
                                }
                              </a>

                            )
                          )}

                        </div>

                      )}

                  </div>
                );
              }
            )}

            {/* ==========================
                MOBILE CONTACT
            ========================== */}

            <div
              className="
                pt-4
                mt-3
                border-t
                border-slate-100
                grid
                grid-cols-2
                gap-2
              "
            >

              <a
                href={
                  COMPANY_INFO.whatsappUrl
                }
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  justify-center
                  py-3
                  rounded-xl
                  bg-[#25D366]
                  hover:bg-[#20ba5a]
                  text-white
                  text-xs
                  font-bold
                  transition-colors
                "
              >

                <MessageSquare className="w-4 h-4 mr-2" />

                WhatsApp

              </a>

              <a
                href={`tel:${COMPANY_INFO.phone.replace(
                  /[^0-9]/g,
                  ''
                )}`}
                className="
                  flex
                  items-center
                  justify-center
                  py-3
                  rounded-xl
                  bg-slate-100
                  hover:bg-slate-200
                  text-slate-700
                  text-xs
                  font-bold
                  transition-colors
                "
              >

                <Phone className="w-4 h-4 mr-2 text-[#0a192f]" />

                Telepon

              </a>

            </div>

          </div>

        </div>

      )}

    </header>
  );
};
