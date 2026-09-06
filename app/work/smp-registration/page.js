import Navbar from "@/components/Navbar";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import ProseSection from "@/components/case-study/ProseSection";
import OutcomeSection from "@/components/case-study/OutcomeSection";
import ChapterHeader from "@/components/case-study/ChapterHeader";
import FigureSection from "@/components/case-study/FigureSection";
import TextBand from "@/components/case-study/TextBand";
import WideScrollFigure from "@/components/case-study/WideScrollFigure";
import Divider from "@/components/case-study/Divider";
import { normalizeDividerSpacing } from "@/components/case-study/dividerSpacing";
import CaseStudyBottom from "@/components/case-study/CaseStudyBottom";
import { smpRegistration as study } from "@/data/case-studies/smp-registration";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: `${study.title} — Kun Yang-Tolkachev`,
  description:
    "Redesigning supplier registration and sourcing for DAI's Supplier Management Portal: a bite-sized intake flow, question-level saving for unreliable connections, and clearer paths between buyers and local suppliers.",
  path: "/work/smp-registration",
  image: "/assets/og/smp-registration.png",
});

/* Sections are data-driven (data/case-studies/smp-registration.js) — the page
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
    case "wideScroll":
      return <WideScrollFigure key={i} {...section} />;
    case "divider":
      return <Divider key={i} />;
    default:
      return null;
  }
}

export default function SmpRegistrationCaseStudy() {
  return (
    <main className="flex min-h-screen w-full flex-col overflow-x-hidden bg-white">
      <Navbar />
      {/* This hero takes the lime wash; the reporting case study takes cyan. */}
      <CaseStudyHero
        eyebrow={study.eyebrow}
        title={study.title}
        meta={study.meta}
        tone="lime"
      />
      {normalizeDividerSpacing(study.sections).map(renderSection)}
      <CaseStudyBottom
        backHref="/"
        tone="lime"
        nextHref="/work/fairworx"
        nextLabel="Next read"
      />
    </main>
  );
}
