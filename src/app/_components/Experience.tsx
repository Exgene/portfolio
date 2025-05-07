export function Experience() {
  const experienceItems = [
    {
      title: "Internship at Edgeverve",
      duration: "6 months",
      description: "AI Intern, I was responsible for developing and maintaining Agentic AI for banking solutions"
    },
    {
      title: "Intern at Cantilever Labs",
      duration: "4 months",
      description: "I was responsible for generating, documenting and researching various topics on AI and Machine Learning"
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
                <p className="mt-1 text-base opacity-90">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
