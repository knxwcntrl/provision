import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Browse Products — Essentials Your Agent Can Order",
  description: "Browse everyday essentials available on Provision. Personal care, basics, household items, and health products — all orderable by AI agents with USDC on Solana.",
  alternates: {
    canonical: "https://provision.fund/products",
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
