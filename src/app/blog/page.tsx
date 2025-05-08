import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Blog",
    description: "My blog posts about various experiences and learnings I've had so far.",
}
export const runtime = "edge"

export default function Blog() {
    return (
        <section className="flex min-h-[calc(100vh-13rem)] px-10 sm:px-0 mt-24 flex-col gap-8">
            <h1 className="text-2xl font-bold">Blog</h1>
            <p>Im currently working on a markdown renderer for my blog, so this page is currently under construction.</p>
        </section>
    )
}
