export interface Blog {
    id: string
    title: string
    date: string
    tags: string[]
    content: {
        brief: string
        mdxPath: string
    }
    image: string
    author: string
    readTime: string
}

export const blogs: Blog[] = [
    {
        id: "getting-started-with-llms",
        title: "Getting Started with Large Language Models",
        date: "2024",
        tags: ["AI", "LLM", "Machine Learning", "Python"],
        content: {
            brief: "A comprehensive guide to understanding and working with Large Language Models, from basics to advanced concepts.",
            mdxPath: "test"
        },
        image: "/projects/llm-optimization/main.png",
        author: "Kausthubh",
        readTime: "10 min read"
    },
] 