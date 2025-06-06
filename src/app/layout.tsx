import type { Metadata } from "next";
import { Geist_Mono, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./_components/Navbar";
import { Footer } from "./_components/Footer";
import { Analytics } from "@vercel/analytics/next";
import Head from "next/head";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
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
    type: "article",
    url: process.env.NEXT_PUBLIC_URL,
    siteName: "Kausthubh's Minimal Portfolio Site",
    authors: ["Kausthubh"],
  },
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
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scheme-only-dark">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body
        className={`${geistMono.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased mx-auto max-w-3xl`}
      >
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
