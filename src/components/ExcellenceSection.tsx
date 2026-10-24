import React from 'react';
import { ADVANTAGES } from '../data/schoolData';
import { HeartHandshake, ShieldCheck, Users, Cpu, Sparkles, Smile } from 'lucide-react';

export const ExcellenceSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#c59b27]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#c59b27]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#c59b27]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#c59b27]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#c59b27]" />;
      case 'Smile':
        return <Smile className="w-5 h-5 text-[#c59b27]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#c59b27]" />;
    }
  };

  return (
    <section id="keunggulan" className="py-20 lg:py-28 bg-[#fafaf7] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100/70 text-[#0e3d2f] text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#c59b27]" />
            <span>Mengapa Memilih Kami</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Keunggulan SMS
          </h2>
          <p className="text-base text-slate-600 mt-2 leading-relaxed">
            Dedikasi kami dalam mengasah potensi nalar, adab, dan spiritual setiap siswa melalui ekosistem pendidikan yang menyeluruh.
          </p>
        </div>

        {/* 6 Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADVANTAGES.map((adv, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-[#0e3d2f]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100/60 flex items-center justify-center mb-4">
                  {getIcon(adv.iconName)}
                </div>
                <h3 className="text-base font-bold text-slate-900 tracking-tight mb-2">
                  {adv.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {adv.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                <span>Nilai Utama SMS</span>
                <span className="font-mono text-[#0e3d2f]">0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
