import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} bg-background text-white antialiased`}>
        <Navbar />
        {/* pt-[58px] offsets the fixed navbar so content isn't hidden beneath it */}
        <div className="pt-[58px]">
          {children}
        </div>
      </body>
    </html>
  );
}
