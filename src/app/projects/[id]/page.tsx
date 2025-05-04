import { projects } from "@/app/_components/projects"
import { ArrowRight, Github } from "lucide-react"
import Link from "next/link"

const ProjectPage = async ({ params }: { params: Promise<{ id: number }> }) => {
  // why nextjs why 
  const { id } = await params
  if (projects[id] == undefined) {
    return (
      <section className="h-screen text-5xl text-center flex items-center justify-center font-bold">Ivalid Access, This will be reported</section>
    )
  }
  return (
    <section className="text-sm h-screen mt-24">
      <div className="">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-medium">{projects[id].title}</h3>
          <p className="text-xs text-muted-foreground">{projects[id].date}</p>
          <p className="flex gap-2">
            {projects[id].tags.map((tag, index) => {
              return (
                <span key={index} className="text-[0.6rem] text-accent bg-black/50 border border-accent/25 px-2 py-1 rounded-4xl">{tag}</span>
              )
            })}
          </p>
          {projects[id].content && (
            <div className="mt-2 text-foreground/95 text-sm">
              {projects[id].content.brief}
            </div>
          )}

          <div className="flex gap-4 items-center">
            <Link
              href={projects[id].link}
              className="flex items-center gap-1 text-xs transition-all opacity-75 hover:opacity-100"
            >
              <Github className="size-3" />Github
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectPage
