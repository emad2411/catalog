import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Voltagent design language: Inter for everything (sans), JetBrains Mono for code.
// Geist (Next 16 default) is replaced because Voltagent's DESIGN.md specifies Inter
// as the primary font for every typographic role.
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono", // keep the same var name shadcn already references
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Catalog",
  description: "Product catalog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
