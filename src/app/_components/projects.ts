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
    id: "black-contribution",
    title: "Black - Python Code Formatter Contribution",
    date: "2025",
    tags: ["Python", "Open Source", "Code Formatter", "Python 3.12", "Compiler", "AST"],
    content: {
      brief: "Contributed a fix to Black, the uncompromising Python code formatter, resolving formatting issues with Python 3.12's new generics syntax. The fix ensures proper handling of type parameters when function parameters contain trailing commas.",
      main: "Identified and fixed a bug in Black's formatting engine where functions with type parameters and trailing commas in their parameter lists were incorrectly formatted. The issue occurred in the `left_hand_split()` function, which processes both square brackets (for type parameters) and parentheses (for function parameters) as potential split points. When a trailing comma forced a split, the algorithm would incorrectly choose type parameter brackets instead of function parameter parentheses, causing malformed output. The solution involved modifying the split logic to avoid selecting parentheses as split points when they occur inside type parameter brackets, ensuring type parameters stay on the head line while the split correctly happens at the function parameter list. This contribution was merged into Black's main branch and is now used by millions of Python developers worldwide.",
      features: [
        "Fixed Python 3.12 generics syntax formatting bug",
        "Improved type parameter expansion logic in left_hand_split()",
        "Correct handling of trailing commas in function parameters with type parameters",
        "Maintained backward compatibility with existing code",
        "Added comprehensive test cases for edge cases",
        "Contributed to one of the most widely-used Python tools (41.2k+ stars)"
      ],
      challenges: [
        "Understanding Black's complex AST-based formatting algorithm",
        "Identifying the root cause in the left_hand_split() function",
        "Ensuring the fix doesn't break existing formatting behavior",
        "Writing test cases that cover all edge cases",
        "Navigating the contribution workflow of a major open-source project"
      ],
      learnings: [
        "Deep understanding of Python AST manipulation and code formatting",
        "Working with large-scale open-source codebases",
        "Writing robust test cases for formatter edge cases",
        "Contributing to projects with strict code quality standards",
        "Understanding Python 3.12's new generics syntax",
        "Code review process in major OSS projects"
      ]
    },
    links: {
      github: "https://github.com/psf/black/pull/4777",
      documentation: "https://github.com/psf/black/issues/4740"
    },
    tech: {
      backend: ["Python", "AST", "Code Parsing"],
      tools: ["Git", "pytest", "Black Codebase"]
    },
    images: {
      main: "/projects/black-contribution/main.png",
      screenshots: []
    },
    achievements: ["Merged into Black main branch", "Fixed issue #4740", "Used by 41.2k+ developers"]
  },

  {
    id: "gitea-contribution",
    title: "Gitea - Git Service Contribution",
    date: "2025",
    tags: ["Go", "Open Source", "Git", "Webhooks", "Security", "Event Handling"],
    content: {
      brief: "Fixed a critical security issue in Gitea where tag events could bypass branch filter targets in webhooks, ensuring proper event filtering and preventing unintended webhook triggers.",
      main: "Identified and resolved a security vulnerability in Gitea's webhook system where tag events were incorrectly bypassing branch filter configurations. This could lead to webhooks being triggered for events that should have been filtered out, potentially causing unintended actions or security issues. The fix ensures that webhook branch filters are properly enforced for all event types, including tag events, maintaining the integrity of automated workflows and preventing misconfigurations. This contribution improves the reliability and security of one of the most popular self-hosted Git services, used by thousands of organizations worldwide.",
      features: [
        "Fixed webhook branch filter bypass vulnerability",
        "Ensured proper event filtering for tag events",
        "Improved security of webhook event handling",
        "Maintained backward compatibility",
        "Enhanced reliability of automated workflows",
        "Contributed to a major Git hosting platform"
      ],
      challenges: [
        "Understanding Gitea's complex webhook event system",
        "Identifying the root cause of the filter bypass",
        "Ensuring the fix doesn't break existing webhook configurations",
        "Testing edge cases in event filtering logic",
        "Contributing to a Go-based codebase with strict standards"
      ],
      learnings: [
        "Webhook security and event filtering best practices",
        "Go programming patterns in large-scale applications",
        "Git event handling and branch filtering logic",
        "Security considerations in automated systems",
        "Contributing to enterprise-grade open-source projects",
        "Code review and testing in distributed systems"
      ]
    },
    links: {
      github: "https://github.com/go-gitea/gitea/pull/35567"
    },
    tech: {
      backend: ["Go", "Git", "Webhooks"],
      tools: ["Git", "Go Testing", "Gitea Codebase"]
    },
    images: {
      main: "/projects/gitea-contribution/main.png",
      screenshots: []
    },
    achievements: ["Merged into Gitea main branch", "Security vulnerability fix", "Used by thousands of organizations"]
  },

  {
    id: "fin-agent",
    title: "Fin-Agent - AI-Powered Financial Assistant",
    date: "2024",
    tags: ["Next.js", "FastAPI", "Google ADK", "Gemini", "GCP", "PostgreSQL", "Microservices"],
    content: {
      brief: "A comprehensive AI-powered financial assistant built for Google AI Hackathon, featuring real-time stock analysis, portfolio insights, and conversational AI with Google ADK agents.",
      main: "Developed a sophisticated financial platform that combines Next.js frontend with two microservices architecture. The system leverages Google ADK (Agent Development Kit) with Gemini models to provide intelligent financial analysis, real-time stock insights, portfolio management, and conversational AI capabilities. The platform includes streaming chat with tool-calling, dashboard analytics, audio transcription, and background job processing for comprehensive financial insights.",
      features: [
        "Real-time stock analysis and market insights",
        "AI-powered conversational financial assistant",
        "Portfolio tracking and net worth analysis",
        "Streaming chat with dynamic tool-calling",
        "Audio transcription for voice queries",
        "Background job processing for insights",
        "Microservices architecture with GCP deployment",
        "PostgreSQL database for data persistence"
      ],
      challenges: [
        "Integrating multiple AI agents with Google ADK",
        "Implementing streaming responses with tool-calling",
        "Managing microservices communication",
        "Handling real-time financial data processing",
        "Optimizing database queries for large datasets"
      ],
      learnings: [
        "Advanced AI agent orchestration with Google ADK",
        "Microservices architecture and deployment",
        "Real-time streaming with FastAPI and SSE",
        "GCP cloud infrastructure and PostgreSQL optimization",
        "Financial data processing and analysis"
      ]
    },
    links: {
      github: "https://github.com/turing-labs",
      demo: "https://fin-ai-agent-352166908028.asia-south1.run.app/"
    },
    tech: {
      frontend: ["Next.js", "React", "TypeScript", "TailwindCSS"],
      backend: ["FastAPI", "Python", "Uvicorn"],
      database: ["PostgreSQL", "SQLModel", "SQLAlchemy"],
      ai: ["Google ADK", "Gemini", "LiteLLM", "Whisper"],
      tools: ["GCP", "Docker", "Git", "MCP Protocol"]
    },
    images: {
      main: "/projects/fin-agent/dashboard-overview.png",
      screenshots: [
        "/projects/fin-agent/dashboard-overview.png",
        "/projects/fin-agent/chat-interface.png",
        "/projects/fin-agent/stock-analysis.png",
        "/projects/fin-agent/networth-chart.png",
        "/projects/fin-agent/portfolio-insights.png",
        "/projects/fin-agent/financial-chat.png",
        "/projects/fin-agent/market-data.png",
        "/projects/fin-agent/ai-insights.png",
        "/projects/fin-agent/microservices-arch.png",
        "/projects/fin-agent/gcp-deployment.png",
        "/projects/fin-agent/adk-agents.png",
        "/projects/fin-agent/streaming-chat.png",
        "/projects/fin-agent/real-time-data.png",
        "/projects/fin-agent/api-documentation.png",
        "/projects/fin-agent/background-jobs.png",
        "/projects/fin-agent/postgresql-db.png",
        "/projects/fin-agent/mcp-integration.png",
        "/projects/fin-agent/whisper-transcription.png",
        "/projects/fin-agent/hackathon-winner.png"
      ]
    },
  },

  {
    id: "cuda-lsp",
    title: "CUDA-LSP - High-Performance Language Server",
    date: "2025",
    tags: ["Go", "LSP", "Language Server Protocol", "CUDA", "Compiler", "Incremental Parsing"],
    content: {
      brief: "A blazing-fast Language Server Protocol (LSP) implementation in Go for CUDA development, featuring incremental diffing, intelligent hover documentation, and context-aware autocompletion built from scratch.",
      main: "Engineered a Language Server Protocol implementation from the ground up to provide features for CUDA programming. Built with performance as the core principle, the server implements efficient incremental document synchronization using diff-based text updates, eliminating the need for full document re-parsing on every change. The system features a custom lexer that tokenizes CUDA-specific constructs (threadIdx, blockIdx, blockDim, gridDim, __global__, __device__), intelligent hover information retrieval, and context-aware autocompletion. The architecture leverages Go's concurrency model and efficient string manipulation to achieve sub-millisecond response times for language features, making it significantly faster than traditional full-parse approaches.",
      features: [
        "Incremental diffing algorithm for efficient document updates",
        "Real-time hover documentation for CUDA tokens and keywords",
        "Context-aware autocompletion with token-based suggestions",
        "Custom CUDA lexer with support for GPU-specific constructs",
        "Zero-overhead document state management",
        "Full LSP protocol compliance with JSON-RPC 2.0",
        "Efficient two-pointer token extraction algorithm",
        "Optimized document synchronization without full re-parsing"
      ],
      challenges: [
        "Implementing efficient incremental diffing without full document re-parsing",
        "Designing a token extraction algorithm that handles edge cases (whitespace, special characters)",
        "Building a robust document state management system that handles concurrent edits",
        "Optimizing lexer performance for large CUDA codebases",
        "Ensuring LSP protocol compliance with proper JSON-RPC message handling",
        "Handling multi-line edits and complex text transformations"
      ],
      learnings: [
        "Deep understanding of Language Server Protocol internals and JSON-RPC 2.0",
        "Advanced text processing algorithms and incremental parsing techniques",
        "Performance optimization in Go for language tooling",
        "Compiler theory and lexer implementation from scratch",
        "State management patterns for language servers",
        "Efficient data structures for document synchronization"
      ]
    },
    links: {
      github: "https://github.com/exgene/cuda-autocompletes"
    },
    tech: {
      backend: ["Go", "Language Server Protocol", "JSON-RPC 2.0"],
      tools: ["Git", "Make", "Custom Lexer", "Incremental Parsing"]
    },
    images: {
      main: "/projects/cuda-lsp/main.png",
      screenshots: []
    }
  },

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
