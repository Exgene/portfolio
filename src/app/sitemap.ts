import { MetadataRoute } from "next";
import { projects } from "./_components/projects";
import { blogs } from "./_components/blogs";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const project_urls = projects.map((project) => ({
        url: `${process.env.NEXT_PUBLIC_URL}/projects/${project.id}`,
        lastModified: new Date().toISOString(),
        priority: 0.8,
    }));

    const blog_urls = blogs.map((post) => ({
        url: `${process.env.NEXT_PUBLIC_URL}/blog/${post.id}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "weekly",
        priority: 1.0,
    }));

    return [
        {
            url: process.env.NEXT_PUBLIC_URL!,
            lastModified: new Date().toISOString(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        // {
        //     url: `${process.env.NEXT_PUBLIC_URL}/projects`,
        //     lastModified: new Date().toISOString(),
        //     changeFrequency: "weekly",
        // },
        {
            url: `${process.env.NEXT_PUBLIC_URL}/blog`,
            lastModified: new Date().toISOString(),
            changeFrequency: "weekly",
            priority: 1,
        },
        ...project_urls,
        ...blog_urls,
    ]
}
