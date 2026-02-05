import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://provision.fund"),
  title: "Provision | Agents provide. Humans thrive.",
  description:
    "The first commerce platform built for AI agents. Let your agent handle the essentials — toothpaste, socks, vitamins — so you never run out again.",
  keywords: [
    "AI agents",
    "crypto commerce",
    "Solana",
    "USDC",
    "agent commerce",
    "autonomous shopping",
  ],
  authors: [{ name: "Provision" }],
  alternates: {
    canonical: "https://provision.fund",
  },
  openGraph: {
    title: "Provision | Agents provide. Humans thrive.",
    description: "The first commerce platform built for AI agents.",
    url: "https://provision.fund",
    siteName: "Provision",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Provision — AI Agent Commerce Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Provision | Agents provide. Humans thrive.",
    description: "The first commerce platform built for AI agents.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className="font-sans antialiased">
        <Providers>
          <Nav />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
