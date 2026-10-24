import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenPPDB: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPPDB }) => {
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

      // Active section spy
      const sections = ['beranda', 'profil', 'program', 'keunggulan', 'fasilitas', 'galeri', 'berita', 'kontak'];
      const scrollPos = window.scrollY + 100;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#beranda', id: 'beranda', label: 'Beranda' },
    { href: '#profil', id: 'profil', label: 'Profil Sekolah' },
    { href: '#program', id: 'program', label: 'Program Pendidikan' },
    { href: '#fasilitas', id: 'fasilitas', label: 'Fasilitas' },
    { href: '#galeri', id: 'galeri', label: 'Galeri' },
    { href: '#berita', id: 'berita', label: 'Berita' },
    { href: '#kontak', id: 'kontak', label: 'Kontak' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3.5'
          : 'bg-[#0e3d2f]/90 backdrop-blur-sm border-b border-white/10 py-4 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#beranda"
            className="flex items-center gap-3 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c59b27] rounded-lg"
          >
            <div className={`h-10 w-10 sm:h-11 sm:w-11 rounded-xl p-0.5 flex items-center justify-center transition-all shadow-sm ${
              isScrolled ? 'bg-slate-100 border border-slate-200' : 'bg-white/10 backdrop-blur-md border border-white/20'
            }`}>
              <img
                src="/logo.png"
                alt="Logo SMS"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex flex-col">
              <span className={`text-base sm:text-lg font-bold tracking-tight whitespace-nowrap leading-tight ${
                isScrolled ? 'text-[#0e3d2f]' : 'text-white'
              }`}>
                SMS
              </span>
              <span className={`text-[10px] tracking-wider uppercase font-semibold ${
                isScrolled ? 'text-[#c59b27]' : 'text-[#eab308]'
              }`}>
                Sekolah Mengelola Sekolah
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`whitespace-nowrap transition-colors relative py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#c59b27] rounded ${
                    isScrolled
                      ? isActive
                        ? 'text-[#0e3d2f] font-semibold'
                        : 'text-slate-600 hover:text-[#0e3d2f]'
                      : isActive
                        ? 'text-[#eab308] font-semibold'
                        : 'text-emerald-100 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                      isScrolled ? 'bg-[#0e3d2f]' : 'bg-[#eab308]'
                    }`} />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Single Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenPPDB}
              className={`hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 whitespace-nowrap ${
                isScrolled
                  ? 'bg-[#0e3d2f] hover:bg-[#134e3a] text-white focus-visible:ring-[#0e3d2f]'
                  : 'bg-[#c59b27] hover:bg-[#d4af37] text-[#0e3d2f] font-bold focus-visible:ring-[#c59b27]'
              }`}
            >
              <span>Daftar Sekarang</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
              className={`lg:hidden p-2 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 ${
                isScrolled
                  ? 'text-slate-700 hover:bg-slate-100 focus-visible:ring-[#0e3d2f]'
                  : 'text-white hover:bg-white/10 focus-visible:ring-[#c59b27]'
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white text-slate-800 border-b border-slate-200 px-4 pt-3 pb-5 shadow-xl animate-fade-in">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-emerald-50 text-[#0e3d2f] font-bold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPPDB();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold text-white bg-[#0e3d2f] hover:bg-[#134e3a] rounded-lg shadow-sm transition-colors"
              >
                <span>Pendaftaran Siswa Baru (PPDB)</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
