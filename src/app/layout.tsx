import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: "East & Tailor — Modern menswear with Eastern heritage",
  description: "Heritage tailored for today. Experience sophisticated menswear crafted with natural fibers, fair production, and custom sizing.",
  keywords: [
    "bespoke tailoring",
    "menswear",
    "custom suits",
    "Eastern heritage fashion",
    "luxury menswear",
    "sustainable fashion",
    "made-to-measure",
    "heritage clothing",
    "artisan tailoring",
    "natural fabrics"
  ],
  authors: [{ name: "East & Tailor" }],
  creator: "East & Tailor",
  publisher: "East & Tailor",
  metadataBase: new URL("https://eastandtailor.com"),
  openGraph: {
    title: "East & Tailor — Modern menswear with Eastern heritage",
    description: "Bespoke wardrobes for modern tastemakers. Every silhouette is cut from regenerative natural fibres, finished by master artisans.",
    url: "https://eastandtailor.com",
    siteName: "East & Tailor",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "East & Tailor — Modern menswear with Eastern heritage",
    description: "Heritage tailored for today. Bespoke menswear crafted with natural fibers and master craftsmanship.",
    creator: "@eastandtailor",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://eastandtailor.com/#organization",
        name: "East & Tailor",
        url: "https://eastandtailor.com",
        logo: {
          "@type": "ImageObject",
          url: "https://eastandtailor.com/opengraph-image",
        },
        description: "Heritage tailored for today. Experience sophisticated menswear crafted with natural fibers, fair production, and custom sizing.",
        foundingDate: "1875",
        sameAs: [
          "https://instagram.com/eastandtailor",
          "https://facebook.com/eastandtailor",
          "https://twitter.com/eastandtailor",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-555-TAILOR",
          contactType: "Customer Service",
          areaServed: "Worldwide",
          availableLanguage: ["English"],
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://eastandtailor.com/#localbusiness",
        name: "East & Tailor",
        image: "https://eastandtailor.com/opengraph-image",
        priceRange: "$$$",
        address: [
          {
            "@type": "PostalAddress",
            streetAddress: "123 Heritage Lane",
            addressLocality: "Singapore",
            addressRegion: "SG",
            postalCode: "12345",
            addressCountry: "SG",
          },
          {
            "@type": "PostalAddress",
            streetAddress: "456 Savile Row",
            addressLocality: "London",
            addressRegion: "England",
            postalCode: "W1S 3PR",
            addressCountry: "GB",
          },
          {
            "@type": "PostalAddress",
            streetAddress: "789 Fashion District",
            addressLocality: "Dubai",
            addressRegion: "Dubai",
            postalCode: "00000",
            addressCountry: "AE",
          },
        ],
        telephone: "+1-555-TAILOR",
        url: "https://eastandtailor.com",
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "10:00",
          closes: "18:00",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://eastandtailor.com/#website",
        url: "https://eastandtailor.com",
        name: "East & Tailor",
        description: "Heritage tailored for today. Bespoke menswear crafted with natural fibers and master craftsmanship.",
        publisher: {
          "@id": "https://eastandtailor.com/#organization",
        },
      },
      {
        "@type": "ClothingStore",
        name: "East & Tailor",
        description: "Bespoke tailoring service offering custom menswear with Eastern heritage and modern design.",
        image: "https://eastandtailor.com/opengraph-image",
        priceRange: "$$$",
        paymentAccepted: "Credit Card, Debit Card, Wire Transfer",
        currenciesAccepted: "USD, GBP, SGD, AED",
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}