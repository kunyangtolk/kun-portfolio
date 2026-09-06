import Image from "next/image";
import Rich from "./RichText";

/*
  A framed screenshot above its commentary. Figma nodes 924:4577 / 924:4582.

  The frame is a fixed-ratio box with the image cropped to fill, matching
  Figma — where each slot is an explicit 832x647 (or 832x669, or 832x1331)
  regardless of the source screenshot's own proportions. Letting the image's
  intrinsic ratio drive the height instead put the sections a few px out and
  would drift further on the taller dashboard shots later in the page.

  `maxWidth` widens the slot for the mocks the registration case study draws at
  the full 1280 content column, and `framed` turns off the border for the flat
  dark diagram panels, which carry no frame in Figma.

  quality={90} rather than the default 75: these are UI screenshots, and small
  text and hairline table borders are exactly what a low-quality encode
  destroys. Declared in next.config.mjs alongside the hero's 95.
*/
export default function FigureSection({
  src,
  alt,
  frameWidth = 832,
  frameHeight = 647,
  maxWidth = 832,
  framed = true,
  paragraphs,
  padTop = 80,
  padBottom = 80,
}) {
  return (
    <section
      className="cs-band w-full bg-white"
      style={{ "--pt": `${padTop}px`, "--pb": `${padBottom}px` }}
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-10 px-6 md:px-12 lg:px-20">
        <div
          className={`relative w-full ${framed ? "figure-frame" : ""}`}
          style={{
            maxWidth: `${maxWidth}px`,
            aspectRatio: `${frameWidth} / ${frameHeight}`,
          }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            quality={90}
            sizes={`(max-width: ${maxWidth + 48}px) 100vw, ${maxWidth}px`}
            className="object-cover"
          />
        </div>
        <div className="flex w-full flex-col gap-6">
          {paragraphs.map((text, i) => (
            <p key={i} className="text-prose leading-[1.5] text-ink">
              <Rich value={text} />
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
