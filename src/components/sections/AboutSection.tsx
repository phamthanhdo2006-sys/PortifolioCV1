import React from 'react';
import { motion } from 'framer-motion';
import {
  Camera,
  Truck,
  Navigation,
  TrendingUp,
  Compass,
  CheckCircle2,
  BookOpen,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { TRANSLATIONS } from '../../data/translations';

const GithubIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export const AboutSection: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Camera':
        return <Camera className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Truck':
        return <Truck className="w-6 h-6 text-amber-600 dark:text-amber-400" />;
      case 'Navigation':
        return <Navigation className="w-6 h-6 text-sky-600 dark:text-sky-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-amber-600 dark:text-amber-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  return (
    <section
      id="about"
      className="scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-24 md:py-32 bg-[#FAFAFA] dark:bg-[#0A0A0A] relative overflow-hidden transition-colors duration-200"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-amber-500/10 dark:bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 mb-3 select-none">
            {t.about.badge}
          </span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white"
          >
            {t.about.titlePrefix}{' '}
            <span className="text-gradient-emerald">
              {t.about.titleHighlight}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-400 max-w-2xl leading-relaxed"
          >
            {t.about.subtitle}
          </motion.p>
        </div>

        {/* Bio Narrative Card — Editorial Times New Roman Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 sm:mb-16 p-6 sm:p-8 md:p-10 rounded-3xl bg-white dark:bg-zinc-900/80 border border-slate-200/90 dark:border-zinc-800/80 shadow-md shadow-slate-200/50 dark:shadow-2xl relative overflow-hidden"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-normal font-sans">
                {t.about.narrativeTitle}
              </h3>
              <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5 font-sans">
                {t.about.narrativeSub}
              </p>
            </div>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 text-base sm:text-lg text-slate-700 dark:text-zinc-300 leading-relaxed font-sans"
          >
            {t.about.bioCards.map((bio, bIdx) => (
              <div
                key={bIdx}
                className="space-y-3 p-5 rounded-2xl bg-slate-50/80 dark:bg-zinc-800/50 border border-slate-200/80 dark:border-zinc-700/60 flex flex-col justify-start"
              >
                <span className="text-base sm:text-lg font-bold text-emerald-800 dark:text-emerald-400 tracking-wide block font-sans">
                  {bio.title}
                </span>
                <p
                  className="text-sm sm:text-[15px] text-slate-600 dark:text-zinc-300 leading-relaxed font-normal"
                  dangerouslySetInnerHTML={{ __html: bio.content }}
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Asymmetrical Bento Grid Header */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-1.5 md:gap-4 pb-3 border-b border-slate-200 dark:border-zinc-800">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                {t.about.bentoHeader}
              </h3>
            </div>
            <span className="text-xs text-slate-500 dark:text-zinc-400 font-mono tracking-wider uppercase whitespace-nowrap">
              {t.about.bentoSub}
            </span>
          </div>

          {/* Asymmetrical Grid: 12-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
            {t.about.bentoCards.map((card, idx) => {
              const iconKey = card.id === 'card-filmlab' ? 'Camera'
                : card.id === 'card-logistics' ? 'Truck'
                : card.id === 'card-smartlog' ? 'Navigation'
                : card.id === 'card-finflow' ? 'TrendingUp'
                : 'Compass';

              // Asymmetric col span: FilmLab is 8 columns on large screens!
              const colSpanClass = card.id === 'card-filmlab'
                ? 'lg:col-span-8'
                : card.id === 'card-logistics'
                ? 'lg:col-span-4'
                : 'lg:col-span-4';

              const isFlagship = card.id === 'card-filmlab';

              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className={`group relative rounded-3xl p-6 sm:p-7 md:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${colSpanClass} ${
                    isFlagship
                      ? 'bg-gradient-to-br from-emerald-50/70 via-white to-slate-50 dark:from-emerald-950/20 dark:via-zinc-900 dark:to-zinc-900 border-2 border-emerald-500/40 dark:border-emerald-500/30 shadow-lg shadow-emerald-500/5'
                      : 'bg-white dark:bg-zinc-900/90 border border-slate-200/90 dark:border-zinc-800/80 shadow-md shadow-slate-200/40 dark:shadow-black/50 hover:border-emerald-500/40 dark:hover:border-emerald-500/30'
                  }`}
                >
                  <div>
                    {/* Top Row: Icon, Badges */}
                    <div className="flex items-center justify-between mb-5 gap-2">
                      <div className="p-3 rounded-2xl bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-300 group-hover:scale-105 transition-transform duration-300 shrink-0">
                        {getIcon(iconKey)}
                      </div>
                      <div className="flex flex-wrap items-center justify-end gap-1.5">
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-zinc-700 whitespace-nowrap">
                          {card.badge}
                        </span>
                        {card.subBadge && (
                          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30 whitespace-nowrap">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            {card.subBadge}
                          </span>
                        )}
                        {card.statusBadge && (
                          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-500/30 whitespace-nowrap">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                            {card.statusBadge}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <h4 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                      {card.title}
                    </h4>

                    {card.id === 'card-logistics' ? (
                      <a
                        href={language === 'en' ? 'https://share.google/vmWhpfG9v8k3UpwIB' : 'https://share.google/63k7uDCGoVYFTH3A3'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-300 mt-1 mb-4 inline-flex items-center gap-1 cursor-pointer"
                        title="Xem vị trí Đại học Giao Thông Vận Tải TP.HCM trên Google Maps"
                      >
                        <span>{card.subtitle}</span>
                        <ExternalLink className="w-3 h-3 text-emerald-600/70 shrink-0" />
                      </a>
                    ) : (
                      <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 mt-1 mb-4">
                        {card.subtitle}
                      </p>
                    )}

                    <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-6 font-normal">
                      {card.description}
                    </p>

                    {/* Tags & Action row */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                      {card.tags && card.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {card.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-zinc-800/80 text-slate-600 dark:text-zinc-400 border border-slate-200/60 dark:border-zinc-700/50"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {card.githubUrl && (
                        <a
                          href={card.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-800 dark:text-zinc-100 bg-white dark:bg-zinc-800 hover:bg-slate-100 dark:hover:bg-zinc-700 border border-slate-300 dark:border-zinc-700 hover:border-emerald-500/60 hover:text-emerald-700 dark:hover:text-emerald-400 active:scale-95 transition-all duration-200 shadow-sm group/btn shrink-0"
                          title="Xem mã nguồn FilmLab Connect trên GitHub"
                        >
                          <GithubIcon className="w-4 h-4 text-slate-700 dark:text-zinc-300 group-hover/btn:text-emerald-600 dark:group-hover/btn:text-emerald-400 shrink-0 transition-colors" />
                          <span>{card.githubLabel || (language === 'vi' ? 'Xem Mã Nguồn' : 'GitHub Repository')}</span>
                          <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 transition-all" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Highlights List */}
                  <div className="pt-4 border-t border-slate-200/80 dark:border-zinc-800/80 space-y-2.5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400 block mb-2 font-semibold">
                      {card.highlightsHeader}
                    </span>
                    {card.highlights.map((item, hIdx) => {
                      const colonIndex = item.indexOf(':');
                      return (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          {colonIndex !== -1 ? (
                            <span className="leading-relaxed">
                              <strong className="text-slate-900 dark:text-white font-semibold">
                                {item.slice(0, colonIndex + 1)}
                              </strong>
                              {item.slice(colonIndex + 1)}
                            </span>
                          ) : (
                            <span className="leading-relaxed">{item}</span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
