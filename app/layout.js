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
  metadataBase: new URL("https://tranzent.co"),
  title: {
    default: "Tranzent — Beyond Delivery",
    template: "%s | Tranzent",
  },
  description:
    "Tranzent is a purpose-driven logistics and vehicle transportation enterprise, moving vehicles and freight with insured precision, real-time transparency, and absolute peace of mind.",
  keywords: [
    "Tranzent",
    "vehicle transportation",
    "logistics",
    "car shipping",
    "fleet logistics",
    "mobility",
  ],
  openGraph: {
    title: "Tranzent — Beyond Delivery",
    description:
      "Insured, transparent, on-time vehicle transportation and logistics — engineered for absolute peace of mind.",
    siteName: "Tranzent",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
