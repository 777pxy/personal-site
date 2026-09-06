import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Praj Yakha",
  description: "Praj Yakha's personal site.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <Analytics />
      <body className="bg-background text-foreground">
        <div className="mx-auto max-w-5xl px-4 font-sans">{children}</div>
      </body>
    </html>
  );
}
