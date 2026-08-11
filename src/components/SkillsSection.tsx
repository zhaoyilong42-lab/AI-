import React from 'react';
import { SkillGroup } from '../types';

interface SkillsSectionProps {
  skillGroups: SkillGroup[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skillGroups }) => {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            我的技能
          </h2>
          <p className="mt-2 text-sm text-purple-600 dark:text-purple-400 font-semibold tracking-wider uppercase">
            Technical Skills & Creative Workflows
          </p>
        </div>

        {/* 4 Cards Grid matching Image 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.id}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-700/60 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Card Header with Badge */}
              <div className="flex items-center gap-3 mb-6">
                <span className="px-2.5 py-1 bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300 font-black text-xs sm:text-sm rounded-md tracking-wider">
                  {group.badge}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {group.category}
                </h3>
              </div>

              {/* Skills Grid Pill Tags matching Image 3 */}
              <div className="grid grid-cols-2 gap-3">
                {group.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-slate-100/80 dark:bg-slate-700/40 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-medium py-2.5 px-3 rounded-xl text-center border border-slate-200/50 dark:border-slate-600/50 hover:bg-purple-50 dark:hover:bg-purple-950/40 hover:text-purple-700 dark:hover:text-purple-300 hover:border-purple-300 dark:hover:border-purple-600 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
