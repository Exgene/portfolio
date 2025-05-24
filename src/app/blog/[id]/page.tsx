import { blogs } from "@/app/_components/blogs"
import Image from "next/image"
import BackButton from "@/app/_components/BackButton"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const ids = blogs.map(blog => ({
    id: blog.id
  }))
  return ids
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const blog = blogs.find(b => b.id === id)

  if (!blog) {
    return {
      title: 'Blog Not Found',
      description: 'The requested blog post could not be found.',
    }
  }

  const keywords = [
    blog.title,
    ...blog.tags,
    'blog',
    'article',
    'kausthubh',
  ].join(', ')

  const url = `${process.env.NEXT_PUBLIC_URL}/blog/${id}`
  const imageUrl = `${process.env.NEXT_PUBLIC_URL}${blog.image}`

  return {
    title: blog.title,
    description: blog.content.brief,
    openGraph: {
      title: blog.title,
      description: blog.content.brief,
      url: url,
      siteName: "Kausthubh's Blog",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      locale: "en_US",
      type: "article",
      authors: ["Kausthubh"],
    },
    keywords,
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.content.brief,
      images: [imageUrl],
    },
  }
}

const BlogPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  const blog = blogs.find(b => b.id === id)

  if (!blog) {
    notFound()
  }

  const MDXContent = (await import(`@/markdown/${blog.content.mdxPath}.mdx`)).default

  return (
    <section className="text-sm py-24 max-w-4xl mx-auto px-4">
      <div className="flex flex-col gap-8">
        <BackButton id={blog.id} route="blog" />
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">{blog.title}</h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{blog.date}</span>
            <span>•</span>
            <span>{blog.readTime}</span>
            <span>•</span>
            <span>{blog.author}</span>
          </div>
          <div className="flex gap-2 flex-wrap">
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs text-accent bg-black/50 border border-accent/25 px-2 py-1 rounded-4xl"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            className="object-cover"
          />
        </div>

        <article className="prose prose-invert max-w-none">
          <MDXContent />
        </article>
      </div>
    </section>
  )
}

export default BlogPage 
