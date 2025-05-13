"use client"
import { ArrowRight, ArrowRightToLine, Github, ChevronDown } from "lucide-react";
import Link from "next/link";
import { projects as p } from "./projects";
import { useEffect, useState } from "react";

export function Projects() {
  const [projects, setProjects] = useState(p);

  useEffect(() => {
    const isCollapsed = localStorage.getItem("projects-collapsed") === "true";
    setProjects(p.slice(0, isCollapsed ? 3 : p.length));
  }, []);

  return (
    <section className="flex flex-col gap-8 pt-12" id="projects">
      <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Projects</h2>

      <div className="flex flex-col gap-10">
        {projects.map((project) => (
          <div key={project.id} id={`${project.id}`} className="scroll-mt-20">
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-medium">{project.title}</h3>
              <p className="text-sm text-muted-foreground pb-1">{project.date}</p>
              <p className="flex gap-2 flex-wrap">
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

              <div className="flex gap-4 items-center">
                <Link
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 sm:text-base text-sm transition-all opacity-75 hover:opacity-100"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github className="size-3" aria-hidden="true" />Github
                </Link>

                <Link
                  className="flex items-center gap-1 group"
                  href={`/projects/${project.id}`}
                  aria-label={`Learn more about ${project.title}`}
                >
                  <span className="sm:text-base text-sm">Know more</span>
                  <ArrowRight className="size-3 mt-[2px] group-hover:translate-x-2 transition-all" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

        <button
          onClick={() => {
            setProjects(p.slice(0, projects.length > 3 ? 3 : p.length));
            localStorage.setItem('projects-collapsed', projects.length > 3 ? "true" : "false")
          }}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mx-auto mt-4"
          aria-expanded={projects.length > 3}
          aria-controls="projects-list"
        >
          {projects.length > 3 ? "Show Less" : "Show More"}
          <ChevronDown className={`size-4 transition-transform ${projects.length > 3 ? 'rotate-180' : ''}`} aria-hidden="true" />
        </button>
    </section>
  );
}
