import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { X, Play, Pause, Sparkles, Video, Copy, Check, ExternalLink, Info } from 'lucide-react';
import { extractUrl } from '../utils/urlHelper';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onUpdateProjectVideo?: (projectId: string, videoUrl: string, videoBlobKey?: string) => void;
  onUpdateProjectDouyinUrl?: (projectId: string, douyinUrl: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onUpdateProjectVideo,
  onUpdateProjectDouyinUrl
}) => {
  if (!project) return null;

  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState<string | undefined>(project.videoUrl);
  const [douyinUrlInput, setDouyinUrlInput] = useState<string>(project.douyinUrl || '');
  const [isEditingDouyinLink, setIsEditingDouyinLink] = useState(false);

  useEffect(() => {
    setCurrentVideoUrl(project.videoUrl);
    setDouyinUrlInput(project.douyinUrl || '');
  }, [project]);

  const handleCopyPrompt = () => {
    if (!project.aiPrompt) return;
    navigator.clipboard.writeText(project.aiPrompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  const handleOpenDouyin = (e: React.MouseEvent, rawUrl: string) => {
    e.preventDefault();
    if (!rawUrl) return;
    const cleanUrl = extractUrl(rawUrl);
    // Create temporary link without Referrer to bypass Douyin anti-hotlink / 302 redirect checks
    const a = document.createElement('a');
    a.href = cleanUrl;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.referrerPolicy = 'no-referrer';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleCopyDouyinLink = () => {
    if (!project.douyinUrl) return;
    navigator.clipboard.writeText(project.douyinUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleSaveDouyinUrl = () => {
    const cleanUrl = extractUrl(douyinUrlInput);
    if (onUpdateProjectDouyinUrl && project) {
      onUpdateProjectDouyinUrl(project.id, cleanUrl);
    }
    setDouyinUrlInput(cleanUrl);
    setIsEditingDouyinLink(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-800 rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-700 max-h-[90vh] flex flex-col my-auto">
        
        {/* Top Modal Bar */}
        <div className="p-4 sm:p-6 border-b border-slate-200/80 dark:border-slate-700/80 flex items-center justify-between sticky top-0 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md z-10">
          <div className="flex items-center gap-2">
            <span className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-md ${
              project.category === 'ai-vibe'
                ? 'bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300'
                : project.category === 'ai-video'
                ? 'bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-950 dark:text-fuchsia-300'
                : project.category === 'atmosphere'
                ? 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300'
                : 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300'
            }`}>
              {project.category === 'ai-vibe' ? <Sparkles className="w-3.5 h-3.5" /> : <Video className="w-3.5 h-3.5" />}
              {project.categoryName}
            </span>
            <span className="text-xs text-slate-400">{project.date}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 bg-slate-100 dark:bg-slate-700/60 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Main Title & Subtitle */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {project.title}
            </h2>
            <p className="text-base font-semibold text-purple-600 dark:text-purple-400 mt-1">
              {project.subtitle}
            </p>
          </div>

          {/* Media Player / Main Hero Showcase */}
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-950 shadow-inner group">
            {currentVideoUrl ? (
              <div className="relative w-full h-full">
                <video
                  src={currentVideoUrl}
                  controls
                  autoPlay
                  poster={project.coverImage}
                  className="w-full h-full object-contain bg-black"
                />
              </div>
            ) : (
              <div className="relative w-full h-full">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

          {/* Douyin Video Banner / Direct Link */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold text-lg border border-rose-500/30">
                抖
              </div>
              <div>
                <h4 className="text-sm font-bold flex items-center gap-2 text-white">
                  抖音原片作品打卡
                  {project.douyinUrl && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/40">
                      已打卡关联
                    </span>
                  )}
                </h4>
                <p className="text-xs text-slate-400 mt-0.5 break-all max-w-xs sm:max-w-md">
                  {project.douyinUrl ? project.douyinUrl : '尚未绑定抖音作品链接'}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              {project.douyinUrl && (
                <>
                  <a
                    href={extractUrl(project.douyinUrl)}
                    onClick={(e) => handleOpenDouyin(e, project.douyinUrl!)}
                    target="_blank"
                    rel="noopener noreferrer"
                    referrerPolicy="no-referrer"
                    className="flex-1 sm:flex-initial px-4 py-2 bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white text-xs font-bold rounded-xl shadow-md flex items-center justify-center gap-1.5 transition active:scale-95 cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>在抖音打开观看</span>
                  </a>

                  <button
                    onClick={handleCopyDouyinLink}
                    className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-xl border border-slate-700 flex items-center justify-center gap-1 transition"
                  >
                    {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedLink ? '已复制' : '复制链接'}</span>
                  </button>
                </>
              )}

              <button
                onClick={() => setIsEditingDouyinLink(!isEditingDouyinLink)}
                className="px-3 py-2 bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white text-xs font-medium rounded-xl border border-slate-700 transition"
              >
                {isEditingDouyinLink ? '取消' : (project.douyinUrl ? '修改链接' : '+ 绑定抖音链接')}
              </button>
            </div>
          </div>

          {/* Edit Douyin Link Input */}
          {isEditingDouyinLink && (
            <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 space-y-2 animate-fadeIn">
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                设置/修改抖音作品链接:
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="https://v.douyin.com/xxxx/ 或 抖音作品口令/链接"
                  value={douyinUrlInput}
                  onChange={(e) => setDouyinUrlInput(e.target.value)}
                  className="flex-1 px-3.5 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
                <button
                  onClick={handleSaveDouyinUrl}
                  className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl transition"
                >
                  保存链接
                </button>
              </div>
            </div>
          )}

          {/* Description & Detailed Content */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">创作背景与工作流</h3>
            <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.detailedContent || project.description}
            </p>
          </div>

          {/* AI Creation Prompts & Tools Section */}
          {project.category === 'ai' && (
            <div className="p-5 rounded-2xl bg-purple-50/70 dark:bg-purple-950/40 border border-purple-200/80 dark:border-purple-800/60 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-purple-700 dark:text-purple-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" /> AI 生成 Prompt 提示词
                </span>
                {project.aiPrompt && (
                  <button
                    onClick={handleCopyPrompt}
                    className="px-3 py-1 bg-white dark:bg-slate-800 text-purple-700 dark:text-purple-300 text-xs font-semibold rounded-md border border-purple-200 dark:border-purple-800 flex items-center gap-1 hover:bg-purple-100 transition"
                  >
                    {copiedPrompt ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedPrompt ? '已复制' : '复制 Prompt'}</span>
                  </button>
                )}
              </div>

              {project.aiPrompt && (
                <pre className="p-3 bg-white/80 dark:bg-slate-900/80 rounded-xl text-xs font-mono text-slate-800 dark:text-slate-200 whitespace-pre-wrap break-all border border-purple-100 dark:border-purple-900">
                  {project.aiPrompt}
                </pre>
              )}

              {project.aiTools && (
                <div className="pt-2 flex flex-wrap gap-2 items-center">
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">使用的 AI 工具链:</span>
                  {project.aiTools.map((tool, idx) => (
                    <span key={idx} className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-purple-200/60 dark:bg-purple-900 text-purple-800 dark:text-purple-200">
                      {tool}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Image Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">高精细节画廊</h3>
              <div className="grid grid-cols-2 gap-3">
                {project.gallery.map((imgUrl, index) => (
                  <div key={index} className="aspect-video rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-700">
                    <img src={imgUrl} alt={`Gallery ${index}`} className="w-full h-full object-cover hover:scale-105 transition duration-300" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full">
                #{tag}
              </span>
            ))}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 border-t border-slate-200/80 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-900/80 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-medium text-sm rounded-xl transition"
          >
            关闭预览
          </button>
        </div>

      </div>
    </div>
  );
};
