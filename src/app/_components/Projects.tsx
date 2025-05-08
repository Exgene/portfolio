"use client"
import { ArrowRight, ArrowRightToLine, Github, ChevronDown } from "lucide-react";
import Link from "next/link";
import { projects } from "./projects";
import { useState } from "react";

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section className="flex flex-col gap-8 pt-12" id="projects">
      <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Projects</h2>

      <div className="flex flex-col gap-10">
        {displayedProjects.map((project) => (
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

              <div className="flex gap-4 items-center ">
                <Link
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 sm:text-base text-sm transition-all opacity-75 hover:opacity-100"
                >
                  <Github className="size-3" />Github
                </Link>

                <Link 
                  className="flex items-center gap-1 group" 
                  href={`/projects/${project.id}`}
                >
                  <span className="sm:text-base text-sm">Know more</span>
                  <ArrowRight className="size-3 mt-[2px] group-hover:translate-x-2 transition-all" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {projects.length > 3 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mx-auto mt-4"
        >
          {showAll ? "Show Less" : "Show More"}
          <ChevronDown className={`size-4 transition-transform ${showAll ? 'rotate-180' : ''}`} />
        </button>
      )}
    </section>
  );
}
