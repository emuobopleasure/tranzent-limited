import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://tranzent-limited.vercel.app"),
  title: {
    default: "Tranzent Limited | Beyond Delivery - Vehicle Transportation & Logistics",
    template: "%s | Tranzent Limited",
  },
  description:
    "Tranzent Limited is a cargo and freight company specializing in car logistics — professional, secure vehicle delivery across Nigeria. Insured, tracked, and on time.",
  keywords: [
    "Tranzent",
    "Tranzent Limited",
    "car logistics Nigeria",
    "vehicle transportation Nigeria",
    "car delivery Nigeria",
    "vehicle haulage",
    "car recovery towing Nigeria",
  ],
  openGraph: {
    title: "Tranzent Limited | Beyond Delivery",
    description:
      "Professional, secure vehicle delivery across Nigeria - insured, tracked, and on time.",
    url: "https://tranzent-limited.vercel.app",
    siteName: "Tranzent Limited",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tranzent Limited | Beyond Delivery",
    description:
      "Professional, secure vehicle delivery across Nigeria — insured, tracked, and on time.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Tranzent Limited",
  alternateName: "Tranzent",
  url: "https://tranzent-limited.vercel.app",
  description:
    "Tranzent Limited is a cargo and freight company specializing in car logistics — professional, secure vehicle delivery across Nigeria.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot 809, A-Close, 64 Crescent, Gwarinpa",
    addressLocality: "Abuja",
    addressCountry: "NG",
  },
  areaServed: "NG",
  sameAs: [
    "https://www.linkedin.com/company/tranzent-limited/",
    "https://x.com/Tranzent_Ltd",
    "https://www.instagram.com/tranzent_limited/",
    "https://facebook.com/Tranzent/",
  ],
};

export const viewport = {
  themeColor: "#f7f9fb",
};




export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
