import { SITE_URL } from "@/lib/seo";

/* Five static routes; Next renders this to /sitemap.xml at build time. */
const ROUTES = [
  "/",
  "/work/smp-reporting",
  "/work/smp-registration",
  "/work/fairworx",
  "/work/seven-research",
];

export default function sitemap() {
  const lastModified = new Date();
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
