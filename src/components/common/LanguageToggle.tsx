import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface LanguageToggleProps {
  className?: string;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ className = '' }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language selection"
      className={`inline-flex items-center p-0.5 rounded-full border shadow-sm backdrop-blur-md select-none whitespace-nowrap shrink-0 transition-colors duration-200 bg-slate-100/90 border-slate-200 dark:bg-zinc-900/90 dark:border-zinc-700/80 ${className}`}
    >
      {/* Nút Tiếng Việt */}
      <button
        type="button"
        onClick={() => setLanguage('vi')}
        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 active:scale-95 ${
          language === 'vi'
            ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-600/30'
            : 'text-slate-600 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-zinc-200 hover:bg-slate-200/60 dark:hover:bg-zinc-800/60'
        }`}
        title="Tiếng Việt"
      >
        <span className="shrink-0 text-[11px]">🇻🇳</span>
        <span className="whitespace-nowrap font-medium text-[11px] sm:text-xs">VI</span>
      </button>

      <span className="text-slate-300 dark:text-zinc-600 px-0.5 text-xs font-light select-none shrink-0">|</span>

      {/* Nút English */}
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 active:scale-95 ${
          language === 'en'
            ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-600/30'
            : 'text-slate-600 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-zinc-200 hover:bg-slate-200/60 dark:hover:bg-zinc-800/60'
        }`}
        title="English"
      >
        <span className="shrink-0 text-[11px]">🇬🇧</span>
        <span className="whitespace-nowrap font-medium text-[11px] sm:text-xs">EN</span>
      </button>
    </div>
  );
};
