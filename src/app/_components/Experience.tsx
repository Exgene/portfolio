export function Experience() {
  const experienceItems = [
    {
      title: "AI Development Intern, Edgeverve Systems, Bangalore",
      duration: "Feb 2025 – Jul 2025",
      description: [
        "Designed and implemented AI pipelines to automate common UI workflows in React and React Native application development, reducing manual coding time by 40%.",
        "Integrated backend APIs with the AI pipeline, enabling seamless generation of production-ready UI components and improving developer productivity across 3+ active projects.",
        "Contributed to a large-scale rewrite of core product features, collaborating with 3+ cross-functional teams to ensure scalability and maintainability."
      ]
    },
    {
      title: "Content Developer Intern (AI & ML), Cantilever Labs, Remote",
      duration: "Nov 2021 – Mar 2022",
      description: [
        "Developed and published AI/ML learning modules and quizzes that engaged 1,000+ learners across online platforms, improving course completion rates by 20%.",
        "Researched and simplified 10+ complex AI/ML concepts (e.g., neural networks, NLP pipelines) into beginner-friendly explanations, boosting learner satisfaction scores."
      ]
    },
  ];

  return (
    <section className="flex flex-col gap-8 pt-12" id="education">
      <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Experience</h2>
      
      <div className="flex flex-col gap-10">
        {experienceItems.map((item, index) => (
          <div key={index} className="group">
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.duration}</p>
              {item.description && (
                <ul className="mt-2 space-y-1">
                  {Array.isArray(item.description) ? (
                    item.description.map((desc, descIndex) => (
                      <li key={descIndex} className="text-base opacity-90 flex items-start gap-2">
                        <span className="text-accent mt-2">•</span>
                        <span>{desc}</span>
                      </li>
                    ))
                  ) : (
                    <p className="mt-1 text-base opacity-90">{item.description}</p>
                  )}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
