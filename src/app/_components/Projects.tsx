import { ArrowRight, ArrowRightToLine, Github } from "lucide-react";
import Link from "next/link";
import { projects } from "./projects";

export function Projects() {

  return (
    <section className="flex flex-col gap-8 pt-12" id="projects">
      <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Projects</h2>

      <div className="flex flex-col gap-10">
        {projects.map((project, index) => (
          <div key={index} className="">
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-medium">{project.title}</h3>
              <p className="text-sm text-muted-foreground pb-1">{project.date}</p>
              <p className="flex gap-2">
                {project.tags.map((tag, index) => {
                  return (
                    <span key={index} className="text-xs text-accent bg-black/50 border border-accent/25 px-2 py-1 rounded-4xl">{tag}</span>
                  )
                })}
              </p>
              {project.content && (
                <div className="mt-2 text-foreground/95 text-base pb-2">
                  {project.content.brief}
                </div>
              )}

              <div className="flex gap-4 items-center ">
                <Link
                  href={project.link}
                  className="flex items-center gap-1 sm:text-base text-sm transition-all opacity-75 hover:opacity-100"
                >
                  <Github className="size-3" />Github
                </Link>

                <Link className="flex items-center gap-1 group " href={`/projects/${index}`}>
                  <span className="sm:text-base text-sm">Know more</span>
                  <ArrowRight className="size-3 group-hover:translate-x-2 transition-all" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
