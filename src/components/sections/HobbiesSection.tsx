import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Activity,
  Tent,
  Gamepad2,
  Music,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Layers,
  LayoutGrid,
  Sliders,
  X,
  Sparkles,
} from 'lucide-react';
import { HOBBIES } from '../../data/personalData';
import { useLanguage } from '../../context/LanguageContext';
import { TRANSLATIONS } from '../../data/translations';

interface ActiveHobbyDetail {
  id: string;
  title: string;
  subtitle: string;
  story: string;
  quote: string;
  tags: string[];
  stats: { label: string; value: string }[];
  iconName: string;
  accentColor: string;
  image?: string;
  secondaryImage?: string;
}

export const HobbiesSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'carousel' | 'stack'>(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return 'carousel';
    }
    return 'grid';
  });
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [carouselDirection, setCarouselDirection] = useState<'next' | 'prev'>('next');
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);
  const [selectedHobby, setSelectedHobby] = useState<ActiveHobbyDetail | null>(null);

  // 3D Card Stack state
  const [stackIndex, setStackIndex] = useState(0);
  const [stackTouchStart, setStackTouchStart] = useState<{ x: number; y: number } | null>(null);
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 640;
    }
    return false;
  });

  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  // Screen size listener for responsive stack 3D offsets
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle ESC key and scroll lock
  useEffect(() => {
    if (!selectedHobby) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedHobby(null);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedHobby]);

  // Stack navigation handlers
  const handleNextStack = () => {
    setStackIndex((prev) => (prev + 1) % HOBBIES.length);
  };

  const handlePrevStack = () => {
    setStackIndex((prev) => (prev - 1 + HOBBIES.length) % HOBBIES.length);
  };

  const handleStackTouchStart = (e: React.TouchEvent) => {
    setStackTouchStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
  };

  const handleStackTouchEnd = (e: React.TouchEvent) => {
    if (!stackTouchStart) return;
    const diffX = stackTouchStart.x - e.changedTouches[0].clientX;
    const diffY = stackTouchStart.y - e.changedTouches[0].clientY;
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX > 0) handleNextStack();
      else handlePrevStack();
    }
    setStackTouchStart(null);
  };

  const localizedHobbies: ActiveHobbyDetail[] = HOBBIES.map((staticHobby, idx) => {
    const translated = t.hobbies.items[idx] || t.hobbies.items[0];
    return {
      id: staticHobby.id,
      title: translated.title,
      subtitle: translated.subtitle,
      story: translated.story,
      quote: translated.quote,
      tags: translated.tags,
      stats: translated.stats,
      iconName: staticHobby.iconName,
      accentColor: staticHobby.accentColor,
      image: staticHobby.image,
      secondaryImage: staticHobby.secondaryImage,
    };
  });

  const renderHobbyIcon = (iconName: string, className = "w-6 h-6") => {
    switch (iconName) {
      case 'Activity':
        return <Activity className={className} />;
      case 'Tent':
        return <Tent className={className} />;
      case 'Gamepad2':
        return <Gamepad2 className={className} />;
      case 'Music':
        return <Music className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  const handleNext = () => {
    setCarouselDirection('next');
    setCarouselIndex((prev) => (prev + 1) % localizedHobbies.length);
  };

  const handlePrev = () => {
    setCarouselDirection('prev');
    setCarouselIndex((prev) => (prev - 1 + localizedHobbies.length) % localizedHobbies.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const touchEnd = { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
    const diffX = touchStart.x - touchEnd.x;
    const diffY = touchStart.y - touchEnd.y;

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX > 0) handleNext();
      else handlePrev();
    }
    setTouchStart(null);
  };

  return (
    <section
      id="hobbies"
      className="scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-24 md:py-32 bg-[#FAFAFA] dark:bg-[#0A0A0A] relative overflow-hidden transition-colors duration-200"
    >
      {/* Background Subtle Glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 dark:bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 mb-3 select-none">
            {t.hobbies.badge}
          </span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white"
          >
            {t.hobbies.titlePrefix}{' '}
            <span className="text-gradient-emerald">
              {t.hobbies.titleHighlight}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-400 max-w-2xl leading-relaxed"
          >
            {t.hobbies.subtitle}
          </motion.p>

          {/* View Mode Switcher: Grid, Carousel, Stack */}
          <div className="mt-8 inline-flex items-center p-1 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm select-none">
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>{t.hobbies.viewGrid}</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode('carousel')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'carousel'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>{t.hobbies.viewCarousel}</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode('stack')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'stack'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{t.hobbies.viewStack}</span>
            </button>
          </div>
        </div>

        {/* 1. Grid View Mode */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {localizedHobbies.map((hobby, idx) => (
              <motion.div
                key={hobby.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="group rounded-3xl bg-white dark:bg-zinc-900/90 border border-slate-200/90 dark:border-zinc-800/80 p-6 sm:p-7 shadow-md hover:shadow-xl hover:border-emerald-500/40 dark:hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="p-3 rounded-2xl bg-slate-100 dark:bg-zinc-800 text-slate-800 dark:text-white group-hover:scale-105 transition-transform"
                      style={{ color: hobby.accentColor }}
                    >
                      {renderHobbyIcon(hobby.iconName)}
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedHobby(hobby)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:underline cursor-pointer"
                    >
                      <span>{t.hobbies.exploreDetail}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                    {hobby.title}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 mt-1 mb-3">
                    {hobby.subtitle}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-4">
                    {hobby.story}
                  </p>

                  {/* Quote block */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-zinc-800/50 border-l-4 border-emerald-500 mb-5">
                    <p className="text-xs text-slate-700 dark:text-zinc-300 font-sans leading-relaxed">
                      "{hobby.quote}"
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {hobby.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 border border-slate-200/60 dark:border-zinc-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key stats row */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-100 dark:border-zinc-800/80 text-center">
                  {hobby.stats.map((st, sIdx) => (
                    <div key={sIdx} className="p-2 sm:p-2.5 rounded-xl bg-slate-50 dark:bg-zinc-800/40 min-w-0 flex flex-col justify-center" title={st.value}>
                      <span className="block text-[10px] text-slate-400 dark:text-zinc-500 font-medium">
                        {st.label}
                      </span>
                      <span className="block text-[11px] sm:text-xs font-bold text-slate-800 dark:text-zinc-200 leading-snug break-words">
                        {st.value}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* 2. Carousel View Mode */}
        {viewMode === 'carousel' && (
          <div
            className="relative max-w-3xl mx-auto px-2"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="overflow-hidden rounded-3xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={carouselIndex}
                  initial={{ opacity: 0, x: carouselDirection === 'next' ? 60 : -60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: carouselDirection === 'next' ? -60 : 60 }}
                  transition={{ duration: 0.35 }}
                  className="rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 p-6 sm:p-8 shadow-xl"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="p-3 rounded-2xl bg-slate-100 dark:bg-zinc-800"
                      style={{ color: localizedHobbies[carouselIndex].accentColor }}
                    >
                      {renderHobbyIcon(localizedHobbies[carouselIndex].iconName, "w-7 h-7")}
                    </div>
                    <span className="text-xs font-mono text-slate-400 dark:text-zinc-500">
                      {carouselIndex + 1} / {localizedHobbies.length}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {localizedHobbies[carouselIndex].title}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 mt-1 mb-4">
                    {localizedHobbies[carouselIndex].subtitle}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-5">
                    {localizedHobbies[carouselIndex].story}
                  </p>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border-l-4 border-emerald-500 mb-6">
                    <p className="text-sm text-slate-700 dark:text-zinc-200 font-sans leading-relaxed">
                      "{localizedHobbies[carouselIndex].quote}"
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {localizedHobbies[carouselIndex].tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-zinc-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-100 dark:border-zinc-800 text-center">
                    {localizedHobbies[carouselIndex].stats.map((st, sIdx) => (
                      <div key={sIdx} className="p-2 sm:p-2.5 rounded-xl bg-slate-50 dark:bg-zinc-800/40 min-w-0 flex flex-col justify-center">
                        <span className="block text-[10px] text-slate-400 dark:text-zinc-500 font-medium">
                          {st.label}
                        </span>
                        <span className="block text-[11px] sm:text-xs font-bold text-slate-800 dark:text-zinc-200 leading-snug break-words">
                          {st.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Carousel Navigation Buttons */}
            <div className="flex items-center justify-between mt-6">
              <button
                type="button"
                onClick={handlePrev}
                className="w-11 h-11 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:text-emerald-700 dark:hover:text-white flex items-center justify-center shadow-sm active:scale-90 transition-all"
                aria-label="Previous Hobby"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {localizedHobbies.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => {
                      setCarouselDirection(dotIdx > carouselIndex ? 'next' : 'prev');
                      setCarouselIndex(dotIdx);
                    }}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      carouselIndex === dotIdx
                        ? 'w-6 bg-emerald-600'
                        : 'w-2 bg-slate-300 dark:bg-zinc-700 hover:bg-slate-400'
                    }`}
                    aria-label={`Slide ${dotIdx + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={handleNext}
                className="w-11 h-11 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:text-emerald-700 dark:hover:text-white flex items-center justify-center shadow-sm active:scale-90 transition-all"
                aria-label="Next Hobby"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* 3. Stack View Mode (3D Layer Card Stack) */}
        {viewMode === 'stack' && (
          <div className="max-w-3xl mx-auto px-1 sm:px-4">
            {/* 3D Stack Container */}
            <div
              className="relative min-h-[500px] sm:min-h-[530px] md:min-h-[510px] w-full pb-8 sm:pb-12"
              onTouchStart={handleStackTouchStart}
              onTouchEnd={handleStackTouchEnd}
            >
              {localizedHobbies.map((hobby, idx) => {
                const totalCards = localizedHobbies.length;
                const relativePos = (idx - stackIndex + totalCards) % totalCards;
                const isTop = relativePos === 0;

                // Responsive 3D Offsets: translate-x & translate-y
                const xOffset = isMobile ? relativePos * 6 : relativePos * 18;
                const yOffset = isMobile ? relativePos * 8 : relativePos * 16;
                const cardScale = isMobile
                  ? Math.max(0.91, 1 - relativePos * 0.03)
                  : Math.max(0.88, 1 - relativePos * 0.04);
                const cardOpacity = isMobile
                  ? Math.max(0.60, 1 - relativePos * 0.13)
                  : Math.max(0.48, 1 - relativePos * 0.16);
                const zIndex = (totalCards - relativePos) * 10;

                return (
                  <motion.div
                    key={hobby.id}
                    layout
                    initial={false}
                    animate={{
                      x: xOffset,
                      y: yOffset,
                      scale: cardScale,
                      opacity: cardOpacity,
                      zIndex: zIndex,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 280,
                      damping: 26,
                    }}
                    whileHover={
                      !isTop
                        ? {
                            scale: cardScale + 0.015,
                            x: xOffset + (isMobile ? 2 : 4),
                            y: yOffset + (isMobile ? 1 : 2),
                            transition: { duration: 0.2 },
                          }
                        : {}
                    }
                    onClick={() => {
                      if (!isTop) {
                        setStackIndex(idx);
                      }
                    }}
                    className={`absolute top-0 left-0 w-[calc(100%-20px)] sm:w-[calc(100%-56px)] rounded-2xl sm:rounded-3xl bg-white dark:bg-zinc-900 border p-4 sm:p-6 md:p-7 transition-colors duration-200 select-none ${
                      isTop
                        ? 'border-emerald-500/40 dark:border-emerald-500/30 shadow-xl sm:shadow-2xl shadow-slate-900/10 dark:shadow-black/70 cursor-default'
                        : 'border-slate-200/90 dark:border-zinc-800 shadow-md cursor-pointer hover:border-emerald-500/40 hover:shadow-xl'
                    }`}
                  >
                    {/* Top Bar */}
                    <div className="flex items-center justify-between mb-3 sm:mb-4 md:mb-5">
                      <div className="flex items-center gap-2 sm:gap-2.5">
                        <div
                          className="p-2 sm:p-2.5 md:p-3 rounded-xl sm:rounded-2xl bg-slate-100 dark:bg-zinc-800 shrink-0"
                          style={{ color: hobby.accentColor }}
                        >
                          {renderHobbyIcon(hobby.iconName, "w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6")}
                        </div>
                        <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-wider px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 border border-slate-200/60 dark:border-zinc-700/60">
                          {`0${idx + 1} / 0${totalCards}`}
                        </span>
                        {isTop && (
                          <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                            <Sparkles className="w-2.5 h-2.5" />
                            <span>{t.hobbies.activeCardBadge}</span>
                          </span>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedHobby(hobby);
                        }}
                        className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:underline cursor-pointer py-1 px-2 sm:px-2.5 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-colors shrink-0"
                      >
                        <span>{t.hobbies.exploreDetail}</span>
                        <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      </button>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-base sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                      {hobby.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs font-semibold text-emerald-700 dark:text-emerald-400 mt-0.5 sm:mt-1 mb-2.5 sm:mb-3 leading-snug">
                      {hobby.subtitle}
                    </p>

                    {/* Story */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-3 sm:mb-4">
                      {hobby.story}
                    </p>

                    {/* Quote block */}
                    <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-zinc-800/50 border-l-2 sm:border-l-4 border-emerald-500 mb-3 sm:mb-4">
                      <p className="text-[11px] sm:text-xs text-slate-700 dark:text-zinc-300 font-sans leading-relaxed italic">
                        "{hobby.quote}"
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-3.5 sm:mb-5">
                      {hobby.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] sm:text-[11px] font-mono px-2 sm:px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 border border-slate-200/60 dark:border-zinc-700/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Key stats row */}
                    <div className="grid grid-cols-3 gap-1.5 sm:gap-2 pt-3 sm:pt-4 border-t border-slate-100 dark:border-zinc-800/80 text-center">
                      {hobby.stats.map((st, sIdx) => (
                        <div
                          key={sIdx}
                          className="p-1.5 sm:p-2 md:p-2.5 rounded-xl bg-slate-50 dark:bg-zinc-800/40 min-w-0 flex flex-col justify-center"
                          title={st.value}
                        >
                          <span className="block text-[9px] sm:text-[10px] text-slate-400 dark:text-zinc-500 font-medium truncate">
                            {st.label}
                          </span>
                          <span className="block text-[10px] sm:text-[11px] md:text-xs font-bold text-slate-800 dark:text-zinc-200 leading-snug break-words">
                            {st.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Deck Navigation Controls */}
            <div className="flex flex-col items-center gap-2.5 sm:gap-3 mt-4 sm:mt-6">
              <div className="flex items-center justify-between w-full max-w-md px-1 sm:px-2">
                <button
                  type="button"
                  onClick={handlePrevStack}
                  className="inline-flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-[11px] sm:text-xs font-semibold text-slate-700 dark:text-zinc-300 hover:text-emerald-700 dark:hover:text-white shadow-xs active:scale-95 transition-all cursor-pointer"
                  aria-label="Previous card in deck"
                >
                  <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>{t.hobbies.prevStackCard}</span>
                </button>

                <div className="flex items-center gap-1 sm:gap-1.5">
                  {localizedHobbies.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      type="button"
                      onClick={() => setStackIndex(dotIdx)}
                      className={`h-2 sm:h-2.5 rounded-full transition-all cursor-pointer ${
                        stackIndex === dotIdx
                          ? 'w-5 sm:w-7 bg-emerald-600'
                          : 'w-2 sm:w-2.5 bg-slate-300 dark:bg-zinc-700 hover:bg-slate-400'
                      }`}
                      aria-label={`Jump to card ${dotIdx + 1}`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleNextStack}
                  className="inline-flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] sm:text-xs font-semibold shadow-xs active:scale-95 transition-all cursor-pointer"
                  aria-label="Next card in deck"
                >
                  <span>{t.hobbies.nextStackCard}</span>
                  <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
              </div>

              <p className="text-[10px] sm:text-[11px] text-slate-500 dark:text-zinc-500 text-center font-medium select-none px-2">
                {t.hobbies.stackHint}
              </p>
            </div>
          </div>
        )}

      </div>

      {/* Selected Hobby Story Modal (ESC to close, scroll locked) */}
      <AnimatePresence>
        {selectedHobby && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedHobby(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl z-10 my-auto overflow-hidden"
            >
              {/* Close button */}
              <button
                type="button"
                onClick={() => setSelectedHobby(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 text-slate-700 dark:text-zinc-300 flex items-center justify-center transition-all cursor-pointer active:scale-90"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-5">
                <div
                  className="p-3 rounded-2xl bg-slate-100 dark:bg-zinc-800"
                  style={{ color: selectedHobby.accentColor }}
                >
                  {renderHobbyIcon(selectedHobby.iconName, "w-7 h-7")}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {selectedHobby.title}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                    {selectedHobby.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed mb-5">
                {selectedHobby.story}
              </p>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border-l-4 border-emerald-500 mb-6">
                <p className="text-sm text-slate-800 dark:text-zinc-200 font-sans leading-relaxed">
                  "{selectedHobby.quote}"
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedHobby.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-zinc-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-100 dark:border-zinc-800 text-center">
                {selectedHobby.stats.map((st, sIdx) => (
                  <div key={sIdx} className="p-2 sm:p-2.5 rounded-xl bg-slate-50 dark:bg-zinc-800/40 min-w-0 flex flex-col justify-center">
                    <span className="block text-[10px] text-slate-400 dark:text-zinc-500 font-medium">
                      {st.label}
                    </span>
                    <span className="block text-[11px] sm:text-xs font-bold text-slate-800 dark:text-zinc-200 leading-snug break-words">
                      {st.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
