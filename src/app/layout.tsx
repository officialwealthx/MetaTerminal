import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "MetaTerminal",
  description: "Trader Safety & Behavioral Risk Operating System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#121116" />
      </head>
      <body className="bg-background text-white antialiased">
        <Navbar />
        {/* pt-[58px] offsets the fixed navbar so content isn't hidden beneath it */}
        <div className="pt-[58px]">
          {children}
        </div>
      </body>
    </html>
  );
}
