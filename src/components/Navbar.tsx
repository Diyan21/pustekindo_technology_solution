import React, {
  useEffect,
  useMemo,
  useState
} from 'react';

import {
  ChevronDown,
  ChevronRight,
  Menu,
  MessageSquare,
  Phone,
  Search,
  X
} from 'lucide-react';

import {
  COMPANY_INFO,
  NAV_LINKS
} from '../data/companyData';


/* =====================================================
   SERVICE MENU
===================================================== */

const SERVICE_GROUPS = [
  {
    title: 'Security System',
    items: [
      'CCTV Security System',
      'Access Door',
      'Fingerprint',
      'Hotel Lock',
      'Fire Alarm'
    ]
  },
  {
    title: 'IT & Communication',
    items: [
      'Networking',
      'PABX',
      'Tata Suara',
      'Parabola'
    ]
  },
  {
    title: 'Engineering / MEP',
    items: [
      'Mechanical',
      'Electrical',
      'Plumbing'
    ]
  }
];


/* =====================================================
   SEARCH DATA
===================================================== */

const SEARCH_ITEMS = [
  ...NAV_LINKS.map((item) => ({
    name: item.name,
    href: item.href,
    type: 'Menu'
  })),

  ...SERVICE_GROUPS.flatMap((group) =>
    group.items.map((item) => ({
      name: item,
      href: '#layanan',
      type: group.title
    }))
  ),

  {
    name: 'Hikvision',
    href: '#brand-hikvision',
    type: 'CCTV'
  },
  {
    name: 'Dahua',
    href: '#brand-dahua',
    type: 'CCTV'
  },
  {
    name: 'HiLook',
    href: '#brand-hilook',
    type: 'CCTV'
  },
  {
    name: 'EZVIZ',
    href: '#brand-ezviz',
    type: 'CCTV'
  },
  {
    name: 'IMOU',
    href: '#brand-imou',
    type: 'CCTV'
  }
];


export const Navbar: React.FC = () => {

  /* =====================================================
     STATE
  ===================================================== */

  const [isScrolled, setIsScrolled] =
    useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const [openDesktopMenu, setOpenDesktopMenu] =
    useState<string | null>(null);

  const [openMobileMenu, setOpenMobileMenu] =
    useState<string | null>(null);

  const [activeSection, setActiveSection] =
    useState('beranda');

  const [searchOpen, setSearchOpen] =
    useState(false);

  const [searchQuery, setSearchQuery] =
    useState('');


  /* =====================================================
     SEARCH RESULTS
  ===================================================== */

  const searchResults = useMemo(() => {

    const query =
      searchQuery
        .trim()
        .toLowerCase();

    if (!query) {
      return [];
    }

    return SEARCH_ITEMS
      .filter((item) =>
        item.name
          .toLowerCase()
          .includes(query)
      )
      .slice(0, 8);

  }, [searchQuery]);


  /* =====================================================
     SCROLL DETECTION
  ===================================================== */

  useEffect(() => {

    const handleScroll = () => {

      setIsScrolled(
        window.scrollY > 20
      );

      const sections =
        NAV_LINKS.map(
          (link) =>
            link.href.substring(1)
        );

      const scrollPosition =
        window.scrollY + 160;

      for (
        let i = sections.length - 1;
        i >= 0;
        i--
      ) {

        const section =
          document.getElementById(
            sections[i]
          );

        if (
          section &&
          section.offsetTop <= scrollPosition
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


  /* =====================================================
     CLOSE MENU ON ESC
  ===================================================== */

  useEffect(() => {

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {

      if (event.key === 'Escape') {

        setSearchOpen(false);
        setMobileMenuOpen(false);
        setOpenDesktopMenu(null);
      }
    };

    window.addEventListener(
      'keydown',
      handleKeyDown
    );

    return () => {

      window.removeEventListener(
        'keydown',
        handleKeyDown
      );
    };

  }, []);


  /* =====================================================
     BODY SCROLL LOCK SEARCH MODAL
  ===================================================== */

  useEffect(() => {

    if (searchOpen) {

      document.body.style.overflow =
        'hidden';

    } else {

      document.body.style.overflow =
        '';
    }

    return () => {

      document.body.style.overflow =
        '';
    };

  }, [searchOpen]);


  /* =====================================================
     NORMAL NAVIGATION
  ===================================================== */

  const handleNavClick = (
    href: string
  ) => {

    setMobileMenuOpen(false);
    setOpenDesktopMenu(null);
    setOpenMobileMenu(null);

    setSearchOpen(false);
    setSearchQuery('');


    /* =========================================
       CCTV BRAND
    ========================================== */

    if (
      href.startsWith('#brand-')
    ) {

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


    /* =========================================
       NORMAL EXISTING SECTION
    ========================================== */

    const target =
      document.querySelector(
        href
      );

    if (target) {

      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      setActiveSection(
        href.replace('#', '')
      );

      return;
    }


    /* =========================================
       SECTION BELUM DIRENDER
    ========================================== */

    window.dispatchEvent(
      new CustomEvent(
        'open-extra-section',
        {
          detail: href
        }
      )
    );

    setActiveSection(
      href.replace('#', '')
    );
  };


  /* =====================================================
     SERVICE CLICK
  ===================================================== */

  const handleServiceClick = (
    serviceName: string
  ) => {

    setMobileMenuOpen(false);
    setOpenDesktopMenu(null);
    setOpenMobileMenu(null);
    setSearchOpen(false);

    window.dispatchEvent(
      new CustomEvent(
        'select-service',
        {
          detail: serviceName
        }
      )
    );

    const serviceSection =
      document.querySelector(
        '#layanan'
      );

    if (serviceSection) {

      serviceSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

    } else {

      window.dispatchEvent(
        new CustomEvent(
          'open-extra-section',
          {
            detail: '#layanan'
          }
        )
      );

      setTimeout(() => {

        document
          .querySelector(
            '#layanan'
          )
          ?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });

      }, 150);
    }

    setActiveSection(
      'layanan'
    );
  };


  /* =====================================================
     SEARCH RESULT CLICK
  ===================================================== */

  const handleSearchResult = (
    item: {
      name: string;
      href: string;
      type: string;
    }
  ) => {

    if (
      item.href === '#layanan' &&
      item.type !== 'Menu'
    ) {

      handleServiceClick(
        item.name
      );

      return;
    }

    handleNavClick(
      item.href
    );
  };


  /* =====================================================
     RENDER
  ===================================================== */

  return (
    <>

      {/* =================================================
          NAVBAR
      ================================================= */}

      <header
        id="header-nav"
        className={`
          fixed
          top-0
          left-0
          right-0
          z-50

          border-b

          transition-all
          duration-300

          ${
            isScrolled
              ? `
                  bg-white/82
                  backdrop-blur-2xl
                  border-emerald-100/80

                  shadow-[0_10px_40px_rgba(15,23,42,0.07)]
                `
              : `
                  bg-white/48
                  backdrop-blur-xl
                  border-white/40
                `
          }
        `}
      >

        {/* =============================================
            TOP GREEN ACCENT
        ============================================== */}

        <div
          className="
            h-[2px]

            bg-gradient-to-r

            from-transparent
            via-emerald-500
            to-transparent
          "
        />


        {/* =============================================
            NAV CONTAINER
        ============================================== */}

        <div
          className="
            max-w-7xl
            mx-auto

            px-4
            sm:px-6
            lg:px-8
          "
        >

          <div
            className="
              h-[74px]
              lg:h-[78px]

              flex
              items-center
              justify-between
            "
          >

            {/* =========================================
                FULL LOGO
            ========================================== */}

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

                shrink-0

                group
              "
            >

              <img
                src="/images/logo-pustekindo.png"

                alt="PUSTEKINDO Technology Solution"

                className="
                  h-[46px]
                  sm:h-[50px]
                  lg:h-[54px]

                  w-auto

                  max-w-[220px]
                  lg:max-w-[250px]

                  object-contain
                  object-left

                  transition-all
                  duration-300

                  group-hover:scale-[1.02]
                "
              />

            </a>


            {/* =========================================
                DESKTOP NAVIGATION
            ========================================== */}

            <nav
              className="
                hidden
                lg:flex

                items-center

                h-full
              "
            >

              {NAV_LINKS.map((link) => {

                const children =
                  'children' in link
                    ? link.children
                    : undefined;

                const normalChildren =
                  Array.isArray(children) &&
                  children.length > 0;

                const isService =
                  link.name === 'Layanan';

                const hasChildren =
                  normalChildren ||
                  isService;

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

                      if (hasChildren) {

                        setOpenDesktopMenu(
                          link.name
                        );
                      }
                    }}

                    onMouseLeave={() => {

                      if (hasChildren) {

                        setOpenDesktopMenu(
                          null
                        );
                      }
                    }}
                  >

                    {/* NAV ITEM */}

                    <a
                      href={link.href}

                      onClick={(e) => {

                        e.preventDefault();

                        handleNavClick(
                          link.href
                        );
                      }}

                      className={`
                        relative

                        h-full

                        px-3
                        xl:px-4

                        flex
                        items-center
                        gap-1.5

                        text-[12px]
                        xl:text-[13px]

                        font-bold

                        tracking-[0.01em]

                        transition-all
                        duration-200

                        ${
                          isActive
                            ? `
                                text-emerald-700
                              `
                            : `
                                text-slate-700
                                hover:text-emerald-700
                              `
                        }
                      `}
                    >

                      {link.name}

                      {hasChildren && (

                        <ChevronDown
                          className={`
                            w-3.5
                            h-3.5

                            transition-transform
                            duration-200

                            ${
                              openDesktopMenu ===
                              link.name
                                ? 'rotate-180'
                                : ''
                            }
                          `}
                        />

                      )}


                      {/* ACTIVE INDICATOR */}

                      {isActive && (

                        <span
                          className="
                            absolute

                            left-3
                            right-3
                            bottom-0

                            h-[2px]

                            rounded-full

                            bg-emerald-500
                          "
                        />

                      )}

                    </a>


                    {/* =================================
                        SERVICE DROPDOWN
                    ================================== */}

                    {isService &&
                      openDesktopMenu ===
                        link.name && (

                      <div
                        className="
                          absolute

                          top-[76px]
                          left-1/2
                          -translate-x-1/2

                          w-[650px]

                          rounded-2xl

                          bg-white/94
                          backdrop-blur-2xl

                          border
                          border-emerald-100/80

                          shadow-[0_25px_70px_rgba(15,23,42,0.14)]

                          p-5

                          overflow-hidden
                        "
                      >

                        {/* subtle green accent */}

                        <div
                          className="
                            absolute
                            top-0
                            left-0
                            right-0

                            h-[2px]

                            bg-gradient-to-r
                            from-transparent
                            via-emerald-500
                            to-transparent
                          "
                        />


                        <div
                          className="
                            grid
                            grid-cols-3

                            gap-5

                            relative
                            z-10
                          "
                        >

                          {SERVICE_GROUPS.map(
                            (group) => (

                              <div
                                key={
                                  group.title
                                }
                              >

                                <div
                                  className="
                                    mb-3
                                    pb-2

                                    text-[11px]

                                    uppercase

                                    tracking-[0.12em]

                                    font-extrabold

                                    text-emerald-700

                                    border-b
                                    border-emerald-100
                                  "
                                >

                                  {group.title}

                                </div>


                                <div
                                  className="
                                    space-y-1
                                  "
                                >

                                  {group.items.map(
                                    (service) => (

                                      <button
                                        key={service}

                                        type="button"

                                        onClick={() =>
                                          handleServiceClick(
                                            service
                                          )
                                        }

                                        className="
                                          w-full

                                          flex
                                          items-center
                                          justify-between

                                          px-3
                                          py-2.5

                                          rounded-lg

                                          text-left

                                          text-sm
                                          font-medium

                                          text-slate-600

                                          hover:bg-emerald-50
                                          hover:text-emerald-800

                                          transition-all
                                          duration-200
                                        "
                                      >

                                        <span>
                                          {service}
                                        </span>

                                        <ChevronRight
                                          className="
                                            w-3.5
                                            h-3.5

                                            text-slate-300
                                          "
                                        />

                                      </button>

                                    )
                                  )}

                                </div>

                              </div>

                            )
                          )}

                        </div>


                        <button
                          type="button"

                          onClick={() =>
                            handleNavClick(
                              '#layanan'
                            )
                          }

                          className="
                            mt-5

                            w-full

                            py-3

                            rounded-xl

                            bg-emerald-50

                            border
                            border-emerald-200

                            text-sm
                            font-bold

                            text-emerald-700

                            hover:bg-emerald-100

                            transition-colors
                          "
                        >

                          Lihat Semua Layanan PUSTEKINDO

                        </button>

                      </div>

                    )}


                    {/* =================================
                        NORMAL DROPDOWN
                    ================================== */}

                    {!isService &&
                      normalChildren &&
                      openDesktopMenu ===
                        link.name && (

                      <div
                        className="
                          absolute

                          top-[76px]
                          left-1/2
                          -translate-x-1/2

                          w-56

                          rounded-xl

                          bg-white/94
                          backdrop-blur-2xl

                          border
                          border-emerald-100/70

                          shadow-[0_20px_50px_rgba(15,23,42,0.12)]

                          py-2

                          overflow-hidden
                        "
                      >

                        {children?.map(
                          (child) => (

                            <a
                              key={
                                child.name
                              }

                              href={
                                child.href
                              }

                              onClick={(e) => {

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

                                hover:text-emerald-700
                                hover:bg-emerald-50

                                transition-colors
                              "
                            >

                              {child.name}

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

              })}


              {/* =========================================
                  SEARCH DESKTOP
              ========================================== */}

              <button
                type="button"

                onClick={() =>
                  setSearchOpen(true)
                }

                aria-label="Cari"

                className="
                  ml-2

                  w-10
                  h-10

                  rounded-full

                  bg-white/60
                  backdrop-blur-md

                  border
                  border-emerald-100/70

                  hover:bg-emerald-50
                  hover:border-emerald-200

                  text-slate-600
                  hover:text-emerald-700

                  flex
                  items-center
                  justify-center

                  shadow-sm

                  transition-all
                  duration-200
                "
              >

                <Search
                  className="
                    w-4
                    h-4
                  "
                />

              </button>

            </nav>


            {/* =========================================
                DESKTOP WHATSAPP
            ========================================== */}

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
                  justify-center

                  px-5
                  py-2.5

                  rounded-full

                  bg-emerald-600

                  hover:bg-emerald-700

                  text-white

                  text-xs
                  font-extrabold

                  shadow-md
                  shadow-emerald-900/10

                  hover:-translate-y-0.5

                  transition-all
                  duration-200
                "
              >

                <MessageSquare
                  className="
                    w-4
                    h-4
                    mr-2
                  "
                />

                Konsultasi

              </a>

            </div>


            {/* =========================================
                MOBILE ACTIONS
            ========================================== */}

            <div
              className="
                lg:hidden

                flex
                items-center

                gap-2
              "
            >

              {/* SEARCH */}

              <button
                type="button"

                onClick={() =>
                  setSearchOpen(true)
                }

                aria-label="Cari"

                className="
                  w-9
                  h-9

                  rounded-full

                  bg-white/65
                  backdrop-blur-md

                  border
                  border-emerald-100/70

                  text-[#102a20]

                  flex
                  items-center
                  justify-center

                  shadow-sm
                "
              >

                <Search
                  className="
                    w-4
                    h-4
                  "
                />

              </button>


              {/* WHATSAPP */}

              <a
                href={
                  COMPANY_INFO.whatsappUrl
                }

                target="_blank"

                rel="noopener noreferrer"

                aria-label="WhatsApp"

                className="
                  w-9
                  h-9

                  rounded-full

                  bg-emerald-600

                  text-white

                  flex
                  items-center
                  justify-center

                  shadow-sm
                "
              >

                <MessageSquare
                  className="
                    w-4
                    h-4
                  "
                />

              </a>


              {/* MENU */}

              <button
                type="button"

                aria-label="Menu"

                onClick={() =>
                  setMobileMenuOpen(
                    !mobileMenuOpen
                  )
                }

                className="
                  w-10
                  h-10

                  rounded-xl

                  bg-white/65
                  backdrop-blur-md

                  border
                  border-emerald-100/70

                  text-[#102a20]

                  flex
                  items-center
                  justify-center

                  shadow-sm
                "
              >

                {mobileMenuOpen ? (

                  <X
                    className="
                      w-5
                      h-5
                    "
                  />

                ) : (

                  <Menu
                    className="
                      w-5
                      h-5
                    "
                  />

                )}

              </button>

            </div>

          </div>

        </div>


        {/* =================================================
            MOBILE MENU
        ================================================= */}

        {mobileMenuOpen && (

          <div
            className="
              lg:hidden

              bg-white/94
              backdrop-blur-2xl

              border-t
              border-emerald-100/70

              shadow-xl

              max-h-[calc(100vh-80px)]

              overflow-y-auto
            "
          >

            <div
              className="
                px-4
                py-4

                space-y-1
              "
            >

              {NAV_LINKS.map(
                (link) => {

                  const children =
                    'children' in link
                      ? link.children
                      : undefined;

                  const normalChildren =
                    Array.isArray(children) &&
                    children.length > 0;

                  const isService =
                    link.name ===
                    'Layanan';

                  const hasChildren =
                    normalChildren ||
                    isService;

                  const expanded =
                    openMobileMenu ===
                    link.name;

                  const isActive =
                    activeSection ===
                    link.href.substring(1);


                  return (

                    <div
                      key={
                        link.name
                      }
                    >

                      <div
                        className="
                          flex
                          items-center
                        "
                      >

                        <a
                          href={
                            link.href
                          }

                          onClick={(e) => {

                            e.preventDefault();

                            handleNavClick(
                              link.href
                            );
                          }}

                          className={`
                            flex-1

                            px-3
                            py-3

                            rounded-xl

                            text-sm
                            font-bold

                            transition-colors

                            ${
                              isActive
                                ? `
                                    bg-emerald-50
                                    text-emerald-700
                                  `
                                : `
                                    text-slate-700
                                    hover:bg-emerald-50
                                    hover:text-emerald-700
                                  `
                            }
                          `}
                        >

                          {link.name}

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


                      {/* =================================
                          MOBILE SERVICE MENU
                      ================================== */}

                      {isService &&
                        expanded && (

                        <div
                          className="
                            mx-2
                            mb-3

                            p-3

                            rounded-xl

                            bg-emerald-50/80

                            border
                            border-emerald-100
                          "
                        >

                          {SERVICE_GROUPS.map(
                            (group) => (

                              <div
                                key={
                                  group.title
                                }

                                className="
                                  mb-4
                                  last:mb-0
                                "
                              >

                                <div
                                  className="
                                    mb-2

                                    text-[11px]

                                    uppercase

                                    tracking-wider

                                    font-extrabold

                                    text-emerald-700
                                  "
                                >

                                  {group.title}

                                </div>


                                {group.items.map(
                                  (service) => (

                                    <button
                                      key={
                                        service
                                      }

                                      type="button"

                                      onClick={() =>
                                        handleServiceClick(
                                          service
                                        )
                                      }

                                      className="
                                        w-full

                                        flex
                                        items-center
                                        justify-between

                                        px-3
                                        py-2.5

                                        mb-1

                                        rounded-lg

                                        bg-white/80

                                        border
                                        border-white

                                        text-left

                                        text-sm
                                        font-medium

                                        text-slate-600

                                        hover:text-emerald-700
                                      "
                                    >

                                      {service}

                                      <ChevronRight
                                        className="
                                          w-3.5
                                          h-3.5
                                        "
                                      />

                                    </button>

                                  )
                                )}

                              </div>

                            )
                          )}

                        </div>

                      )}


                      {/* =================================
                          MOBILE NORMAL SUBMENU
                      ================================== */}

                      {!isService &&
                        normalChildren &&
                        expanded && (

                        <div
                          className="
                            ml-3
                            pl-3

                            mb-2

                            border-l
                            border-emerald-100
                          "
                        >

                          {children?.map(
                            (child) => (

                              <a
                                key={
                                  child.name
                                }

                                href={
                                  child.href
                                }

                                onClick={(e) => {

                                  e.preventDefault();

                                  handleNavClick(
                                    child.href
                                  );
                                }}

                                className="
                                  block

                                  px-3
                                  py-2.5

                                  rounded-lg

                                  text-sm

                                  text-slate-500

                                  hover:text-emerald-700
                                  hover:bg-emerald-50
                                "
                              >

                                {child.name}

                              </a>

                            )
                          )}

                        </div>

                      )}

                    </div>

                  );

                }
              )}


              {/* =========================================
                  MOBILE CONTACT
              ========================================== */}

              <div
                className="
                  pt-4
                  mt-3

                  border-t
                  border-emerald-100

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

                    bg-emerald-600

                    text-white

                    text-xs
                    font-bold
                  "
                >

                  <MessageSquare
                    className="
                      w-4
                      h-4
                      mr-2
                    "
                  />

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

                    bg-white

                    border
                    border-emerald-100

                    text-slate-700

                    text-xs
                    font-bold
                  "
                >

                  <Phone
                    className="
                      w-4
                      h-4
                      mr-2
                    "
                  />

                  Telepon

                </a>

              </div>

            </div>

          </div>

        )}

      </header>


      {/* =================================================
          SEARCH MODAL
      ================================================= */}

      {searchOpen && (

        <div
          className="
            fixed
            inset-0

            z-[200]

            bg-[#071426]/40

            backdrop-blur-md

            flex
            items-start
            justify-center

            px-4

            pt-24
            sm:pt-32
          "

          onClick={() =>
            setSearchOpen(false)
          }
        >

          <div
            className="
              w-full
              max-w-xl

              bg-white/95

              backdrop-blur-2xl

              border
              border-emerald-100/80

              rounded-2xl

              shadow-[0_30px_90px_rgba(0,0,0,0.20)]

              overflow-hidden
            "

            onClick={(e) =>
              e.stopPropagation()
            }
          >

            {/* =========================================
                SEARCH INPUT
            ========================================== */}

            <div
              className="
                flex
                items-center

                gap-3

                px-5
                py-4

                border-b
                border-emerald-100
              "
            >

              <Search
                className="
                  w-5
                  h-5

                  text-emerald-600

                  shrink-0
                "
              />


              <input
                autoFocus

                type="text"

                value={
                  searchQuery
                }

                onChange={(e) =>
                  setSearchQuery(
                    e.target.value
                  )
                }

                placeholder="Cari CCTV, Networking, Fire Alarm..."

                className="
                  flex-1

                  bg-transparent

                  outline-none

                  text-sm
                  sm:text-base

                  font-medium

                  text-[#102a20]

                  placeholder:text-slate-400
                "
              />


              <button
                type="button"

                onClick={() =>
                  setSearchOpen(false)
                }

                className="
                  w-9
                  h-9

                  rounded-full

                  bg-slate-100

                  hover:bg-emerald-50

                  flex
                  items-center
                  justify-center
                "
              >

                <X
                  className="
                    w-4
                    h-4
                  "
                />

              </button>

            </div>


            {/* =========================================
                SEARCH RESULTS
            ========================================== */}

            <div
              className="
                max-h-[420px]

                overflow-y-auto

                p-2
              "
            >

              {!searchQuery && (

                <div
                  className="
                    px-4
                    py-8

                    text-center

                    text-sm

                    text-slate-400
                  "
                >

                  Ketik layanan atau produk yang ingin dicari.

                </div>

              )}


              {searchQuery &&
                searchResults.length === 0 && (

                <div
                  className="
                    px-4
                    py-8

                    text-center

                    text-sm

                    text-slate-400
                  "
                >

                  Tidak ada hasil ditemukan.

                </div>

              )}


              {searchResults.map(
                (item) => (

                  <button
                    key={`${item.type}-${item.name}`}

                    type="button"

                    onClick={() =>
                      handleSearchResult(
                        item
                      )
                    }

                    className="
                      w-full

                      px-4
                      py-3

                      rounded-xl

                      flex
                      items-center
                      justify-between

                      text-left

                      hover:bg-emerald-50

                      transition-colors
                    "
                  >

                    <div>

                      <div
                        className="
                          text-sm

                          font-bold

                          text-[#102a20]
                        "
                      >

                        {item.name}

                      </div>


                      <div
                        className="
                          mt-0.5

                          text-[10px]

                          uppercase

                          tracking-wider

                          font-semibold

                          text-emerald-600
                        "
                      >

                        {item.type}

                      </div>

                    </div>


                    <ChevronRight
                      className="
                        w-4
                        h-4

                        text-slate-300
                      "
                    />

                  </button>

                )
              )}

            </div>

          </div>

        </div>

      )}

    </>
  );
};
