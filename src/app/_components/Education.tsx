export function Education() {
  const educationItems = [
    {
      title: "BE Degree - AI & ML, NMAMIT Nitte",
      date: "2021 - 2025",
      description: "Bachelor's degree with focus on artificial intelligence",
    },
    {
      title: "Canara PU College, CS",
      date: "2019-2020",
      description: "Basics of Computers",
    },
  ];

  return (
    <div className="flex flex-col gap-8 pt-12" id="education">
      <h2 className="text-xl font-semibold tracking-tight">Education</h2>

      <div className="flex flex-col gap-10">
        {educationItems.map((item, index) => (
          <div key={index} className="relative pl-8 group">

            {index < educationItems.length - 1 && (
              <div className="absolute left-[3.5] top-6 bottom-[-2.5rem] w-px bg-muted-foreground/30"></div>
            )}

            <div className="relative flex flex-col gap-1">
              <h3 className="text-lg font-medium">{item.title}</h3>
              <div className="absolute -left-8 top-2 w-2 h-2 rounded-full bg-muted-foreground group-hover:bg-primary transition-colors"></div>
              <p className="text-xs text-muted-foreground">{item.date}</p>
              {item.description && (
                <p className="mt-1 text-sm opacity-90">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
