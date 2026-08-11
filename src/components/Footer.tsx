import React from 'react';
import { ActiveTab, ProfileInfo } from '../types';
import { Sparkles } from 'lucide-react';

interface FooterProps {
  profile: ProfileInfo;
  setActiveTab: (tab: ActiveTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ profile, setActiveTab }) => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800 transition-colors duration-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-purple-600 text-white flex items-center justify-center font-bold text-sm">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="font-extrabold text-purple-600 dark:text-purple-400 text-lg">
              {profile.name}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              · 个人作品集极简网站
            </span>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-600 dark:text-slate-400 font-medium">
            <button onClick={() => setActiveTab('home')} className="hover:text-purple-600 dark:hover:text-purple-400">首页</button>
            <button onClick={() => setActiveTab('about')} className="hover:text-purple-600 dark:hover:text-purple-400">关于我</button>
            <button onClick={() => setActiveTab('experience')} className="hover:text-purple-600 dark:hover:text-purple-400">我的经验</button>
            <button onClick={() => setActiveTab('skills')} className="hover:text-purple-600 dark:hover:text-purple-400">我的技能</button>
            <button onClick={() => setActiveTab('projects')} className="hover:text-purple-600 dark:hover:text-purple-400">我的作品</button>
          </div>

          <div className="text-xs text-slate-400 dark:text-slate-500 flex items-center gap-1">
            <span>© {new Date().getFullYear()} {profile.name}. Made with Minimalist Design.</span>
          </div>

        </div>
      </div>
    </footer>
  );
};
