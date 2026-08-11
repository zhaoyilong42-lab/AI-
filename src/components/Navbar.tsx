import React from 'react';
import { ActiveTab } from '../types';
import { Sun, Moon, Download, Sparkles } from 'lucide-react';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  onOpenResume: () => void;
  userName: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  isDarkMode,
  toggleDarkMode,
  onOpenResume,
  userName
}) => {
  const navItems: { id: ActiveTab; label: string; enLabel: string }[] = [
    { id: 'home', label: '首页', enLabel: 'Home' },
    { id: 'about', label: '关于我', enLabel: 'About' },
    { id: 'experience', label: '我的经验', enLabel: 'Experience' },
    { id: 'skills', label: '我的技能', enLabel: 'Skills' },
    { id: 'projects', label: '我的作品', enLabel: 'Projects' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo / Brand Name */}
          <button 
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-2 group text-left focus:outline-none"
          >
            <div className="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold text-lg shadow-md shadow-purple-500/20 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-lg sm:text-xl font-extrabold text-purple-600 dark:text-purple-400 tracking-tight group-hover:opacity-90 transition-opacity">
                {userName}
              </span>
              <span className="hidden sm:inline-block text-xs text-slate-500 dark:text-slate-400 ml-2 font-normal">
                Portfolio
              </span>
            </div>
          </button>

          {/* Desktop Nav Tabs */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-purple-600 dark:text-purple-400 font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-purple-600 dark:bg-purple-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Download Resume Button */}
            <button
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm"
            >
              <Download className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span>下载简历</span>
            </button>

            {/* Dark Mode Switch Toggle */}
            <button
              onClick={toggleDarkMode}
              aria-label="切换深色/浅色模式"
              className="p-2 text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-sm"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Sub-Navigation Bar */}
        <div className="md:hidden flex items-center justify-around py-2 border-t border-slate-100 dark:border-slate-800 overflow-x-auto no-scrollbar">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-3 py-1.5 text-xs font-medium whitespace-nowrap rounded-md ${
                  isActive
                    ? 'text-purple-600 dark:text-purple-400 font-bold bg-purple-50 dark:bg-purple-950/40'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
