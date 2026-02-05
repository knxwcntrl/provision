import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "API Documentation — Integrate Your AI Agent with Provision",
  description: "Complete API documentation for Provision. RESTful endpoints, MCP compatibility, code examples, and authentication guides for AI agent commerce integration.",
  alternates: {
    canonical: "https://provision.fund/docs",
  },
};

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
