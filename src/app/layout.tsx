import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./_components/Navbar";
import { Footer } from "./_components/Footer";
import { Analytics } from "@vercel/analytics/next";

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
  keywords: [
    'Kausthubh',
    'kausthubh',
    'kausthubh j rao',
    'Kausthubh J Rao',
    'Software Developer',
    'AI Developer',
    'Machine Learning',
    'Web Development',
    'Full Stack',
    'React',
    'Next.js',
    'SvelteKit',
    'TypeScript',
    'Python',
    'Portfolio',
    'Minimal Portfolio',
    'Software Engineering',
    'Tech Blog',
    'AI Projects',
    'Web Projects'
  ].join(', '),
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title,
    description,
    locale: "en_US",
    type: "website",
    url: process.env.NEXT_PUBLIC_URL,
    siteName: "Kausthubh's Minimal Portfolio Site",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scheme-only-dark">
      <body
        className={`${geistMono.variable} ${inter.variable} antialiased mx-auto max-w-2xl`}
      >
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
