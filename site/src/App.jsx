import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  EnvelopeSimple,
  Heart,
  Info,
  List,
  Moon,
  MusicNoteSimple,
  Sun,
  X,
} from "@phosphor-icons/react";
import { articles } from "./articles";

const projects = [
  {
    number: "01",
    href: "https://yixiu.wonderelian.com",
    image: "assets/project-yixiu-image2.webp",
    icon: "assets/app-icon-yixiu.png",
    zh: {
      title: "一休冥想",
      kicker: "Yixiu Meditation",
      description: "先照顾身体与呼吸，让情绪安顿下来，再继续前行。",
    },
    en: {
      title: "Yixiu Meditation",
      kicker: "Rest & breathe",
      description: "Begin with the body and the breath. Let the emotions settle before moving on.",
    },
  },
  {
    number: "02",
    href: "https://human-design.wonderelian.com",
    image: "assets/project-human-design-image2.webp",
    icon: "assets/app-icon-human-design.png",
    zh: {
      title: "不二 认识自己",
      kicker: "Human Design",
      description: "理解能量与选择，寻找更接近自己、也更适合自己的生活节奏。",
    },
    en: {
      title: "Know Yourself",
      kicker: "Human Design",
      description: "A gentler way to understand your energy, choices, and the rhythm that fits your life.",
    },
  },
  {
    number: "03",
    href: "https://wendao.wonderelian.com",
    image: "assets/project-wendao-image2.webp",
    icon: "assets/app-icon-wendao.png",
    zh: {
      title: "三慢问道",
      kicker: "Wendao",
      description: "慢下来，读一章《道德经》，也读一读此刻的自己。",
    },
    en: {
      title: "Wendao · The Slow Way",
      kicker: "Tao Te Ching",
      description: "Slow down with one chapter of the Tao Te Ching—and listen to the self who is here now.",
    },
  },
  {
    number: "04",
    href: "https://xiazishuo.com",
    image: "assets/project-xiazi-image2.webp",
    icon: "assets/app-icon-xiazi.png",
    zh: {
      title: "虾子曰 昨日世界",
      kicker: "昨日世界",
      description: "把昨天的世界热点，转译成清楚、有观点、有画面的双语内容。",
    },
    en: {
      title: "Xiazi · Yesterday's World",
      kicker: "Global news in visuals",
      description: "Turning yesterday's world events into clear, visual bilingual stories with a point of view.",
    },
  },
  {
    number: "05",
    href: "https://style-atlas.wonderelian.com",
    image: "assets/project-style-atlas-image2.webp",
    icon: "assets/app-icon-style-atlas.png",
    zh: {
      title: "艺术风格图鉴",
      kicker: "Style Atlas",
      description: "从图像、脉络与细节出发，发现艺术风格背后的视觉语言。",
    },
    en: {
      title: "Style Atlas",
      kicker: "Art & visual culture",
      description: "Discovering the visual language behind art movements through images, context, and detail.",
    },
  },
  {
    number: "06",
    href: "https://onelaser.wonderelian.com",
    image: "assets/project-onelaser-image2-v2.jpg",
    featured: true,
    zh: {
      title: "OneLaser｜品牌与增长设计",
      kicker: "BRAND · WEB · CAMPAIGN",
      description: "从品牌策略到网页、宣传册、Banner 与广告创意，为工业科技建立清晰、有力且一致的全球表达。",
    },
    en: {
      title: "OneLaser · Brand & Growth Design",
      kicker: "BRAND · WEB · CAMPAIGN",
      description: "Building a clear, powerful, and consistent global presence for industrial technology—from brand strategy and web to brochures, banners, and campaigns.",
    },
  },
];

const opsProject = {
  number: "07",
  href: "https://ops.wonderelian.com",
  image: "assets/project-ops-image2.webp",
  zh: {
    title: "WonderElian OPS｜AI 运营系统",
    kicker: "AI OPERATIONS · ANALYTICS · AUTOMATION",
    description: "把多个产品的运营、数据、洞察、实验与行动放进同一个可追踪的系统，让创作不只发生，也能持续生长。",
    access: "查看公开运营快照",
  },
  en: {
    title: "WonderElian OPS · AI Operations System",
    kicker: "AI OPERATIONS · ANALYTICS · AUTOMATION",
    description: "Bringing product operations, data, insight, experiments, and action into one traceable system—so the work can keep growing after it is made.",
    access: "View the public operations snapshot",
  },
};

const worlds = [
  {
    number: "01",
    zh: { title: "一休", copy: "先照顾身体，安顿情绪，再继续前行。" },
    en: { title: "Rest", copy: "Care for the body. Settle the emotions. Then continue." },
  },
  {
    number: "02",
    zh: { title: "不二", copy: "接纳高峰与低谷，拥抱完整而非完美。" },
    en: { title: "Wholeness", copy: "Welcome both peaks and valleys; choose wholeness over perfection." },
  },
  {
    number: "03",
    zh: { title: "三慢", copy: "慢下来，慢慢来，慢慢成为。" },
    en: { title: "Slowness", copy: "Slow down. Take your time. Become, little by little." },
  },
  {
    number: "04",
    zh: { title: "如水", copy: "向内扎根，向外流动；顺应变化，不失本心。" },
    en: { title: "Like Water", copy: "Root inward, flow outward, and change without losing yourself." },
  },
];

const ambientSounds = [
  { id: "morning-birds", file: "morning-birds.m4a", zh: "晨间鸟语", en: "Morning Birds" },
  { id: "forest-breeze", file: "forest-breeze.m4a", zh: "林间微风", en: "Forest Breeze" },
  { id: "sunrise-river", file: "sunrise-river.m4a", zh: "晨曦河流", en: "Sunrise River" },
  { id: "river-flow", file: "river-flow.m4a", zh: "溪流潺潺", en: "Flowing River" },
  { id: "forest-waterfall", file: "forest-waterfall.m4a", zh: "森林瀑布", en: "Forest Waterfall" },
  { id: "ocean-waves", file: "ocean-waves.m4a", zh: "海浪", en: "Ocean Waves" },
  { id: "light-rain", file: "light-rain.m4a", zh: "细雨", en: "Light Rain" },
  { id: "mountain-wind", file: "mountain-wind.m4a", zh: "山风", en: "Mountain Wind" },
  { id: "distant-thunder", file: "distant-thunder.m4a", zh: "远雷", en: "Distant Thunder" },
  { id: "underwater-white-noise", file: "underwater-white-noise.m4a", zh: "水下白噪音", en: "Underwater White Noise" },
];

const contacts = [
  {
    href: "mailto:hustyy986@gmail.com",
    label: { zh: "邮箱", en: "Email" },
    value: { zh: "hustyy986@gmail.com", en: "hustyy986@gmail.com" },
  },
  {
    href: "https://xhslink.cn/m/3OF5qu7Peui",
    label: { zh: "小红书", en: "RED" },
    value: { zh: "打开主页", en: "Open profile" },
  },
  {
    href: "https://v.douyin.com/d9L1thkye0Y/",
    label: { zh: "抖音", en: "Douyin" },
    value: { zh: "打开主页", en: "Open profile" },
  },
  {
    href: "https://x.com/yongyuan1?s=11",
    label: { zh: "X", en: "X" },
    value: { zh: "@yongyuan1", en: "@yongyuan1" },
  },
  {
    href: "https://www.tiktok.com/@wonderelian?_r=1&_t=ZP-98Tvaldfrpe",
    label: { zh: "TikTok", en: "TikTok" },
    value: { zh: "@wonderelian", en: "@wonderelian" },
  },
];

const copy = {
  zh: {
    pageTitle: "WonderElian | Design, AI & Independent Creative Products",
    homeLabel: "Wonder Elian 首页",
    navLabel: "主导航",
    nav: [
      ["所见世界", "#world"],
      ["沿途所作", "#now"],
      ["片刻随记", "#notes"],
      ["关于永歌", "#about"],
    ],
    switchLanguage: "Switch to English",
    playAmbient: "播放一休白噪音",
    pauseAmbient: "暂停一休白噪音",
    ambientTitle: "选择白噪音",
    ambientCopy: "选择此刻想听的声音",
    ambientIntro: "选择一种声音，让浏览的节奏慢下来。顶部音符可随时播放或暂停。",
    ambientSelected: "当前声音",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    back: "返回",
    heroLead: "用设计理解世界，也理解自己。",
    heroSpirit: "向内认识自己，向外如水而行。",
    enterNow: "沿途所作",
    enterNowAlt: "Along the Way",
    current: "沿途所作",
    currentAlt: "ALONG THE WAY",
    behind: "幕后系统",
    behindAlt: "BEHIND THE WORK",
    publicReadonly: "公开只读",
    aboutKicker: "ABOUT ELIAN",
    aboutTitle: <>我喜欢把复杂、抽象或冰冷的事物重新组织，用设计、AI 与产品，让它们变得清楚、美、有温度。</>,
    aboutParagraphs: [
      "我是永歌 Elian。40岁，重新回到设计职场，也在下班后借助 AI，把真正感兴趣的想法一个个做成产品。",
      "我走过大厂、创业、高峰与低谷。现在，我不再急着用结果证明自己，更想认识自己、接纳自己，并把真正想做的事情认真做好。",
      "设计是我的语言，AI 是新的工具，产品是让想法真正存在的方式。面对工业机器、古老文字、新闻或人的自我探索，我都在做同一件事：发现问题、建立秩序，再把复杂的事物表达得清楚、美、有温度。",
      <><strong>WonderElian</strong> 是我的个人创作世界。这里记录作品，也记录一个40岁的设计师，如何继续理解世界、重新学习生活，并慢慢成为自己。</>,
    ],
    footerLine: "Design · AI · Products · Life",
    icpLabel: "京ICP备19022034号-4",
    backToTop: "回到开始",
    drawerTitle: "向内认识自己，向外如水而行。",
    drawerNavLabel: "探索 WonderElian",
    nightMode: "夜读模式",
    nightModeCopy: "调低光线，让眼睛和心一起慢下来",
    nightModeToggle: "切换夜读模式",
    aboutDrawer: "关于 WonderElian",
    aboutDrawerCopy: "认识这个由设计与生命探索构成的世界",
    contact: "联系 Elian",
    aboutContact: "认识 Elian",
    viewWork: "看看我做的东西",
    contactCopy: "邮箱与社交媒体",
    support: "随喜相助",
    supportCopy: "有余则助，无余亦安",
    drawerNote: "阅读、停留与分享，本身也是一种同行。",
    aboutPanelHeadline: "WonderElian",
    aboutPanelIntro: [
      "我是永歌 Elian。40岁，重新回到设计职场，也在下班后借助 AI，把真正感兴趣的想法一个个做成产品。",
      "我走过大厂、创业、高峰与低谷。现在，我不再急着用结果证明自己，更想认识自己、接纳自己，并把真正想做的事情认真做好。",
      "设计是我的语言，AI 是新的工具，产品是让想法真正存在的方式。面对工业机器、古老文字、新闻或人的自我探索，我都在做同一件事：发现问题、建立秩序，再把复杂的事物表达得清楚、美、有温度。",
      <><strong>WonderElian</strong> 是我的个人创作世界。这里记录作品，也记录一个40岁的设计师，如何继续理解世界、重新学习生活，并慢慢成为自己。</>,
    ],
    aboutMethod: "设计 × 理解 × 转译 × 创造",
    lifeKicker: "我们的生命观",
    lifeTitle: "生命不是用来证明自己的，而是用来认识、接纳、成为并活出自己。",
    lifeIntro: "真正的成长，不是把自己改造成某个标准答案，而是在变化中越来越诚实地看见自己，越来越从容地选择自己的活法。",
    lifePathLabel: "核心路径",
    lifePath: ["认识自己", "接纳自己", "成为自己", "活出自己"],
    lifeQuote: "向内认识自己，向外如水而行。",
    lifeVision: "我们愿陪伴彼此走过低谷与高峰，探索身心健康的工作与生活方式；真实面对自己与世界，善待自己、他人与生命，并在创造和欣赏中活出生命之美。",
    contactIntro: "你可以在这些地方找到 Elian。欢迎分享感受、提出建议，或只是来说声你好。",
    videoChannel: "视频号",
    viewQr: "查看二维码",
    videoCodeAlt: "Elian 的视频号二维码",
    videoCaption: "扫码关注视频号",
    supportKicker: "生而不有 · 为而不恃",
    supportTitle: "随喜相助",
    supportIntro: "若 WonderElian 的设计、内容与探索对你有一点用，你可以随心支持，让这些作品继续生长；若此刻不便，也请把这份心意留给自己。阅读、停留与分享，本身已经是同行。",
    supportCodeAlt: "Elian 的微信赞赏码",
    supportHold: "长按二维码，识别并支付",
    openCode: "单独打开二维码",
    supportClosingLead: "有余则助，无余亦安。",
    supportClosing: "谢谢你珍惜这份作品，也珍惜自己的生活。",
  },
  en: {
    pageTitle: "WonderElian | Design, AI & Independent Creative Products",
    homeLabel: "Wonder Elian home",
    navLabel: "Main navigation",
    nav: [
      ["The World", "#world"],
      ["Along the Way", "#now"],
      ["Field Notes", "#notes"],
      ["About Elian", "#about"],
    ],
    switchLanguage: "切换至中文",
    playAmbient: "Play Yixiu white noise",
    pauseAmbient: "Pause Yixiu white noise",
    ambientTitle: "Choose White Noise",
    ambientCopy: "Choose a sound for this moment",
    ambientIntro: "Choose a sound and let the pace of browsing soften. Use the note above to play or pause at any time.",
    ambientSelected: "Now playing",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    back: "Back",
    heroLead: "Using design to understand the world—and myself.",
    heroSpirit: "Know yourself within. Move like water through the world.",
    enterNow: "Along the Way",
    enterNowAlt: "沿途所作",
    current: "Along the Way",
    currentAlt: "沿途所作",
    behind: "Behind the Work",
    behindAlt: "幕后系统",
    publicReadonly: "Public read-only",
    aboutKicker: "ABOUT ELIAN",
    aboutTitle: <>I reorganize what feels complex, abstract, or cold—using design, AI, and products to make it clear, beautiful, and human.</>,
    aboutParagraphs: [
      "I am Elian. At 40, I returned to design as a profession. After work, I use AI to turn ideas I genuinely care about into products.",
      "I have moved through big tech, startups, highs, and long lows. I no longer want results to prove my worth. I want to know and accept myself, and give honest effort to the things I truly want to make.",
      "Design is my language. AI is a new tool. Products are how ideas become real. Whether the subject is an industrial machine, an ancient text, the news, or self-understanding, I keep doing the same thing: finding the problem, creating order, and making complexity clear, beautiful, and human.",
      <><strong>WonderElian</strong> is my personal world of making. It holds the work, but also the story of a 40-year-old designer continuing to understand the world, relearn how to live, and slowly become myself.</>,
    ],
    footerLine: "Design · AI · Products · Life",
    icpLabel: "京ICP备19022034号-4",
    backToTop: "Back to the beginning",
    drawerTitle: "Know yourself within. Move like water through the world.",
    drawerNavLabel: "Explore WonderElian",
    nightMode: "Night mode",
    nightModeCopy: "Soften the light and let your eyes and mind slow down",
    nightModeToggle: "Toggle night mode",
    aboutDrawer: "About WonderElian",
    aboutDrawerCopy: "Meet a world shaped by design and the exploration of life",
    contact: "Contact Elian",
    aboutContact: "Meet Elian",
    viewWork: "See what I make",
    contactCopy: "Email and social channels",
    support: "Support the journey",
    supportCopy: "Give freely, or simply stay and read in peace",
    drawerNote: "Reading, pausing, and sharing are already ways of taking part.",
    aboutPanelHeadline: "WonderElian",
    aboutPanelIntro: [
      "I am Elian. At 40, I returned to design as a profession. After work, I use AI to turn ideas I genuinely care about into products.",
      "I have moved through big tech, startups, highs, and long lows. I no longer want results to prove my worth. I want to know and accept myself, and give honest effort to the things I truly want to make.",
      "Design is my language. AI is a new tool. Products are how ideas become real. Whether the subject is an industrial machine, an ancient text, the news, or self-understanding, I keep doing the same thing: finding the problem, creating order, and making complexity clear, beautiful, and human.",
      <><strong>WonderElian</strong> is my personal world of making. It holds the work, but also the story of a 40-year-old designer continuing to understand the world, relearn how to live, and slowly become myself.</>,
    ],
    aboutMethod: "DESIGN × UNDERSTANDING × TRANSLATION × MAKING",
    lifeKicker: "Our philosophy of life",
    lifeTitle: "Life is not for proving yourself. It is for knowing, accepting, becoming, and living as yourself.",
    lifeIntro: "Growth is not the work of turning yourself into a standard answer. It is learning to see yourself more honestly through change, and to choose your way of living with greater ease.",
    lifePathLabel: "Core path",
    lifePath: ["Know yourself", "Accept yourself", "Become yourself", "Live as yourself"],
    lifeQuote: "Know yourself within; move through the world like water.",
    lifeVision: "We hope to accompany one another through valleys and peaks, exploring healthier ways to work and live: facing self and world truthfully, treating life with kindness, and creating and appreciating beauty.",
    contactIntro: "These are the places where you can find Elian. Share a thought, suggest an idea, or simply say hello.",
    videoChannel: "WeChat Channels",
    viewQr: "View QR code",
    videoCodeAlt: "Elian's WeChat Channels QR code",
    videoCaption: "Scan to follow on WeChat Channels",
    supportKicker: "CREATE WITHOUT POSSESSING · GIVE WITHOUT CLAIMING",
    supportTitle: "Support the journey",
    supportIntro: "If WonderElian's designs, stories, or explorations have been useful, you may support their continued growth. If now is not the moment, keep that care for yourself. Reading, pausing, and sharing are already ways of walking together.",
    supportCodeAlt: "Elian's WeChat appreciation code",
    supportHold: "Press and hold the QR code to recognize it",
    openCode: "Open the QR code on its own",
    supportClosingLead: "Give when you can; be at ease when you cannot.",
    supportClosing: "Thank you for valuing this work—and your own life.",
  },
};

const supportCodeUrl = `${import.meta.env.BASE_URL}assets/support-wechat-appreciation-v2.jpeg`;
const videoChannelUrl = `${import.meta.env.BASE_URL}assets/video-channel.jpg`;

function Wordmark({ label, text = "WONDER ELIAN", href = "#world" }) {
  return (
    <a className="wordmark" href={href} aria-label={label}>
      {text}
    </a>
  );
}

function RichTextLines({ text }) {
  return text.split("\n").map((line, index) => (
    <span key={`${line}-${index}`}>
      {line.replace(/^>\s?/, "")}
      {index < text.split("\n").length - 1 ? <br /> : null}
    </span>
  ));
}

function ArticleBody({ content }) {
  const blocks = content.trim().split(/\n\s*\n/);

  return (
    <div className="article-body">
      {blocks.map((block, index) => {
        const imageMatch = block.match(/^!\[(.*?)\]\((.*?)\)$/s);
        if (imageMatch) {
          const [, alt, src] = imageMatch;
          return (
            <figure className={src.endsWith("image-07.png") ? "article-figure article-figure--poster" : "article-figure"} key={`${src}-${index}`}>
              <img src={src} alt={alt} loading={index === 0 ? "eager" : "lazy"} decoding="async" />
              {alt ? <figcaption>{alt}</figcaption> : null}
            </figure>
          );
        }

        if (block.startsWith("## ")) {
          const heading = block.slice(3);
          const [chapter, ...title] = heading.split("｜");
          return (
            <header className="article-chapter" key={`${heading}-${index}`}>
              <span>{chapter}</span>
              <h2>{title.join("｜")}</h2>
            </header>
          );
        }

        if (block.startsWith("### ")) {
          return <h3 key={`${block}-${index}`}>{block.slice(4)}</h3>;
        }

        if (block.startsWith("> ")) {
          return <blockquote key={`${block}-${index}`}><RichTextLines text={block} /></blockquote>;
        }

        return <p key={`${block}-${index}`}><RichTextLines text={block} /></p>;
      })}
    </div>
  );
}

function NotesSection({ language }) {
  return (
    <section className="notes-section" id="notes" aria-labelledby="notes-title">
      <div className="notes-heading">
        <div>
          <p className="eyebrow">{language === "zh" ? "片刻随记" : "FIELD NOTES"}</p>
          <h2 id="notes-title">{language === "zh" ? "写下此刻，也留给以后。" : "Notes from the present, kept for what comes next."}</h2>
        </div>
        <p>{language === "zh" ? "关于设计、AI、产品与生活。这里会慢慢收录更多文章。" : "Essays on design, AI, products, and life. More will gather here over time."}</p>
      </div>

      <div className="notes-grid">
        {articles.map((article, index) => {
          const item = article[language];
          return (
            <a className="note-card" href={`/notes/${article.slug}/`} key={article.slug}>
              <img src={article.cover} alt="" loading="lazy" decoding="async" />
              <span className="note-card-number">{String(index + 1).padStart(2, "0")}</span>
              <div className="note-card-copy">
                <p>{item.label}</p>
                <h3>{item.title}</h3>
                <span className="note-card-excerpt">{item.excerpt}</span>
                <span className="note-card-meta">{article.date.replaceAll("-", ".")} · {article.readingTime[language]}</span>
                <span className="note-card-read">{item.read}<ArrowRight size={19} weight="light" aria-hidden="true" /></span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

function ArticlePage({ article, language }) {
  const item = article[language];

  return (
    <main className="article-page">
      <article>
        <header className="article-hero">
          <a className="article-back" href="/#notes"><ArrowLeft size={18} weight="light" aria-hidden="true" />{item.back}</a>
          <p className="eyebrow">{item.label}</p>
          <h1>{item.title}</h1>
          <p className="article-deck">{item.excerpt}</p>
          <div className="article-meta">
            <span>Design · AI · Products · Life</span>
            <span>{article.author[language]}</span>
            <span>{article.date.replaceAll("-", ".")}</span>
            <span>{article.readingTime[language]}</span>
          </div>
        </header>
        <ArticleBody content={item.content} />
      </article>

      <footer className="article-end">
        <span>{language === "zh" ? "向内认识自己，向外如水而行。" : "Know yourself within. Move like water through the world."}</span>
        <a href="/#notes">{item.back}<ArrowRight size={18} weight="light" aria-hidden="true" /></a>
      </footer>
    </main>
  );
}

function LanguageToggle({ language, label, onToggle, compact = false }) {
  return (
    <button
      className={`language-toggle ${compact ? "is-compact" : ""}`}
      type="button"
      aria-label={label}
      onClick={onToggle}
    >
      <span className={language === "zh" ? "is-active" : ""}>中</span>
      <i aria-hidden="true">/</i>
      <span className={language === "en" ? "is-active" : ""}>EN</span>
    </button>
  );
}

export function App() {
  const [language, setLanguage] = useState(() => window.localStorage.getItem("wonderelian-language") || "en");
  const [theme, setTheme] = useState(() => window.localStorage.getItem("wonderelian-theme") || "light");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerView, setDrawerView] = useState("home");
  const [supportOpen, setSupportOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [ambientPlaying, setAmbientPlaying] = useState(false);
  const [ambientSound, setAmbientSound] = useState("morning-birds");
  const ambientAudioRef = useRef(null);
  const ambientResumeRef = useRef(false);
  const c = copy[language];
  const isZh = language === "zh";
  const activeAmbientSound = ambientSounds.find((sound) => sound.id === ambientSound) || ambientSounds[0];
  const activeAmbientLabel = activeAmbientSound[language];
  const articleSlug = window.location.pathname.match(/^\/notes\/([^/]+)\/?$/)?.[1];
  const activeArticle = articles.find((article) => article.slug === articleSlug);
  const homeHref = activeArticle ? "/#world" : "#world";

  useEffect(() => {
    document.documentElement.lang = isZh ? "zh-CN" : "en";
    document.title = activeArticle ? `${activeArticle[language].title} | WonderElian` : c.pageTitle;
    const canonicalUrl = activeArticle
      ? `https://wonderelian.com/notes/${activeArticle.slug}/`
      : "https://wonderelian.com/";
    const description = activeArticle
      ? activeArticle[language].excerpt
      : document.querySelector('meta[name="description"]')?.dataset.homeContent;
    const canonical = document.querySelector('link[rel="canonical"]');
    const descriptionMeta = document.querySelector('meta[name="description"]');
    const ogType = document.querySelector('meta[property="og:type"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const ogImage = document.querySelector('meta[property="og:image"]');

    if (descriptionMeta && !descriptionMeta.dataset.homeContent) {
      descriptionMeta.dataset.homeContent = descriptionMeta.content;
    }
    if (canonical) canonical.href = canonicalUrl;
    if (descriptionMeta && description) descriptionMeta.content = description;
    if (ogType) ogType.content = activeArticle ? "article" : "website";
    if (ogTitle) ogTitle.content = activeArticle ? activeArticle[language].title : c.pageTitle;
    if (ogDescription && activeArticle) ogDescription.content = activeArticle[language].excerpt;
    if (ogUrl) ogUrl.content = canonicalUrl;
    if (ogImage && activeArticle) ogImage.content = `https://wonderelian.com${activeArticle.cover}`;
    window.localStorage.setItem("wonderelian-language", language);
  }, [activeArticle, c.pageTitle, isZh, language]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("wonderelian-theme", theme);
  }, [theme]);

  useEffect(() => {
    if (ambientAudioRef.current) ambientAudioRef.current.volume = 0.34;
  }, []);

  useEffect(() => {
    if (!ambientResumeRef.current || !ambientAudioRef.current) return;
    ambientResumeRef.current = false;
    ambientAudioRef.current.play().catch(() => setAmbientPlaying(false));
  }, [ambientSound]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen || supportOpen || videoOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen, supportOpen, videoOpen]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setSupportOpen(false);
        setVideoOpen(false);
        setDrawerOpen(false);
        setDrawerView("home");
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const toggleLanguage = () => setLanguage((current) => (current === "zh" ? "en" : "zh"));
  const toggleAmbient = async () => {
    const audio = ambientAudioRef.current;
    if (!audio) return;
    if (audio.paused) {
      try {
        await audio.play();
      } catch {
        setAmbientPlaying(false);
      }
    } else {
      audio.pause();
    }
  };
  const selectAmbientSound = (sound) => {
    const audio = ambientAudioRef.current;
    if (sound.id === ambientSound) return;
    ambientResumeRef.current = audio ? !audio.paused : false;
    setAmbientSound(sound.id);
  };
  const closeDrawer = () => {
    setDrawerOpen(false);
    setDrawerView("home");
  };
  const toggleDrawer = () => {
    if (drawerOpen) {
      closeDrawer();
    } else {
      setDrawerView("home");
      setDrawerOpen(true);
    }
  };
  const openSupport = () => {
    setDrawerOpen(false);
    setDrawerView("home");
    setSupportOpen(true);
  };
  const openContact = () => {
    setDrawerView("contact");
    setDrawerOpen(true);
  };
  const drawerHeading = drawerView === "about"
    ? c.aboutDrawer
    : drawerView === "contact"
      ? c.contact
      : drawerView === "ambient"
        ? c.ambientTitle
        : "Wonder Elian";

  return (
    <div className="site-shell">
      <header className="site-header">
        <Wordmark label={c.homeLabel} text="Wonder Elian" href={homeHref} />

        <div className="header-actions">
          <nav className="main-nav" aria-label={c.navLabel}>
            {c.nav.map(([label, href]) => (
              <a key={label} href={activeArticle ? `/${href}` : href}>{label}</a>
            ))}
          </nav>

          <button
            className={`ambient-toggle ${ambientPlaying ? "is-playing" : ""}`}
            type="button"
            aria-label={`${ambientPlaying ? c.pauseAmbient : c.playAmbient} · ${activeAmbientLabel}`}
            aria-pressed={ambientPlaying}
            title={`${ambientPlaying ? c.pauseAmbient : c.playAmbient} · ${activeAmbientLabel}`}
            onClick={toggleAmbient}
          >
            <span className="ambient-glyph" aria-hidden="true">
              <span className="ambient-wave ambient-wave-one" />
              <span className="ambient-wave ambient-wave-two" />
              <MusicNoteSimple
                className="ambient-note"
                size={18}
                weight={ambientPlaying ? "fill" : "regular"}
              />
            </span>
          </button>

          <LanguageToggle language={language} label={c.switchLanguage} onToggle={toggleLanguage} />

          <button
            className="menu-toggle"
            type="button"
            aria-label={drawerOpen ? c.closeMenu : c.openMenu}
            aria-expanded={drawerOpen}
            aria-controls="wonderelian-drawer"
            onClick={toggleDrawer}
          >
            {drawerOpen ? <X size={22} weight="light" /> : <List size={24} weight="light" />}
          </button>
        </div>
      </header>

      <audio
        ref={ambientAudioRef}
        src={`${import.meta.env.BASE_URL}assets/audio/${activeAmbientSound.file}`}
        preload="none"
        loop
        onPlay={() => setAmbientPlaying(true)}
        onPause={() => setAmbientPlaying(false)}
      />

      {activeArticle ? <ArticlePage article={activeArticle} language={language} /> : <main>
        <section className="hero" id="world" aria-labelledby="hero-title">
          <img
            className="hero-current"
            src={`${import.meta.env.BASE_URL}assets/hero-flow-image2-v3.webp`}
            alt=""
            aria-hidden="true"
            decoding="async"
            fetchPriority="high"
          />

          <div className="hero-copy">
            <h1 id="hero-title">Designing things.<br />Exploring life.</h1>
            <p className="hero-lead">{c.heroLead}</p>
            <span className="short-rule" aria-hidden="true" />
            <p className="hero-spirit">{c.heroSpirit}</p>

            <a className="text-cta" href="#now">
              <span>{c.enterNow}</span>
              <span>{c.enterNowAlt}</span>
              <ArrowRight size={19} weight="light" aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="now-section" id="now" aria-labelledby="now-title">
          <div className="section-label">
            <span id="now-title">{c.current}</span>
            <span>{c.currentAlt}</span>
          </div>

          <div className="project-list">
            {projects.map((project) => {
              const projectCopy = project[language];
              return (
                <a
                  className={`project-entry project-entry--${project.number}${project.featured ? " project-entry--featured" : " project-entry--app"}`}
                  href={project.href}
                  key={project.number}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="project-background"
                    src={`${import.meta.env.BASE_URL}${project.image}`}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="project-number" aria-hidden="true">{project.number}</span>
                  <div className="project-main">
                    {project.icon ? (
                      <img
                        className="project-icon"
                        src={`${import.meta.env.BASE_URL}${project.icon}`}
                        alt={`${projectCopy.title} App icon`}
                        loading="lazy"
                        decoding="async"
                      />
                    ) : null}
                    <div className="project-copy-block">
                      <p className="project-kicker">{projectCopy.kicker}</p>
                      <h2>{projectCopy.title}</h2>
                      <p className="project-description">{projectCopy.description}</p>
                      <ArrowRight className="project-arrow" size={21} weight="light" aria-hidden="true" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="systems-showcase">
            <div className="section-label section-label--systems">
              <span>{c.behind}</span>
              <span>{c.behindAlt}</span>
            </div>

            <a
              className="project-entry project-entry--system"
              href={opsProject.href}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="project-background"
                src={`${import.meta.env.BASE_URL}${opsProject.image}`}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
              />
              <span className="project-number" aria-hidden="true">{opsProject.number}</span>
              <div className="project-main">
                <div className="project-copy-block">
                  <div className="project-kicker-line">
                    <p className="project-kicker">{opsProject[language].kicker}</p>
                    <span className="project-access-badge">{c.publicReadonly}</span>
                  </div>
                  <h2>{opsProject[language].title}</h2>
                  <p className="project-description">{opsProject[language].description}</p>
                  <span className="project-access-link">
                    {opsProject[language].access}
                    <ArrowRight size={18} weight="light" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </a>
          </div>
        </section>

        <NotesSection language={language} />

        <section className="about-section" id="about" aria-labelledby="about-title">
          <p className="eyebrow">{c.aboutKicker}</p>
          <div className="about-layout">
            <div className="about-heading">
              <h2 id="about-title">{c.aboutTitle}</h2>
              <div className="about-actions">
                <button className="about-contact" type="button" onClick={openContact}>
                  <span>{c.aboutContact}</span>
                  <ArrowRight size={18} weight="light" aria-hidden="true" />
                </button>
                <a className="about-contact" href="#now">
                  <span>{c.viewWork}</span>
                  <ArrowRight size={18} weight="light" aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="about-copy">
              {c.aboutParagraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </div>
          </div>
        </section>

      </main>}

      <footer className="site-footer">
        <Wordmark label={c.homeLabel} text="Wonder Elian" href={homeHref} />
        <p>{c.footerLine}</p>
        <a className="icp-link" href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">
          {c.icpLabel}
        </a>
        <a href={homeHref}>{c.backToTop}</a>
      </footer>

      {drawerOpen ? (
        <div className="drawer-layer">
          <button className="drawer-backdrop" type="button" aria-label={c.closeMenu} onClick={closeDrawer} />
          <aside className="site-drawer" id="wonderelian-drawer" role="dialog" aria-modal="true" aria-labelledby="drawer-title">
            <header className={`drawer-header ${drawerView !== "home" ? "has-back" : ""}`}>
              {drawerView !== "home" ? (
                <button className="drawer-back" type="button" aria-label={c.back} onClick={() => setDrawerView("home")}>
                  <ArrowLeft size={21} weight="light" />
                </button>
              ) : null}
              <div>
                <strong id="drawer-title">{drawerHeading}</strong>
              </div>
              <LanguageToggle compact language={language} label={c.switchLanguage} onToggle={toggleLanguage} />
              <button className="drawer-close" type="button" aria-label={c.closeMenu} onClick={closeDrawer}>
                <X size={23} weight="light" />
              </button>
            </header>

            <div className="drawer-scroll">
              {drawerView === "home" ? (
                <>
                  <p className="drawer-statement">{c.drawerTitle}</p>

                  <nav className="drawer-primary-nav" aria-label={c.drawerNavLabel}>
                    {c.nav.map(([label, href], index) => (
                      <a href={activeArticle ? `/${href}` : href} key={label} onClick={closeDrawer}>
                        <span>0{index + 1}</span>
                        <strong>{label}</strong>
                        <ArrowRight size={18} weight="light" aria-hidden="true" />
                      </a>
                    ))}
                  </nav>

                  <div className="drawer-utilities">
                    <div className="drawer-utility-row">
                      <span className="drawer-utility-icon">{theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}</span>
                      <span>
                        <strong>{c.nightMode}</strong>
                        <small>{c.nightModeCopy}</small>
                      </span>
                      <button
                        className={`theme-toggle ${theme === "dark" ? "is-on" : ""}`}
                        type="button"
                        role="switch"
                        aria-checked={theme === "dark"}
                        aria-label={c.nightModeToggle}
                        onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
                      >
                        <span />
                      </button>
                    </div>

                    <button className="drawer-utility-row" type="button" onClick={() => setDrawerView("ambient")}>
                      <span className="drawer-utility-icon"><MusicNoteSimple size={20} /></span>
                      <span>
                        <strong>{c.ambientTitle}</strong>
                        <small>{activeAmbientLabel} · {c.ambientCopy}</small>
                      </span>
                      <ArrowRight size={18} weight="light" aria-hidden="true" />
                    </button>

                    <button className="drawer-utility-row" type="button" onClick={() => setDrawerView("about")}>
                      <span className="drawer-utility-icon"><Info size={20} /></span>
                      <span>
                        <strong>{c.aboutDrawer}</strong>
                        <small>{c.aboutDrawerCopy}</small>
                      </span>
                      <ArrowRight size={18} weight="light" aria-hidden="true" />
                    </button>

                    <button className="drawer-utility-row" type="button" onClick={() => setDrawerView("contact")}>
                      <span className="drawer-utility-icon"><EnvelopeSimple size={20} /></span>
                      <span>
                        <strong>{c.contact}</strong>
                        <small>{c.contactCopy}</small>
                      </span>
                      <ArrowRight size={18} weight="light" aria-hidden="true" />
                    </button>

                    <button className="drawer-utility-row" type="button" onClick={openSupport}>
                      <span className="drawer-utility-icon"><Heart size={20} /></span>
                      <span>
                        <strong>{c.support}</strong>
                        <small>{c.supportCopy}</small>
                      </span>
                      <ArrowRight size={18} weight="light" aria-hidden="true" />
                    </button>
                  </div>

                  <p className="drawer-note">{c.drawerNote}</p>
                </>
              ) : null}

              {drawerView === "about" ? (
                <section className="drawer-prose">
                  <h3>{c.aboutPanelHeadline}</h3>
                  {c.aboutPanelIntro.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                  <p className="drawer-method">{c.aboutMethod}</p>

                  <section className="life-philosophy">
                    <span className="drawer-kicker">{c.lifeKicker}</span>
                    <h4>{c.lifeTitle}</h4>
                    <p>{c.lifeIntro}</p>
                    <div className="life-path" aria-label={c.lifePathLabel}>
                      {c.lifePath.map((item, index) => (
                        <div key={item}>
                          <span>{String(index + 1).padStart(2, "0")}</span>
                          <strong>{item}</strong>
                        </div>
                      ))}
                    </div>
                    <div className="life-principles">
                      {worlds.map((world) => (
                        <article key={world.number}>
                          <strong>{world[language].title}</strong>
                          <p>{world[language].copy}</p>
                        </article>
                      ))}
                    </div>
                    <blockquote>{c.lifeQuote}</blockquote>
                    <p className="life-vision">{c.lifeVision}</p>
                  </section>
                </section>
              ) : null}

              {drawerView === "contact" ? (
                <section className="contact-section" aria-label={c.contact}>
                  <p className="drawer-intro">{c.contactIntro}</p>
                  <div className="contact-list">
                    {contacts.map((contact) => (
                      <a
                        key={contact.href}
                        href={contact.href}
                        target={contact.href.startsWith("mailto:") ? undefined : "_blank"}
                        rel={contact.href.startsWith("mailto:") ? undefined : "noreferrer"}
                      >
                        <span>{contact.label[language]}</span>
                        <strong>{contact.value[language]}</strong>
                        <ArrowRight size={18} weight="light" aria-hidden="true" />
                      </a>
                    ))}
                    <button type="button" onClick={() => setVideoOpen(true)}>
                      <span>{c.videoChannel}</span>
                      <strong>{c.viewQr}</strong>
                      <ArrowRight size={18} weight="light" aria-hidden="true" />
                    </button>
                  </div>
                </section>
              ) : null}

              {drawerView === "ambient" ? (
                <section className="ambient-section" aria-label={c.ambientTitle}>
                  <p className="drawer-intro">{c.ambientIntro}</p>
                  <div className="ambient-sound-list">
                    {ambientSounds.map((sound, index) => {
                      const selected = sound.id === ambientSound;
                      return (
                        <button
                          className={selected ? "is-selected" : ""}
                          type="button"
                          key={sound.id}
                          aria-pressed={selected}
                          onClick={() => selectAmbientSound(sound)}
                        >
                          <span>{String(index + 1).padStart(2, "0")}</span>
                          <strong>{sound[language]}</strong>
                          {selected ? (
                            <span className="ambient-selected">
                              <Check size={17} weight="bold" aria-hidden="true" />
                              <small>{c.ambientSelected}</small>
                            </span>
                          ) : null}
                        </button>
                      );
                    })}
                  </div>
                </section>
              ) : null}
            </div>
          </aside>
        </div>
      ) : null}

      {supportOpen ? (
        <div className="support-layer">
          <button className="support-backdrop" type="button" aria-label={c.closeMenu} onClick={() => setSupportOpen(false)} />
          <section className="support-dialog" role="dialog" aria-modal="true" aria-labelledby="support-title">
            <button className="support-close" type="button" aria-label={c.closeMenu} onClick={() => setSupportOpen(false)}>
              <X size={23} weight="light" />
            </button>
            <p className="eyebrow">{c.supportKicker}</p>
            <h2 id="support-title">{c.supportTitle}</h2>
            <p>{c.supportIntro}</p>
            <figure>
              <img src={supportCodeUrl} alt={c.supportCodeAlt} />
              <div className="support-recognition">
                <strong>{c.supportHold}</strong>
                <span>
                  <a href={supportCodeUrl} target="_blank" rel="noreferrer">{c.openCode}</a>
                </span>
              </div>
              <figcaption>
                <strong>{c.supportClosingLead}</strong>
                <span>{c.supportClosing}</span>
              </figcaption>
            </figure>
          </section>
        </div>
      ) : null}

      {videoOpen ? (
        <div className="video-layer">
          <button className="support-backdrop" type="button" aria-label={c.closeMenu} onClick={() => setVideoOpen(false)} />
          <figure className="video-dialog" role="dialog" aria-modal="true" aria-label={c.videoChannel}>
            <button className="support-close" type="button" aria-label={c.closeMenu} onClick={() => setVideoOpen(false)}>
              <X size={23} weight="light" />
            </button>
            <img src={videoChannelUrl} alt={c.videoCodeAlt} />
            <figcaption>{c.videoCaption}</figcaption>
          </figure>
        </div>
      ) : null}
    </div>
  );
}
