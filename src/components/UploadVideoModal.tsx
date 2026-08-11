import React, { useState, useRef } from 'react';
import { Project, ProjectCategory } from '../types';
import { X, Upload, Video, Image as ImageIcon, Sparkles, Film, Code, Check, ExternalLink, Info } from 'lucide-react';
import { saveMediaBlob } from '../utils/storage';
import { extractUrl, isDouyinLink } from '../utils/urlHelper';

interface UploadVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProject: (project: Project) => void;
  initialCategory?: ProjectCategory;
}

export const UploadVideoModal: React.FC<UploadVideoModalProps> = ({
  isOpen,
  onClose,
  onAddProject,
  initialCategory = 'vlog'
}) => {
  if (!isOpen) return null;

  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [category, setCategory] = useState<ProjectCategory>(initialCategory);
  const [description, setDescription] = useState('');
  const [tagsInput, setTagsInput] = useState('');

  const [uploadMode, setUploadMode] = useState<'link' | 'file'>('link');
  
  const [douyinUrl, setDouyinUrl] = useState('');
  
  const handleDouyinUrlChange = (val: string) => {
    // If the user pastes full share text like "1.23 xxx https://v.douyin.com/xxx/ 复制打开", clean it automatically
    const cleaned = extractUrl(val);
    setDouyinUrl(cleaned);
  };
  const [videoUrl, setVideoUrl] = useState('');
  const [videoFileName, setVideoFileName] = useState('');
  const [videoFile, setVideoFile] = useState<File | null>(null);
  
  const [coverUrl, setCoverUrl] = useState('');
  const [coverFileName, setCoverFileName] = useState('');
  const [coverFile, setCoverFile] = useState<File | null>(null);

  const videoInputRef = useRef<HTMLInputElement>(null);
  const coverInputRef = useRef<HTMLInputElement>(null);

  const handleVideoFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoUrl(url);
      setVideoFileName(file.name);
      setVideoFile(file);
    }
  };

  const handleCoverFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCoverUrl(url);
      setCoverFileName(file.name);
      setCoverFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const projectId = `custom-proj-${Date.now()}`;
    let videoBlobKey: string | undefined = undefined;
    let coverBlobKey: string | undefined = undefined;

    if (videoFile) {
      videoBlobKey = `media_video_${projectId}`;
      await saveMediaBlob(videoBlobKey, videoFile);
    }

    if (coverFile) {
      coverBlobKey = `media_cover_${projectId}`;
      await saveMediaBlob(coverBlobKey, coverFile);
    }

    const categoryNames: Record<ProjectCategory, string> = {
      'ai-vibe': 'AI Vibe coding',
      'ai-video': 'AI 视频创作',
      'atmosphere': '氛围感视频',
      'vlog': 'Vlog 记录'
    };

    const tags = tagsInput
      .split(/[,，\s]+/)
      .filter((t) => t.trim().length > 0);

    const defaultCovers: Record<ProjectCategory, string> = {
      'ai-vibe': 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
      'ai-video': 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
      'atmosphere': 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
      'vlog': 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&w=1200&q=80'
    };

    const isDouyin = douyinUrl.includes('douyin.com') || douyinUrl.includes('v.douyin');
    const defaultTags = isDouyin ? ['抖音作品', '短视频'] : ['视频作品', '创作'];

    const newProject: Project = {
      id: projectId,
      title,
      subtitle: subtitle || categoryNames[category],
      category,
      categoryName: categoryNames[category],
      coverImage: coverUrl || defaultCovers[category],
      videoUrl: videoUrl || undefined,
      douyinUrl: douyinUrl || undefined,
      videoBlobKey,
      coverBlobKey,
      description: description || '暂无描述',
      detailedContent: description,
      tags: tags.length > 0 ? tags : defaultTags,
      date: new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: '2-digit' }),
      featured: true,
      stats: {
        views: '1',
        likes: '1',
        comments: '0'
      }
    };

    onAddProject(newProject);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-800 rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-700 my-auto">
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between sticky top-0 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md z-10">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center">
              <Upload className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">上传/发布视频作品</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">选择本地视频文件或填入视频链接</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 bg-slate-100 dark:bg-slate-700/60 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5 max-h-[80vh] overflow-y-auto">
          
          {/* Mode Switcher */}
          <div className="flex p-1 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700">
            <button
              type="button"
              onClick={() => setUploadMode('link')}
              className={`flex-1 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${
                uploadMode === 'link'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Film className="w-4 h-4" />
              <span>抖音 / 外部视频链接打卡</span>
            </button>

            <button
              type="button"
              onClick={() => setUploadMode('file')}
              className={`flex-1 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${
                uploadMode === 'file'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Video className="w-4 h-4" />
              <span>上传本地 MP4 视频文件</span>
            </button>
          </div>

          {/* Link Mode Input */}
          {uploadMode === 'link' ? (
            <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/40 dark:to-slate-900 border border-purple-200 dark:border-purple-800 space-y-3">
              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 mb-1 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                  抖音视频链接 / Douyin Link
                </label>
                <input
                  type="text"
                  placeholder="粘贴抖音口令或链接 (例如: https://v.douyin.com/xxxx/)"
                  value={douyinUrl}
                  onChange={(e) => handleDouyinUrlChange(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <div className="mt-1 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                  <span>支持直接粘贴抖音 APP“分享/复制链接”文案，系统会自动提取纯净网址。</span>
                  {douyinUrl && (
                    <span className="text-purple-600 dark:text-purple-400 font-semibold">已解析网址</span>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  普通视频 MP4 播放链接 (可选 / 可直接在线播放)
                </label>
                <input
                  type="url"
                  placeholder="https://example.com/my-video.mp4"
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  className="w-full px-3.5 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
          ) : (
            /* Upload Local Video Area */
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                视频文件 / Local Video File
              </label>
              <input
                type="file"
                ref={videoInputRef}
                accept="video/*"
                onChange={handleVideoFileChange}
                className="hidden"
              />
              
              <div
                onClick={() => videoInputRef.current?.click()}
                className="border-2 border-dashed border-slate-300 dark:border-slate-600 hover:border-purple-500 dark:hover:border-purple-400 rounded-2xl p-6 text-center cursor-pointer bg-slate-50 dark:bg-slate-900/50 transition-all group"
              >
                {videoUrl ? (
                  <div className="space-y-3">
                    <div className="relative aspect-video w-full max-w-md mx-auto rounded-xl overflow-hidden bg-black shadow-md">
                      <video src={videoUrl} controls className="w-full h-full object-contain" />
                    </div>
                    <p className="text-xs text-purple-600 dark:text-purple-400 font-medium">
                      已选择视频: {videoFileName || '本地视频已就绪'} (点击可重新选择)
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center gap-2 py-4">
                    <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-950/80 text-purple-600 dark:text-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Video className="w-6 h-6" />
                    </div>
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                      点击上传本地视频文件 (.mp4, .mov, .webm)
                    </p>
                    <p className="text-xs text-slate-400">支持选择本地 MP4 视频文件存入浏览器缓存</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Title & Subtitle */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                作品标题 / Title <span className="text-purple-600">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="例如: 《雨夜米兰：4K 氛围感旅拍》"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                副标题 / Subtitle
              </label>
              <input
                type="text"
                placeholder="例如: Cinematic Atmosphere Vlog"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              />
            </div>
          </div>

          {/* Category Select */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
              作品分类 / Category
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { key: 'ai-vibe', label: 'AI Vibe coding', icon: Code },
                { key: 'ai-video', label: 'AI 视频创作', icon: Sparkles },
                { key: 'atmosphere', label: '氛围感视频', icon: Film },
                { key: 'vlog', label: 'Vlog 记录', icon: Video }
              ].map(({ key, label, icon: Icon }) => (
                <button
                  type="button"
                  key={key}
                  onClick={() => setCategory(key as ProjectCategory)}
                  className={`p-2.5 rounded-xl text-xs font-semibold border flex flex-col items-center gap-1.5 transition-all ${
                    category === key
                      ? 'bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-500/20'
                      : 'bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-purple-400'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Cover Image Upload */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              视频封面图 (选填) / Cover Image
            </label>
            <input
              type="file"
              ref={coverInputRef}
              accept="image/*"
              onChange={handleCoverFileChange}
              className="hidden"
            />
            <div className="flex gap-2 items-center">
              <button
                type="button"
                onClick={() => coverInputRef.current?.click()}
                className="px-4 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-600 flex items-center gap-1.5 transition"
              >
                <ImageIcon className="w-4 h-4" />
                <span>{coverFileName ? '已选择封面' : '上传本地封面'}</span>
              </button>

              <input
                type="url"
                placeholder="或填入封面图片 URL"
                value={coverUrl.startsWith('blob:') ? '' : coverUrl}
                onChange={(e) => setCoverUrl(e.target.value)}
                className="flex-1 px-3.5 py-2 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              作品简介 / Description
            </label>
            <textarea
              rows={3}
              placeholder="介绍这支视频的创作灵感、使用的设备与剪辑技巧..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 resize-none"
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              标签 (用空格或逗号分隔) / Tags
            </label>
            <input
              type="text"
              placeholder="例如: Pocket3 氛围感 4K旅拍 米兰"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            />
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm sm:text-base rounded-xl shadow-lg shadow-purple-500/25 transition-all flex items-center justify-center gap-2 active:scale-98"
            >
              <Upload className="w-4 h-4" />
              <span>发布视频作品</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
