import React, { useState } from 'react';
import { FACILITIES } from '../data/schoolData';
import { Compass, School, BookOpen, Microscope, Trophy, Smile, Check, Sparkles } from 'lucide-react';

export const FacilitiesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  const categories = ['Semua', 'Akademik', 'Ibadah', 'Teknologi', 'Olahraga', 'Rekreasi'];

  const filteredFacilities = selectedCategory === 'Semua'
    ? FACILITIES
    : FACILITIES.filter(f => f.category === selectedCategory);

  const getFacilityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#c59b27]" />;
      case 'School':
        return <School className="w-6 h-6 text-[#c59b27]" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-[#c59b27]" />;
      case 'Microscope':
        return <Microscope className="w-6 h-6 text-[#c59b27]" />;
      case 'Trophy':
        return <Trophy className="w-6 h-6 text-[#c59b27]" />;
      default:
        return <Smile className="w-6 h-6 text-[#c59b27]" />;
    }
  };

  return (
    <section id="fasilitas" className="py-20 lg:py-28 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100/70 text-[#0e3d2f] text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#c59b27]" />
              <span>Sarana & Prasarana</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Fasilitas Kampus Sekolah
            </h2>
            <p className="text-base text-slate-600 mt-2 leading-relaxed">
              Mendukung kenyamanan belajar, pembiasaan ibadah harian, penguasaan teknologi sains modern, serta kebugaran raga para santri.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  selectedCategory === cat
                    ? 'bg-white text-[#0e3d2f] shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFacilities.map((fac) => (
            <div
              key={fac.id}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Header with Islamic Geometric Gradient */}
                <div className="h-44 bg-gradient-to-br from-[#0e3d2f] via-[#14532d] to-[#0a2f23] p-5 flex flex-col justify-between relative overflow-hidden text-white">
                  <div className="flex items-center justify-between z-10">
                    <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 text-emerald-100">
                      {fac.category}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                      {getFacilityIcon(fac.iconName)}
                    </div>
                  </div>

                  <div className="z-10">
                    <h3 className="text-lg font-bold text-white tracking-tight">{fac.title}</h3>
                    <span className="text-xs text-emerald-200/80">Fasilitas Standar Unggulan</span>
                  </div>

                  {/* Decorative background overlay */}
                  <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
                    <div className="w-32 h-32 rounded-full border border-white" />
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-5 space-y-4">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {fac.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Spesifikasi & Fitur:
                    </span>
                    <div className="grid grid-cols-1 gap-1.5">
                      {fac.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-[#0e3d2f] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="py-2 px-3 bg-slate-50 rounded-lg text-center text-slate-500 text-xs font-medium border border-slate-100">
                  Terbuka untuk seluruh santri aktif
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
