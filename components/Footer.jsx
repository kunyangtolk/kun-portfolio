export default function Footer() {
  return (
    /*
      The wavy-line texture that used to sit over this has been removed
      (public/assets/footer-texture.webp is now unused). The cyan wash stays:
      unlike the hero's lime, it's set on the footer frame itself in Figma
      rather than being revealed by removing a layer above it.
    */
    <footer className="bg-cyan-wash w-full">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col px-6 py-16 md:px-10 lg:px-16 lg:py-20">
        <p className="text-[14px] leading-[1.5] text-navy">
          © {new Date().getFullYear()} Kun Yang-Tolkachev. All rights reserved.
        </p>
        {/* Figma spaces these with an empty line; a margin does the same job
            without handing screen readers a blank paragraph. */}
        <p className="mt-[21px] text-[14px] leading-[1.5] text-navy">
          Hero foreground art: Agnes Pelton, Sea Change, 1931
        </p>
      </div>
    </footer>
  );
}
