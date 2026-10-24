import React from 'react';
import { X, Calendar, Compass, ShieldCheck } from 'lucide-react';
import { GalleryItem } from '../data/schoolData';

interface GalleryModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Visual Preview Container */}
        <div className="relative h-64 sm:h-72 bg-gradient-to-br from-[#0e3d2f] via-[#14532d] to-[#06241b] flex flex-col items-center justify-center p-8 text-center text-white overflow-hidden">
          {/* Subtle Islamic geometric star watermark */}
          <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
            <svg className="w-96 h-96" viewBox="0 0 100 100">
              <polygon points="50,5 61,35 95,35 68,57 79,91 50,70 21,91 32,57 5,35 39,35" fill="currentColor" />
            </svg>
          </div>

          <div className="relative z-10 max-w-lg space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-[#eab308] text-xs font-semibold backdrop-blur-md border border-white/20">
              <Compass className="w-3.5 h-3.5" />
              <span>{item.category}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
              {item.title}
            </h3>
            <div className="flex items-center justify-center gap-2 text-xs text-emerald-200/90">
              <Calendar className="w-3.5 h-3.5 text-[#eab308]" />
              <span>{item.date}</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" /> Dokumentasi Resmi Sekolah
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Tutup Pratinjau"
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white hover:bg-white/20 rounded-lg transition-colors z-20"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Caption & Description */}
        <div className="p-6 space-y-4 bg-white">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Keterangan Kegiatan</h4>
            <p className="text-sm text-slate-700 leading-relaxed">{item.description}</p>
          </div>

          <div className="p-3.5 bg-emerald-50/60 rounded-xl border border-emerald-100 flex items-center justify-between text-xs text-slate-600">
            <span>Arsip Dokumentasi & Publikasi Media Siswa</span>
            <span className="font-semibold text-[#0e3d2f]">SMS</span>
          </div>

          <div className="flex justify-end pt-2">
            <button
              onClick={onClose}
              className="px-5 py-2 text-xs font-semibold text-white bg-[#0e3d2f] hover:bg-[#134e3a] rounded-lg transition-colors"
            >
              Tutup Pratinjau
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
