import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Tooltip Dialog */}
      {showTooltip && (
        <div className="bg-white rounded-xl shadow-xl border border-slate-200/90 p-3 max-w-xs text-xs text-slate-700 animate-fade-in relative flex items-start gap-2.5">
          <div className="w-2 h-2 rounded-full bg-[#25D366] shrink-0 mt-1" />
          <div>
            <p className="font-bold text-slate-900 leading-snug">Ada Pertanyaan seputar PPDB?</p>
            <p className="text-slate-500 text-[11px] mt-0.5 leading-relaxed">
              Konsultasikan via WhatsApp dengan Panitia Pendaftaran kami.
            </p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Tutup petunjuk"
            className="text-slate-400 hover:text-slate-600 p-0.5 -mr-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Button */}
      <a
        href={SCHOOL_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi Admin WhatsApp SMS"
        className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
};
