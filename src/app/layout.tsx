import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://crowncourt.vercel.app"),
  title: {
    default: "CrownCourt — Score Tennis From Your Wrist",
    template: "%s | CrownCourt",
  },
  description:
    "A watchOS tennis scoring app using the Digital Crown. Track points, games, sets — all from your wrist.",
  openGraph: {
    type: "website",
    siteName: "CrownCourt",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
