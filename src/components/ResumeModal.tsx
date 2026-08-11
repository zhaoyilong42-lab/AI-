import React, { useState } from 'react';
import { ProfileInfo, ExperienceItem, EducationItem, SkillGroup } from '../types';
import { X, Printer, Download, Check, Sparkles, Mail, Phone, MapPin, Globe } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileInfo;
  experiences: ExperienceItem[];
  education: EducationItem;
  skillGroups: SkillGroup[];
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  profile,
  experiences,
  education,
  skillGroups
}) => {
  if (!isOpen) return null;

  const [downloaded, setDownloaded] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 max-h-[92vh] flex flex-col my-auto">
        
        {/* Top Header Actions */}
        <div className="p-4 sm:p-6 border-b border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-600" />
            <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">个人履历 / Resume Preview</h3>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100 transition"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>打印简历</span>
            </button>

            <button
              onClick={handleDownloadPDF}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-bold text-white bg-purple-600 hover:bg-purple-700 rounded-lg shadow-sm transition"
            >
              {downloaded ? <Check className="w-4 h-4" /> : <Download className="w-4 h-4" />}
              <span>{downloaded ? '已生成 PDF 文件' : '下载 PDF 简历'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 bg-slate-100 dark:bg-slate-800 rounded-full transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document View */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-sans print:p-0">
          
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                {profile.name} <span className="text-lg font-bold text-purple-600">/ {profile.enName}</span>
              </h1>
              <p className="text-base font-semibold text-purple-600 dark:text-purple-400 mt-1">
                {profile.title}
              </p>
            </div>

            <div className="space-y-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-purple-600" />
                <span>{profile.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-purple-600" />
                <span>{profile.location}</span>
              </div>
            </div>
          </div>

          {/* Profile Summary */}
          <div>
            <h2 className="text-xs font-bold text-purple-600 uppercase tracking-widest mb-2">个人简介 / Summary</h2>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {profile.tagline} {profile.bio[0]}
            </p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-bold text-purple-600 uppercase tracking-widest mb-3">工作经历 / Professional Experience</h2>
            <div className="space-y-5">
              {experiences.map((exp) => (
                <div key={exp.id} className="border-l-2 border-purple-600 pl-4 space-y-1">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-slate-900 dark:text-white text-base">{exp.role}</h3>
                    <span className="text-xs text-slate-500">{exp.period}</span>
                  </div>
                  <p className="text-xs font-bold text-purple-600 dark:text-purple-400">{exp.company}</p>
                  <ul className="list-disc list-inside text-xs text-slate-700 dark:text-slate-300 space-y-1 pt-1">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold text-purple-600 uppercase tracking-widest mb-2">教育背景 / Education</h2>
            <div className="border-l-2 border-purple-600 pl-4">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-slate-900 dark:text-white text-sm">{education.degree}</h3>
                <span className="text-xs text-slate-500">{education.year}</span>
              </div>
              <p className="text-xs font-semibold text-purple-600">{education.institution}</p>
            </div>
          </div>

          {/* Key Skill Highlights */}
          <div>
            <h2 className="text-xs font-bold text-purple-600 uppercase tracking-widest mb-2">核心技能矩阵 / Skill Matrix</h2>
            <div className="grid grid-cols-2 gap-3">
              {skillGroups.map((sg) => (
                <div key={sg.id} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                  <span className="text-xs font-bold text-purple-600">{sg.category}</span>
                  <div className="text-xs text-slate-600 dark:text-slate-300 mt-1 flex flex-wrap gap-1">
                    {sg.skills.slice(0, 5).join(' · ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
