import { projects } from '@/app/_components/projects'
import { ImageResponse } from 'next/og'

export const alt = "Image for project"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = projects.find(p => p.id === id)

  if (!project) {
    return
  }


  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: `url(${project.images.main})`,
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
