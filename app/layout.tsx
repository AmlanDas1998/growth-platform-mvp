import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Premium Font Loading
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Amlan Das | Growth Platform", //
  description: "Ultra-premium strategic branding for Avir Toya and financial mastery.", //
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning is added to the <html> tag. 
    // This is the standard fix for Next.js hydration mismatches 
    // caused by browser extensions or dark-mode toggles.
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased bg-black text-white selection:bg-cyan-500/30`}
        // We also add it here to be absolutely certain the body-injected
        // attributes (like Grammarly's) don't trigger the red error screen.
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}