import React, { useState } from 'react';
import { ProfileInfo } from '../types';
import { Mail, MessageSquare, Video, Instagram, Send, CheckCircle, Copy, Check } from 'lucide-react';

interface ContactSectionProps {
  profile: ProfileInfo;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact-section" className="py-16 sm:py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            联系我
          </h2>
          <p className="mt-2 text-sm text-purple-600 dark:text-purple-400 font-semibold tracking-wider uppercase">
            Get In Touch
          </p>
        </div>

        {/* Layout */}
        <div className="max-w-2xl mx-auto">
          
          <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-700/60 shadow-lg shadow-purple-500/5 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              联系方式 (Contact Information)
            </h3>

            <div className="space-y-4">
              {/* Email */}
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400 font-medium">邮箱 Email</span>
                  <span className="text-sm sm:text-base font-medium break-all">{profile.email}</span>
                </div>
              </a>

              {/* WeChat */}
              {profile.socials.wechat && (
                <div
                  onClick={() => handleCopy(profile.socials.wechat!, 'wechat')}
                  className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400 font-medium">微信 WeChat</span>
                    <span className="text-sm sm:text-base font-medium">{profile.socials.wechat}</span>
                  </div>
                  <button className="ml-auto text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 p-1">
                    {copiedKey === 'wechat' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              )}

              {/* Douyin */}
              {profile.socials.douyin && (
                <div
                  onClick={() => handleCopy(`抖音号:${profile.socials.douyin!}`, 'douyin')}
                  className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Video className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400 font-medium">抖音 Douyin</span>
                    <span className="text-sm sm:text-base font-medium">抖音号:{profile.socials.douyin}</span>
                  </div>
                  <button className="ml-auto text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 p-1">
                    {copiedKey === 'douyin' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              )}

              {/* Instagram */}
              {profile.socials.instagram && (
                <a
                  href={`https://instagram.com/${profile.socials.instagram}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400 font-medium">Ins / Instagram</span>
                    <span className="text-sm sm:text-base font-medium">{profile.socials.instagram}</span>
                  </div>
                </a>
              )}
            </div>

            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed bg-slate-50 dark:bg-slate-800/40 p-5 rounded-2xl border border-slate-100 dark:border-slate-800">
              欢迎随时探讨 AI 创作、商业视频联合拍摄、技术顾问或相关项目合作！可通过上述邮件或社交账号联系。
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
