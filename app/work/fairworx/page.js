import Navbar from "@/components/Navbar";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import ProseSection from "@/components/case-study/ProseSection";
import OutcomeSection from "@/components/case-study/OutcomeSection";
import ChapterHeader from "@/components/case-study/ChapterHeader";
import TextBand from "@/components/case-study/TextBand";
import VideoFigure from "@/components/case-study/VideoFigure";
import Divider from "@/components/case-study/Divider";
import { normalizeDividerSpacing } from "@/components/case-study/dividerSpacing";
import CaseStudyBottom from "@/components/case-study/CaseStudyBottom";
import { fairworx as study } from "@/data/case-studies/fairworx";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: `${study.title} — Kun Yang-Tolkachev`,
  description:
    "Designing FairWorx's AI document analyzer: surfacing policy risks inside the original document, grouping repeated language misuse, and pairing every AI finding with a consultant's judgment.",
  path: "/work/fairworx",
  image: "/assets/og/fairworx.png",
});

/* Sections are data-driven (data/case-studies/fairworx.js) — the page grows by
   extending that array, not by editing layout. */
function renderSection(section, i) {
  switch (section.type) {
    case "prose":
      return <ProseSection key={i} {...section} />;
    case "outcome":
      return <OutcomeSection key={i} {...section} />;
    case "chapter":
      return <ChapterHeader key={i} {...section} />;
    case "text":
      return <TextBand key={i} {...section} />;
    case "video":
      return <VideoFigure key={i} {...section} />;
    case "divider":
      return <Divider key={i} />;
    default:
      return null;
  }
}

export default function FairworxCaseStudy() {
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
      {/* Three studies now, so "Next read" cycles: reporting → registration →
          FairWorx → reporting. */}
      <CaseStudyBottom
        backHref="/"
        tone="lime"
        nextHref="/work/seven-research"
        nextLabel="Next read"
      />
    </main>
  );
}
