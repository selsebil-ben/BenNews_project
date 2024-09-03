
import 'bootstrap/dist/css/bootstrap.css';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Bootstrap from './Bootstap';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BEN News",
  description: "Stay updated with BENNews"
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        {children}
        <Bootstrap/>
      </body>
    </html>
  );
}
