import React from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { ArrowUp, Heart, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08241b] text-white pt-16 pb-12 border-t border-[#c59b27]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white/10 p-1 border border-white/20 flex items-center justify-center shadow-sm">
                <img
                  src="/logo.png"
                  alt="Logo SMS"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">{SCHOOL_INFO.name}</h3>
                <p className="text-[11px] text-[#eab308] uppercase tracking-wider font-semibold">
                  Sekolah Mengelola Sekolah
                </p>
              </div>
            </div>

            <p className="text-xs text-emerald-100/75 leading-relaxed max-w-sm">
              Lembaga pendidikan Islam terpadu yang mendidik generasi unggul dengan kurikulum merdeka berkarakter Islami, hafalan Al-Qur'an teruji, serta wawasan sains teknologi modern.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-200/80 pt-1">
              <ShieldCheck className="w-4 h-4 text-[#eab308]" />
              <span>NPSN: {SCHOOL_INFO.npsn} · {SCHOOL_INFO.accreditation}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#eab308]">Navigasi Cepat</h4>
            <ul className="space-y-2 text-xs text-emerald-100/80">
              <li><a href="#beranda" className="hover:text-white transition-colors">Beranda</a></li>
              <li><a href="#profil" className="hover:text-white transition-colors">Profil Sekolah</a></li>
              <li><a href="#program" className="hover:text-white transition-colors">Program Pendidikan</a></li>
              <li><a href="#fasilitas" className="hover:text-white transition-colors">Fasilitas Kampus</a></li>
              <li><a href="#galeri" className="hover:text-white transition-colors">Galeri Kegiatan</a></li>
              <li><a href="#berita" className="hover:text-white transition-colors">Berita & Pengumuman</a></li>
            </ul>
          </div>

          {/* Education Programs */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#eab308]">Jenjang Sekolah</h4>
            <ul className="space-y-2 text-xs text-emerald-100/80">
              <li><a href="#program" className="hover:text-white transition-colors">KB - TK Islam</a></li>
              <li><a href="#program" className="hover:text-white transition-colors">SD Islam Terpadu</a></li>
              <li><a href="#program" className="hover:text-white transition-colors">SMP Islam</a></li>
              <li><a href="#program" className="hover:text-white transition-colors">SMA Islam Unggulan</a></li>
              <li><a href="#program" className="hover:text-white transition-colors">Program Tahfidz Al-Qur'an</a></li>
            </ul>
          </div>

          {/* Office & Secretariate */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#eab308]">Sekretariat PPDB</h4>
            <p className="text-xs text-emerald-100/80 leading-relaxed">
              {SCHOOL_INFO.address}
            </p>
            <div className="space-y-1 text-xs text-emerald-100/80 pt-1">
              <p><strong className="text-white">WhatsApp:</strong> {SCHOOL_INFO.whatsapp}</p>
              <p><strong className="text-white">Email:</strong> {SCHOOL_INFO.email}</p>
              <p><strong className="text-white">Jam Layanan:</strong> {SCHOOL_INFO.officeHours}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-200/70">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} {SCHOOL_INFO.name}. Hak Cipta Dilindungi Undang-Undang.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#profil" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <span aria-hidden="true">·</span>
            <a href="#kontak" className="hover:text-white transition-colors">Pusat Bantuan</a>
            <span aria-hidden="true">·</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Kembali ke atas"
            >
              <span>Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
