import React from 'react';
import { NEWS_ARTICLES, NewsArticle } from '../data/schoolData';
import { Calendar, Clock, ArrowRight, Sparkles, Newspaper } from 'lucide-react';

interface NewsSectionProps {
  onSelectArticle: (article: NewsArticle) => void;
}

export const NewsSection: React.FC<NewsSectionProps> = ({ onSelectArticle }) => {
  return (
    <section id="berita" className="py-20 lg:py-28 bg-[#fafaf7] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100/70 text-[#0e3d2f] text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#c59b27]" />
              <span>Kabar Sekolah Terkini</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Berita, Prestasi & Pengumuman
            </h2>
            <p className="text-base text-slate-600 mt-2 leading-relaxed">
              Informasi akademik resmi, catatan prestasi santri, agenda kegiatan penting, serta artikel edukasi Islam.
            </p>
          </div>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {NEWS_ARTICLES.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Header Graphic */}
                <div className="h-44 bg-gradient-to-tr from-[#0e3d2f] to-[#14532d] p-5 flex flex-col justify-between text-white relative overflow-hidden">
                  <div className="flex items-center justify-between z-10">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-black/35 backdrop-blur-sm border border-white/10 text-[#eab308]">
                      {article.category}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <Newspaper className="w-4 h-4 text-emerald-200" />
                    </div>
                  </div>

                  {/* Clean unboxed metadata with typographic separators */}
                  <div className="z-10 flex items-center gap-2 text-xs text-emerald-200/90">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#eab308]" />
                      {article.date}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#eab308]" />
                      {article.readTime}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-base font-bold text-slate-900 tracking-tight leading-snug group-hover:text-[#0e3d2f] transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  type="button"
                  onClick={() => onSelectArticle(article)}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-[#0e3d2f] bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors"
                >
                  <span>Baca Selengkapnya</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
