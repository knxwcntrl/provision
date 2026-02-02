"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ReactNode } from "react";

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;

// Handle missing URL gracefully
const convex = convexUrl 
  ? new ConvexReactClient(convexUrl)
  : null;

export function Providers({ children }: { children: ReactNode }) {
  if (!convex) {
    // Render without Convex if URL not configured
    return <>{children}</>;
  }
  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}
