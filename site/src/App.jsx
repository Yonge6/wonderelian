import { useEffect, useState } from "react";
import { ArrowRight, List, X } from "@phosphor-icons/react";

const projects = [
  {
    title: "虾子曰",
    english: "Xiazi Daily",
    description: "把每日复杂的世界新闻，转译成清楚、有观点、有画面的双语内容。",
    href: "https://xiazishuo.com",
  },
  {
    title: "三慢问道",
    english: "Wendao",
    description: "慢下来，读一章《道德经》，也读一读此刻的自己。",
    href: "https://wendao.wonderelian.com",
  },
  {
    title: "Human Design",
    english: "Inner map",
    description: "理解能量与选择，寻找更接近自己的生活节奏。",
    href: "#human-design",
  },
];

const worlds = [
  { number: "01", title: "一休", copy: "先照顾身体，安顿情绪，再继续前行。" },
  { number: "02", title: "不二", copy: "接纳高峰与低谷，拥抱完整而非完美。" },
  { number: "03", title: "三慢", copy: "慢下来，慢慢来，慢慢成为。" },
  { number: "04", title: "如水", copy: "向内扎根，向外流动；顺应变化，不失本心。" },
];

const navItems = [
  ["World", "#world"],
  ["Works", "#now"],
  ["Notes", "#notes"],
  ["About", "#about"],
];

function Wordmark() {
  return (
    <a className="wordmark" href="#world" aria-label="Wonder Elian 首页">
      WONDER ELIAN
    </a>
  );
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener("hashchange", closeMenu);
    return () => window.removeEventListener("hashchange", closeMenu);
  }, []);

  return (
    <div className="site-shell">
      <header className="site-header">
        <Wordmark />

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "关闭导航" : "打开导航"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={23} weight="light" /> : <List size={25} weight="light" />}
        </button>

        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="主导航">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
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
            <p className="hero-lead">用设计理解世界，也理解自己。</p>
            <span className="short-rule" aria-hidden="true" />
            <p className="hero-spirit">向内认识自己，向外如水而行。</p>

            <a className="text-cta" href="#now">
              <span>进入此刻</span>
              <span lang="en">Enter the now</span>
              <ArrowRight size={19} weight="light" aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="now-section" id="now" aria-labelledby="now-title">
          <div className="section-label">
            <span id="now-title">此刻</span>
            <span lang="en">RIGHT NOW</span>
          </div>

          <div className="project-list">
            {projects.map((project) => {
              const external = project.href.startsWith("http");
              return (
                <a
                  className="project-entry"
                  href={project.href}
                  key={project.title}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                >
                  <div>
                    <p className="project-kicker">{project.english}</p>
                    <h2>{project.title}</h2>
                  </div>
                  <p>{project.description}</p>
                  <ArrowRight className="project-arrow" size={21} weight="light" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </section>

        <section className="worlds-section" id="notes" aria-labelledby="worlds-title">
          <div className="worlds-intro">
            <p className="eyebrow">FOUR WAYS OF BEING</p>
            <h2 id="worlds-title">认识自己，接纳自己，<br />成为自己，活出自己。</h2>
          </div>

          <div className="worlds-grid">
            {worlds.map((world) => (
              <article className="world-item" key={world.title}>
                <span className="world-number">{world.number}</span>
                <h3>{world.title}</h3>
                <p>{world.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section" id="about" aria-labelledby="about-title">
          <p className="eyebrow">ABOUT ELIAN</p>
          <div className="about-layout">
            <h2 id="about-title">把复杂的事物，<br />重新变得清楚而有感觉。</h2>
            <div className="about-copy">
              <p>
                我喜欢把复杂、抽象或冰冷的事物，重新组织成清楚、美、有感觉、让人愿意接近的东西。
              </p>
              <p>
                有时它是一台工业机器，有时是一段古老文字，有时是一张关于人的图。WonderElian
                不是职业名称，而是这些探索共同生长的地方。
              </p>
            </div>
          </div>
        </section>

        <section className="human-design-note" id="human-design" aria-labelledby="human-design-title">
          <p className="eyebrow">A QUIET INNER MAP</p>
          <h2 id="human-design-title">Human Design</h2>
          <p>不是用来定义自己，而是多一种方式观察身体的回应、能量与选择。</p>
        </section>
      </main>

      <footer className="site-footer">
        <Wordmark />
        <p>用设计理解世界，也理解自己。</p>
        <a href="#world">回到开始</a>
      </footer>
    </div>
  );
}
