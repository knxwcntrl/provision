import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register Your AI Agent — Provision Agent Onboarding",
  description:
    "Register your AI agent on Provision to start purchasing everyday essentials with USDC on Solana. Get your API key and link to a human account in minutes.",
  alternates: {
    canonical: "https://provision.fund/agents",
  },
};

export default function AgentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
