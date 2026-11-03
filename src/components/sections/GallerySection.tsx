import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Calendar,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Camera,
} from 'lucide-react';
import type { GalleryItem } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { TRANSLATIONS } from '../../data/translations';

export const GallerySection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];
  const galleryItems = t.gallery.items;

  // Keep selected photo in sync when language toggles
  useEffect(() => {
    if (selectedPhoto) {
      const updated = galleryItems.find((item) => item.id === selectedPhoto.id);
      if (updated) setSelectedPhoto(updated);
    }
  }, [language, galleryItems]);

  // Handle ESC key and scroll lock for Lightbox
  useEffect(() => {
    if (!selectedPhoto) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPhoto(null);
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedPhoto, galleryItems]);

  const handleNext = () => {
    if (!selectedPhoto) return;
    const currentIndex = galleryItems.findIndex((item) => item.id === selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    setSelectedPhoto(galleryItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedPhoto) return;
    const currentIndex = galleryItems.findIndex((item) => item.id === selectedPhoto.id);
    const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setSelectedPhoto(galleryItems[prevIndex]);
  };

  // Filter items
  const filteredPhotos = galleryItems.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.categoryKey === activeFilter;
  });

  return (
    <section
      id="gallery"
      className="scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-24 md:py-32 bg-[#FAFAFA] dark:bg-[#0A0A0A] relative overflow-hidden transition-colors duration-200"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/10 dark:bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-500/30 mb-3 select-none flex items-center gap-1.5">
            <Camera className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>{t.gallery.badge}</span>
          </span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white"
          >
            {t.gallery.titlePrefix}{' '}
            <span className="text-gradient-amber">
              {t.gallery.titleHighlight}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-400 max-w-3xl leading-relaxed"
          >
            {t.gallery.subtitle}
          </motion.p>

          {/* Filter Pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: t.gallery.filterAll },
              { id: 'portrait', label: language === 'vi' ? 'Chân Dung' : 'Portraits' },
              { id: 'expedition', label: language === 'vi' ? 'Khám Phá' : 'Expeditions' },
              { id: 'friendship', label: language === 'vi' ? 'Tình Bạn' : 'Friendship' },
              { id: 'pride', label: language === 'vi' ? 'Hào Khí 30/4' : 'National Pride' },
              { id: 'heritage', label: language === 'vi' ? 'Hồn Quê' : 'Heritage' },
            ].map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveFilter(f.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer active:scale-95 select-none ${
                  activeFilter === f.id
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'bg-white dark:bg-zinc-900 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-zinc-800'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <span className="mt-3 text-xs text-slate-500 dark:text-zinc-500 font-mono italic">
            {t.gallery.hint}
          </span>
        </div>

        {/* Bento Collage / Masonry Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {filteredPhotos.map((photo, idx) => {
            // Asymmetrical heights and spans
            const isTall = idx === 0 || idx === 2 || idx === 5;
            const isWide = idx === 4 || idx === 6;

            return (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                onClick={() => setSelectedPhoto(photo)}
                className={`group relative rounded-3xl overflow-hidden bg-slate-100 dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer ${
                  isWide ? 'sm:col-span-2' : ''
                } ${isTall ? 'sm:row-span-2' : ''}`}
              >
                {/* Image Container with Film Grain & Hover Zoom */}
                <div className={`relative w-full overflow-hidden ${isTall ? 'aspect-[3/4] sm:aspect-[3/5]' : isWide ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 group-hover:rotate-[0.5deg] transition-all duration-500"
                    loading="lazy"
                  />

                  {/* Film Grain Texture Filter */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                  {/* Corner Expand Button */}
                  <div className="absolute top-3.5 right-3.5 p-2 rounded-full bg-black/50 backdrop-blur-md text-white/80 group-hover:text-white group-hover:scale-110 transition-all opacity-0 group-hover:opacity-100">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Top Category Badge */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white">
                      {photo.tag}
                    </span>
                  </div>

                  {/* Bottom Metadata & Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white flex flex-col justify-end">
                    <div className="flex items-center gap-3 text-[11px] text-white/80 mb-1.5 font-medium">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
                        <span className="truncate max-w-[140px] sm:max-w-[180px]">{photo.location}</span>
                      </span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span>{photo.date}</span>
                      </span>
                    </div>

                    <h3 className="font-bold text-base sm:text-lg tracking-tight leading-snug group-hover:text-amber-300 transition-colors">
                      {photo.title}
                    </h3>

                    <p className="text-xs text-white/80 mt-1 line-clamp-2 leading-relaxed font-light">
                      {photo.story}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-hidden">
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPhoto(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-xl"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-4xl max-h-[92vh] bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col my-auto"
            >
              {/* Close Button (ESC) */}
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-black/70 hover:bg-black text-white/80 hover:text-white flex items-center justify-center transition-all cursor-pointer active:scale-90"
                aria-label={t.gallery.closeLightbox}
                title={t.gallery.closeLightbox}
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev / Next Buttons */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all active:scale-90"
                aria-label={language === 'vi' ? 'Ảnh trước đó' : 'Previous photo'}
                title={language === 'vi' ? 'Ảnh trước đó' : 'Previous photo'}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all active:scale-90"
                aria-label={language === 'vi' ? 'Ảnh kế tiếp' : 'Next photo'}
                title={language === 'vi' ? 'Ảnh kế tiếp' : 'Next photo'}
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image Container */}
              <div className="relative w-full bg-black flex items-center justify-center max-h-[60vh] sm:max-h-[68vh] overflow-hidden">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="max-h-[60vh] sm:max-h-[68vh] w-auto object-contain mx-auto"
                />
              </div>

              {/* Caption Footer */}
              <div className="p-5 sm:p-6 bg-zinc-900 border-t border-zinc-800 text-white">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 text-xs text-zinc-400">
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-300 font-semibold border border-amber-500/25">
                      {selectedPhoto.tag}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      <span>{selectedPhoto.location}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{selectedPhoto.date}</span>
                    </span>
                  </div>

                  <span className="text-xs font-mono text-zinc-500">
                    {language === 'vi' ? 'Phạm Thành Đô Archives' : 'Pham Thanh Do Archives'}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
                  {selectedPhoto.title}
                </h3>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  {selectedPhoto.story}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
