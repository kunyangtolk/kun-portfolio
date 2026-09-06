import Rich from "./RichText";

/*
  Two-column band: a sticky-feeling label in a fixed 280px gutter, prose to its
  right. Figma nodes 924:4564 (Overview) and 924:4569 (My role) — same shape,
  different wash. Below lg the label stacks above the text.

  `bullets` covers the Impact band on the registration case study, where the
  paragraph is followed by a disc list indented 36px.
*/
const TONES = {
  lime: "bg-lime-wash",
  slate: "bg-slate-wash",
  navy: "bg-navy-wash",
  cyan: "bg-cyan-wash",
  white: "bg-white",
};

export default function ProseSection({
  label,
  paragraphs,
  bullets,
  /* The process band numbers its steps; Impact keeps discs. */
  ordered = false,
  tone = "lime",
  borderTop = false,
  borderBottom = true,
  padTop = 120,
  padBottom = 120,
}) {
  return (
    <section
      className={`${TONES[tone] ?? TONES.lime} w-full border-ink ${
        borderTop ? "border-t" : ""
      } ${borderBottom ? "border-b" : ""}`}
    >
      <div
        className="cs-band mx-auto flex w-full max-w-[1440px] flex-col gap-6 px-6 md:px-12 lg:flex-row lg:px-20"
        style={{ "--pt": `${padTop}px`, "--pb": `${padBottom}px` }}
      >
        <p className="text-prose w-full shrink-0 font-bold leading-[1.33] text-ink/60 lg:w-[280px]">
          {label}
        </p>
        <div className="flex min-w-0 flex-col gap-6">
          {paragraphs.map((text, i) => (
            <p key={i} className="text-prose leading-[1.5] text-ink">
              <Rich value={text} />
            </p>
          ))}
          {bullets?.length ? (
            ordered ? (
              <ol className="text-prose flex list-decimal flex-col gap-4 ps-9 leading-[1.5] text-ink marker:font-bold marker:text-ink/50">
                {bullets.map((text, i) => (
                  <li key={i}>
                    <Rich value={text} />
                  </li>
                ))}
              </ol>
            ) : (
              <ul className="text-prose list-disc ps-9 leading-[1.5] text-ink">
                {bullets.map((text, i) => (
                  <li key={i}>
                    <Rich value={text} />
                  </li>
                ))}
              </ul>
            )
          ) : null}
        </div>
      </div>
    </section>
  );
}
