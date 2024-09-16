import type { Metadata } from "next";
import "@/app/styles/globals.scss";
import Navbar from "./ui/Navbar";
import Root from "./ui/Root";
import Footer from "./ui/Footer";
import { ThemeProvider } from './ui/Theme';

export const metadata: Metadata = {
  title: "Julio Peixoto",
  description: "Julio Peixoto personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href='/favicon.ico'/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="flex min-h-screen flex-col">
        <ThemeProvider>
          <Root isMobile={typeof window !== 'undefined' && window.innerWidth < 768}>
            <Navbar />
            <main className="flex flex-col flex-grow">
              {children}
              <Footer />
            </main>
          </Root>
        </ThemeProvider>
      </body>
    </html>
  );
}
