import React from 'react';
import { ExperienceItem, EducationItem, CertificationItem } from '../types';
import { Briefcase, GraduationCap, Award, Calendar, CheckCircle2 } from 'lucide-react';

interface ExperienceSectionProps {
  experiences: ExperienceItem[];
  education: EducationItem;
  certifications: CertificationItem[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experiences,
  education,
  certifications
}) => {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Title 1: Professional Experience matching Image 5 */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              职业经历
            </h2>
            <p className="mt-2 text-sm text-purple-600 dark:text-purple-400 font-semibold tracking-wider uppercase">
              Professional Experience
            </p>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="bg-white dark:bg-slate-800 border-l-4 border-purple-600 dark:border-purple-500 rounded-r-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-200 border-y border-r border-slate-100 dark:border-slate-700/60"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-base font-semibold text-purple-600 dark:text-purple-400 mt-0.5">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700/50 px-3 py-1.5 rounded-lg w-fit">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="mt-4 space-y-2 text-sm sm:text-base text-slate-700 dark:text-slate-300">
                  {exp.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400 mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>


        {/* Section Title 2: Education & Certifications */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {certifications && certifications.length > 0 ? "教育与认证" : "教育背景"}
            </h2>
            <p className="mt-2 text-sm text-purple-600 dark:text-purple-400 font-semibold tracking-wider uppercase">
              {certifications && certifications.length > 0 ? "Education & Certifications" : "Education"}
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-10">
            
            {/* Education Block */}
            <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-700/60 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <GraduationCap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    <span>{education.degree}</span>
                  </h3>
                  <p className="text-base font-medium text-purple-600 dark:text-purple-400 mt-1">
                    {education.institution}
                  </p>
                </div>

                <div className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                  {education.year}
                </div>
              </div>

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                  核心主修课程:
                </p>
                <div className="flex flex-wrap gap-2">
                  {education.courses.map((course, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-200 text-xs font-medium rounded-full border border-slate-200/60 dark:border-slate-600"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications Block */}
            {certifications && certifications.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <Award className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <span>荣誉证书 & 资格认证</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {certifications.map((cert) => (
                    <div
                      key={cert.id}
                      className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-700/60 shadow-sm hover:border-purple-300 dark:hover:border-purple-600 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 rounded-lg shrink-0">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 dark:text-white text-base">
                            {cert.title}
                          </h4>
                          <p className="text-xs font-medium text-purple-600 dark:text-purple-400 mt-0.5">
                            {cert.issuer}
                          </p>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                            {cert.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};
