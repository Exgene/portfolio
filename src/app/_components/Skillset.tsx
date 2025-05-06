import {
  Code2,
  Database,
  FileCode2,
  Globe,
  Layers,
  Server,
  Terminal,
  Cpu,
  Braces,
  Palette,
  Cog,
  Cloud,
  AppWindowMac,
  GitFork,
} from "lucide-react";

export const Skillset = () => {
  const skills = [
    {
      name: "JavaScript",
      icon: FileCode2,
      level: "Intermediate",
    },
    {
      name: "React",
      icon: Code2,
      level: "Intermediate",
    },
    {
      name: "TypeScript",
      icon: Braces,
      level: "Intermediate",
    },
    {
      name: "Python",
      icon: Terminal,
      level: "Advanced",
    },
    {
      name: "Node.js",
      icon: Server,
      level: "Intermediate",
    },
    {
      name: "Postgres",
      icon: Database,
      level: "Intermediate",
    },
    {
      name: "UI/UX",
      icon: AppWindowMac,
      level: "Intermediate",
    },
    {
      name: "Sveltekit",
      icon: Layers,
      level: "Intermediate",
    },
    {
      name: "Pytorch",
      icon: Cpu,
      level: "Advanced",
    },
    {
      name: "DevOps",
      icon: Cog,
      level: "Beginner",
    },
    {
      name: "Firebase",
      icon: Cloud,
      level: "Intermediate",
    },
    {
      name: "Git",
      icon: GitFork,
      level: "Intermediate",
    },
  ];

  return (
    <section className="flex flex-col gap-8 pt-12">
      <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
      <p className="italic text-muted-foreground hidden sm:grid"> PS I MADE THIS LAYOUT, I CALL IT THE WHACKJOB</p>

      <div className="grid sm:grid-cols-6 grid-cols-4 gap-4">
        {skills.map((skill, index) => {
          const isEvenIndex = index % 2 === 0;

          return (
            <div
              key={index}
              className={`col-span-2 rounded-lg border border-foreground/10 bg-background p-4 transition-all hover:border-accent/30 ${!isEvenIndex ? "sm:translate-y-6" : ""
                }`}
            >
              <div className="flex items-center gap-3">
                <skill.icon className="h-5 w-5 text-accent" />
                <h3 className="mt-2 font-medium">{skill.name}</h3>
              </div>
              <div className="mt-1">
                <span className="text-xs text-muted-foreground">{skill.level}</span>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
