import { blogs } from '@/app/_components/blogs'
import { ImageResponse } from 'next/og'

export const alt = "Image for blog post"
export const size = {
  width: 1200,
  height: 630,
}

const BASE_URL = process.env.NEXT_PUBLIC_URL || "http://localhost:3000"

export async function generateStaticParams() {
  const ids = blogs.map(blog => ({
    id: blog.id
  }))
  return ids
}

export default async function Image({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const blog = blogs.find(b => b.id === id)

  if (!blog) {
    return
  }

  const imageUrl = blog.image.startsWith("http")
    ? blog.image
    : `${BASE_URL}${blog.image}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {blog.title}
      </div>
    ),
    {
      ...size,
    }
  )
} 