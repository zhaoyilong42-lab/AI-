import { ProfileInfo, ExperienceItem, EducationItem, CertificationItem, SkillGroup, Project } from '../types';

export const initialProfile: ProfileInfo = {
  name: "赵意龙",
  enName: "Paolo Zhao",
  title: "AI 视觉创作者 & 科技 Vlogger",
  tagline: "现居意大利的内容创作者与 AI 探索者。用镜头记录意式生活美学，用 AI 赋能视觉表达与工作流创新",
  bio: [
    "你好！我是在意大利生活多年的华侨",
    "这些年来我尝试过很多职业，做过财务会计、百货零售，也深入过意式酒吧与 Cafè 的日常。这些丰富的生活经历，让我积累了多元的技能，更教会了我如何更好地去规划、管理与总结生活。",
    "现在，我将镜头对准了自己的生活，尝试着成为了一名短视频创作者。我用 Vlog 记录在欧洲的旅游、徒步与日常碎碎念，也在不断精进拍摄与剪辑技术。作品都在“我的作品”，欢迎大家观看。",
    "同时，我也在积极探索 AI 技术的应用，用 AI 优化自己的视频制作工作流，尝试打造更具质感与视觉冲击力的 AI 视频作品。",
    "🈴:如果你也喜欢氛围感视频 / 旅拍 Vlog，或者有剪辑方面的合作需求，欢迎随时联系我！\n或者\n📖:如果你对视频剪辑或 AI工具应用 感兴趣，也欢迎随时交流，我们一起探索、一起成长！✨\n\n我是小泷 \n谢谢你的观看❤️"
  ],
  avatar: "/avatar.jpg",
  email: "zhaoyilong42@gmail.com",
  phone: "+39 388-8888-666",
  location: "意大利 · 米兰 / 罗马",
  socials: {
    wechat: "Ambition_1704",
    douyin: "yilong11392",
    instagram: "yilong.zhao.00",
    email: "mailto:zhaoyilong42@gmail.com"
  },
  expertise: [
    "AI 概念短片与商业视觉生成 (Sora, Midjourney, Runway)",
    "ComfyUI / SD 自动化节点流水线搭建与模型微调",
    "4K 电影级 Vlog 前后期全流程 (Sony FX3, DaVinci Resolve)",
    "数字人分身与 AIGC 配音/音频合成 (ElevenLabs)",
    "科技自媒体全网运营与内容爆款打造"
  ]
};

export const experiences: ExperienceItem[] = [
  {
    id: "exp-00",
    role: "视频制作者",
    company: "无机构-自主创作",
    period: "06.2026 - 至今",
    highlights: [
      "需求对接与脚本策划：深入理解客户诉求与目标受众，精准把控视频风格，独立完成创意构思、分镜设计与定制化视频脚本撰写",
      "专业拍摄与视觉呈现：熟练操作各类相机及手机拍摄设备，灵活运用构图、光影布光与运镜技巧，确保高质量画面采集与视觉质感",
      "后期剪辑与视听包装：精通“剪映”等后期剪辑软件，熟练进行视频剪辑、调色、音效配乐、字幕打压及特效包装，全方位保障最终出品的视听品质与观赏性"
    ]
  },
  {
    id: "exp-0A",
    role: "酒吧咖啡师",
    company: "BAR Diamante",
    period: "10.2024-06.2026",
    highlights: [
      "专业咖啡出品与品质把控：熟练掌握意式浓缩（Espresso）萃取、奶泡打发、拉花及各类特调咖啡的制作工艺",
      "早午餐管理与备餐统筹：负责早午餐时段工作餐的备料、现场协调与出品管理，",
      "意式餐前酒（Aperitivo）标准化流程：精通 Aperitivo 时段的运营与服务流程，负责经典餐前饮品、自助小食的补给与陈列展示"
    ]
  },
  {
    id: "exp-0B",
    role: "夜吧调酒师",
    company: "Myxto ",
    period: "05.2023 - 10.2024",
    highlights: [
      "专业酒水知识：精通各类基酒与原料的风味特性，精准把控配比与口感",
      "酒单规划与菜单设计：负责酒水菜单（Menu）的规划、定价及新酒品的研发与推出",
      "鸡尾酒调制与出品控制：精通经典与创制鸡尾酒的调制工艺，严格执行出品标准化流程"
    ]
  },
  {
    id: "exp-1",
    role: "百货店店员",
    company: "Emy store Cernusco",
    period: "10.2022-02.2023",
    highlights: [
      "陈列与货架管理：规范化进行商品上架、理货与视觉陈列，维护货架整洁与品类齐全",
      "自主库存与订货管理：自主监控库存动态，结合销售预测独立完成商品盘点与自动化/自主补货下单，保障供应链高效运转。"
    ]
  },
  {
    id: "exp-2",
    role: "Aumai 维修部",
    company: "Magazzino Aumai ",
    period: "02.2021-10.2022",
    highlights: [
      "团队协作与业务支持：积极配合团队，主动承接并超额完成日常职责之外的突发性或支援性工作。",
      "设施维护与应急响应：负责门店内日常设施设备的巡查与维护，建立健全报修机制；遇到硬件故障或安全隐患时",
      "主动对接外部维修供应商及技术人员，跟进维修进度，确保门店正常运营不受影响",
      "工作规划与时间管理：具备良好的自我管理能力，能够合理统筹、自主规划并高效推进工作任务"
    ]
  },
  {
    id: "exp-3",
    role: "会计师事务所",
    company: "Studio Baldussi",
    period: "07.2020 - 02.2021",
    highlights: [
      "行政与秘书事务支持：协助管理事务所日常行政与秘书服务工作，保障内部日常运营及业务流程的高效顺畅。",
      "文件与财务档案管理：负责发票、各类商业凭证及重要公司文件的归档、分类与系统化管理，确保归档准确无误且便于检索。",
      "基础账务与发票处理：负责进销项发票的审核与录入，精通流水账（Prima Nota）的计算与登记，确保账实相符及数据精确。",
      "通讯与邮政收发支持：协助管理事务所总机系统及邮件信件的统一收发与投递工作。"
    ]
  }
];

export const education: EducationItem = {
  id: "edu-1",
  degree: "经济与会计 学士",
  institution: "ISTITUTO TECNICO ABBA-BALLINI",
  year: "2016 - 2020",
  courses: [
    "会计与财务报表",
    "税务合规/税务申报",
    "行政与运营管理",
    "市场营销与销售"
  ]
};

export const certifications: CertificationItem[] = [];

export const skillGroups: SkillGroup[] = [
  {
    id: "sg-3",
    badge: "BASE",
    category: "基本技能",
    skills: [
      "精通意语",
      "持续学习",
      "统筹规划",
      "自主管理",
      "团队协作",
      "归纳总结"
    ]
  },
  {
    id: "sg-4",
    badge: "BAR",
    category: "酒吧知识",
    skills: [
      "酒水知识储备",
      "调酒酒单",
      "酒吧工作流",
      "早午餐流程规划",
      "Apertivo设计",
      "酒吧视频制作（学习中）"
    ]
  },
  {
    id: "sg-1",
    badge: "AI",
    category: "AI 创作与生成式工作流",
    skills: [
      "AI 视频创作",
      "AI VibeCoding",
      "AI 提示词",
      "AI 智能体",
      "AI 技能",
      "AI 工作流"
    ]
  },
  {
    id: "sg-2",
    badge: "VLOG",
    category: "视频制作与摄影设备",
    skills: [
      "剪映剪辑",
      "剪映调色",
      "Vlog 剪辑",
      "氛围感视频剪辑",
      "运动相机 Action4",
      "无人机航拍 DJI FLIP"
    ]
  }
];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "《赛博山海经：赛博朋克重构》",
    subtitle: "AI 奇幻电影概念预告片",
    category: "ai-video",
    categoryName: "AI 视频创作",
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    description: "基于 Midjourney + Runway Gen-3 + ElevenLabs 生成的科幻视听短片。结合中国传统神话元素与未来赛博美学。",
    detailedContent: "本项目耗时 2 周，全程采用 AIGC 工作流。使用 ChatGPT 梳理《山海经》异兽设定并转换为视觉 Prompt，借助 Midjourney 生成高质感底稿，通过 Runway 与 Luma 赋予动态，最后配合 ElevenLabs 沉浸式中文古风数字音效，展现了极致的视觉震撼。",
    tags: ["Midjourney", "Runway Gen-3", "Suno AI", "科幻概念片"],
    date: "2024.05",
    featured: true,
    aiPrompt: "Cinematic shot of a cybernetic dragon soaring through neon-lit futuristic oriental ancient pagoda city, photorealistic, 8k resolution, cinematic lighting, volumetric fog --ar 16:9 --v 6.0",
    aiTools: ["Midjourney v6", "Runway Gen-3", "ElevenLabs", "DaVinci Resolve"],
    stats: {
      views: "128万+",
      likes: "9.2万",
      comments: "3,400+"
    },
    gallery: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "proj-2",
    title: "《独自一人在东京：胶片感 4K 旅拍》",
    subtitle: "Cinematic Travel Vlog",
    category: "atmosphere",
    categoryName: "氛围感视频",
    coverImage: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80",
    description: "记录雨夜东京街头的寂静与烟火气。Sony FX3 搭配 35mm F1.4 镜头拍摄，S-Log3 还原富士胶片质感。",
    detailedContent: "这支 Vlog 探访了新宿、涉谷以及下北泽的深夜咖喱店。采用无声叙事与环境声采集，呈现出高度沉浸的独处美学。调色过程使用 DaVinci 打造独特的青橙复古调色，全网受好评率达 99.4%。",
    tags: ["Sony FX3", "富士胶片调色", "东京旅拍", "电影感Vlog"],
    date: "2024.03",
    featured: true,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    douyinUrl: "https://www.douyin.com/",
    stats: {
      views: "85万+",
      likes: "6.5万",
      comments: "1,820+"
    },
    gallery: [
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "proj-3",
    title: "《AI 时代下的桌面搭建 & 极客全家桶》",
    subtitle: "2024 极简科技桌面 Vlog",
    category: "vlog",
    categoryName: "Vlog 记录",
    coverImage: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&w=1200&q=80",
    description: "分享如何利用 Mac Studio + NVIDIA 4090 双机架构打造专属于 AIGC 创作者的高效极简沉浸式工作台。",
    detailedContent: "详细展示了从氛围灯光配置、音频拾音系统到双机 KVM 切换与 ComfyUI 本地算力集群搭建全过程。视频发布后带动了多个相关产品的全网大卖，成为科技桌面类目标杆创作。",
    tags: ["桌面搭建", "Mac Studio", "RTX 4090", "AIGC工作站"],
    date: "2024.01",
    featured: false,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    stats: {
      views: "210万+",
      likes: "14.8万",
      comments: "5,100+"
    }
  },
  {
    id: "proj-4",
    title: "《超现实梦境：超流体艺术》",
    subtitle: "AI 动态视觉艺术画册",
    category: "ai-video",
    categoryName: "AI 视频创作",
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    description: "利用 ComfyUI 配合 AnimateDiff 制作的超流体抽象艺术集。探讨生命、机械与意识交融的哲学课题。",
    detailedContent: "通过控制 ControlNet IP-Adapter 保持角色与流体形态的一致性，利用定制 LoRA 赋予画面莫比乌斯环式的连贯流转效果。作品受邀入选 2024 数字艺术新锐双年展。",
    tags: ["ComfyUI", "AnimateDiff", "数字艺术", "生成美学"],
    date: "2023.11",
    featured: false,
    aiPrompt: "Iridescent metallic fluid liquid merging with translucent crystal flower, organic motion, unreal engine 5 render, hyper-detailed optical refraction, octane render, 8k",
    aiTools: ["ComfyUI", "AnimateDiff", "Stable Diffusion XL"],
    stats: {
      views: "62万+",
      likes: "4.1万",
      comments: "890+"
    }
  },
  {
    id: "proj-5",
    title: "《AI Vibe Coding: 全流程式 App 极速构建与 Agent 实战》",
    subtitle: "AI Vibe Coding & 智能体工程",
    category: "ai-vibe",
    categoryName: "AI Vibe coding",
    coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    description: "利用自然语言与 LLM Agent 协同进行现代 Web 应用开发，全流程完成代码架构、状态管理与 UI 细节调优。",
    detailedContent: "通过自然的对话逻辑与 AI Coding 助手高度协同，零手写冗余代码快速搭建高质感 Web 应用。融合 Gemini API、React 18、Tailwind CSS 以及智能 Prompt 工程，打造极速的创意落地体验。",
    tags: ["AI Vibe Coding", "Gemini API", "React", "Prompt 工程"],
    date: "2024.08",
    featured: true,
    aiTools: ["Gemini 1.5 Pro", "Cursor", "Vite", "Tailwind CSS"],
    stats: {
      views: "180万+",
      likes: "12.5万",
      comments: "4,900+"
    }
  },
  {
    id: "proj-6",
    title: "《AI Vibe Coding: 智能组件库与交互工作流构建》",
    subtitle: "AI Vibe Coding 实践探索",
    category: "ai-vibe",
    categoryName: "AI Vibe coding",
    coverImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    description: "探索使用大语言模型一键生成多端适配的前端设计系统与动态交互逻辑，大幅提升数字媒体创作效率。",
    detailedContent: "将 AI 提示词与前沿前端框架相结合，展示从视觉草图到生产级代码的快速演进过程，为数字创作者提供全新的技术赋能范式。",
    tags: ["AI Vibe Coding", "组件系统", "前端自动化", "UI 设计"],
    date: "2024.06",
    featured: false,
    aiTools: ["Gemini Pro", "Tailwind CSS", "React"],
    stats: {
      views: "95万+",
      likes: "7.8万",
      comments: "1,200+"
    }
  }
];
