import React from 'react';
import { TESTIMONIALS } from '../data/schoolData';
import { Quote, Sparkles, Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100/70 text-[#0e3d2f] text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#c59b27]" />
            <span>Suara Komunitas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Amanah & Kesan Orang Tua Santri
          </h2>
          <p className="text-base text-slate-600 mt-2 leading-relaxed">
            Pengalaman nyata keluarga besar SMS dalam menyaksikan perkembangan akhlak, hafalan Al-Qur'an, dan prestasi ananda.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-[#fafaf7] rounded-2xl p-6 sm:p-8 border border-slate-200/90 flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden"
            >
              {/* Subtle quote watermark */}
              <Quote className="absolute top-4 right-4 w-12 h-12 text-[#c59b27]/10 pointer-events-none" />

              <div>
                {/* 5 Stars Rating indicator */}
                <div className="flex items-center gap-1 mb-4 text-[#eab308]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="text-xs font-bold text-slate-700 ml-2">Ulasan Berkelanjutan</span>
                </div>

                <blockquote className="text-sm sm:text-base text-slate-700 leading-relaxed italic relative z-10">
                  "{item.quote}"
                </blockquote>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/70 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#0e3d2f] text-[#eab308] font-bold text-sm flex items-center justify-center shrink-0 shadow-sm border border-[#c59b27]/30">
                  {item.avatarText}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                  <p className="text-xs text-slate-500">{item.relation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
