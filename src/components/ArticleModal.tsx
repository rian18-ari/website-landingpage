import React from 'react';
import { X, Calendar, User, Clock, Share2, Check } from 'lucide-react';
import { NewsArticle } from '../data/schoolData';

interface ArticleModalProps {
  article: NewsArticle | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!article) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Header */}
        <div className="bg-[#0e3d2f] text-white p-6 relative">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#eab308] font-bold">
                {article.category}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-1 leading-snug">
                {article.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              aria-label="Tutup Berita"
              className="p-2 text-emerald-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-4 text-xs text-emerald-200/90 pt-3 border-t border-emerald-800/60">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#eab308]" />
              {article.date}
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#eab308]" />
              {article.author}
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#eab308]" />
              {article.readTime}
            </span>
          </div>
        </div>

        {/* Article Body */}
        <div className="p-6 space-y-4 max-h-[65vh] overflow-y-auto text-slate-700 text-sm leading-relaxed">
          <p className="font-semibold text-slate-900 text-base leading-relaxed border-l-2 border-[#c59b27] pl-3 py-1 bg-amber-50/40 rounded-r-lg">
            {article.summary}
          </p>

          {article.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div>
              <span className="font-semibold text-slate-900 block">Kanal Informasi Resmi</span>
              <span className="text-slate-500">Sekretariat Humas & Komunikasi SMS</span>
            </div>
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 text-slate-700 hover:text-[#0e3d2f] hover:border-[#0e3d2f] rounded-lg transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Tautan Disalin' : 'Bagikan Berita'}</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-[#0e3d2f] hover:bg-[#134e3a] rounded-lg transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
