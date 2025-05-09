export interface Project {
  id: string;
  title: string;
  date: string;
  tags: string[];
  content: {
    brief: string;
    main: string;
    features: string[];
    challenges: string[];
    learnings: string[];
  };
  links: {
    github: string;
    demo?: string;
    documentation?: string;
  };
  tech: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    tools?: string[];
    ai?: string[];
  };
  images: {
    main: string;
    screenshots: string[];
  };
  achievements?: string[];
}

export const projects: Project[] = [

  {
    id: "llm-optimization",
    title: "LLM Optimization Research (Rakuten)",
    date: "2025",
    tags: ["Python", "Pytorch", "LLM", "Research", "Optimization"],
    content: {
      brief: "Research project on LLM optimization techniques, conducted as part of final year project with Rakuten.",
      main: "Conducted extensive research on various optimization techniques for Large Language Models (LLMs) in collaboration with Rakuten. The project involved analyzing and implementing different approaches to improve model performance, reduce computational requirements, and enhance inference speed.",
      features: [
        "Model quantization",
        "Knowledge distillation",
        "Pruning techniques",
        "Performance analysis"
      ],
      challenges: [
        "Balancing model size and performance",
        "Implementing optimization techniques",
        "Evaluating trade-offs"
      ],
      learnings: [
        "Advanced LLM optimization",
        "Research methodology",
        "Performance analysis"
      ]
    },
    links: {
      github: ""
    },
    tech: {
      ai: ["PyTorch", "LLM", "Custom Optimization"],
      tools: ["Git", "Jupyter Notebooks"]
    },
    images: {
      main: "/projects/llm-optimization/main.png",
      screenshots: [
        "/projects/llm-optimization/1.png",
        "/projects/llm-optimization/2.png"
      ]
    }
  },
  {
    id: "real-incognito",
    title: "Real Incognito - AI Data Anonymizer",
    date: "2024",
    tags: ["Python", "GAN", "Machine Learning", "Pytorch"],
    content: {
      brief: "A GAN-based data anonymization system that preserves data utility while removing sensitive information. Won 2nd place in AI domain at hackathon.",
      main: "Developed an innovative solution using Generative Adversarial Networks (GANs) to anonymize sensitive data while maintaining its statistical properties and utility. The system uses a custom generator model to create synthetic data that preserves the performance characteristics of the original dataset while removing all personally identifiable information.",
      features: [
        "GAN-based data generation for privacy preservation",
        "Custom loss functions for utility preservation",
        "Real-time data anonymization pipeline",
        "Evaluation metrics for data utility assessment"
      ],
      challenges: [
        "Balancing privacy and data utility",
        "Optimizing GAN training for stable results",
        "Handling different types of sensitive data"
      ],
      learnings: [
        "Advanced GAN architectures and training techniques",
        "Privacy-preserving machine learning",
        "Data utility metrics and evaluation"
      ]
    },
    links: {
      github: "https://github.com/Exgene/real-incognito",
      demo: "https://real-incognito.vercel.app"
    },
    tech: {
      ai: ["PyTorch", "GAN", "Custom Neural Networks"],
      tools: ["Docker", "Git", "Jupyter Notebooks"]
    },
    images: {
      main: "/projects/real-incognito/main.png",
      screenshots: [
        "/projects/real-incognito/1.png",
      ]
    },
    achievements: ["2nd Place in AI Domain at Hackathon"]
  },
  {
    id: "freix",
    title: "Freix - Logistics Platform",
    date: "2024",
    tags: ["Svelte", "TypeScript", "TailwindCSS", "Logistics", "Pytorch"],
    content: {
      brief: "A logistics platform that simplifies international shipping tracking and management. Won 1st place in Logistics domain at Hackfest 2024.",
      main: "Built a comprehensive logistics platform that revolutionizes how users track and manage international shipments. The platform features real-time shipment tracking, automated status updates, and an intuitive interface for managing multiple shipments.",
      features: [
        "Real-time shipment tracking",
        "Automated status updates",
        "Multi-shipment management",
        "Route optimization"
      ],
      challenges: [
        "Integrating multiple shipping APIs",
        "Real-time data synchronization",
        "Complex state management"
      ],
      learnings: [
        "Advanced state management in Svelte",
        "API integration patterns",
        "Real-time data handling"
      ]
    },
    links: {
      github: "https://github.com/Exgene/freix",
      demo: "https://freix.vercel.app"
    },
    tech: {
      frontend: ["Svelte", "TypeScript", "TailwindCSS"],
      backend: ["Node.js", "Express"],
      database: ["PostgreSQL"],
      tools: ["Docker", "Git"]
    },
    images: {
      main: "/projects/freix/main.png",
      screenshots: [
        "/projects/freix/1.png",
        "/projects/freix/2.png"
      ]
    },
    achievements: ["1st Place in Logistics Domain at Hackfest 2024"]
  },

  {
    id: "locked-in-reality",
    title: "Locked in Reality - Treasure Hunt Game",
    date: "2024",
    tags: ["Svelte", "TypeScript", "TailwindCSS", "UI/UX"],
    content: {
      brief: "An immersive treasure hunt game with a Windows boot menu-inspired interface, created for Incridea college event.",
      main: "Developed an innovative treasure hunt game that mimics the Windows boot experience while providing an engaging puzzle-solving experience. The project showcases advanced UI/UX design skills with a perfect recreation of the Windows boot sequence and interface.",
      features: [
        "Windows boot sequence simulation",
        "Interactive puzzle solving",
        "Progressive difficulty levels",
        "Real-time progress tracking"
      ],
      challenges: [
        "Recreating Windows UI elements",
        "Creating engaging puzzles"
      ],
      learnings: [
        "Advanced UI/UX design",
        "Animation and transitions"
      ]
    },
    links: {
      github: "https://github.com/Exgene/locked-in-reality",
      demo: "https://lir.tascnmamit.in/serverRoom"
    },
    tech: {
      frontend: ["Svelte", "TypeScript", "TailwindCSS"],
      tools: ["Git", "Figma"]
    },
    images: {
      main: "/projects/locked-in-reality/main.png",
      screenshots: [
        "/projects/locked-in-reality/1.png",
        "/projects/locked-in-reality/2.png"
      ]
    }
  },
  {
    id: "incridea-client",
    title: "Incridea Client - College Event Platform",
    date: "2024",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "React"],
    content: {
      brief: "Frontend development for Incridea, the largest college event platform, as part of the core technical team.",
      main: "Contributed to the development of the frontend for Incridea, a major college event platform. The project involved creating a responsive and user-friendly interface for event registration, schedule management, and participant communication.",
      features: [
        "Event registration system",
        "Schedule management",
        "Participant dashboard",
        "Real-time updates"
      ],
      challenges: [
        "Handling large-scale user base",
        "Real-time data synchronization",
        "Complex UI state management"
      ],
      learnings: [
        "Large-scale application architecture",
        "Performance optimization",
        "Team collaboration"
      ]
    },
    links: {
      github: "https://github.com/Exgene/incridea-client",
      demo: "https://incridea.com"
    },
    tech: {
      frontend: ["Next.js", "React", "TypeScript", "TailwindCSS"],
      tools: ["Git", "Figma"]
    },
    images: {
      main: "/projects/incridea/main.png",
      screenshots: [
        "/projects/incridea/1.png",
        "/projects/incridea/2.png"
      ]
    }
  },
  {
    id: "student-hub",
    title: "Student Hub",
    date: "2023",
    tags: ["Next.js", "Postgres", "Google Maps API"],
    content: {
      brief: "A comprehensive platform for student resource management and collaboration.",
      main: "Developed a full-stack application for student resource management, featuring document sharing, collaboration tools, and academic resource organization.",
      features: [
        "Resource sharing platform",
        "Collaboration tools",
        "Location-based services",
        "Document management"
      ],
      challenges: [
        "Integrating Google Maps API",
        "Real-time collaboration",
        "File management system"
      ],
      learnings: [
        "API integration",
        "Real-time features",
        "Database optimization"
      ]
    },
    links: {
      github: "https://github.com/Exgene/student-hub",
      demo: "https://student-hub-nitte.vercel.app/"
    },
    tech: {
      frontend: ["Next.js", "React", "TailwindCSS"],
      backend: ["Node.js", "Express"],
      database: ["PostgreSQL"],
      tools: ["Google Maps API", "Git"]
    },
    images: {
      main: "/projects/student-hub/main.png",
      screenshots: [
        "/projects/student-hub/1.png",
        "/projects/student-hub/2.png"
      ]
    }
  },
  {
    id: "portfolio-minimal",
    title: "Portfolio Minimal",
    date: "2025",
    tags: ["Next.js", "React", "TailwindCSS", "TypeScript"],
    content: {
      brief: "A minimal and modern portfolio website showcasing projects and skills.",
      main: "Built a clean and efficient portfolio website using Next.js 14 and React. The project demonstrates modern web development practices with server-side rendering, responsive design, and optimal performance.",
      features: [
        "Dark mode support",
        "Responsive design",
        "Project showcase",
        "Smooth animations"
      ],
      challenges: [
        "Optimizing performance",
        "Maintaining minimal design"
      ],
      learnings: [
        "Next.js 15 features",
        "Performance optimization",
        "Modern web design"
      ]
    },
    links: {
      github: "https://github.com/exgene/portfolio-minimal",
      demo: "https://kausthubh.com"
    },
    tech: {
      frontend: ["Next.js", "React", "TypeScript", "TailwindCSS"],
      tools: ["Git", "Figma"]
    },
    images: {
      main: "/projects/portfolio/main.png",
      screenshots: [
        "/projects/portfolio/1.png",
        "/projects/portfolio/2.png"
      ]
    }
  },
];
