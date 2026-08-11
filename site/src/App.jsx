import { useEffect, useState } from "react";
import {
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
    href: "https://xiazishuo.com",
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
    number: "02",
    href: "https://style-atlas.wonderelian.com",
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
    number: "03",
    href: "https://human-design.wonderelian.com",
    zh: {
      title: "认识自己",
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
    number: "04",
    href: "https://wendao.wonderelian.com",
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
    number: "05",
    href: "https://yixiu.wonderelian.com",
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

const copy = {
  zh: {
    pageTitle: "Wonder Elian — Elian 永歌的个人世界",
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
    heroLead: "用设计理解世界，也理解自己。",
    heroSpirit: "向内认识自己，向外如水而行。",
    enterNow: "进入此刻",
    enterNowAlt: "Enter the now",
    current: "此刻",
    currentAlt: "RIGHT NOW",
    waysKicker: "FOUR WAYS OF BEING",
    waysTitle: <>认识自己，接纳自己，<br />成为自己，活出自己。</>,
    aboutKicker: "ABOUT ELIAN",
    aboutTitle: <>把复杂的事物，<br />重新变得清楚而有感觉。</>,
    aboutParagraphs: [
      "我喜欢把复杂、抽象或冰冷的事物，重新组织成清楚、美、有感觉、让人愿意接近的东西。",
      "有时它是一台工业机器，有时是一段古老文字，有时是一张关于人的图。WonderElian 不是职业名称，而是这些探索共同生长的地方。",
    ],
    mapKicker: "A QUIET INNER MAP",
    mapTitle: "Human Design",
    mapCopy: "不是用来定义自己，而是多一种方式观察身体的回应、能量与选择。",
    footerLine: "用设计理解世界，也理解自己。",
    backToTop: "回到开始",
    drawerKicker: "永歌的好奇世界",
    drawerTitle: "向内认识自己，向外如水而行。",
    drawerNavLabel: "探索 WonderElian",
    nightMode: "夜读模式",
    nightModeCopy: "调低光线，让眼睛和心一起慢下来",
    nightModeToggle: "切换夜读模式",
    aboutDrawer: "关于 WonderElian",
    aboutDrawerCopy: "设计、理解、转译与创造共同生长的地方",
    contact: "联系 Elian",
    contactCopy: "通过邮件说声你好",
    support: "随喜相助",
    supportCopy: "有余则助，无余亦安",
    drawerNote: "阅读、停留与分享，本身也是一种同行。",
    supportKicker: "有余相助",
    supportTitle: "随喜相助",
    supportIntro: "若这些设计、内容与探索曾对你有一点帮助，可以让一份心意继续流动；也可以把它留给自己，照顾此刻真正需要的生活。",
    supportCodeAlt: "Elian 的微信赞赏码",
    supportCaption: "微信扫码，随心随喜。谢谢你让这些探索继续发生。",
    openCode: "单独打开赞赏码",
  },
  en: {
    pageTitle: "Wonder Elian — Designing things. Exploring life.",
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
    heroLead: "Using design to understand the world—and myself.",
    heroSpirit: "Know yourself within. Move like water through the world.",
    enterNow: "Enter the now",
    enterNowAlt: "进入此刻",
    current: "Current work",
    currentAlt: "RIGHT NOW",
    waysKicker: "FOUR WAYS OF BEING",
    waysTitle: <>Know yourself. Welcome yourself.<br />Become yourself. Live as yourself.</>,
    aboutKicker: "ABOUT ELIAN",
    aboutTitle: <>Making complex things<br />clear, beautiful, and felt.</>,
    aboutParagraphs: [
      "I like reorganizing complex, abstract, or cold things into something clear, beautiful, and human—something people want to come closer to.",
      "Sometimes it is an industrial machine, sometimes an ancient text, sometimes a map of a person. WonderElian is not a job title. It is where all these explorations grow together.",
    ],
    mapKicker: "A QUIET INNER MAP",
    mapTitle: "Human Design",
    mapCopy: "Not a way to define yourself, but another lens for noticing the body's responses, energy, and choices.",
    footerLine: "Using design to understand the world—and myself.",
    backToTop: "Back to the beginning",
    drawerKicker: "Elian's world of curiosity",
    drawerTitle: "Know yourself within. Move like water through the world.",
    drawerNavLabel: "Explore WonderElian",
    nightMode: "Night mode",
    nightModeCopy: "Soften the light and let your eyes and mind slow down",
    nightModeToggle: "Toggle night mode",
    aboutDrawer: "About WonderElian",
    aboutDrawerCopy: "A place where design, understanding, translation, and making grow together",
    contact: "Contact Elian",
    contactCopy: "Say hello by email",
    support: "Support the journey",
    supportCopy: "Give freely, or simply stay and read in peace",
    drawerNote: "Reading, pausing, and sharing are already ways of taking part.",
    supportKicker: "IF YOU HAVE SOMETHING TO SPARE",
    supportTitle: "Support the journey",
    supportIntro: "If these designs, stories, or explorations have helped in some small way, you may let a little support keep them flowing—or keep that care for what your own life needs now.",
    supportCodeAlt: "Elian's WeChat appreciation code",
    supportCaption: "Scan with WeChat and offer only what feels right. Thank you for helping these explorations continue.",
    openCode: "Open the appreciation code",
  },
};

const supportCodeUrl = `${import.meta.env.BASE_URL}assets/support-wechat-appreciation-code.png`;

function Wordmark({ label }) {
  return (
    <a className="wordmark" href="#world" aria-label={label}>
      WONDER ELIAN
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
  const [supportOpen, setSupportOpen] = useState(false);
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
    document.body.style.overflow = drawerOpen || supportOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen, supportOpen]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setSupportOpen(false);
        setDrawerOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const toggleLanguage = () => setLanguage((current) => (current === "zh" ? "en" : "zh"));
  const closeDrawer = () => setDrawerOpen(false);
  const openSupport = () => {
    setDrawerOpen(false);
    setSupportOpen(true);
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <Wordmark label={c.homeLabel} />

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
            onClick={() => setDrawerOpen((open) => !open)}
          >
            {drawerOpen ? <X size={22} weight="light" /> : <List size={24} weight="light" />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="world" aria-labelledby="hero-title">
          <img
            className="hero-current"
            src={`${import.meta.env.BASE_URL}assets/watercolor-current.png`}
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
            <h2 id="about-title">{c.aboutTitle}</h2>
            <div className="about-copy">
              {c.aboutParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </section>

        <section className="human-design-note" id="human-design" aria-labelledby="human-design-title">
          <p className="eyebrow">{c.mapKicker}</p>
          <h2 id="human-design-title">{c.mapTitle}</h2>
          <p>{c.mapCopy}</p>
        </section>
      </main>

      <footer className="site-footer">
        <Wordmark label={c.homeLabel} />
        <p>{c.footerLine}</p>
        <a href="#world">{c.backToTop}</a>
      </footer>

      {drawerOpen ? (
        <div className="drawer-layer">
          <button className="drawer-backdrop" type="button" aria-label={c.closeMenu} onClick={closeDrawer} />
          <aside className="site-drawer" id="wonderelian-drawer" role="dialog" aria-modal="true" aria-labelledby="drawer-title">
            <header className="drawer-header">
              <div>
                <span>{c.drawerKicker}</span>
                <strong>WONDER ELIAN</strong>
              </div>
              <LanguageToggle compact language={language} label={c.switchLanguage} onToggle={toggleLanguage} />
              <button className="drawer-close" type="button" aria-label={c.closeMenu} onClick={closeDrawer}>
                <X size={23} weight="light" />
              </button>
            </header>

            <div className="drawer-scroll">
              <p className="drawer-statement" id="drawer-title">{c.drawerTitle}</p>

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

                <a className="drawer-utility-row" href="#about" onClick={closeDrawer}>
                  <span className="drawer-utility-icon"><Info size={20} /></span>
                  <span>
                    <strong>{c.aboutDrawer}</strong>
                    <small>{c.aboutDrawerCopy}</small>
                  </span>
                  <ArrowRight size={18} weight="light" aria-hidden="true" />
                </a>

                <a className="drawer-utility-row" href="mailto:hustyy986@gmail.com">
                  <span className="drawer-utility-icon"><EnvelopeSimple size={20} /></span>
                  <span>
                    <strong>{c.contact}</strong>
                    <small>{c.contactCopy}</small>
                  </span>
                  <ArrowRight size={18} weight="light" aria-hidden="true" />
                </a>

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
              <figcaption>{c.supportCaption}</figcaption>
            </figure>
            <a href={supportCodeUrl} target="_blank" rel="noreferrer">{c.openCode}</a>
          </section>
        </div>
      ) : null}
    </div>
  );
}
