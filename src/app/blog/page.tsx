import { Blogs } from "@/app/_components/Blogs"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog - Kausthubh",
  description: "Read my thoughts on technology, programming, and more.",
  openGraph: {
    title: "Blog - Kausthubh",
    description: "Read my thoughts on technology, programming, and more.",
    locale: "en_US",
    type: "article",
    url: process.env.NEXT_PUBLIC_URL,
    siteName: "Kausthubh's Minimal Portfolio Site",
    authors: ["Kausthubh"],
  },
  keywords: [
    'Kausthubh Blogs',
    'Kausthubh Blog',
    'Kausthubh J Rao Blogs',
    'Kausthubh J Rao Blog',
    'Vim Motions',
    'Vim',
    'Neovim',
    'The Primeagen',
    'Blogs',
    'Blog',
    'Technology',
    'Programming',
    'Software Development',
    'Web Development',
    'AI Development',
  ].join(', '),
}

export default function Blog() {
  return (
    <section className="flex min-h-[calc(100vh-13rem)] px-4 sm:px-0 mt-16 flex-col gap-8 mb-12">
      <Blogs />
    </section>
  )
}
