import Link from "next/link";

function Chevron({ className = "" }) {
  return (
    <svg viewBox="0 0 12 20" className={className} aria-hidden="true" focusable="false">
      <path
        d="M10 1 L2 10 L10 19"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/*
  Closing navigation band. Figma node 924:4670 ("Botttom") — a cyan wash with
  a flat wash — the wavy texture it used to carry is switched off.

  This replaces the homepage <Footer> on case-study pages: the design ends the
  page with back/next navigation rather than the copyright band.

  No border-top: every page puts this after a washed band that already carries
  a bottom rule, and the two stacked 1px lines read as a single thicker stroke
  than the rest of the page. The band above owns the rule.
*/
const TONES = { cyan: "bg-cyan-wash", lime: "bg-lime-wash" };

export default function CaseStudyBottom({
  backHref = "/",
  nextHref,
  nextLabel = "Next read",
  tone = "cyan",
  /* The wavy line-art the homepage footer used to carry. Off on all three
     case studies — pass a path to bring it back. */
  texture = null,
  /* Normally the washed band above draws the rule; a page that ends on a
     plain white band passes this so the footer keeps its top stroke. */
  borderTop = false,
}) {
  return (
    <section
      className={`${TONES[tone] ?? TONES.cyan} relative w-full overflow-hidden ${
        borderTop ? "border-t border-ink" : ""
      }`}
    >
      {texture ? (
        <img
          src={texture}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20"
        />
      ) : null}
      <div className="relative mx-auto flex w-full max-w-[1440px] items-center justify-between gap-6 px-6 py-16 md:px-12 md:py-24 lg:px-20 lg:py-[120px]">
        <Link
          href={backHref}
          className="text-prose group flex items-center gap-2 leading-[1.5] text-ink/70 transition-colors hover:text-ink"
        >
          <Chevron className="h-5 w-3 shrink-0 transition-transform group-hover:-translate-x-1" />
          Back to homepage
        </Link>

        {nextHref ? (
          <Link
            href={nextHref}
            className="text-prose group flex items-center gap-2 leading-[1.5] text-ink/70 transition-colors hover:text-ink"
          >
            {nextLabel}
            <Chevron className="h-5 w-3 shrink-0 rotate-180 transition-transform group-hover:translate-x-1" />
          </Link>
        ) : null}
      </div>
    </section>
  );
}
