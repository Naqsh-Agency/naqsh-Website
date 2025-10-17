import type { Metadata } from "next"
import ClientLayout from "./clientLayout"
import "./globals.css"

export const metadata: Metadata = {
  title: "Naqsh Agency | Premium Branding & Web Solutions",
  description:
    "Transform your business with Naqsh Agency's premium branding, web design, and SEO services. Elevate your brand, drive growth, and achieve measurable results.",
  generator: "Next.js",
  keywords: [
    // USA-focused
    "branding agency USA",
    "web design agency USA",
    "website development USA",
    // UK-focused
    "branding agency UK",
    "web design agency UK",
    "creative agency London",
    // Canada-focused
    "branding agency Canada",
    "web design agency Canada",
    "digital agency Toronto",
    //General
    "brand Design",
    "website design agency USA",
    "Brand Book",
    "brand style guide",
    "full stake website",
    "brand Guidellines",
    "Brand Kit",
    "web development services",
    "corporate identity",
    "rebranding",
    "web design agency",
    "digital branding agency",
    "startup branding",
    "brand identity design",
    "luxury branding agency",
    "creative agency USA",
    "branding company UK",
    "web design Canada",
    
  ],
  authors: [{ name: "Naqsh Agency", url: "https://naqsh.agency" }],
  creator: "Naqsh Agency",
  publisher: "Naqsh Agency",
  metadataBase: new URL("https://naqsh.agency"),
  openGraph: {
    title: "Naqsh Agency | Premium Branding & Web Design in USA, UK & Canada",
    description:
      "Work with Naqsh Agency — a creative branding and web design agency serving clients across the USA, UK, and Canada. Elevate your brand with strategy, design, and technology.",
    url: "https://naqsh.agency",
    siteName: "Naqsh Agency",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naqsh Agency | Premium Branding & Web Solutions",
    description:
      "Transform your business with premium branding, web design, and SEO services.",
    site: "@naqsh_agency", // Replace with your Twitter handle if available
  },
  icons: {
    icon: "/naqsh-logo.png",
    shortcut: "/naqsh-logo.png",
    apple: "/naqsh-logo.png",
  },
  
  alternates: {
    canonical: "https://naqsh.agency",
    languages: {
      "en-US": "https://naqsh.agency",
      "en-GB": "https://naqsh.agency/uk",
      "en-CA": "https://naqsh.agency/ca",
    },
  },
  
  category: "Business, Branding, Web Design",
  
  themeColor: "#ffffff",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
      "noarchive": false,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
