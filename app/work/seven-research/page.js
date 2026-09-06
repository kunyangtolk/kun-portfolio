import Navbar from "@/components/Navbar";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import ProseSection from "@/components/case-study/ProseSection";
import OutcomeSection from "@/components/case-study/OutcomeSection";
import ChapterHeader from "@/components/case-study/ChapterHeader";
import FigureSection from "@/components/case-study/FigureSection";
import TextBand from "@/components/case-study/TextBand";
import ZoomRow from "@/components/case-study/ZoomRow";
import Divider from "@/components/case-study/Divider";
import CaseStudyBottom from "@/components/case-study/CaseStudyBottom";
import { normalizeDividerSpacing } from "@/components/case-study/dividerSpacing";
import { sevenResearch as study } from "@/data/case-studies/seven-research";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: `${study.title} — Kun Yang-Tolkachev`,
  description:
    "A visual design direction for Seven Research, a New York quant firm: four Home directions and two Careers directions drawn from a brand system the live site wasn\u2019t using \u2014 with AI doing the audit, the research and the synthesis behind them.",
  path: "/work/seven-research",
  image: "/assets/og/seven-research.png",
});

/* Sections are data-driven (data/case-studies/seven-research.js) — the page
   grows by extending that array, not by editing layout. */
function renderSection(section, i) {
  switch (section.type) {
    case "prose":
      return <ProseSection key={i} {...section} />;
    case "outcome":
      return <OutcomeSection key={i} {...section} />;
    case "chapter":
      return <ChapterHeader key={i} {...section} />;
    case "figure":
      return <FigureSection key={i} {...section} />;
    case "text":
      return <TextBand key={i} {...section} />;
    case "zoomRow":
      return <ZoomRow key={i} {...section} />;
    case "divider":
      return <Divider key={i} />;
    default:
      return null;
  }
}

export default function SevenResearchCaseStudy() {
  return (
    <main className="flex min-h-screen w-full flex-col overflow-x-hidden bg-white">
      <Navbar />
      <CaseStudyHero
        eyebrow={study.eyebrow}
        title={study.title}
        meta={study.meta}
        tone="cyan"
      />
      {normalizeDividerSpacing(study.sections).map(renderSection)}
      {/* No "Next read" while this page is unlisted — it would be a one-way
          door into a study the rest of the site doesn't link to. */}
      <CaseStudyBottom
        backHref="/"
        tone="lime"
        borderTop
        nextHref="/work/smp-reporting"
        nextLabel="Next read"
      />
    </main>
  );
}
