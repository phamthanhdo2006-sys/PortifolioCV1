import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  FileCode2,
  FileJson,
  Palette,
  Layout,
  Sparkles,
  Flame,
  Server,
  Layers,
  Cpu,
  Terminal,
  Database,
  GitBranch,
  Code,
  Zap,
  PenTool,
  Send,
  Box,
  PackageCheck,
  TerminalSquare,
  CheckCircle,
  Award,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { TRANSLATIONS } from '../../data/translations';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'web' | 'backend' | 'tools'>('all');
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  const renderIcon = (iconName: string) => {
    const iconClass = "w-5 h-5 text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-500 transition-colors";
    switch (iconName) {
      case 'Code2':
        return <Code2 className={iconClass} />;
      case 'FileCode2':
        return <FileCode2 className={iconClass} />;
      case 'FileJson':
        return <FileJson className={iconClass} />;
      case 'Palette':
        return <Palette className={iconClass} />;
      case 'Layout':
        return <Layout className={iconClass} />;
      case 'Sparkles':
        return <Sparkles className={iconClass} />;
      case 'Flame':
        return <Flame className={iconClass} />;
      case 'Server':
        return <Server className={iconClass} />;
      case 'Layers':
        return <Layers className={iconClass} />;
      case 'Cpu':
        return <Cpu className={iconClass} />;
      case 'Terminal':
        return <Terminal className={iconClass} />;
      case 'Database':
        return <Database className={iconClass} />;
      case 'GitBranch':
        return <GitBranch className={iconClass} />;
      case 'Code':
        return <Code className={iconClass} />;
      case 'Zap':
        return <Zap className={iconClass} />;
      case 'PenTool':
        return <PenTool className={iconClass} />;
      case 'Send':
        return <Send className={iconClass} />;
      case 'Box':
        return <Box className={iconClass} />;
      case 'PackageCheck':
        return <PackageCheck className={iconClass} />;
      case 'TerminalSquare':
        return <TerminalSquare className={iconClass} />;
      default:
        return <Code2 className={iconClass} />;
    }
  };

  const filteredCategories = t.skills.categories.filter((_, idx) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'web' && idx === 0) return true;
    if (activeTab === 'backend' && idx === 1) return true;
    if (activeTab === 'tools' && idx === 2) return true;
    return false;
  });

  return (
    <section
      id="skills"
      className="scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-24 md:py-32 bg-[#FAFAFA] dark:bg-[#0A0A0A] relative overflow-hidden transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 mb-3 select-none">
            {t.skills.badge}
          </span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white"
          >
            {t.skills.titlePrefix}{' '}
            <span className="text-gradient-emerald">
              {t.skills.titleHighlight}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-400 max-w-2xl leading-relaxed"
          >
            {t.skills.subtitle}
          </motion.p>

          {/* Interactive Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: t.skills.filterAll },
              { id: 'web', label: t.skills.filterLanguages },
              { id: 'backend', label: t.skills.filterBackend },
              { id: 'tools', label: t.skills.filterTools },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer active:scale-95 select-none ${
                  activeTab === tab.id
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                    : 'bg-white dark:bg-zinc-900 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-zinc-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Category Cards */}
        <div className="space-y-10">
          <AnimatePresence mode="wait">
            {filteredCategories.map((cat, cIdx) => (
              <motion.div
                key={cat.categoryTitle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, delay: cIdx * 0.08 }}
                className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900/90 border border-slate-200/90 dark:border-zinc-800/80 shadow-md shadow-slate-200/40 dark:shadow-black/50"
              >
                <div className="mb-6 pb-4 border-b border-slate-100 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {cat.categoryTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 mt-1">
                      {cat.categoryDesc}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-semibold px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/20 self-start sm:self-auto">
                    {cat.skills.length} {language === 'vi' ? 'công nghệ' : 'technologies'}
                  </span>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="group p-4 rounded-2xl bg-slate-50/80 dark:bg-zinc-800/50 border border-slate-200/70 dark:border-zinc-700/50 hover:border-emerald-500/40 dark:hover:border-emerald-500/30 hover:bg-white dark:hover:bg-zinc-800 transition-all duration-200 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="p-2 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 group-hover:scale-105 transition-transform duration-200">
                            {renderIcon(skill.icon)}
                          </div>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20">
                            {skill.level}
                          </span>
                        </div>

                        <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                          {skill.name}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1 leading-relaxed">
                          {skill.experience}
                        </p>
                      </div>

                      <div className="mt-3 pt-2.5 border-t border-slate-200/60 dark:border-zinc-700/40 flex items-center gap-1.5 text-[10px] text-slate-400 dark:text-zinc-500 font-mono">
                        <CheckCircle className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                        <span>{t.skills.readyStatus}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Certifications & Learning Roadmap (Rubric Criteria 7) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-8 p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        >
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                {language === 'vi' ? 'Chứng Chỉ & Lộ Trình Chuyên Môn' : 'Certifications & Learning Roadmap'}
              </h4>
              <p className="text-xs text-slate-600 dark:text-zinc-400 mt-0.5">
                {language === 'vi'
                  ? 'Đang theo học và tích lũy chứng chỉ ngoại ngữ TOEIC cùng chứng chỉ nghiệp vụ Logistics & Chuỗi cung ứng (Giai đoạn 2025–2026).'
                  : 'Currently completing TOEIC English certification and Smart Logistics specialized credentials (2025–2026).'}
              </p>
            </div>
          </div>
          <span className="shrink-0 text-xs font-mono font-semibold px-3 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-300/60 dark:border-amber-700/60">
            {language === 'vi' ? 'Đang thực hiện (In Progress)' : 'In Progress'}
          </span>
        </motion.div>

      </div>
    </section>
  );
};
