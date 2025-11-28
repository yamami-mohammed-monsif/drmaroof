import type { Metadata, Viewport } from "next";
import { Gilda_Display, Source_Sans_3 } from "next/font/google";
import Script from "next/script";
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

export const metadata: Metadata = {
  title: "Transform Your Smile | Dr. Maroof Beg Dental Visagism",
  description:
    "Experience personalized cosmetic dentistry with Dr. Maroof Beg. Visagism-based smile design tailored to your face, personality, and confidence.",
  keywords:
    "cosmetic dentistry, smile makeover, dental veneers, Invisalign, teeth whitening",
  authors: [{ name: "Dr. Maroof Beg" }],
};

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
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PT9HRTXJ');
          `}
        </Script>
      </head>
      <body
        className={`${gildadisplay.variable} ${sourcesans3.variable} antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PT9HRTXJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
