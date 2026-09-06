/*
  Case-study hero. Figma node 924:4552.

  Figma layers a wireframe texture at 20% over the wash — globes on reporting,
  peaks on registration, terrain on FairWorx. All three are switched off: pass
  a `texture` to bring one back. "bleed" reproduces Figma's 146.11%-tall
  anchored crop (the artwork runs off the bottom of the band rather than being
  letterboxed); "cover" is a plain full-bleed object-cover.
*/
const TONES = { cyan: "bg-cyan-wash", lime: "bg-lime-wash" };

export default function CaseStudyHero({
  eyebrow,
  title,
  meta,
  tone = "cyan",
  texture = null,
  textureFit = "bleed",
}) {
  return (
    <section
      className={`${TONES[tone] ?? TONES.cyan} relative w-full overflow-hidden border-b border-ink`}
    >
      {texture ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden opacity-20"
        >
          <img
            src={texture}
            alt=""
            className={
              textureFit === "cover"
                ? "h-full w-full max-w-none object-cover"
                : "absolute left-0 top-[0.07%] h-[146.11%] w-full max-w-none"
            }
          />
        </div>
      ) : null}
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-start gap-12 px-6 pb-16 pt-20 md:px-12 md:pb-24 md:pt-28 lg:gap-20 lg:px-20 lg:pb-[120px] lg:pt-[180px]">
        <div className="flex w-full flex-col gap-6">
          <p className="text-prose font-bold leading-[1.33] text-ink/70">
            {eyebrow}
          </p>
          <h1 className="text-card leading-[1.5] text-ink">{title}</h1>
        </div>

        <dl className="flex flex-wrap gap-x-12 gap-y-8">
          {meta.map((item) => (
            /* Figma gives each meta entry a 246px track, so "Industry" starts
               at a fixed offset rather than butting up against "Platform".
               Desktop only — at 390px a 246px minimum would overflow. */
            <div key={item.label} className="flex flex-col gap-4 lg:min-w-[246px]">
              <dt className="text-prose font-bold leading-[1.33] text-ink/60">
                {item.label}
              </dt>
              <dd className="text-prose leading-[1.5] text-ink">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
