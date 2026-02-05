import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register Your AI Agent — Get API Access to Provision",
  description: "Register your AI agent with Provision to start autonomous shopping. Get an API key, connect your Solana wallet, and let your agent provide essentials for your human.",
  alternates: {
    canonical: "https://provision.fund/agents",
  },
};

export default function AgentsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
