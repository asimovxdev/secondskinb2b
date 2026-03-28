import type { Metadata } from "next";
import { Outfit, EB_Garamond } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: '--font-outfit',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: '--font-garamond',
  style: ['normal', 'italic']
});

export const metadata: Metadata = {
  title: "SECONDSKINSTYLE | Elite Custom Sportswear",
  description: "Elite Custom Sportswear. Built for Performance. Premium custom sportswear engineered to move like your second skin.",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${ebGaramond.variable} font-sans antialiased bg-white text-black selection:bg-black selection:text-white`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
