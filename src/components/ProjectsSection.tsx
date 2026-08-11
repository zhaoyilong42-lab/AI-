import React, { useState } from 'react';
import { Project, ProjectCategory } from '../types';
import { Sparkles, Video, Film, ArrowRight, Code } from 'lucide-react';

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects
}) => {
  const [filter, setFilter] = useState<ProjectCategory>('ai-vibe');

  const filteredProjects = projects.filter((item) => item.category === filter);

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Heading */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 sm:mb-12">
          <div className="text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              我的作品
            </h2>
            <p className="mt-1 text-sm text-purple-600 dark:text-purple-400 font-semibold tracking-wider uppercase">
              Featured Projects & Portfolio
            </p>
          </div>
        </div>

        {/* Category Tabs: AI Vibe coding, AI 视频创作, 氛围感视频, Vlog 记录 */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2">
          <div className="inline-flex p-1.5 bg-slate-100 dark:bg-slate-800 rounded-2xl border border-slate-200/80 dark:border-slate-700 gap-1">
            <button
              onClick={() => setFilter('ai-vibe')}
              className={`px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all flex items-center gap-1.5 whitespace-nowrap ${
                filter === 'ai-vibe'
                  ? 'bg-purple-600 text-white shadow-sm font-semibold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Code className="w-4 h-4" />
              <span>AI Vibe coding ({projects.filter((p) => p.category === 'ai-vibe').length})</span>
            </button>

            <button
              onClick={() => setFilter('ai-video')}
              className={`px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all flex items-center gap-1.5 whitespace-nowrap ${
                filter === 'ai-video'
                  ? 'bg-purple-600 text-white shadow-sm font-semibold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>AI 视频创作 ({projects.filter((p) => p.category === 'ai-video').length})</span>
            </button>

            <button
              onClick={() => setFilter('atmosphere')}
              className={`px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all flex items-center gap-1.5 whitespace-nowrap ${
                filter === 'atmosphere'
                  ? 'bg-purple-600 text-white shadow-sm font-semibold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Film className="w-4 h-4" />
              <span>氛围感视频 ({projects.filter((p) => p.category === 'atmosphere').length})</span>
            </button>

            <button
              onClick={() => setFilter('vlog')}
              className={`px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all flex items-center gap-1.5 whitespace-nowrap ${
                filter === 'vlog'
                  ? 'bg-purple-600 text-white shadow-sm font-semibold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Video className="w-4 h-4" />
              <span>Vlog 记录 ({projects.filter((p) => p.category === 'vlog').length})</span>
            </button>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <a
              key={project.id}
              href={project.douyinUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-purple-500 transition-all duration-300 hover:shadow-lg"
            >
              <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-purple-600 transition-colors text-center">
                {project.title}
              </h3>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
