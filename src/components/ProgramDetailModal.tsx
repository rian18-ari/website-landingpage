import React from 'react';
import { X, Check, Clock, BookOpen, Compass, GraduationCap, Sparkles } from 'lucide-react';
import { Program } from '../data/schoolData';

interface ProgramDetailModalProps {
  program: Program | null;
  onClose: () => void;
  onOpenPPDB: (programId: string) => void;
}

export const ProgramDetailModal: React.FC<ProgramDetailModalProps> = ({
  program,
  onClose,
  onOpenPPDB
}) => {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Header */}
        <div className={`p-6 text-white bg-gradient-to-r ${program.gradient} relative overflow-hidden`}>
          <div className="absolute right-0 top-0 translate-x-4 -translate-y-4 opacity-10 pointer-events-none">
            <GraduationCap className="w-56 h-56 text-white" />
          </div>
          <div className="relative z-10 flex items-start justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#eab308] font-bold">
                {program.level}
              </span>
              <h2 className="text-2xl font-bold text-white mt-1">{program.name}</h2>
              <p className="text-xs text-emerald-100/90 mt-1">{program.ageGroup}</p>
            </div>
            <button
              onClick={onClose}
              aria-label="Tutup Detail"
              className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Deskripsi Program</h4>
            <p className="text-sm text-slate-700 leading-relaxed">{program.description}</p>
          </div>

          {/* Curriculum & Schedule */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center gap-2 text-[#0e3d2f] font-bold text-xs uppercase mb-1.5">
                <BookOpen className="w-4 h-4 text-[#c59b27]" />
                <span>Basis Kurikulum</span>
              </div>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">{program.curriculum}</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center gap-2 text-[#0e3d2f] font-bold text-xs uppercase mb-1.5">
                <Clock className="w-4 h-4 text-[#c59b27]" />
                <span>Waktu Pembelajaran</span>
              </div>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">{program.schedule}</p>
            </div>
          </div>

          {/* Key Highlights */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Fokus & Keunggulan Khusus</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {program.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-2.5 text-xs text-slate-700 bg-emerald-50/50 p-2.5 rounded-lg border border-emerald-100">
                  <Check className="w-4 h-4 text-[#0e3d2f] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Activities */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#c59b27]" />
              <span>Kegiatan & Ekstrakurikuler Pilihan</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {program.activities.map((act, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 rounded-lg border border-slate-200/70"
                >
                  {act}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Footer */}
        <div className="p-5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Tutup
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenPPDB(program.id);
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#0e3d2f] hover:bg-[#134e3a] rounded-lg transition-colors shadow-sm"
          >
            <Compass className="w-4 h-4 text-[#eab308]" />
            <span>Daftar {program.name}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
