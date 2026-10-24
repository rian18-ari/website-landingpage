import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/schoolData';
import { Sparkles, Calendar, Maximize2, Compass, BookCheck, Atom, Tent, Trophy } from 'lucide-react';

interface GallerySectionProps {
  onSelectItem: (item: GalleryItem) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onSelectItem }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('Semua');
  const [showAll, setShowAll] = useState(false);

  const filters = ['Semua', 'Kegiatan Belajar', 'Keagamaan', 'Ekstrakurikuler', 'Prestasi'];

  const filtered = selectedFilter === 'Semua'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedFilter);

  const displayedItems = showAll ? filtered : filtered.slice(0, 6);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookCheck':
        return <BookCheck className="w-5 h-5 text-[#c59b27]" />;
      case 'Atom':
        return <Atom className="w-5 h-5 text-[#c59b27]" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#c59b27]" />;
      case 'Tent':
        return <Tent className="w-5 h-5 text-[#c59b27]" />;
      case 'Trophy':
        return <Trophy className="w-5 h-5 text-[#c59b27]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#c59b27]" />;
    }
  };

  return (
    <section id="galeri" className="py-20 lg:py-28 bg-[#fafaf7] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100/70 text-[#0e3d2f] text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#c59b27]" />
              <span>Dokumentasi & Aktivitas</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Galeri Kegiatan Siswa
            </h2>
            <p className="text-base text-slate-600 mt-2 leading-relaxed">
              Momen berharga keseharian santri dalam menuntut ilmu, menempa akhlak, berolahraga, dan meraih prestasi gemilang.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-200/70 rounded-xl">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setSelectedFilter(filter)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  selectedFilter === filter
                    ? 'bg-white text-[#0e3d2f] shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectItem(item)}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                {/* Visual Graphic Tile */}
                <div className="h-52 bg-gradient-to-tr from-[#0e3d2f] via-[#14532d] to-[#1c643b] p-5 flex flex-col justify-between text-white relative overflow-hidden">
                  {/* Subtle Geometric Background */}
                  <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full border-4 border-white/10 pointer-events-none" />

                  <div className="flex items-center justify-between z-10">
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-sm border border-white/15 text-[#eab308]">
                      {item.category}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="z-10 text-center py-2">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md mx-auto flex items-center justify-center mb-2">
                      {getCategoryIcon(item.iconName)}
                    </div>
                  </div>

                  <div className="z-10 flex items-center gap-1.5 text-[11px] text-emerald-200/90">
                    <Calendar className="w-3.5 h-3.5 text-[#eab308]" />
                    <span>{item.date}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-base font-bold text-slate-900 tracking-tight group-hover:text-[#0e3d2f] transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <span className="text-xs font-semibold text-[#0e3d2f] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Lihat Dokumentasi Lengkap →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {filtered.length > 6 && (
          <div className="text-center mt-12">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-[#0e3d2f] bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-sm transition-colors"
            >
              <span>{showAll ? 'Tampilkan Lebih Sedikit' : 'Lihat Semua Kegiatan'}</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
