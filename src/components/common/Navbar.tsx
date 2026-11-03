import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail, GraduationCap } from 'lucide-react';
import { PROFILE } from '../../data/personalData';
import { useLanguage } from '../../context/LanguageContext';
import { TRANSLATIONS } from '../../data/translations';
import { LanguageToggle } from './LanguageToggle';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  onOpenAcademicModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAcademicModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  // 4 mục menu tinh gọn, cân đối, không chiếm quá nhiều diện tích
  const navLinks = [
    {
      id: "about",
      href: "#about",
      name: language === 'vi' ? 'Giới Thiệu' : 'About',
    },
    {
      id: "skills",
      href: "#skills",
      name: language === 'vi' ? 'Kỹ Năng' : 'Skills',
    },
    {
      id: "gallery",
      href: "#gallery",
      name: language === 'vi' ? 'Khoảnh Khắc' : 'Moments',
    },
    {
      id: "hobbies",
      href: "#hobbies",
      name: language === 'vi' ? 'Sở Thích' : 'Hobbies',
    },
  ];

  // Scroll Spy chuẩn xác
  useEffect(() => {
    const updateActiveSection = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollY < 180) {
        setActiveSection('');
        return;
      }

      // Khi cuộn tới phần Contact / Footer thì bỏ active các tab trên
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        const contactTop = contactEl.offsetTop;
        if (scrollY + windowHeight * 0.4 >= contactTop) {
          setActiveSection('');
          return;
        }
      }

      const sectionIds = ['about', 'skills', 'gallery', 'hobbies'];
      const scrollPosition = scrollY + windowHeight * 0.35;
      let current = '';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = id;
            break;
          }
        }
      }

      setActiveSection(current);
    };

    updateActiveSection();

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Cuộn mượt với khoảng bù trừ chiều cao Navbar
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setActiveSection(targetId);
    setMobileMenuOpen(false);

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const displayName = language === 'vi' ? PROFILE.name : (PROFILE.englishName || 'Pham Thanh Do');

  return (
    <header className="fixed top-2 sm:top-3 md:top-4 inset-x-0 mx-auto w-full max-w-6xl px-3 sm:px-4 md:px-6 z-50 pointer-events-none box-border">
      {/* Khung bo tròn chính (Glassmorphism Capsule) */}
      <div className="pointer-events-auto w-full bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md border border-slate-200/90 dark:border-zinc-800/80 rounded-full px-3.5 sm:px-5 lg:px-6 py-2 sm:py-2.5 shadow-md shadow-slate-200/60 dark:shadow-black/50 flex items-center justify-between transition-colors duration-200 box-border">
        
        {/* 1. Nhóm bên trái: Tên kèm chấm trạng thái trực tuyến */}
        <div className="flex items-center shrink-0">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-2 whitespace-nowrap text-slate-900 dark:text-white font-semibold tracking-tight select-none"
          >
            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-emerald-600 dark:bg-emerald-500"></span>
            </span>
            <span className="font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors whitespace-nowrap text-sm sm:text-[15px]">
              {displayName}
            </span>
          </a>
        </div>

        {/* 2. Nhóm ở giữa: Các mục Menu tinh gọn (Khoảng cách & Padding tối ưu) */}
        <nav className="hidden md:flex items-center justify-center gap-1 lg:gap-1.5 text-xs lg:text-[13px] font-medium whitespace-nowrap">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`relative px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full transition-colors duration-200 whitespace-nowrap select-none ${
                  isActive
                    ? 'text-emerald-700 dark:text-emerald-400 font-semibold'
                    : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-zinc-800/50'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/25 dark:border-emerald-500/30"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}

                <span className="relative z-10 flex items-center gap-1.5">
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-pulse shrink-0" />
                  )}
                  <span>{link.name}</span>
                </span>
              </a>
            );
          })}
        </nav>

        {/* 3. Nhóm bên phải: Nút Đổi Theme, Thẻ SV, Ngôn ngữ VN/EN, Nút Liên Hệ */}
        <div className="hidden md:flex items-center gap-1.5 sm:gap-2 shrink-0 whitespace-nowrap">
          {/* Nút Đổi Theme (Sáng / Tối) */}
          <ThemeToggle />

          {/* Nút Thẻ Sinh Viên UTH */}
          {onOpenAcademicModal && (
            <button
              onClick={onOpenAcademicModal}
              type="button"
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-medium text-slate-700 dark:text-zinc-300 bg-slate-100 hover:bg-slate-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-slate-200 dark:border-zinc-700/80 hover:border-emerald-500/40 hover:text-emerald-700 dark:hover:text-white transition-all duration-200 cursor-pointer select-none active:scale-95 shrink-0"
              title={t.navbar.studentCard}
              aria-label={t.navbar.studentCard}
            >
              <GraduationCap className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span className="hidden xl:inline">{language === 'vi' ? 'Thẻ SV' : 'Student ID'}</span>
            </button>
          )}

          {/* Cụm Chuyển Đổi Ngôn Ngữ: VN | EN */}
          <LanguageToggle className="shrink-0" />

          {/* Nút "Liên Hệ" chính */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-sm shadow-emerald-600/30 hover:shadow-md hover:shadow-emerald-600/40 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 cursor-pointer select-none shrink-0"
          >
            <Mail className="w-3.5 h-3.5 shrink-0" />
            <span>{t.navbar.connect}</span>
          </a>
        </div>

        {/* Mobile (< 768px): Nút Theme + Menu Hamburger */}
        <div className="flex md:hidden items-center gap-2 shrink-0">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="w-8.5 h-8.5 rounded-full bg-slate-100 dark:bg-zinc-900 text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-zinc-800 transition-all flex items-center justify-center shrink-0 cursor-pointer active:scale-95 shadow-sm"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Menu thả xuống trên Mobile */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto md:hidden mt-2 p-4 rounded-3xl bg-white/98 dark:bg-zinc-950/98 backdrop-blur-xl border border-slate-200 dark:border-zinc-800 shadow-2xl flex flex-col gap-3"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className={`px-4 py-2.5 rounded-2xl text-sm font-medium transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-semibold'
                        : 'text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-900'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400" />}
                  </a>
                );
              })}
            </div>

            <div className="pt-2 border-t border-slate-200 dark:border-zinc-800 flex flex-col gap-2.5">
              <div className="flex items-center justify-between gap-2 px-1">
                <span className="text-xs text-slate-500 dark:text-zinc-400 font-medium">
                  {language === 'vi' ? 'Ngôn ngữ' : 'Language'}
                </span>
                <LanguageToggle />
              </div>

              {onOpenAcademicModal && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAcademicModal();
                  }}
                  type="button"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-medium text-slate-700 dark:text-zinc-300 bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 active:scale-98 transition-transform"
                >
                  <GraduationCap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>{t.navbar.studentCard}</span>
                </button>
              )}

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-600/30 active:scale-98 transition-transform"
              >
                <Mail className="w-4 h-4" />
                <span>{t.navbar.connect}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
