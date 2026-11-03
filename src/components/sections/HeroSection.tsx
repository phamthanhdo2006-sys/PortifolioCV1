import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, MapPin, ExternalLink, Image as ImageIcon, ShieldCheck, Truck } from 'lucide-react';
import { PROFILE } from '../../data/personalData';
import { useLanguage } from '../../context/LanguageContext';
import { TRANSLATIONS } from '../../data/translations';

interface HeroSectionProps {
  onOpenAcademicModal?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAcademicModal }) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];
  const [activePhoto, setActivePhoto] = useState<'avatar' | 'coastal'>('avatar');

  const displayName = language === 'vi' ? PROFILE.name : (PROFILE.englishName || 'Pham Thanh Do');
  const currentPhotoUrl = activePhoto === 'avatar' ? PROFILE.avatarUrl : (PROFILE.secondaryAvatarUrl || PROFILE.avatarUrl);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen w-full flex items-center justify-center pt-24 sm:pt-28 lg:pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#FAFAFA] dark:bg-[#0A0A0A] transition-colors duration-200"
    >
      {/* Background Subtle Gradient & Grid Pattern */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-emerald-500/10 dark:bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-2/3 right-10 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-amber-500/10 dark:bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Editorial Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
        
        {/* Left Column (7 cols): Editorial Typography, Mission, and CTAs */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-xs text-slate-700 dark:text-zinc-300 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-medium">{t.hero.statusBadge}</span>
          </motion.div>

          {/* Catchy Editorial Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-2.5"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              <span className="block font-medium text-slate-600 dark:text-zinc-400 text-2xl sm:text-3xl md:text-4xl mb-1">
                {t.hero.greeting}
              </span>
              <span className="text-gradient-emerald">
                {displayName}
              </span>
            </h1>
            <p className="text-lg sm:text-xl font-semibold text-emerald-800 dark:text-emerald-400 pt-1 flex items-center justify-center lg:justify-start gap-2">
              <Truck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>{t.hero.role}</span>
            </p>
          </motion.div>

          {/* Subtitle / Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 max-w-2xl leading-relaxed"
          >
            {t.hero.tagline}
          </motion.p>

          {/* Location & University Chips with Map Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-xs text-slate-600 dark:text-zinc-400 pt-1 w-full"
          >
            <a
              href={PROFILE.universityMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-zinc-900/80 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 border border-slate-200 dark:border-zinc-800 hover:border-emerald-500/40 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
              title="Đại học Giao Thông Vận Tải TP.HCM"
            >
              <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>{language === 'vi' ? PROFILE.university : PROFILE.englishUniversity}</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            <a
              href={PROFILE.locationMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-zinc-900/80 hover:bg-slate-200/80 dark:hover:bg-zinc-800 border border-slate-200 dark:border-zinc-800 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
              <span>{language === 'vi' ? PROFILE.location : PROFILE.englishLocation}</span>
            </a>

            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
              <span>{language === 'vi' ? 'Quê quán: Đồng Tháp' : 'Hometown: Dong Thap'}</span>
            </span>
          </motion.div>

          {/* Action CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2 w-full"
          >
            {/* Primary CTA (Emerald) */}
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-sm shadow-emerald-600/30 hover:shadow-md hover:shadow-emerald-600/40 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <span>{t.hero.exploreProjects}</span>
              <ArrowDownRight className="w-4 h-4" />
            </a>

            {/* Secondary CTA: Go to Gallery */}
            <a
              href="#gallery"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-slate-700 dark:text-zinc-200 bg-white dark:bg-zinc-900 hover:bg-slate-50 dark:hover:bg-zinc-800 border border-slate-200 dark:border-zinc-700/80 hover:border-emerald-500/40 hover:text-emerald-700 dark:hover:text-white hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 cursor-pointer shadow-sm"
            >
              <ImageIcon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>{t.hero.exploreGallery}</span>
            </a>

            {/* Academic Modal Trigger */}
            {onOpenAcademicModal && (
              <button
                onClick={onOpenAcademicModal}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-full text-xs font-medium text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800/60 active:scale-[0.98] transition-all cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>{t.hero.studentCard}</span>
              </button>
            )}
          </motion.div>
        </div>

        {/* Right Column (5 cols): Asymmetrical Student ID & Portrait Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="w-full max-w-md relative">
            {/* Ambient Shadow glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/15 via-teal-500/10 to-amber-500/15 rounded-3xl blur-2xl -z-10" />

            {/* Editorial Card Surface */}
            <div className="rounded-3xl bg-white dark:bg-zinc-900/90 border border-slate-200/90 dark:border-zinc-800/80 p-5 sm:p-6 shadow-xl shadow-slate-200/50 dark:shadow-black/60 relative overflow-hidden transition-all duration-300">
              
              {/* Card Header: Official ID Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-zinc-800/80 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-emerald-700 dark:text-emerald-400">
                    {t.hero.profileCard.tag}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-400 dark:text-zinc-500">
                  UTH • 2026
                </span>
              </div>

              {/* Multi-Photo Switcher Bar */}
              <div className="flex items-center justify-between mb-3 text-xs">
                <span className="text-slate-500 dark:text-zinc-400 font-medium">
                  {language === 'vi' ? 'Chế độ xem ảnh:' : 'Photo perspective:'}
                </span>
                <div className="inline-flex p-0.5 rounded-full bg-slate-100 dark:bg-zinc-800 text-[11px] font-medium">
                  <button
                    type="button"
                    onClick={() => setActivePhoto('avatar')}
                    className={`px-2.5 py-0.5 rounded-full transition-all cursor-pointer ${
                      activePhoto === 'avatar'
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900'
                    }`}
                  >
                    {language === 'vi' ? 'Thành Phố' : 'City Night'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setActivePhoto('coastal')}
                    className={`px-2.5 py-0.5 rounded-full transition-all cursor-pointer ${
                      activePhoto === 'coastal'
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900'
                    }`}
                  >
                    {language === 'vi' ? 'Bờ Biển' : 'Coastal'}
                  </button>
                </div>
              </div>

              {/* Main Portrait Frame with Film Grain Effect */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 dark:bg-zinc-800 border border-slate-200/80 dark:border-zinc-700/60 shadow-inner group">
                <img
                  src={currentPhotoUrl}
                  alt={displayName}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {/* Subtle Film Grain Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Badge Overlay */}
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
                  <div>
                    <h3 className="font-bold text-base tracking-tight leading-tight drop-shadow-md">
                      {displayName}
                    </h3>
                    <p className="text-[11px] text-emerald-300 font-medium drop-shadow-sm">
                      {t.hero.profileCard.majorInfo}
                    </p>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white/90">
                    ID: 087206007835
                  </span>
                </div>
              </div>

              {/* Compact Key Stats Bento Bar */}
              <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-slate-100 dark:border-zinc-800/80 text-center">
                <div className="p-2 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-100 dark:border-zinc-800">
                  <span className="block text-xs font-bold text-slate-900 dark:text-white">
                    {t.hero.profileCard.stat1Val}
                  </span>
                  <span className="block text-[10px] text-slate-500 dark:text-zinc-400">
                    {t.hero.profileCard.stat1Label}
                  </span>
                </div>

                <div className="p-2 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-100 dark:border-zinc-800">
                  <span className="block text-xs font-bold text-emerald-700 dark:text-emerald-400 font-mono">
                    UTH
                  </span>
                  <span className="block text-[10px] text-slate-500 dark:text-zinc-400">
                    Logistics
                  </span>
                </div>

                <div className="p-2 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-100 dark:border-zinc-800">
                  <span className="block text-xs font-bold text-amber-700 dark:text-amber-400 font-mono">
                    2+ Apps
                  </span>
                  <span className="block text-[10px] text-slate-500 dark:text-zinc-400">
                    {language === 'vi' ? 'Thực chiến' : 'Projects'}
                  </span>
                </div>
              </div>

              {/* Hashtags Footer */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 mt-3 text-[10px] font-mono text-slate-500 dark:text-zinc-500">
                {t.hero.profileCard.hashtags.map((tag, idx) => (
                  <span key={idx} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
