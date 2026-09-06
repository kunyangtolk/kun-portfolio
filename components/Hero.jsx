import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/*
        The contour texture that used to sit here (Figma node 935:9691) has been
        removed. The ground stays white: Figma's lime wash was only ever hidden
        behind that texture's opaque white rectangle, so restoring it is a
        separate decision — swap bg-white for bg-lime-wash above to bring it
        back. public/assets/hero-texture.webp is now unused.
      */}
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center px-6 pb-16 pt-14 md:px-16 md:pb-24 md:pt-20 lg:px-28 lg:pb-28 lg:pt-[170px]">
        {/*
          On lg the heading is absolutely placed so it overlaps the top of the
          illustration, matching the Figma frame — the word sits over the dark
          sky and the split fill is cut to that horizon.

          Below lg it stays in flow, and the illustration is pulled up under it
          by 0.4 of the heading's own size — the same fraction the 1440 frame
          overlaps (51.3px of a 128px line) — so the relationship holds at every
          width instead of the two separating into stacked blocks.

          The lg offset is that same fraction solved for `top`: the image starts
          at the container's 170px padding, so 170 - 0.7 x font-size lands the
          heading's last 0.4 over it. At 1440 that is the 80.5px the frame
          specifies; at 1024, where the clamp gives 91px type, it keeps the
          overlap instead of letting it fall to 11px.
        */}
        <h1 className="text-display relative z-10 order-1 w-full text-center leading-[1.1] lg:pointer-events-none lg:absolute lg:left-0 lg:top-[calc(170px-0.7*var(--text-display))] lg:px-16">
          <span className="text-split-fill split-rise">Curiosity-driven</span>
        </h1>

        <div className="relative order-2 mt-[calc(var(--text-display)*-0.4)] aspect-[720/400] w-full max-w-[720px] lg:mt-0">
          <Image
            src="/assets/hero-illustration.jpg"
            alt="Illustration: a glowing bulb rising over a moonlit landscape"
            fill
            priority
            quality={95}
            sizes="(max-width: 1024px) 100vw, 720px"
            className="object-cover"
          />
        </div>

        <p className="text-lead order-3 mt-8 w-full max-w-[600px] text-center leading-[1.5] text-navy lg:mt-10">
          I&apos;m a product designer with 5 years of experience shaping 0→1
          enterprise SaaS products. I craft intuitive workflows that address
          complex use cases and optimize for efficiency.
        </p>
      </div>
    </section>
  );
}
