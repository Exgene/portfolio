import React from "react"

type DescriptionItem =
  | string
  | {
      text: string
      link?: { url: string; label?: string }
      highlights?: string[]
    }

function renderDescriptionPart(
  item: DescriptionItem,
  key: number
): React.ReactNode {
  const text =
    typeof item === "string" ? item : item.text
  const link = typeof item === "string" ? undefined : item.link
  const highlights = typeof item === "string" ? undefined : item.highlights

  const urlRegex = /(https?:\/\/[^\s]+)/g
  const segments: React.ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = urlRegex.exec(text)) !== null) {
    const before = text.slice(lastIndex, match.index)
    segments.push(
      highlights?.length ? wrapHighlights(before, highlights) : before
    )
    segments.push(
      <a
        key={`link-${key}-${match.index}`}
        href={match[0]}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent underline decoration-accent/50 hover:decoration-accent transition-colors"
      >
        {match[0]}
      </a>
    )
    lastIndex = match.index + match[0].length
  }
  const tail = text.slice(lastIndex)
  segments.push(
    highlights?.length ? wrapHighlights(tail, highlights) : tail
  )

  const content = (
    <>
      {segments.map((seg, i) => (
        <React.Fragment key={`desc-${key}-${i}`}>{seg}</React.Fragment>
      ))}
    </>
  )

  if (link) {
    return (
      <>
        {content}{" "}
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent font-medium underline decoration-accent/50 hover:decoration-accent transition-colors"
        >
          {link.label ?? link.url}
        </a>
      </>
    )
  }

  return content
}

function wrapHighlights(
  text: string,
  terms: string[]
): React.ReactNode {
  if (!terms.length) return text
  const sorted = [...terms].sort((a, b) => b.length - a.length)
  let parts: React.ReactNode[] = [text]
  for (const term of sorted) {
    const next: React.ReactNode[] = []
    for (const part of parts) {
      if (typeof part === "string") {
        const segs = part.split(term)
        segs.forEach((seg, i) => {
          next.push(seg)
          if (i < segs.length - 1) {
            next.push(
              <span
                key={`${term}-${i}`}
                className="font-semibold text-foreground"
              >
                {term}
              </span>
            )
          }
        })
      } else {
        next.push(part)
      }
    }
    parts = next
  }
  return (
    <>
      {parts.map((part, i) => (
        <React.Fragment key={`hl-${i}`}>{part}</React.Fragment>
      ))}
    </>
  )
}

export function Experience() {
  const experienceItems: {
    title: string
    duration: string
    description: DescriptionItem[]
  }[] = [
    {
      title: "AI Development Intern, Edgeverve Systems, Bangalore",
      duration: "Feb 2025 – Jul 2025",
      description: [
        {
          text: "Implemented multithreaded execution for core services, increasing system throughput by 150% across production workloads.",
          highlights: ["150%"],
        },
        {
          text: "Designed and integrated backend APIs that power automated UI generation pipelines used by over 100 corporate clients, eliminating manual component development.",
          highlights: ["100 corporate clients"],
        },
        {
          text: "Contributed to a product-wide migration to a microservice architecture, improving scalability, deployment independence, and fault isolation.",
          highlights: ["microservice architecture"],
        },
        {
          text: "Reworked background job execution by introducing stateful lifecycle tracking, graceful failure handling, and outbox-driven retries, significantly improving reliability of async workloads.",
          highlights: ["outbox-driven retries"],
        },
        {
          text: "Co-authored AI4UI, a multi-agent framework for frontend generation, published on arXiv; achieved competitive benchmark performance vs industry baselines on compatibility, compilation success, security, feature implementation, and code quality.",
          link: {
            url: "https://arxiv.org/pdf/2512.06046",
            label: "arXiv paper",
          },
          highlights: ["AI4UI", "arXiv"],
        },
      ],
    },
    {
      title: "Content Developer Intern (AI & ML), Cantilever Labs, Remote",
      duration: "Nov 2021 – Mar 2022",
      description: [
        {
          text: "Developed and published AI/ML learning modules and quizzes that engaged 1,000+ learners across online platforms, improving course completion rates by 20%.",
          highlights: ["1,000+ learners", "20%"],
        },
        {
          text: "Researched and simplified 10+ complex AI/ML concepts (e.g., neural networks, NLP pipelines) into beginner-friendly explanations, boosting learner satisfaction scores.",
          highlights: ["10+", "neural networks", "NLP pipelines"],
        },
      ],
    },
  ]

  return (
    <section className="flex flex-col gap-8 pt-12" id="education">
      <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
        Experience
      </h2>

      <div className="flex flex-col gap-10">
        {experienceItems.map((item, index) => (
          <div key={index} className="group">
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.duration}</p>
              {item.description?.length > 0 && (
                <ul className="mt-2 space-y-1">
                  {item.description.map((desc, descIndex) => (
                    <li
                      key={descIndex}
                      className="text-base opacity-90 flex items-start gap-2"
                    >
                      <span className="text-accent mt-2 shrink-0">•</span>
                      <span className="min-w-0">
                        {renderDescriptionPart(desc, descIndex)}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
