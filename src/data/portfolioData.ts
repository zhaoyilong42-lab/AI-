import { ProfileInfo, ExperienceItem, EducationItem, CertificationItem, SkillGroup, Project } from '../types';

export const initialProfile: ProfileInfo = {
  name: "赵意龙",
  enName: "Paolo Zhao",
  title: "AI 视觉创作者 & 科技 Vlogger",
  tagline: "现居意大利的内容创作者与 AI 探索者。用镜头记录意式生活美学，用 AI 赋能视觉表达与工作流创新",
  bio: [
    "你好！我是在意大利生活多年的华侨",
    "这些年来 I 尝试过很多职业，做过财务会计、百货零售，也深入过意式酒吧与 Cafè 的日常。这些丰富的生活经历，让我积累了多元的技能，更教会了我如何更好地去规划、管理与总结生活。",
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
    id: "user-proj-10",
    title: "Flower-nail 美甲店",
    subtitle: "Flower Nail Crema Salon",
    category: "ai-vibe",
    categoryName: "AI Vibe coding",
    coverImage: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=80",
    description: "美甲店展示网站，呈现精致的美甲服务与沙龙风格。",
    tags: ["网页设计", "美甲店", "AI Vibe Coding"],
    date: "2026.09",
    featured: true,
    externalUrl: "https://flower-nail-crema-salon.zhaoyilong42.chatgpt.site/"
  },
  {
    id: "user-proj-11",
    title: "Sakuramen 拉面店",
    subtitle: "Sakuramen Udine Menu",
    category: "ai-vibe",
    categoryName: "AI Vibe coding",
    coverImage: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?auto=format&fit=crop&w=1200&q=80",
    description: "拉面店菜单与招募页面，展现日式餐饮品牌体验。",
    tags: ["网页设计", "拉面店", "AI Vibe Coding"],
    date: "2026.09",
    featured: true,
    externalUrl: "https://sakuramen-udine-menu.zhaoyilong42.chatgpt.site/#lavora"
  },
  {
    id: "user-proj-8",
    title: "酒吧网页模板",
    subtitle: "Drank Pub Food & Drink",
    category: "ai-vibe",
    categoryName: "AI Vibe coding",
    coverImage: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=80",
    description: "酒吧餐饮主题网页模板，展示餐点、饮品与氛围感设计。",
    tags: ["网页设计", "酒吧", "AI Vibe Coding"],
    date: "2026.08",
    featured: true,
    externalUrl: "https://drank-pub-food-drink.zhaoyilong42.chatgpt.site/"
  },
  {
    id: "user-proj-9",
    title: "欧洲徒步一日游",
    subtitle: "European Hiking Day Trip",
    category: "ai-vibe",
    categoryName: "AI Vibe coding",
    coverImage: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=80",
    description: "面向欧洲一日徒步行程的网页，帮助探索路线与户外体验。",
    tags: ["网页设计", "欧洲徒步", "AI Vibe Coding"],
    date: "2026.08",
    featured: true,
    externalUrl: "https://europe-hiking.onrender.com/"
  },
  {
    id: "user-proj-1",
    title: "AI变身超级英雄",
    subtitle: "抖音热门 AI 视觉特效",
    category: "ai-video",
    categoryName: "AI 视频创作",
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    description: "利用 AI 技术实现的超级英雄变身特效视频。",
    detailedContent: "通过 AI 绘画与视频生成技术，将真实人物完美转化为具有电影质感的超级英雄形象。",
    tags: ["AI变身", "超级英雄", "抖音热门"],
    date: "2024.08",
    featured: true,
    douyinUrl: "https://v.douyin.com/LwNvm-mvyK0/",
    stats: {
      views: "1万+",
      likes: "999+",
      comments: "88+"
    }
  },
  {
    id: "user-proj-2",
    title: "lago di aviolo 纪录短片",
    subtitle: "意大利高山湖泊纪录",
    category: "atmosphere",
    categoryName: "氛围感视频",
    coverImage: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80",
    description: "记录意大利 Lago di Aviolo 的纯净自然风光。",
    tags: ["意大利", "Lago di Aviolo", "纪录片"],
    date: "2024.08",
    featured: true,
    douyinUrl: "https://v.douyin.com/A_TQZ8AY2E0/"
  },
  {
    id: "user-proj-3",
    title: "lago di aviolo 15s混剪",
    subtitle: "高山湖泊精华短片",
    category: "atmosphere",
    categoryName: "氛围感视频",
    coverImage: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80",
    description: "Lago di Aviolo 15秒精华快剪。",
    tags: ["短视频", "混剪", "氛围感"],
    date: "2024.08",
    featured: true,
    douyinUrl: "https://v.douyin.com/-dWeiet5O-o/"
  },
  {
    id: "user-proj-4",
    title: "五渔村Vlog",
    subtitle: "意大利海滨风情",
    category: "vlog",
    categoryName: "Vlog 记录",
    coverImage: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&w=1200&q=80",
    description: "记录意大利五渔村的浪漫色彩。",
    tags: ["五渔村", "意大利", "Vlog"],
    date: "2024.08",
    featured: true,
    douyinUrl: "https://v.douyin.com/aYPAWutT4Gc/"
  },
  {
    id: "user-proj-5",
    title: "Lago di Garda 游玩Vlog",
    subtitle: "加尔达湖夏日漫游",
    category: "vlog",
    categoryName: "Vlog 记录",
    coverImage: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&w=1200&q=80",
    description: "Lago di Garda 的游玩日记。",
    tags: ["加尔达湖", "游玩", "Vlog"],
    date: "2024.08",
    featured: true,
    douyinUrl: "https://v.douyin.com/0lad2ji8fys/"
  },
  {
    id: "user-proj-6",
    title: "Dolomiti徒步Vlog",
    subtitle: "多洛米蒂绝美徒步",
    category: "vlog",
    categoryName: "Vlog 记录",
    coverImage: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&w=1200&q=80",
    description: "挑战多洛米蒂，记录壮丽山景。",
    tags: ["Dolomiti", "徒步", "Vlog"],
    date: "2024.08",
    featured: true,
    douyinUrl: "https://v.douyin.com/bo45PV0msMs/"
  },
  {
    id: "user-proj-7",
    title: "Lago di aviolo 徒步Vlog",
    subtitle: "高山湖泊徒步记录",
    category: "vlog",
    categoryName: "Vlog 记录",
    coverImage: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&w=1200&q=80",
    description: "记录通往 Lago di aviolo 的徒步旅程。",
    tags: ["Lago di aviolo", "徒步", "Vlog"],
    date: "2024.08",
    featured: true,
    douyinUrl: "https://v.douyin.com/VuKeorHwIn4/"
  }
];
