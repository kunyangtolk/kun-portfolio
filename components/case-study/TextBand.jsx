import Rich from "./RichText";

/*
  A white band carrying nothing but prose across the full 1280px content
  column. Figma nodes 924:4103, 924:4164, 924:4169, 924:4250, 924:4260 — the
  commentary that follows each dark diagram panel, which sits outside the
  panel rather than inside a figure section.

  Vertical padding is 40px top and bottom in Figma, except the band closing a
  chapter, which carries 120px beneath.
*/
export default function TextBand({ paragraphs, padTop = 40, padBottom = 40 }) {
  return (
    <section
      className="cs-band w-full bg-white"
      style={{ "--pt": `${padTop}px`, "--pb": `${padBottom}px` }}
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-6 px-6 md:px-12 lg:px-20">
        {paragraphs.map((text, i) => (
          <p key={i} className="text-prose leading-[1.5] text-ink">
            <Rich value={text} />
          </p>
        ))}
      </div>
    </section>
  );
}
