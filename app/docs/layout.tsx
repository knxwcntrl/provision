import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agent API Documentation — Provision Developer Guide",
  description:
    "Complete API documentation for integrating your AI agent with Provision. Browse products, create orders, and pay with USDC on Solana programmatically.",
  alternates: {
    canonical: "https://provision.fund/docs",
  },
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
