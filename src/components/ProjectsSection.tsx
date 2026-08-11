import React, { useState } from 'react';
import { Project, ProjectCategory } from '../types';
import { Sparkles, Video, Play, Film, ArrowRight, Image as ImageIcon, Code, PlusCircle, Upload, Trash2 } from 'lucide-react';

interface ProjectsSectionProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onOpenUploadModal?: () => void;
  onDeleteProject?: (projectId: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  onSelectProject,
  onOpenUploadModal,
  onDeleteProject
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer bg-slate-50/70 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200/60 dark:border-slate-700/60 hover:border-purple-500/80 dark:hover:border-purple-500/80 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/5 flex flex-col justify-between"
            >
              <div>
                {/* Header info */}
                <div className="mb-4">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-md ${
                        project.category === 'ai-vibe'
                          ? 'bg-purple-100 text-purple-700 dark:bg-purple-950/80 dark:text-purple-300'
                          : project.category === 'ai-video'
                          ? 'bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-950/80 dark:text-fuchsia-300'
                          : project.category === 'atmosphere'
                          ? 'bg-rose-100 text-rose-700 dark:bg-rose-950/80 dark:text-rose-300'
                          : 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950/80 dark:text-indigo-300'
                      }`}>
                        {project.category === 'ai-vibe' ? (
                          <Code className="w-3 h-3" />
                        ) : project.category === 'ai-video' ? (
                          <Sparkles className="w-3 h-3" />
                        ) : project.category === 'atmosphere' ? (
                          <Film className="w-3 h-3" />
                        ) : (
                          <Video className="w-3 h-3" />
                        )}
                        {project.categoryName}
                      </span>

                      {project.douyinUrl && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-md bg-rose-500/10 text-rose-600 dark:bg-rose-950/60 dark:text-rose-400 border border-rose-200 dark:border-rose-900">
                          抖音打卡
                        </span>
                      )}
                    </div>

                    <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                      {project.date}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-purple-600 dark:text-purple-400 mt-1">
                    {project.subtitle}
                  </p>
                </div>

                {/* Thumbnail Image matching Image 4 */}
                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-700 mb-5">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Overlay button on hover */}
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 bg-purple-600 text-white rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      {project.category === 'vlog' ? <Play className="w-3.5 h-3.5 fill-white" /> : <ImageIcon className="w-3.5 h-3.5" />}
                      <span>查看详情与展示</span>
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Tags & Action row */}
              <div className="pt-4 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2.5 py-0.5 rounded-full bg-slate-200/60 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {onDeleteProject && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation(); // 阻止事件冒泡，防止触发卡片的点击事件
                        onDeleteProject(project.id);
                      }}
                      className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors"
                      title="删除该作品"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                  <span className="text-xs font-bold text-purple-600 dark:text-purple-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>详情</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
