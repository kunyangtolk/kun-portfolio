import React, { useEffect } from "react";

// ─── Asset URLs from Figma MCP (replace with exported assets for production) ───
const imgIllustration = "http://localhost:3845/assets/683607c53bc75c6469c63a112722e98c1b13883e.png";
const imgFooterBg    = "http://localhost:3845/assets/a4e1c584ec65cb4f13d55630cad33975537fc3e5.png";
const imgDecoLines   = "http://localhost:3845/assets/65c9b551656aa2029720ea64040234fe5910ef43.svg";
const imgDecoCircles = "http://localhost:3845/assets/6db9d7525b3f7b9b81609e27ae6a4eba08cf2a13.svg";

// ─── Inline SVG Icons ─────────────────────────────────────────────────────────
const ReportingIcon = () => (
  <svg width="72" height="52" viewBox="0 0 72 52" fill="none">
    <rect x="4"  y="22" width="12" height="28" rx="2" stroke="white" strokeWidth="1.5"/>
    <rect x="30" y="10" width="12" height="40" rx="2" stroke="white" strokeWidth="1.5"/>
    <rect x="56" y="30" width="12" height="20" rx="2" stroke="white" strokeWidth="1.5"/>
    <circle cx="10" cy="14" r="6" stroke="white" strokeWidth="1.5"/>
    <circle cx="36" cy="4"  r="4" stroke="white" strokeWidth="1.5"/>
    <line x1="14" y1="16" x2="30" y2="12" stroke="white" strokeWidth="1.5"/>
    <line x1="42" y1="14" x2="56" y2="28" stroke="white" strokeWidth="1.5"/>
  </svg>
);

const SupplierIcon = () => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
    <circle cx="40" cy="28" r="10" stroke="white" strokeWidth="1.5"/>
    <circle cx="18" cy="56" r="8"  stroke="white" strokeWidth="1.5"/>
    <circle cx="62" cy="56" r="8"  stroke="white" strokeWidth="1.5"/>
    <line x1="30" y1="36" x2="22" y2="48" stroke="white" strokeWidth="1.5"/>
    <line x1="50" y1="36" x2="58" y2="48" stroke="white" strokeWidth="1.5"/>
    <line x1="26" y1="56" x2="54" y2="56" stroke="white" strokeWidth="1.5" strokeDasharray="3 3"/>
  </svg>
);

const FairWorxIcon = () => (
  <svg width="64" height="55" viewBox="0 0 64 55" fill="none">
    <rect x="8" y="4" width="42" height="50" rx="4" stroke="white" strokeWidth="1.5"/>
    <line x1="16" y1="18" x2="42" y2="18" stroke="white" strokeWidth="1.5"/>
    <line x1="16" y1="26" x2="42" y2="26" stroke="white" strokeWidth="1.5"/>
    <line x1="16" y1="34" x2="34" y2="34" stroke="white" strokeWidth="1.5"/>
    <circle cx="52" cy="42" r="9" stroke="white" strokeWidth="1.5"/>
    <path d="M48 42 L51 45 L56 39" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DataVizIcon = () => (
  <svg width="56.5" height="44" viewBox="0 0 57 44" fill="none">
    <circle cx="28" cy="22" r="18" stroke="white" strokeWidth="1.5"/>
    <path d="M28 22 L28 4 A18 18 0 0 1 46 22 Z" fill="white" fillOpacity="0.25"/>
    <line x1="28" y1="22" x2="43" y2="11" stroke="white" strokeWidth="1.5"/>
    <circle cx="28" cy="22" r="2.5" fill="white"/>
    <line x1="4" y1="40" x2="53" y2="40" stroke="white" strokeWidth="1" strokeOpacity="0.4"/>
    <line x1="4" y1="4"  x2="4"  y2="40" stroke="white" strokeWidth="1" strokeOpacity="0.4"/>
  </svg>
);

const ButtonIcon = () => (
  <svg width="58" height="54" viewBox="0 0 58 54" fill="none">
    <rect x="4"  y="4"  width="50" height="18" rx="4" stroke="white" strokeWidth="1.5"/>
    <rect x="4"  y="30" width="50" height="18" rx="4" stroke="white" strokeWidth="1.5" fill="white" fillOpacity="0.15"/>
    <circle cx="12" cy="13" r="3" fill="white" fillOpacity="0.6"/>
    <line x1="18" y1="13" x2="40" y2="13" stroke="white" strokeWidth="1.5" strokeOpacity="0.6"/>
    <circle cx="12" cy="39" r="3" fill="white"/>
    <line x1="18" y1="39" x2="40" y2="39" stroke="white" strokeWidth="1.5"/>
    <path d="M27 22 L27 28" stroke="white" strokeWidth="1.5"/>
    <path d="M24 26 L27 29 L30 26" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FormIcon = () => (
  <svg width="49" height="53" viewBox="0 0 49 53" fill="none">
    <rect x="4" y="4" width="41" height="46" rx="4" stroke="white" strokeWidth="1.5"/>
    <rect x="10" y="14" width="29" height="9" rx="2" stroke="white" strokeWidth="1.5"/>
    <rect x="10" y="28" width="29" height="9" rx="2" stroke="white" strokeWidth="1.5"/>
    <line x1="10" y1="42" x2="24" y2="42" stroke="white" strokeWidth="1.5"/>
    <line x1="28" y1="42" x2="36" y2="42" stroke="white" strokeWidth="1.5"/>
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────
const workProjects = [
  {
    id: 1,
    icon: <ReportingIcon />,
    title: "DAI supplier management portal reporting platform",
    desc: "Reimagine local content reporting:\nFrom compliance to strategic insight",
    href: "#project-reporting",
  },
  {
    id: 2,
    icon: <SupplierIcon />,
    title: "DAI supplier management portal registration platform",
    desc: "Unlock local business potential to fuel community transformation",
    href: "#project-registration",
  },
  {
    id: 3,
    icon: <FairWorxIcon />,
    title: "FairWorx document analyzer",
    desc: "Enable workplace equity with human-guided AI",
    href: "#project-fairworx",
  },
];

const perspectives = [
  {
    id: 1,
    icon: <DataVizIcon />,
    title: "Timeless design principles for data visualization",
    desc: 'A book review of Edward Tufte\'s "The Visual Display of Quantitative Information"',
    href: "https://www.perpetualny.com/blog/the-art-of-clarity-timeless-design-principles-for-data-visualization",
  },
  {
    id: 2,
    icon: <ButtonIcon />,
    title: "Accelerating Themeable Design Systems with shadcn/ui",
    desc: "How a lightweight, production-ready component system and Figma variables enabled rapid theming, clean handoff, and a scalable product",
    href: "https://www.perpetualny.com/blog/accelerating-themeable-design-systems-with-shadcn-ui-a-step-by-step-guide",
  },
  {
    id: 3,
    icon: <FormIcon />,
    title: "How to design forms for complex data input",
    desc: "A step-by-step guide to designing intuitive and efficient forms",
    href: "https://www.perpetualny.com/blog/how-to-design-forms-for-complex-data-input",
  },
];

// ─── Project Tile ─────────────────────────────────────────────────────────────
function ProjectTile({ icon, title, desc, href, external = false }) {
  const Tag = href ? "a" : "div";
  const linkProps = href
    ? { href, ...(external ? { target: "_blank", rel: "noopener noreferrer" } : {}) }
    : {};

  return (
    <Tag className="tile" {...linkProps}>
      <div className="tile-icon">{icon}</div>
      <div className="tile-text">
        <p className="tile-title">{title}</p>
        <p className="tile-desc">{desc}</p>
      </div>
    </Tag>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Portfolio() {
  useEffect(() => {
    const id = "kun-portfolio-styles";
    if (document.getElementById(id)) return;

    const el = document.createElement("style");
    el.id = id;
    el.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@400;700&family=Open+Sans:wght@300;400&display=swap');

      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

      /* ── Layout ── */
      .portfolio {
        width: 100%;
        overflow-x: hidden;
        background: #ffffff;
        font-family: 'Open Sans', sans-serif;
      }

      /* ── Hero ── */
      .hero {
        position: relative;
        width: 100%;
        min-height: 434px;
        background: #ffffff;
        display: flex;
        align-items: stretch;
        overflow: hidden;
      }

      /* decorative top-left lines */
      .hero-deco-lines {
        position: absolute;
        top: 0; left: 0;
        width: 629px; height: 214px;
        pointer-events: none;
        z-index: 1;
      }

      /* decorative floating circles */
      .hero-deco-circles {
        position: absolute;
        top: 55px; left: 51px;
        width: 1403px; height: 1064px;
        pointer-events: none;
        z-index: 1;
        opacity: 0.9;
      }

      /* illustration */
      .hero-illustration {
        position: absolute;
        left: 0; top: 291px;
        width: 465px; height: 258px;
        border-radius: 0 400px 400px 0;
        overflow: hidden;
        z-index: 2;
        transform: scaleY(-1) rotate(180deg);
      }
      .hero-illustration img {
        width: 100%; height: 100%;
        object-fit: cover;
        display: block;
      }

      /* pill backdrop */
      .hero-pill {
        position: absolute;
        top: 152px; left: 40px;
        width: 623px; height: 81px;
        background: rgba(28, 36, 88, 0.25);
        border-radius: 0 200px 200px 0;
        z-index: 2;
      }

      /* card */
      .hero-card {
        position: relative;
        z-index: 3;
        margin-left: auto;
        width: 872px;
        background: rgba(28, 36, 88, 0.8);
        border-radius: 400px 0 0 400px;
        padding: 120px 80px 120px 120px;
        display: flex;
        flex-direction: column;
        gap: 40px;
        justify-content: center;
        color: #ffffff;
        flex-shrink: 0;
      }

      .hero-title {
        font-family: 'Josefin Slab', serif;
        font-weight: 700;
        font-size: 64px;
        line-height: 1;
        white-space: nowrap;
      }

      .hero-bio {
        font-size: 20px;
        line-height: 30px;
        font-weight: 400;
        max-width: 672px;
      }

      /* ── Sections ── */
      .section {
        width: 100%;
        padding: 80px 120px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
      }

      .section-work        { background: #080d2d; }
      .section-perspectives { background: #18408c; }

      .section-heading {
        font-family: 'Josefin Slab', serif;
        font-weight: 700;
        font-size: 32px;
        line-height: 30px;
        color: #ffffff;
        text-align: center;
        width: 100%;
      }

      /* ── Grid ── */
      .tiles-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
        width: 100%;
      }

      /* ── Tile ── */
      .tile {
        border: 1px solid #ffffff;
        border-radius: 40px;
        padding: 32px;
        display: flex;
        flex-direction: column;
        gap: 24px;
        align-items: center;
        color: #ffffff;
        text-decoration: none;
        transition: background 0.2s ease, transform 0.2s ease;
        cursor: default;
      }
      a.tile {
        cursor: pointer;
      }
      a.tile:hover {
        background: rgba(255,255,255,0.06);
        transform: translateY(-2px);
      }

      .tile-icon {
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .tile-text {
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 100%;
        text-align: center;
      }

      .tile-title {
        font-size: 20px;
        font-weight: 400;
        line-height: 30px;
        min-height: 60px;
      }

      .tile-desc {
        font-size: 14px;
        font-weight: 300;
        line-height: 1.5;
        min-height: 63px;
        white-space: pre-line;
      }

      /* ── Footer ── */
      .footer {
        position: relative;
        width: 100%;
        padding: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }
      .footer-bg {
        position: absolute;
        inset: 0;
        z-index: 0;
      }
      .footer-bg img {
        width: 100%; height: 100%;
        object-fit: cover;
        display: block;
      }
      .footer-overlay {
        position: absolute;
        inset: 0;
        background: rgba(0,0,0,0.6);
        z-index: 1;
      }
      .footer-email {
        position: relative;
        z-index: 2;
        font-family: 'Josefin Slab', serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        color: #ffffff;
        white-space: nowrap;
      }

      /* ── Responsive ── */
      @media (max-width: 1024px) {
        .hero-card {
          width: 100%;
          border-radius: 0;
          padding: 80px 60px;
          margin-left: 0;
        }
        .hero-illustration { display: none; }
        .hero-pill         { display: none; }
        .hero-deco-lines   { display: none; }
        .hero-deco-circles { display: none; }
        .section           { padding: 60px; }
        .tiles-grid        { grid-template-columns: repeat(2, 1fr); }
        .hero-title        { font-size: 48px; }
      }

      @media (max-width: 640px) {
        .hero-card  { padding: 60px 32px; }
        .hero-title { font-size: 40px; }
        .hero-bio   { font-size: 16px; }
        .section    { padding: 48px 24px; }
        .section-heading { font-size: 26px; }
        .tiles-grid { grid-template-columns: 1fr; }
        .tile       { border-radius: 24px; padding: 24px; }
        .tile-title { font-size: 17px; min-height: auto; }
        .tile-desc  { min-height: auto; }
        .footer-email { font-size: 16px; white-space: normal; text-align: center; }
      }
    `;
    document.head.appendChild(el);

    return () => { /* styles persist intentionally */ };
  }, []);

  return (
    <div className="portfolio">
      {/* ── Hero ── */}
      <section className="hero">
        {/* Decorative top-left lines */}
        <img src={imgDecoLines} alt="" className="hero-deco-lines" aria-hidden="true" />

        {/* Floating geometric shapes */}
        <img src={imgDecoCircles} alt="" className="hero-deco-circles" aria-hidden="true" />

        {/* Semi-transparent pill */}
        <div className="hero-pill" aria-hidden="true" />

        {/* Left illustration */}
        <div className="hero-illustration" aria-hidden="true">
          <img src={imgIllustration} alt="" />
        </div>

        {/* Hero card */}
        <div className="hero-card">
          <h1 className="hero-title">Hi, I'm Kun</h1>
          <p className="hero-bio">
            I'm a product designer with 5 years of experience shaping&nbsp;0→1
            enterprise SaaS products. I craft intuitive workflows that address
            complex use cases and optimize for efficiency.
          </p>
        </div>
      </section>

      {/* ── Work ── */}
      <section className="section section-work">
        <h2 className="section-heading">Work</h2>
        <div className="tiles-grid">
          {workProjects.map((p) => (
            <ProjectTile
              key={p.id}
              icon={p.icon}
              title={p.title}
              desc={p.desc}
              href={p.href}
              external={false}
            />
          ))}
        </div>
      </section>

      {/* ── Perspectives ── */}
      <section className="section section-perspectives">
        <h2 className="section-heading">Perspectives</h2>
        <div className="tiles-grid">
          {perspectives.map((p) => (
            <ProjectTile
              key={p.id}
              icon={p.icon}
              title={p.title}
              desc={p.desc}
              href={p.href}
              external={true}
            />
          ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="footer-bg" aria-hidden="true">
          <img src={imgFooterBg} alt="" />
          <div className="footer-overlay" />
        </div>
        <p className="footer-email">kunyangtolk@gmail.com</p>
      </footer>
    </div>
  );
}
