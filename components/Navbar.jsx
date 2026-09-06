import Link from "next/link";

/*
  A floating bar: fixed to the top on every page, with a 40% white ground and a
  blur so content reads through it rather than under a hard edge. A spacer of
  the same height keeps it in the layout, so nothing below has to know the bar
  left the flow.

  The whole logo-and-name group is the link home, and because the bar is fixed
  it stays reachable anywhere on a case study.
*/
export default function Navbar() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 h-[72px] w-full border-b border-navy bg-white/40 backdrop-blur-md">
        <div className="mx-auto flex h-full w-full max-w-[1440px] items-center px-6 md:px-10 lg:px-16">
          <Link
            href="/"
            aria-label="Kun’s portfolio — home"
            className="flex items-center gap-3 text-ink transition-opacity hover:opacity-70"
          >
            {/*
              Plain <img>, not next/image: thin line-art, and Vercel's optimiser
              transcodes to AVIF, which softens hairline strokes at this size.
              This is the alpha build of the mark — the original carries an
              opaque white ground that would read as a tile on a translucent bar.
            */}
            <img
              src="/assets/logo-nav-alpha.png"
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 shrink-0 object-contain"
            />
            <span className="text-[16px] leading-[1.1] text-ink">
              Kun’s portfolio
            </span>
          </Link>
        </div>
      </header>
      {/* Holds the 72px the fixed bar no longer occupies. */}
      <div aria-hidden="true" className="h-[72px] w-full shrink-0" />
    </>
  );
}
