/* Figma node 928:7659. Same two-column shape as ProseSection, but the right
   column carries figures rather than prose, so it gets its own component
   instead of a branch inside that one. */
const TONES = { cyan: "bg-cyan-wash", lime: "bg-lime-wash" };

export default function OutcomeSection({ label, stats, tone = "cyan" }) {
  return (
    <section
      className={`${TONES[tone] ?? TONES.cyan} w-full border-b border-ink`}
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-6 px-6 py-16 md:px-12 md:py-24 lg:flex-row lg:px-20 lg:py-[120px]">
        <p className="text-prose w-full shrink-0 font-bold leading-[1.33] text-deep/55 lg:w-[280px] lg:pt-5">
          {label}
        </p>
        <div className="flex min-w-0 flex-wrap gap-8 lg:w-[680px]">
          {stats.map((stat) => (
            <div key={stat.figure} className="flex min-w-0 flex-1 flex-col gap-2">
              {/* 1.36, not none and not normal: Figma puts the 64px figure on an
                  ~87px line box. leading-none leaves the band 23px short;
                  the browser default for Manrope is 1.5 and overshoots by 9. */}
              <p className="text-numeral font-bold leading-[1.36] text-ink">
                {stat.figure}
              </p>
              <p className="text-prose leading-[1.5] text-deep/70">
                {stat.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
