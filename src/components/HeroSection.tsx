import React from 'react';
import { ProfileInfo, ActiveTab } from '../types';
import { ArrowDown, Mail, Github, Download, Sparkles, ExternalLink, PlayCircle, Eye } from 'lucide-react';

interface HeroSectionProps {
  profile: ProfileInfo;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  profile,
  setActiveTab,
  onOpenResume
}) => {
  return (
    <section className="relative py-12 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 dark:bg-purple-950/50 border border-purple-200/60 dark:border-purple-800/60 text-purple-700 dark:text-purple-300 text-xs sm:text-sm font-medium">
              <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400 animate-pulse" />
              <span>{profile.title}</span>
            </div>

            {/* Main Name Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
              {profile.name}
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-600 dark:text-purple-400 mt-2">
                {profile.enName}
              </span>
            </h1>

            {/* Tagline / Intro Description */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-2xl">
              {profile.tagline}
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => setActiveTab('projects')}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium text-sm sm:text-base rounded-lg shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all flex items-center gap-2 active:scale-98"
              >
                <Eye className="w-4 h-4" />
                <span>查看作品</span>
              </button>

              <button
                onClick={() => {
                  const contactSection = document.getElementById('contact-section');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    setActiveTab('about');
                    setTimeout(() => {
                      document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }
                }}
                className="px-5 py-3 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 font-medium text-sm sm:text-base border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/80 transition-all shadow-sm"
              >
                联系我
              </button>

              <button
                onClick={onOpenResume}
                className="px-4 py-3 bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-medium text-sm sm:text-base rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-all flex items-center gap-1.5"
              >
                <Download className="w-4 h-4" />
                <span>预览简历</span>
              </button>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-4 pt-4 text-slate-500 dark:text-slate-400">
              {profile.socials.bilibili && (
                <a
                  href={profile.socials.bilibili}
                  target="_blank"
                  rel="noreferrer"
                  title="Bilibili 哔哩哔哩"
                  className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-all"
                >
                  <PlayCircle className="w-5 h-5" />
                </a>
              )}
              {profile.socials.github && (
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub Profile"
                  className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
              {profile.socials.email && (
                <a
                  href={profile.socials.email}
                  title="Email Contact"
                  className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-all"
                >
                  <Mail className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Right Column - Circular Profile Image Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Outer decorative ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 opacity-30 group-hover:opacity-60 blur-md transition duration-500"></div>
              
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl bg-slate-100 dark:bg-slate-800">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-16 sm:mt-20 flex justify-center">
          <button
            onClick={() => setActiveTab('about')}
            className="p-2 text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors animate-bounce"
            aria-label="向下滚动"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>

      </div>
    </section>
  );
};
