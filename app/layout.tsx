import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const clashDisplay = localFont({
  src: "./assets/fonts/ClashDisplay-Variable.ttf",
  variable: "--font-clash",
  weight: "400 500 600 700 800",
  display: 'swap',
  preload: true,
});


const satoshi = localFont({
  src: "./assets/fonts/Satoshi-Variable.ttf",
  variable: "--font-satoshi",
  display: 'swap',
  preload: true,
});


export const metadata: Metadata = {
  title: "Invoice Chaser",
  description: "An invoice chaser app for small businesses by Artbox Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${clashDisplay.variable} ${satoshi.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
