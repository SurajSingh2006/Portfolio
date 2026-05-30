import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import BackgroundEffects from "@/components/ui/BackgroundEffects";
import SmoothScroll from "@/components/layout/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Suraj Singh | Automobile & EV Technician",
  description: "Building the future of mobility through Automotive & EV Technology in Delhi, India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col relative bg-background text-foreground selection:bg-foreground selection:text-background">
        <BackgroundEffects />
        <div className="noise-bg" />
        <CustomCursor />
        <SmoothScroll>
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
