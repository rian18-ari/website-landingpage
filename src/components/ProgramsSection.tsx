import React from 'react';
import { PROGRAMS, Program } from '../data/schoolData';
import { ArrowRight, BookOpen, GraduationCap, Award, Baby, Sparkles, Check } from 'lucide-react';

interface ProgramsSectionProps {
  onSelectProgram: (program: Program) => void;
  onOpenPPDB: (programId: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({
  onSelectProgram,
  onOpenPPDB
}) => {
  const getProgramIcon = (iconName: string) => {
    switch (iconName) {
      case 'Baby':
        return <Baby className="w-5 h-5" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5" />;
      default:
        return <Award className="w-5 h-5" />;
    }
  };

  return (
    <section id="program" className="py-20 lg:py-28 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100/70 text-[#0e3d2f] text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#c59b27]" />
              <span>Jenjang Berkesinambungan</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Program Pendidikan Terpadu
            </h2>
            <p className="text-base text-slate-600 mt-2 leading-relaxed">
              Kurikulum terstruktur dari usia dini hingga jenjang menengah atas, memadukan ilmu pengetahuan umum berkualitas dan pembinaan akidah yang kokoh.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => onOpenPPDB('')}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#0e3d2f] hover:bg-[#134e3a] rounded-lg transition-colors shadow-sm"
            >
              <span>Alur & Panduan Pendaftaran</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#eab308]" />
            </button>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAMS.map((prog) => (
            <div
              key={prog.id}
              className="flex flex-col justify-between bg-white rounded-2xl border border-slate-200/90 hover:border-[#0e3d2f]/40 hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div>
                {/* Header Banner */}
                <div className={`p-5 bg-gradient-to-br ${prog.gradient} text-white relative overflow-hidden`}>
                  <div className="flex items-center justify-between mb-3 relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-[#eab308]">
                      {getProgramIcon(prog.iconName)}
                    </div>
                    <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-black/25 backdrop-blur-sm text-emerald-100 border border-white/10">
                      {prog.ageGroup}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight relative z-10 group-hover:text-[#eab308] transition-colors">
                    {prog.name}
                  </h3>
                  <p className="text-xs text-emerald-100/80 mt-0.5 relative z-10">{prog.level}</p>
                </div>

                {/* Body Content */}
                <div className="p-5 space-y-4">
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {prog.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Target & Unggulan:
                    </span>
                    {prog.highlights.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-[#0e3d2f] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-5 pt-0 mt-2 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => onSelectProgram(prog)}
                  className="flex-1 py-2 px-3 text-xs font-semibold text-slate-700 hover:text-[#0e3d2f] bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors text-center"
                >
                  Pelajari Selengkapnya
                </button>
                <button
                  type="button"
                  onClick={() => onOpenPPDB(prog.id)}
                  aria-label={`Daftar ${prog.name}`}
                  className="py-2 px-3 text-xs font-bold text-white bg-[#0e3d2f] hover:bg-[#134e3a] rounded-lg transition-colors"
                >
                  Daftar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
