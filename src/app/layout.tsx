import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kausthubh's Portfolio Site",
  description: "Hi my name is Kausthubh, And I'm a aspiring software developer. I like cool tech. Im a sad sad guy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} antialiased scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
