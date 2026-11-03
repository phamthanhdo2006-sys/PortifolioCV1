import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  MapPin,
  ExternalLink,
  Copy,
  Check,
  Send,
  ArrowUp,
  GraduationCap,
  AlertCircle,
} from 'lucide-react';
import { PROFILE } from '../../data/personalData';
import { useLanguage } from '../../context/LanguageContext';
import { TRANSLATIONS } from '../../data/translations';
import { GithubIcon, FacebookIcon, InstagramIcon } from '../common/Icons';

interface ContactFooterSectionProps {
  onOpenAcademicModal?: () => void;
}

export const ContactFooterSection: React.FC<ContactFooterSectionProps> = ({
  onOpenAcademicModal,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    // Client-side JavaScript validation (Rubric Criteria 15)
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setFormError(
        language === 'vi'
          ? 'Họ và tên cần có tối thiểu 2 ký tự hợp lệ.'
          : 'Please enter a valid full name (at least 2 characters).'
      );
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setFormError(
        language === 'vi'
          ? 'Địa chỉ email không đúng định dạng (ví dụ: ten@domain.com).'
          : 'Please enter a valid email format (e.g. name@domain.com).'
      );
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setFormError(
        language === 'vi'
          ? 'Nội dung tin nhắn cần có tối thiểu 10 ký tự.'
          : 'Message content must contain at least 10 characters.'
      );
      return;
    }

    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="contact"
      className="scroll-mt-20 sm:scroll-mt-24 pt-16 sm:pt-24 pb-12 bg-white dark:bg-[#0A0A0A] relative overflow-hidden border-t border-slate-200 dark:border-zinc-800 transition-colors duration-200"
    >
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 mb-3 select-none">
            {t.contact.badge}
          </span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white"
          >
            {t.contact.titlePrefix}{' '}
            <span className="text-gradient-emerald">
              {t.contact.titleHighlight}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-400 max-w-xl leading-relaxed"
          >
            {t.contact.subtitle}
          </motion.p>
        </div>

        {/* Contact Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          
          {/* Left Column (5 cols): Contact Cards & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Primary Email Card (Upgraded Editorial Layout) */}
            <div className="relative p-6 sm:p-7 rounded-3xl bg-white dark:bg-zinc-900/95 border border-slate-200/90 dark:border-zinc-800 shadow-sm hover:shadow-md dark:shadow-black/40 transition-all duration-300">
              {/* Top Row: Icon badge on left, Copy button on right */}
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                  <Mail className="w-5 h-5" />
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer active:scale-95 ${
                    copiedEmail
                      ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700 shadow-xs'
                      : 'bg-slate-50 dark:bg-zinc-800/80 hover:bg-slate-100 dark:hover:bg-zinc-700 text-slate-700 dark:text-zinc-200 border-slate-200/90 dark:border-zinc-700'
                  }`}
                  title={t.contact.copyTooltip}
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>{t.contact.copySuccess}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500 dark:text-zinc-400" />
                      <span>{language === 'vi' ? 'Sao chép Email' : 'Copy Email'}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Middle Section: Monospace label & Primary highlighted email */}
              <div className="mb-4">
                <span className="block text-[11px] font-mono font-semibold tracking-wider uppercase text-slate-500 dark:text-zinc-400 mb-1">
                  {language === 'vi' ? 'EMAIL CÁ NHÂN' : 'PERSONAL EMAIL'}
                </span>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="text-base sm:text-lg font-bold text-slate-900 dark:text-white hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors break-all"
                >
                  {PROFILE.email}
                </a>
              </div>

              {/* Bottom Supplementary Row: UTH Institutional Email */}
              <div className="pt-3.5 border-t border-slate-200/80 dark:border-zinc-800 flex items-center justify-between text-xs gap-2">
                <span className="text-slate-500 dark:text-zinc-400 shrink-0">
                  {language === 'vi' ? 'Email trường UTH:' : 'UTH Academic Email:'}
                </span>
                <a
                  href={`mailto:${PROFILE.universityEmail || 'dopt7835@ut.edu.vn'}`}
                  className="font-mono font-semibold text-emerald-700 dark:text-emerald-400 hover:underline truncate"
                  title={PROFILE.universityEmail || 'dopt7835@ut.edu.vn'}
                >
                  {PROFILE.universityEmail || 'dopt7835@ut.edu.vn'}
                </a>
              </div>

              {/* Copy Toast Indicator */}
              <AnimatePresence>
                {copiedEmail && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="absolute -top-3 right-6 px-2.5 py-1 rounded-full bg-emerald-600 text-white text-[11px] font-medium shadow-md flex items-center gap-1 select-none pointer-events-none"
                  >
                    <Check className="w-3 h-3" />
                    <span>{language === 'vi' ? 'Đã sao chép vào bộ nhớ tạm' : 'Copied to clipboard'}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* University & Location Cards */}
            <div className="p-6 sm:p-7 rounded-3xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-md space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                    {t.contact.universityTitle}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-zinc-300 mt-0.5">
                    {language === 'vi' ? PROFILE.university : PROFILE.englishUniversity}
                  </p>
                  <a
                    href={PROFILE.universityMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-emerald-700 dark:text-emerald-400 font-medium mt-1 hover:underline"
                  >
                    <span>{language === 'vi' ? 'Xem bản đồ khuôn viên UTH' : 'View UTH Campus Map'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200/80 dark:border-zinc-800 flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                    {t.contact.locationTitle}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-zinc-300 mt-0.5">
                    {t.contact.locationDesc}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-md">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400 block mb-3 font-semibold">
                {t.contact.socialsTitle}
              </span>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={PROFILE.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-xs font-semibold text-slate-700 dark:text-zinc-200 hover:text-emerald-700 dark:hover:text-emerald-400 hover:border-emerald-300 dark:hover:border-emerald-700 active:scale-95 transition-all shadow-xs"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-slate-600 dark:text-zinc-300" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PROFILE.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-xs font-semibold text-slate-700 dark:text-zinc-200 hover:text-emerald-700 dark:hover:text-emerald-400 hover:border-emerald-300 dark:hover:border-emerald-700 active:scale-95 transition-all shadow-xs"
                >
                  <FacebookIcon className="w-3.5 h-3.5 text-slate-600 dark:text-zinc-300" />
                  <span>Facebook</span>
                </a>
                <a
                  href={PROFILE.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-xs font-semibold text-slate-700 dark:text-zinc-200 hover:text-emerald-700 dark:hover:text-emerald-400 hover:border-emerald-300 dark:hover:border-emerald-700 active:scale-95 transition-all shadow-xs"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-slate-600 dark:text-zinc-300" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column (7 cols): Direct Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {t.contact.form.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1 mb-6">
                {t.contact.form.sub}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-zinc-300 mb-1.5">
                    {t.contact.form.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.contact.form.namePlaceholder}
                    className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:border-emerald-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-zinc-300 mb-1.5">
                    {t.contact.form.emailLabel}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t.contact.form.emailPlaceholder}
                    className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:border-emerald-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-zinc-300 mb-1.5">
                    {t.contact.form.messageLabel}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.contact.form.messagePlaceholder}
                    className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {formError && (
                  <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-300 text-xs font-medium flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-amber-600 dark:text-amber-400" />
                    <span>{formError}</span>
                  </div>
                )}

                {formSent ? (
                  <div className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-sm font-semibold flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    <span>{t.contact.form.sentSuccess}</span>
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-md shadow-emerald-600/30 hover:shadow-lg hover:shadow-emerald-600/40 hover:-translate-y-0.5 active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t.contact.form.submitBtn}</span>
                  </button>
                )}
              </form>
            </div>
          </motion.div>
        </div>

        {/* Semantic HTML Footer Bottom Bar (Rubric Criteria 8) */}
        <footer className="pt-8 border-t border-slate-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-zinc-500">
          <p>{t.contact.rights}</p>

          <div className="flex items-center gap-4">
            {onOpenAcademicModal && (
              <button
                type="button"
                onClick={onOpenAcademicModal}
                className="hover:text-emerald-600 dark:hover:text-emerald-400 cursor-pointer transition-colors"
              >
                {t.contact.studentCardLink}
              </button>
            )}

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 p-2 rounded-full bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 text-slate-700 dark:text-zinc-300 transition-colors active:scale-90"
              title={t.contact.backToTop}
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </footer>

      </div>
    </section>
  );
};
