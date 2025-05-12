import { Blogs } from "@/app/_components/Blogs"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog - Kausthubh",
  description: "Read my thoughts on technology, programming, and more.",
}

export default function Blog() {
  return (
    <section className="flex min-h-[calc(100vh-13rem)] px-4 sm:px-0 mt-16 flex-col gap-8 mb-12">
      <Blogs />
    </section>
  )
}
