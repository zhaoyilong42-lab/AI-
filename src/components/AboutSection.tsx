import React from 'react';
import { ProfileInfo } from '../types';
import { ChevronRight, Sparkles, UserCheck } from 'lucide-react';

interface AboutSectionProps {
  profile: ProfileInfo;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile }) => {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            关于我
          </h2>
          <p className="mt-2 text-sm text-purple-600 dark:text-purple-400 font-semibold tracking-wider uppercase">
            About Me
          </p>
        </div>

        {/* Content Layout */}
        <div className="max-w-4xl mx-auto space-y-6 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
          {profile.bio.map((paragraph, idx) => (
            <p key={idx} className="bg-slate-50/50 dark:bg-slate-800/30 p-6 rounded-2xl border border-slate-100 dark:border-slate-800/80 whitespace-pre-line shadow-sm">
              {paragraph}
            </p>
          ))}
        </div>

      </div>
    </section>
  );
};
