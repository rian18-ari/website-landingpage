import React from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { ArrowRight, MessageCircle, Sparkles, GraduationCap } from 'lucide-react';

interface RegistrationCTAProps {
  onOpenPPDB: () => void;
}

export const RegistrationCTA: React.FC<RegistrationCTAProps> = ({ onOpenPPDB }) => {
  return (
    <section className="py-20 lg:py-24 bg-[#0e3d2f] text-white relative overflow-hidden">
      {/* Decorative Islamic Star & Rings Graphic Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="islamic-cta-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M24 0 L48 24 L24 48 L0 24 Z" fill="none" stroke="#c59b27" strokeWidth="1" />
              <polygon points="24,12 28,20 36,24 28,28 24,36 20,28 12,24 20,20" fill="#c59b27" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#islamic-cta-grid)" />
        </svg>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#c59b27]/10 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#c59b27]/50 text-emerald-100 text-xs font-semibold backdrop-blur-sm">
          <GraduationCap className="w-4 h-4 text-[#eab308]" />
          <span>Penerimaan Peserta Didik Baru (PPDB) 2027/2028</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight max-w-3xl mx-auto text-balance">
          Mulai Perjalanan Pendidikan Bersama SMS
        </h2>

        <p className="text-base sm:text-lg text-emerald-100/90 max-w-2xl mx-auto leading-relaxed">
          Kenali lingkungan belajar kami dan temukan pengalaman pendidikan yang mendukung perkembangan ilmu, karakter, serta potensi putra-putri Anda.
        </p>

        {/* Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onOpenPPDB}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-[#0e3d2f] bg-[#c59b27] hover:bg-[#d4af37] rounded-xl shadow-xl shadow-black/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Daftar Sekarang</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={SCHOOL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl backdrop-blur-sm transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Hubungi Admin WhatsApp</span>
          </a>
        </div>

        {/* Reassurance text */}
        <p className="text-xs text-emerald-200/70 pt-2 flex items-center justify-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#eab308]" />
          <span>Observasi ramah anak · Konsultasi gratis dengan psikolog & tim kurikulum</span>
        </p>
      </div>
    </section>
  );
};
