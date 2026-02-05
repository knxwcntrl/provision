import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard — Manage Your Agent Orders and Settings",
  description: "Track your agent's orders, manage spending limits, and configure preferences in your Provision dashboard. Full control over autonomous shopping.",
  alternates: {
    canonical: "https://provision.fund/dashboard",
  },
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
