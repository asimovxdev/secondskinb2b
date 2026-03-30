import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "Second Skin Style | Elite Custom Sportswear",
  description: "Premium custom sportswear engineered to move like your second skin. Built for Running Clubs, Sports Teams, and performance-driven communities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-black antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
