import React, { useState } from 'react';
import { ABOUT_CONTENT, SCHOOL_INFO } from '../data/schoolData';
import { BookOpen, Compass, HeartHandshake, History, Quote, Sparkles, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'visi-misi' | 'sejarah' | 'sambutan' | 'nilai'>('visi-misi');

  return (
    <section id="profil" className="py-20 lg:py-28 bg-[#fafaf7] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100/70 text-[#0e3d2f] text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#c59b27]" />
            <span>Profil Institusi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Mengenal SMS
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            {ABOUT_CONTENT.overview}
          </p>
        </div>

        {/* Tab Navigation Controls (Interactive Filter Controls as per guidelines) */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-200/70 rounded-xl mb-8 max-w-2xl">
          <button
            onClick={() => setActiveTab('visi-misi')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-2 ${
              activeTab === 'visi-misi'
                ? 'bg-white text-[#0e3d2f] shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Compass className="w-3.5 h-3.5 text-[#c59b27]" />
            <span>Visi & Misi</span>
          </button>

          <button
            onClick={() => setActiveTab('sejarah')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-2 ${
              activeTab === 'sejarah'
                ? 'bg-white text-[#0e3d2f] shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <History className="w-3.5 h-3.5 text-[#c59b27]" />
            <span>Sejarah Singkat</span>
          </button>

          <button
            onClick={() => setActiveTab('sambutan')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-2 ${
              activeTab === 'sambutan'
                ? 'bg-white text-[#0e3d2f] shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Quote className="w-3.5 h-3.5 text-[#c59b27]" />
            <span>Sambutan Kepala Sekolah</span>
          </button>

          <button
            onClick={() => setActiveTab('nilai')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-2 ${
              activeTab === 'nilai'
                ? 'bg-white text-[#0e3d2f] shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <HeartHandshake className="w-3.5 h-3.5 text-[#c59b27]" />
            <span>Nilai Karakter</span>
          </button>
        </div>

        {/* Tab Content Display & Interactive Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Info Card */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
            {activeTab === 'visi-misi' && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#c59b27] flex items-center gap-1.5 mb-2">
                    <Compass className="w-4 h-4" />
                    <span>Visi Sekolah</span>
                  </h3>
                  <blockquote className="text-base sm:text-lg font-semibold text-[#0e3d2f] bg-emerald-50/60 p-4 rounded-xl border border-emerald-100 leading-relaxed">
                    "{ABOUT_CONTENT.vision}"
                  </blockquote>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#0e3d2f] flex items-center gap-1.5 mb-3">
                    <BookOpen className="w-4 h-4 text-[#c59b27]" />
                    <span>Misi Pendidikan</span>
                  </h3>
                  <ul className="space-y-3">
                    {ABOUT_CONTENT.missions.map((misi, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#0e3d2f] shrink-0 mt-0.5" />
                        <span>{misi}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'sejarah' && (
              <div className="space-y-4 animate-fade-in text-sm text-slate-700 leading-relaxed">
                <div className="flex items-center gap-2 text-xs font-bold text-[#c59b27] uppercase tracking-wider">
                  <History className="w-4 h-4" />
                  <span>Jejak Langkah Pengabdian (1998 - Sekarang)</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Perjalanan Tumbuh Bersama Umat</h3>
                <p>{ABOUT_CONTENT.history}</p>

                <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-slate-100">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                    <span className="text-xs text-slate-500 block">Tahun Pendirian</span>
                    <span className="text-base font-bold text-[#0e3d2f]">{SCHOOL_INFO.foundationYear}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                    <span className="text-xs text-slate-500 block">Luas Kawasan Kampus</span>
                    <span className="text-base font-bold text-[#0e3d2f]">1.8 Hektar</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                    <span className="text-xs text-slate-500 block">Status Akreditasi</span>
                    <span className="text-base font-bold text-[#0e3d2f]">Peringkat A</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'sambutan' && (
              <div className="space-y-5 animate-fade-in">
                <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#0e3d2f] text-white flex items-center justify-center font-bold text-xl shrink-0 shadow-sm border border-[#c59b27]/40">
                    AF
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">{ABOUT_CONTENT.principal.name}</h3>
                    <p className="text-xs text-[#0e3d2f] font-semibold">{ABOUT_CONTENT.principal.title}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">{ABOUT_CONTENT.principal.credentials}</p>
                  </div>
                </div>

                <div className="relative pl-6 italic text-slate-700 text-sm leading-relaxed border-l-2 border-[#c59b27]">
                  <Quote className="w-5 h-5 text-[#c59b27] absolute -top-1 left-0 -translate-x-1/2 bg-white" />
                  <p>"{ABOUT_CONTENT.principal.quote}"</p>
                </div>

                <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-100 text-xs text-slate-700 flex items-center justify-between">
                  <span>Pintu silaturahim senantiasa terbuka untuk seluruh calon wali santri.</span>
                  <a
                    href="#kontak"
                    className="font-semibold text-[#0e3d2f] hover:underline"
                  >
                    Konsultasi Tatap Muka →
                  </a>
                </div>
              </div>
            )}

            {activeTab === 'nilai' && (
              <div className="space-y-4 animate-fade-in">
                <div className="flex items-center gap-2 text-xs font-bold text-[#c59b27] uppercase tracking-wider mb-2">
                  <HeartHandshake className="w-4 h-4" />
                  <span>Karakteristik & Budaya Santri (Sifat Rasulullah SAW)</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {ABOUT_CONTENT.coreValues.map((val, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                      <h4 className="text-sm font-bold text-[#0e3d2f] mb-1">{val.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Side Visual Card: School Environment & Culture */}
          <div className="lg:col-span-4 bg-gradient-to-br from-[#0e3d2f] to-[#08291e] rounded-2xl p-6 text-white shadow-lg relative overflow-hidden border border-[#c59b27]/30">
            <div className="space-y-4 relative z-10">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#eab308] font-semibold">
                Harmoni Lingkungan
              </span>
              <h3 className="text-xl font-bold text-white tracking-tight leading-snug">
                Pendidikan Holistik Berbasis Tauhid
              </h3>
              <p className="text-xs text-emerald-100/80 leading-relaxed">
                Setiap sudut kampus dirancang untuk memancarkan aura ketenangan, kedisiplinan beribadah, dan dorongan eksplorasi ilmu pengetahuan.
              </p>

              <div className="space-y-2.5 pt-2 border-t border-white/10 text-xs">
                <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                  <span className="text-emerald-200/80">Budaya Senyum & Adab</span>
                  <span className="font-semibold text-white">5S (Senyum, Sapa, Salam, Sopan, Santun)</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                  <span className="text-emerald-200/80">Rutinitas Ibadah</span>
                  <span className="font-semibold text-white">Dhuha & Zhuhur Berjamaah</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-emerald-200/80">Pendampingan Santri</span>
                  <span className="font-semibold text-[#eab308]">Wali Kelas & Guru Al-Qur'an</span>
                </div>
              </div>

              {/* Decorative Geometric Ornament */}
              <div className="pt-2">
                <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#c59b27] flex items-center justify-center text-[#0e3d2f] shrink-0 font-bold text-xs">
                    ★
                  </div>
                  <div className="text-[11px] text-emerald-100">
                    <span className="font-semibold text-white block">Standar Mutu JSIT & Kemendikbud</span>
                    <span>Pendidikan Terpadu Unggulan</span>
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
