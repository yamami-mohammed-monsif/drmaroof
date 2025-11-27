import type { Metadata, Viewport } from "next";
import { Gilda_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const gildadisplay = Gilda_Display({
  variable: "--font-gilda-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  preload: true,
  fallback: ["Georgia", "serif"],
  adjustFontFallback: true,
});

const sourcesans3 = Source_Sans_3({
  variable: "--font-sourcesans3",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
  preload: true,
  fallback: ["system-ui", "sans-serif"],
  adjustFontFallback: true,
});

// Metadata export now only contains SEO/Content-related tags
export const metadata: Metadata = {
  title: "Transform Your Smile | Dr. Maroof Beg Dental Visagism",
  description:
    "Experience personalized cosmetic dentistry with Dr. Maroof Beg. Visagism-based smile design tailored to your face, personality, and confidence.",
  keywords:
    "cosmetic dentistry, smile makeover, dental veneers, Invisalign, teeth whitening",
  authors: [{ name: "Dr. Maroof Beg" }],
};

// Viewport export contains device/browser configuration tags
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a7e8c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gildadisplay.variable} ${sourcesans3.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
