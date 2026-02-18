import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Ensure the path is correct

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amlan Das | Student Career & Finance Platform", //
  description: "Boutique platform for SIP education, Mutual Funds, and CV Building in Pune.", //
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-black`} suppressHydrationWarning>
        {/* The Navbar is placed here to be visible globally */}
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}