import { projects } from '@/app/_components/projects'
import { ImageResponse } from 'next/og'

export const alt = "Image for project"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
const BASE_URL = process.env.NEXT_PUBLIC_URL || "http://localhost:3000"

export async function generateStaticParams() {
  const ids = projects.map(project => ({
    id: project.id
  }))
  return ids
}

export default async function Image({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = projects.find(p => p.id === id)

  if (!project) {
    return
  }

  const imageUrl = project.images.main.startsWith("http")
    ? project.images.main
    : `${BASE_URL}/${project.images.main}`


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
        {project.title}
      </div>
    ),
    {
      ...size,
    }
  )
}
