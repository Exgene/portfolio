import { projects } from "@/app/_components/projects"
import { ArrowRight, Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const ProjectPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  const project = projects.find(p => p.id === id)
  
  if (!project) {
    return (
      <section className="min-h-screen text-5xl text-center flex items-center justify-center font-bold">Invalid Project ID</section>
    )
  }

  return (
    <section className="text-sm py-24 max-w-4xl mx-auto px-4">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">{project.title}</h1>
          <p className="text-sm text-muted-foreground">{project.date}</p>
          <div className="flex gap-2 flex-wrap">
            {project.tags.map((tag, index) => (
              <span key={index} className="text-xs text-accent bg-black/50 border border-accent/25 px-2 py-1 rounded-4xl">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
          <Image
            src={project.images.main}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="text-foreground/95 text-base">
          {project.content.brief}
        </div>

        <div className="text-foreground/95 text-base">
          {project.content.main}
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold">Key Features</h2>
          <ul className="list-disc list-inside space-y-1">
            {project.content.features.map((feature, index) => (
              <li key={index} className="text-foreground/90">{feature}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Technology Stack</h2>
          <div className="flex flex-col gap-4">
            {project.tech.frontend && (
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-medium">Frontend</h3>
                <p className="flex gap-2 flex-wrap">
                  {project.tech.frontend.map((tech, index) => (
                    <span key={index} className="text-xs text-accent bg-black/50 border border-accent/25 px-2 py-1 rounded-4xl">{tech}</span>
                  ))}
                </p>
              </div>
            )}
            {project.tech.backend && (
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-medium">Backend</h3>
                <p className="flex gap-2 flex-wrap">
                  {project.tech.backend.map((tech, index) => (
                    <span key={index} className="text-xs text-accent bg-black/50 border border-accent/25 px-2 py-1 rounded-4xl">{tech}</span>
                  ))}
                </p>
              </div>
            )}
            {project.tech.database && (
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-medium">Database</h3>
                <p className="flex gap-2 flex-wrap">
                  {project.tech.database.map((tech, index) => (
                    <span key={index} className="text-xs text-accent bg-black/50 border border-accent/25 px-2 py-1 rounded-4xl">{tech}</span>
                  ))}
                </p>
              </div>
            )}
            {project.tech.ai && (
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-medium">AI/ML</h3>
                <p className="flex gap-2 flex-wrap">
                  {project.tech.ai.map((tech, index) => (
                    <span key={index} className="text-xs text-accent bg-black/50 border border-accent/25 px-2 py-1 rounded-4xl">{tech}</span>
                  ))}
                </p>
              </div>
            )}
            {project.tech.tools && (
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-medium">Tools</h3>
                <p className="flex gap-2 flex-wrap">
                  {project.tech.tools.map((tech, index) => (
                    <span key={index} className="text-xs text-accent bg-black/50 border border-accent/25 px-2 py-1 rounded-4xl">{tech}</span>
                  ))}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold">Challenges</h2>
            <ul className="list-disc list-inside space-y-1">
              {project.content.challenges.map((challenge, index) => (
                <li key={index} className="text-foreground/90">{challenge}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold">Key Learnings</h2>
            <ul className="list-disc list-inside space-y-1">
              {project.content.learnings.map((learning, index) => (
                <li key={index} className="text-foreground/90">{learning}</li>
              ))}
            </ul>
          </div>
        </div>

        {project.images.screenshots.length > 0 && (
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.images.screenshots.map((screenshot, index) => (
                <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={screenshot}
                    alt={`${project.title} screenshot ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
  
        <div className="flex gap-4 items-center">
          <Link
            href={project.links.github}
            className="flex items-center gap-1 text-sm transition-all opacity-75 hover:opacity-100"
          >
            <Github className="size-4" /> GitHub
          </Link>
          {project.links.demo && (
            <Link
              href={project.links.demo}
              className="flex items-center gap-1 text-sm transition-all opacity-75 hover:opacity-100"
            >
              <ExternalLink className="size-4" /> Live Demo
            </Link>
          )}
          {project.links.documentation && (
            <Link
              href={project.links.documentation}
              className="flex items-center gap-1 text-sm transition-all opacity-75 hover:opacity-100"
            >
              <ExternalLink className="size-4" /> Documentation
            </Link>
          )}
        </div>

        {project.achievements && project.achievements.length > 0 && (
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold">Achievements</h2>
            <ul className="list-disc list-inside space-y-1">
              {project.achievements.map((achievement, index) => (
                <li key={index} className="text-foreground/90">{achievement}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}

export default ProjectPage
