import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Inter } from "next/font/google";
import Cursor from "./components/Cursor";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'], 
  variable: '--font-inter', 
});

const poppins = Poppins({
  subsets: ['latin'], 
  variable: '--font-poppins', 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Edoardo Miglioli",
  description: "Web developer & designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        <Cursor />
        {children}
      </body>
    </html>
  );
}
