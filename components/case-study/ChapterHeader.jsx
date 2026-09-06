/*
  Full-width centred band opening each chapter. Figma node 924:4574 and
  siblings. The washes alternate through the page and every header carries a
  rule top and bottom — except the first, which follows the Outcome band and
  would otherwise double its rule.
*/
const TONES = { lime: "bg-lime-wash", cyan: "bg-cyan-wash" };

export default function ChapterHeader({ title, tone = "lime", borderTop = true }) {
  return (
    <section
      className={`${TONES[tone] ?? TONES.lime} w-full border-b border-ink ${
        borderTop ? "border-t" : ""
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-center px-6 py-16 md:px-12 md:py-24 lg:px-20 lg:py-[120px]">
        {/*
          Figma sets every chapter title nowrap. The longest — "Making local
          content commitments..." — needs 1301px against a 1280px content box,
          so Figma lets it spill 11px into the 80px padding rather than wrap.
          Reproduced above 1320px, where that spill still clears the viewport;
          below it the title wraps and text-balance evens the lines.
        */}
        <h2 className="text-card text-balance text-center font-semibold leading-[1.5] text-ink [@media(min-width:1320px)]:whitespace-nowrap">
          {title}
        </h2>
      </div>
    </section>
  );
}
