import type { Metadata } from "next";
import "@/app/styles/globals.scss";
import Navbar from "./ui/Navbar";
import Root from "./ui/Root";

import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

export const metadata: Metadata = {
  title: "juliopeixoto.io",
  description: "Julio Peixoto personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <html>
      <body className="">
        <Root isMobile={isMobile}>
          <Navbar />
          <main className="">
            {children}
          </main>
        </Root>
      </body>
    </html>
  );
}
