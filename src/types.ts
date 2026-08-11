export type ActiveTab = 'home' | 'about' | 'experience' | 'skills' | 'projects';

export type ProjectCategory = 'ai-vibe' | 'ai-video' | 'atmosphere' | 'vlog';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  categoryName: string;
  coverImage: string;
  description: string;
  detailedContent?: string;
  tags: string[];
  date: string;
  featured?: boolean;
  videoUrl?: string; // For Vlog or AI Video
  videoBlobKey?: string;
  coverBlobKey?: string;
  douyinUrl?: string; // Douyin video link
  externalUrl?: string; // Other platform link (Bilibili, Xiaohongshu, Youtube, etc.)
  aiPrompt?: string; // For AI Creation
  aiTools?: string[]; // e.g. Midjourney, ComfyUI, Runway Gen-2, ElevenLabs
  stats?: {
    views: string;
    likes: string;
    comments: string;
  };
  gallery?: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  highlights: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  year: string;
  courses: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  description: string;
}

export interface SkillGroup {
  id: string;
  badge: string; // e.g., "AI", "VLOG", "DEV", "MKT"
  category: string;
  skills: string[];
}

export interface ProfileInfo {
  name: string;
  enName: string;
  title: string;
  tagline: string;
  bio: string[];
  avatar: string;
  email: string;
  phone: string;
  location: string;
  socials: {
    wechat?: string;
    douyin?: string;
    instagram?: string;
    github?: string;
    bilibili?: string;
    xiaohongshu?: string;
    youtube?: string;
    linkedin?: string;
    email?: string;
  };
  expertise: string[];
}
