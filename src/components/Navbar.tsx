import React, { useState, useEffect } from 'react';
import { Shield, Menu, X, Phone, MessageSquare, ChevronRight, Video } from 'lucide-react';
import { COMPANY_INFO, NAV_LINKS } from '../data/companyData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scrollspy
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="header-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/90 py-2.5'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/60 py-3.5'
      }`}
    >
      {/* Top micro banner for quick info (visible on desktop) */}
      <div className="hidden lg:block border-b border-slate-100 pb-2 mb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs text-slate-500">
          <div className="flex items-center space-x-5">
            <span className="flex items-center font-medium text-slate-700">
              <span className="w-2 h-2 rounded-full bg-[#00d4ff] mr-2 animate-pulse" />
              Layanan CCTV & Surveillance System Profesional Jakarta
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-500">Jl. Kapuk Raya No.165, Cengkareng, Jakarta Barat</span>
          </div>
          <div className="flex items-center space-x-4 font-medium">
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="flex items-center text-slate-600 hover:text-[#007bff] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-[#007bff]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#beranda"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#beranda');
            }}
            className="flex items-center space-x-3 group focus:outline-none"
            id="brand-logo"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-[#0a192f] to-[#007bff] p-0.5 shadow-sm group-hover:shadow-md transition-all">
              <div className="w-full h-full bg-[#0a192f] rounded-[10px] flex items-center justify-center">
                <Video className="w-5 h-5 text-[#00d4ff] group-hover:scale-110 transition-transform" />
              </div>
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-[#25D366] border-2 border-white rounded-full" />
            </div>

            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-[#0a192f] font-sans leading-none">
                {COMPANY_INFO.name}
              </span>
              <span className="text-[10px] font-bold tracking-widest text-[#00d4ff] uppercase mt-0.5">
                {COMPANY_INFO.subName}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3 py-1.5 text-xs lg:text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-[#007bff] bg-blue-50 border border-blue-100 font-semibold'
                      : 'text-slate-600 hover:text-[#007bff] hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: WhatsApp CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              id="nav-cta-whatsapp"
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2 rounded-full text-xs lg:text-sm font-bold text-white bg-[#25D366] hover:bg-[#20ba5a] shadow-sm hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-200 active:scale-95"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              <span>Konsultasi Gratis</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#25D366] text-white text-xs font-semibold flex items-center shadow-sm"
              aria-label="WhatsApp Konsultasi"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:text-[#0a192f] hover:bg-slate-200 focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="md:hidden border-b border-slate-200 bg-white/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 animate-fadeIn shadow-lg"
        >
          <div className="text-xs font-medium text-[#007bff] px-3 py-1.5 bg-blue-50 rounded-lg border border-blue-100 flex items-center justify-between">
            <span className="font-bold">SURVEILLANCE & IT SOLUTION</span>
            <span className="text-slate-500 text-[10px]">JAKARTA</span>
          </div>

          <div className="pt-2 grid grid-cols-1 gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-[#007bff] font-semibold border border-blue-100'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-[#007bff]'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-100 space-y-2">
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center py-2.5 px-4 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white text-sm font-bold shadow-sm"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Chat WhatsApp (0812-1261-2006)
            </a>
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="w-full flex items-center justify-center py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-sm font-medium"
            >
              <Phone className="w-4 h-4 mr-2 text-[#007bff]" />
              Telepon Langsung
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

