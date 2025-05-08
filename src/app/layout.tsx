import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./_components/Navbar";
import { Footer } from "./_components/Footer";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
})

const title = "Kausthubh - Software Developer"
const description = `Hi my name is Kausthubh, And I'm a software developer. I like cool tech.
  I mainly work with AI but id love to dive deeper into different fields.`

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL!),
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description,
  openGraph: {
    title,
    description,
    locale: "en_US",
    type: "website",
    url: process.env.NEXT_PUBLIC_URL,
    siteName: "Kausthubh's Minimal Portfolio Site",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Og Image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} ${inter.variable} antialiased mx-auto max-w-xl`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
