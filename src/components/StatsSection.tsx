import React from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { Users, GraduationCap, Calendar, Award } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Users className="w-5 h-5 text-[#c59b27]" />;
      case 1:
        return <Award className="w-5 h-5 text-[#c59b27]" />;
      case 2:
        return <GraduationCap className="w-5 h-5 text-[#c59b27]" />;
      default:
        return <Calendar className="w-5 h-5 text-[#c59b27]" />;
    }
  };

  return (
    <section className="relative z-20 -mt-8 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl shadow-slate-900/5 border border-slate-200/90 p-6 sm:p-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {SCHOOL_INFO.stats.map((stat, idx) => (
            <div key={idx} className={`flex flex-col justify-between ${idx > 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''}`}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                  {getIcon(idx)}
                </div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</span>
              </div>
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#0e3d2f] tracking-tight tabular-nums">
                    {stat.value}
                  </span>
                  <span className="text-xs font-medium text-slate-600">{stat.unit}</span>
                </div>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
