import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ShieldCheck,
} from 'lucide-react';
import { PROFILE } from '../../data/personalData';
import { useLanguage } from '../../context/LanguageContext';
import { TRANSLATIONS } from '../../data/translations';

interface SubmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SubmissionModal: React.FC<SubmissionModalProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  const displayName = language === 'vi' ? PROFILE.name : (PROFILE.englishName || 'Pham Thanh Do');

  // Handle ESC key and body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 my-auto text-slate-900 dark:text-white overflow-hidden transition-colors"
          >
            {/* Top decorative gradient bar (Emerald to Amber) */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500" />

            {/* Close button with >= 44px hit-target */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer active:scale-95"
              aria-label={t.modal.closeBtn}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3.5 mb-6 pr-10">
              <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-bold block mb-0.5">
                  {t.modal.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  {t.modal.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-zinc-400">
                  {t.modal.subtitle}
                </p>
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 mb-6">
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/60">
                <span className="text-[10px] text-slate-500 dark:text-zinc-400 block mb-0.5 font-medium">
                  {t.modal.fullName}
                </span>
                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  {displayName}
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/60">
                <span className="text-[10px] text-slate-500 dark:text-zinc-400 block mb-0.5 font-medium">
                  {t.modal.studentId}
                </span>
                <span className="text-sm font-bold font-mono text-emerald-700 dark:text-emerald-400">
                  {PROFILE.studentId}
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/60">
                <span className="text-[10px] text-slate-500 dark:text-zinc-400 block mb-0.5 font-medium">
                  {t.modal.university}
                </span>
                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  {language === 'vi' ? PROFILE.university : PROFILE.englishUniversity}
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/60">
                <span className="text-[10px] text-slate-500 dark:text-zinc-400 block mb-0.5 font-medium">
                  {t.modal.major}
                </span>
                <span className="text-sm font-bold text-emerald-800 dark:text-emerald-300">
                  {language === 'vi' ? PROFILE.major : 'IT — Smart Logistics Major'}
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/60">
                <span className="text-[10px] text-slate-500 dark:text-zinc-400 block mb-0.5 font-medium">
                  {t.modal.courseName}
                </span>
                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  {language === 'vi' ? 'Lập trình Web' : 'Web Development'}
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/60">
                <span className="text-[10px] text-slate-500 dark:text-zinc-400 block mb-0.5 font-medium">
                  {t.modal.academicYear}
                </span>
                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  {language === 'vi' ? 'Năm học 2026 – 2027 (Năm 3)' : 'Academic Term 2026 – 2027 (Year 3)'}
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/60">
                <span className="text-[10px] text-slate-500 dark:text-zinc-400 block mb-0.5 font-medium">
                  {language === 'vi' ? 'Chứng chỉ & Giải thưởng' : 'Certifications & Awards'}
                </span>
                <span className="text-xs font-semibold text-amber-700 dark:text-amber-300">
                  {language === 'vi' ? 'Đang tích lũy (TOEIC & Smart Logistics)' : 'In progress (TOEIC & SmartLog)'}
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/60">
                <span className="text-[10px] text-slate-500 dark:text-zinc-400 block mb-0.5 font-medium">
                  {language === 'vi' ? 'Sở thích & Thể thao' : 'Hobbies & Lifestyle'}
                </span>
                <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                  {language === 'vi' ? 'Cầu lông UTH, Cắm trại, Gaming' : 'Badminton, Camping, Gaming'}
                </span>
              </div>
            </div>

            {/* Verification Footer */}
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-300">
                  {t.modal.verifiedBadge}
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-500 dark:text-zinc-400">
                {language === 'vi' ? 'Xác thực sinh viên UTH' : 'UTH Student Verified'}
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return typeof document !== 'undefined'
    ? createPortal(modalContent, document.body)
    : null;
};
