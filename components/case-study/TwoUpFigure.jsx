import Image from "next/image";

/*
  One or two rows of paired screenshots, then commentary. Figma nodes 924:4624
  (economic impact, one row) and 924:4649 (report builder, two rows).

  The pairs are wider than the text column: two 618px panes with an 80px gap is
  1316px, against the section's 1280px content box. Figma centres that row on
  the full 1440 frame so it spills 18px into the padding on each side, and the
  prose stays inset. That's reproduced here rather than shrinking the panes to
  fit, which is what cost 14px per row before.

  Below lg the pairs stack — these are dense UI screenshots, and half a phone
  width would make them unreadable.
*/
export default function TwoUpFigure({ rows, paragraphs, padTop = 80, padBottom = 80 }) {
  return (
    <section
      className="cs-band w-full bg-white"
      style={{ "--pt": `${padTop}px`, "--pb": `${padBottom}px` }}
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-10">
        {rows.map((row, r) => (
          <div
            key={r}
            className="flex w-full flex-col items-center gap-10 px-6 md:px-12 lg:flex-row lg:justify-center lg:gap-20 lg:px-0"
          >
            {row.map((pane) => (
              <div
                key={pane.src}
                className="figure-frame relative w-full max-w-[618px] lg:w-[618px] lg:max-w-none lg:shrink-0"
                style={{ aspectRatio: "618 / 497" }}
              >
                <Image
                  src={pane.src}
                  alt={pane.alt}
                  fill
                  quality={90}
                  sizes="(max-width: 1024px) 100vw, 618px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        ))}
        <div className="flex w-full flex-col gap-6 px-6 md:px-12 lg:px-20">
          {paragraphs.map((text, i) => (
            <p key={i} className="text-prose leading-[1.5] text-ink">
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
