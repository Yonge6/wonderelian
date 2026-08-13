import { useEffect, useState } from "react";
import "@fontsource/noto-sans-sc/400.css";
import "@fontsource/noto-sans-sc/500.css";
import "@fontsource/noto-serif-sc/400.css";
import "@fontsource/noto-serif-sc/600.css";
import {
  ArrowLeft,
  ArrowRight,
  EnvelopeSimple,
  Heart,
  Info,
  List,
  Moon,
  Sun,
  X,
} from "@phosphor-icons/react";

const projects = [
  {
    number: "01",
    href: "https://yixiu.wonderelian.com",
    image: "assets/project-yixiu-image2.webp",
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
];

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
    pageTitle: "WONDER ELIAN — Designing things. Exploring life.",
    homeLabel: "Wonder Elian 首页",
    navLabel: "主导航",
    nav: [
      ["世界", "#world"],
      ["作品", "#now"],
      ["随记", "#notes"],
      ["关于", "#about"],
    ],
    switchLanguage: "Switch to English",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    back: "返回",
    heroLead: "用设计理解世界，也理解自己。",
    heroSpirit: "向内认识自己，向外如水而行。",
    enterNow: "进入此刻",
    enterNowAlt: "Enter the now",
    current: "此刻",
    currentAlt: "RIGHT NOW",
    waysKicker: "FOUR WAYS OF BEING",
    waysTitle: <><span>认识自己，接纳自己，</span><span>成为自己，活出自己。</span></>,
    aboutKicker: "ABOUT ELIAN",
    aboutTitle: <>把复杂的事物，<br />重新变得清楚而有品味。</>,
    aboutParagraphs: [
      "我喜欢把复杂、抽象或冰冷的事物，重新组织成清楚、美、有品味、让人愿意接近的东西。",
      "有时它是一台工业机器，有时是一段古老文字，有时是一个网站、App、玩偶、商品等等。WonderElian 是这些探索共同生长的地方。",
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
    aboutDrawerCopy: "认识这个由设计与生命探索构成的个人世界",
    contact: "联系 Elian",
    aboutContact: "联系 Elian",
    contactCopy: "邮箱与社交媒体",
    support: "随喜相助",
    supportCopy: "有余则助，无余亦安",
    drawerNote: "阅读、停留与分享，本身也是一种同行。",
    aboutPanelHeadline: "WonderElian",
    aboutPanelIntro: [
      "这里同时存在品牌设计、AI 创作实验、古老文字、人类图、插画角色、文章、摄影与生活。",
      "这些看似不同的探索，底层都来自同一件事：把复杂、抽象或冰冷的事物，重新组织成清楚、美、有品味、让人愿意接近的东西。",
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
    pageTitle: "WONDER ELIAN — Designing things. Exploring life.",
    homeLabel: "Wonder Elian home",
    navLabel: "Main navigation",
    nav: [
      ["World", "#world"],
      ["Works", "#now"],
      ["Notes", "#notes"],
      ["About", "#about"],
    ],
    switchLanguage: "切换至中文",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    back: "Back",
    heroLead: "Using design to understand the world—and myself.",
    heroSpirit: "Know yourself within. Move like water through the world.",
    enterNow: "Enter the now",
    enterNowAlt: "进入此刻",
    current: "Current work",
    currentAlt: "RIGHT NOW",
    waysKicker: "FOUR WAYS OF BEING",
    waysTitle: <><span>Know yourself. Welcome yourself.</span><span>Become yourself. Live as yourself.</span></>,
    aboutKicker: "ABOUT ELIAN",
    aboutTitle: <>Making complex things<br />clear, beautiful, and felt.</>,
    aboutParagraphs: [
      "I like reorganizing complex, abstract, or cold things into something clear, beautiful, and human—something people want to come closer to.",
      "Sometimes it is an industrial machine, sometimes an ancient text, sometimes a map of a person. WonderElian is not a job title. It is where all these explorations grow together.",
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
    aboutDrawerCopy: "Meet a personal world shaped by design and the exploration of life",
    contact: "Contact Elian",
    aboutContact: "Contact Elian",
    contactCopy: "Email and social channels",
    support: "Support the journey",
    supportCopy: "Give freely, or simply stay and read in peace",
    drawerNote: "Reading, pausing, and sharing are already ways of taking part.",
    aboutPanelHeadline: "WonderElian is not a job title. It is my personal world.",
    aboutPanelIntro: [
      "Brand design, AI experiments, ancient texts, Human Design, illustrated characters, essays, photography, and life can all exist here.",
      "What connects these different explorations is a single impulse: reorganizing complex, abstract, or cold things into something clear, beautiful, and human—something people want to come closer to.",
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

function Wordmark({ label, text = "WONDER ELIAN" }) {
  return (
    <a className="wordmark" href="#world" aria-label={label}>
      {text}
    </a>
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
  const [language, setLanguage] = useState(() => window.localStorage.getItem("wonderelian-language") || "zh");
  const [theme, setTheme] = useState(() => window.localStorage.getItem("wonderelian-theme") || "light");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerView, setDrawerView] = useState("home");
  const [supportOpen, setSupportOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const c = copy[language];
  const isZh = language === "zh";

  useEffect(() => {
    document.documentElement.lang = isZh ? "zh-CN" : "en";
    document.title = c.pageTitle;
    window.localStorage.setItem("wonderelian-language", language);
  }, [c.pageTitle, isZh, language]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("wonderelian-theme", theme);
  }, [theme]);

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
      : "Wonder Elian";

  return (
    <div className="site-shell">
      <header className="site-header">
        <Wordmark label={c.homeLabel} text="Wonder Elian" />

        <div className="header-actions">
          <nav className="main-nav" aria-label={c.navLabel}>
            {c.nav.map(([label, href]) => (
              <a key={label} href={href}>{label}</a>
            ))}
          </nav>

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

      <main>
        <section className="hero" id="world" aria-labelledby="hero-title">
          <img
            className="hero-current"
            src={`${import.meta.env.BASE_URL}assets/hero-flow-image2-v3.webp`}
            alt=""
            aria-hidden="true"
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
                  className="project-entry"
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
                  />
                  <span className="project-number" aria-hidden="true">{project.number}</span>
                  <div>
                    <p className="project-kicker">{projectCopy.kicker}</p>
                    <h2>{projectCopy.title}</h2>
                  </div>
                  <p>{projectCopy.description}</p>
                  <ArrowRight className="project-arrow" size={21} weight="light" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </section>

        <section className="worlds-section" id="notes" aria-labelledby="worlds-title">
          <div className="worlds-intro">
            <p className="eyebrow">{c.waysKicker}</p>
            <h2 id="worlds-title">{c.waysTitle}</h2>
          </div>

          <div className="worlds-grid">
            {worlds.map((world) => {
              const worldCopy = world[language];
              return (
                <article className="world-item" key={world.number}>
                  <span className="world-number">{world.number}</span>
                  <h3>{worldCopy.title}</h3>
                  <p>{worldCopy.copy}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="about-section" id="about" aria-labelledby="about-title">
          <p className="eyebrow">{c.aboutKicker}</p>
          <div className="about-layout">
            <div className="about-heading">
              <h2 id="about-title">{c.aboutTitle}</h2>
              <button className="about-contact" type="button" onClick={openContact}>
                <span>{c.aboutContact}</span>
                <ArrowRight size={18} weight="light" aria-hidden="true" />
              </button>
            </div>
            <div className="about-copy">
              {c.aboutParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </section>

      </main>

      <footer className="site-footer">
        <Wordmark label={c.homeLabel} text="Wonder Elian" />
        <p>{c.footerLine}</p>
        <a className="icp-link" href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">
          {c.icpLabel}
        </a>
        <a href="#world">{c.backToTop}</a>
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
                      <a href={href} key={label} onClick={closeDrawer}>
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
                  {c.aboutPanelIntro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
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
