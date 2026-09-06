import Navbar from "@/components/Navbar";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import ProseSection from "@/components/case-study/ProseSection";
import OutcomeSection from "@/components/case-study/OutcomeSection";
import ChapterHeader from "@/components/case-study/ChapterHeader";
import FigureSection from "@/components/case-study/FigureSection";
import TwoUpFigure from "@/components/case-study/TwoUpFigure";
import ScrollingFigures from "@/components/case-study/ScrollingFigures";
import Divider from "@/components/case-study/Divider";
import { normalizeDividerSpacing } from "@/components/case-study/dividerSpacing";
import CaseStudyBottom from "@/components/case-study/CaseStudyBottom";
import { smpReporting as study } from "@/data/case-studies/smp-reporting";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: `${study.title} — Kun Yang-Tolkachev`,
  description:
    "Redesigning local content reporting for DAI's Supplier Management Portal: structured data collection, aggregation across the supply chain, and a report builder that powers 98% of new client setups.",
  path: "/work/smp-reporting",
  image: "/assets/og/smp-reporting.png",
});

/* Sections are data-driven (data/case-studies/smp-reporting.js) — the page
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
    case "twoUp":
      return <TwoUpFigure key={i} {...section} />;
    case "scrollRow":
      return <ScrollingFigures key={i} {...section} />;
    case "divider":
      return <Divider key={i} />;
    default:
      return null;
  }
}

export default function SmpReportingCaseStudy() {
  return (
    <main className="flex min-h-screen w-full flex-col overflow-x-hidden bg-white">
      <Navbar />
      <CaseStudyHero
        eyebrow={study.eyebrow}
        title={study.title}
        meta={study.meta}
      />
      {normalizeDividerSpacing(study.sections).map(renderSection)}
      {/* The design closes with back/next navigation rather than the homepage
          footer. "Next read" points at the registration case study. */}
      <CaseStudyBottom backHref="/" tone="lime" nextHref="/work/smp-registration" />
    </main>
  );
}
