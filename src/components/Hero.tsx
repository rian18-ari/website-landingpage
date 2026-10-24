import React from 'react';
import { ArrowRight, Compass, ShieldCheck, Sparkles, BookOpen, Award, CheckCircle2 } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface HeroProps {
  onOpenPPDB: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPPDB }) => {
  return (
    <section id="beranda" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#0e3d2f] text-white">
      {/* Background Decorative Islamic Geometry & Glow */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="islamic-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M20 0 L40 20 L20 40 L0 20 Z" fill="none" stroke="#c59b27" strokeWidth="0.75" />
              <circle cx="20" cy="20" r="4" fill="none" stroke="#ffffff" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#islamic-grid)" />
        </svg>
      </div>

      <div className="absolute top-1/4 -right-24 w-96 h-96 rounded-full bg-[#c59b27]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-emerald-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Proposition & Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Islamic Bismillah & Greeting Kicker */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#c59b27]/40 text-emerald-100 text-xs font-medium backdrop-blur-sm">
              <span className="font-arabic text-sm text-[#eab308]">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</span>
              <span className="text-[#c59b27]">·</span>
              <span>Penerimaan Siswa Baru T.A. 2027/2028</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white tracking-tight leading-[1.18] text-balance">
              Membangun Generasi <span className="text-[#eab308] underline decoration-[#c59b27]/40 underline-offset-8">Berilmu</span>, Berakhlak, dan Berprestasi
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-emerald-100/90 max-w-2xl leading-relaxed">
              {SCHOOL_INFO.subheadline}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                type="button"
                onClick={onOpenPPDB}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-[#0e3d2f] bg-[#c59b27] hover:bg-[#d4af37] rounded-xl shadow-lg shadow-black/20 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Pendaftaran Siswa Baru</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#profil"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl backdrop-blur-sm transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c59b27]"
              >
                <span>Kenali Sekolah Kami</span>
                <Compass className="w-4 h-4 text-[#eab308]" />
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 border-t border-white/15 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-emerald-100/80">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#eab308]" />
                <span className="font-medium text-white">{SCHOOL_INFO.accreditation}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#eab308]" />
                <span>Kurikulum Nasional & Diniyah</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#eab308]" />
                <span>Tahfidz Bersanad & Karakter</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Focal Carrier with Islamic Arch Styling */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative Islamic arch glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#c59b27]/30 to-emerald-400/20 rounded-[2.5rem] blur-xl opacity-70" />

              {/* Main Card with Islamic Dome Arch Silhouette */}
              <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-b from-white/10 to-white/5 border border-white/20 p-4 shadow-2xl backdrop-blur-md">
                {/* Visual Architectural Campus Graphic Canvas */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-[#14532d] via-[#0f3e2e] to-[#06241b] flex flex-col justify-between p-6 border border-white/15">
                  {/* Top Header inside graphic */}
                  <div className="flex items-center justify-between z-10">
                    <div className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-[11px] font-semibold text-[#eab308] border border-[#c59b27]/30 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Kampus Ramah & Asri</span>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center text-white">
                      <BookOpen className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Brand Emblem & Presentation */}
                  <div className="my-auto text-center py-4 relative z-10 flex flex-col items-center">
                    <div className="w-24 h-32 sm:w-28 sm:h-36 mx-auto mb-3 flex items-center justify-center p-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:scale-105 transition-transform duration-300">
                      <img
                        src="/logo.png"
                        alt="Logo SMS - Sekolah Mengelola Sekolah"
                        className="w-full h-full object-contain drop-shadow-md"
                      />
                    </div>
                    <h3 className="text-white font-bold text-lg tracking-tight">{SCHOOL_INFO.name}</h3>
                    <p className="text-[#eab308] text-xs font-semibold mt-0.5">Sekolah Mengelola Sekolah</p>
                  </div>

                  {/* Bottom Stats Badge inside graphic */}
                  <div className="grid grid-cols-2 gap-2 z-10 pt-2 border-t border-white/15 text-left">
                    <div className="bg-black/30 rounded-lg p-2 backdrop-blur-sm">
                      <span className="text-[10px] text-emerald-200/70 block">Jenjang Pendidikan</span>
                      <span className="text-xs font-bold text-white">KB-TK, SD, SMP, SMA</span>
                    </div>
                    <div className="bg-black/30 rounded-lg p-2 backdrop-blur-sm">
                      <span className="text-[10px] text-emerald-200/70 block">Fasilitas Kampus</span>
                      <span className="text-xs font-bold text-[#eab308]">Lengkap & Terintegrasi</span>
                    </div>
                  </div>
                </div>

                {/* Floating Notification Card */}
                <div className="mt-3 bg-white text-slate-800 p-3.5 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 text-[#0e3d2f] flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-[#0e3d2f]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 leading-tight">Terakreditasi A (Unggul)</h4>
                    <p className="text-[11px] text-slate-500 leading-tight mt-0.5">Badan Akreditasi Nasional Sekolah/Madrasah (BAN-S/M)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
