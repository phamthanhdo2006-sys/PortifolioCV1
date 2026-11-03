import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const { language } = useLanguage();

  const isDark = theme === 'dark';
  const label = isDark
    ? (language === 'vi' ? 'Chuyển sang chế độ Sáng' : 'Switch to Light Mode')
    : (language === 'vi' ? 'Chuyển sang chế độ Tối' : 'Switch to Dark Mode');

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`relative inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full border transition-all duration-200 cursor-pointer select-none active:scale-90 hover:-translate-y-0.5 shadow-sm shrink-0 ${
        isDark
          ? 'bg-zinc-900 border-zinc-700/80 text-amber-400 hover:text-amber-300 hover:border-amber-500/40 shadow-black/40'
          : 'bg-white border-slate-200 text-slate-700 hover:text-emerald-700 hover:border-emerald-500/40 shadow-slate-200/60'
      } ${className}`}
      title={label}
      aria-label={label}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -45, scale: 0.6, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 45, scale: 0.6, opacity: 0 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="flex items-center justify-center"
      >
        {isDark ? (
          <Moon className="w-4 h-4 fill-amber-400/20 stroke-amber-400" />
        ) : (
          <Sun className="w-4 h-4 fill-amber-500/30 stroke-amber-600" />
        )}
      </motion.div>
    </button>
  );
};

