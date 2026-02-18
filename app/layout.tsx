import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amlan Das | Student Career & Finance",
  description: "Boutique platform for growth, SIP education, and professional branding in Pune.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-black`} suppressHydrationWarning>
        {/* Navbar must be placed here for global visibility */}
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}