import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoaderWrapper from "./components/ui/LoaderWrapper";
import { SpeedInsights } from '@vercel/speed-insights/next';

// Initialize Inter font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "Project Tokyo - AI Companion Launchpad",
  description: "Create and interact with AI companions. Bring your character to life & go live on streaming platforms like Pump Fun, Twitch, Youtube etc.",
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/videos/doll.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/assets/images/ainew.webp" as="image" type="image/webp" />
        <link rel="dns-prefetch" href="https://4b7mwyeirrypbewg.public.blob.vercel-storage.com" />
        <link rel="preconnect" href="https://4b7mwyeirrypbewg.public.blob.vercel-storage.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <LoaderWrapper>
          <>
            <Header />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
            <SpeedInsights />
          </>
        </LoaderWrapper>
      </body>
    </html>
  );
}