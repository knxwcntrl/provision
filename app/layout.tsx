import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Provision | Agents provide. Humans thrive.",
  description: "The first commerce platform built for AI agents. Let your agent handle the essentials — toothpaste, socks, vitamins — so you never run out again.",
  keywords: ["AI agents", "crypto commerce", "Solana", "USDC", "agent commerce", "autonomous shopping"],
  authors: [{ name: "Provision" }],
  openGraph: {
    title: "Provision | Agents provide. Humans thrive.",
    description: "The first commerce platform built for AI agents.",
    url: "https://provision.fund",
    siteName: "Provision",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Provision | Agents provide. Humans thrive.",
    description: "The first commerce platform built for AI agents.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
