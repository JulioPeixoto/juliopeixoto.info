import type { Metadata } from "next";

import "@/app/styles/globals.scss";
import Navbar from "./ui/Navbar";
import Root from "./ui/Root";
import Footer from "./ui/Footer";

export const metadata: Metadata = {
  title: "Julio Peixoto",
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
      <body className="flex min-h-screen flex-col">
        <Root isMobile={isMobile}>
          <Navbar />
          <main className="flex min-h-screen flex-col">
            {children}
            <Footer />
          </main>
        </Root>
      </body>
    </html>
  );
}
