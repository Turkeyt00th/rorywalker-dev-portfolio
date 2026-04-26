import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rory Walker | Junior Developer",
  description:
    "Rory Walker, a junior developer learning Python and building practical web applications.",
};
  
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        <nav className="px-6 pt-8">
          <div className="max-w-3xl mx-auto flex gap-6 text-sm">
            <Link href="/" className="hover:text-gray-400 transition">
              Home
            </Link>
            <Link href="/projects" className="hover:text-gray-400 transition">
              Projects
            </Link>
            <Link href="/about" className="hover:text-gray-400 transition">
              About
            </Link>
            <Link href="/contact" className="hover:text-gray-400 transition">
              Contact
            </Link>
          </div>
        </nav>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
