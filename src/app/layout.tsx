import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ConsoleMessage from "@/components/ConsoleMessage";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sahil Bacchus",
  description: "Building AI, software, and systems that solve real problems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <ConsoleMessage />
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
