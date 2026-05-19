import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MetaTerminal — The Performance OS for Serious Traders",
  description:
    "Join thousands of traders using MetaTerminal to track performance, learn from AI, and build discipline — all in one place.",
  keywords: ["trading", "performance", "AI", "forex", "crypto", "stocks", "futures", "options"],
  openGraph: {
    title: "MetaTerminal — The Performance OS for Serious Traders",
    description: "AI-powered trading performance platform. Track scores, learn from AI, build discipline.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-brand-deeper text-brand-offwhite antialiased">
        {children}
      </body>
    </html>
  );
}
