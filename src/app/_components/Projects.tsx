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
    <div className="flex flex-col gap-8 pt-12" id="projects">
      <h2 className="text-xl font-semibold tracking-tight">PROJECTS</h2>

      <div className="flex flex-col gap-10">
        {projects.map((project, index) => (
          <div key={index} className="group">
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-medium">{project.title}</h3>
              <p className="text-sm opacity-75">{project.date}</p>
              <p className="text-sm">
                {project.tags.join(", ")}
              </p>
              {project.content && (
                <div className="mt-2 opacity-90 text-sm">
                  {project.content}
                </div>
              )}
              <div className="text-blue-500">
                <Link href={project.link} className="text-sm">Link to github</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
