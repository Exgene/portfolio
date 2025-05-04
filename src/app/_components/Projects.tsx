import { ArrowRight, ArrowRightToLine, Github } from "lucide-react";
import Link from "next/link";

export function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      date: "May 2025",
      tags: ["Next.js", "React", "TailwindCSS"],
      content: "A minimal portfolio website built with Next.js and TailwindCSS.",
      link: "https://github.com/exgene"
    },
    {
      title: "AI Image Generator",
      date: "March 2025",
      tags: ["AI", "React", "API"],
      content: "An application that generates images using AI technology.",
      link: "https://github.com/exgene"
    },
    {
      title: "Task Management App",
      date: "January 2025",
      tags: ["React", "TypeScript", "Firebase"],
      content: "A web application for managing tasks and projects.",
      link: "https://github.com/exgene"
    }
  ];

  return (
    <section className="flex flex-col gap-8 pt-12" id="projects">
      <h2 className="text-xl font-semibold tracking-tight">Projects</h2>

      <div className="flex flex-col gap-10">
        {projects.map((project, index) => (
          <div key={index} className="">
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-medium">{project.title}</h3>
              <p className="text-xs text-muted-foreground">{project.date}</p>
              <p className="flex gap-2">
                {project.tags.map((tag, index) => {
                  return (
                    <span key={index} className="text-[0.6rem] text-accent bg-black/50 border border-accent/25 px-2 py-1 rounded-4xl">{tag}</span>
                  )
                })}
              </p>
              {project.content && (
                <div className="mt-2 text-foreground/95 text-sm">
                  {project.content}
                </div>
              )}

              <div className="flex gap-4 items-center">
                <Link
                  href={project.link}
                  className="flex items-center gap-1 text-xs transition-all opacity-75 hover:opacity-100"
                >
                  <Github className="size-3" />Github
                </Link>

                <Link className="text-xs flex items-center gap-1 group" href={`/projects/${index}`}>
                  Know more
                  <ArrowRight className="size-3 pt-0 group-hover:translate-x-2 transition-all" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
