import "./globals.css";
import { SITE_URL, pageMetadata } from "@/lib/seo";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  ...pageMetadata({
    title: "Kun Yang-Tolkachev — Product Designer",
    description:
      "Product designer with 5 years of experience shaping 0\u21921 enterprise SaaS products.",
    path: "/",
  }),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
