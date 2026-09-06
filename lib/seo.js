/*
  One place for the site's absolute URL and its per-page metadata.

  The URL is never hard-coded: Vercel sets VERCEL_PROJECT_PRODUCTION_URL at
  build time, NEXT_PUBLIC_SITE_URL overrides it the day a custom domain is
  added, and localhost is the fallback for `next dev`. metadataBase in
  app/layout.js turns every relative path below into an absolute one, which is
  what Open Graph and canonical tags require.
*/
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const SITE_NAME = "Kun Yang-Tolkachev";

/* Every page shares one card format — 1200x630, generated from the page's own
   title on the projects-section navy (public/assets/og). */
export function pageMetadata({ title, description, path, image, imageAlt }) {
  const card = image ?? "/assets/og/home.png";
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: path === "/" ? "website" : "article",
      siteName: SITE_NAME,
      locale: "en_US",
      url: path,
      title,
      description,
      images: [{ url: card, width: 1200, height: 630, alt: imageAlt ?? title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [card],
    },
  };
}
