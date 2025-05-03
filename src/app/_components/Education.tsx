export function Education() {
  const educationItems = [
    {
      title: "Computer Science, Stanford University",
      date: "2020 - 2024",
      description: "Bachelor's degree with focus on artificial intelligence"
    },
    {
      title: "Full Stack Development Bootcamp",
      date: "Summer 2023",
      description: "Intensive program covering modern web technologies"
    },
    {
      title: "High School Diploma",
      date: "2016 - 2020",
      description: "Advanced coursework in math and computer science"
    }
  ];

  return (
    <div className="flex flex-col gap-8 pt-12" id="education">
      <h2 className="text-xl font-semibold tracking-tight">EDUCATION</h2>
      
      <div className="flex flex-col gap-10">
        {educationItems.map((item, index) => (
          <div key={index} className="group">
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="text-sm opacity-75">{item.date}</p>
              {item.description && (
                <p className="mt-1 text-sm opacity-90">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
