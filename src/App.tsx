import React, { useState, useEffect } from 'react';
import { ActiveTab, Project } from './types';
import { initialProfile, experiences, education, certifications, skillGroups, projects as initialProjects } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { loadUserProjects } from './utils/storage';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [projectsList, setProjectsList] = useState<Project[]>(initialProjects);

  // Load custom saved projects from IndexedDB on initial mount
  useEffect(() => {
    loadUserProjects().then((savedProjects) => {
      const hasSaved = localStorage.getItem('portfolio_projects_saved');
      if (hasSaved === 'true') {
        // 如果用户之前保存过（包括删除），则完全使用本地保存的列表
        setProjectsList(savedProjects || []);
      } else if (savedProjects && savedProjects.length > 0) {
        // 兼容旧逻辑：如果没有标记，但有数据，则合并
        setProjectsList((prev) => {
          const initialMap = new Map(prev.map((p) => [p.id, p]));
          savedProjects.forEach((sp) => {
            initialMap.set(sp.id, sp);
          });
          return Array.from(initialMap.values());
        });
        localStorage.setItem('portfolio_projects_saved', 'true');
      }
    });
  }, []);

  // Sync dark class on html root element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('portfolio_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('portfolio_theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Scroll to top when tab changes
  const handleTabChange = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300 selection:bg-purple-500 selection:text-white">
      
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        userName={initialProfile.name}
      />

      {/* Main Content Area based on selected Tab */}
      <main className="min-h-[calc(100vh-200px)]">
        {activeTab === 'home' && (
          <div key="tab-home" className="animate-fadeIn">
            <HeroSection
              profile={initialProfile}
              setActiveTab={handleTabChange}
            />
            <AboutSection profile={initialProfile} />
            <ExperienceSection
              experiences={experiences}
              education={education}
              certifications={certifications}
            />
            <SkillsSection skillGroups={skillGroups} />
            <ProjectsSection
              projects={projectsList}
            />
            <ContactSection profile={initialProfile} />
          </div>
        )}

        {activeTab === 'about' && (
          <div key="tab-about" className="animate-fadeIn py-6">
            <AboutSection profile={initialProfile} />
            <ContactSection profile={initialProfile} />
          </div>
        )}

        {activeTab === 'experience' && (
          <div key="tab-experience" className="animate-fadeIn py-6">
            <ExperienceSection
              experiences={experiences}
              education={education}
              certifications={certifications}
            />
          </div>
        )}

        {activeTab === 'skills' && (
          <div key="tab-skills" className="animate-fadeIn py-6">
            <SkillsSection skillGroups={skillGroups} />
          </div>
        )}

        {activeTab === 'projects' && (
          <div key="tab-projects" className="animate-fadeIn py-6">
            <ProjectsSection
              projects={projectsList}
            />
          </div>
        )}
      </main>

    </div>
  );
}
