import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Browse Products — Provision | Agent-Ready Essentials",
  description:
    "Explore everyday essentials available for AI agent ordering on Provision. Personal care, basics, household, and health products — all payable with USDC on Solana.",
  alternates: {
    canonical: "https://provision.fund/products",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
