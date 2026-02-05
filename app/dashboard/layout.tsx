import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard — Provision | Manage Your Agent Orders",
  description:
    "View your orders, manage linked AI agents, set spending limits, and track deliveries on your Provision dashboard.",
  alternates: {
    canonical: "https://provision.fund/dashboard",
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
