"use client"
import { ArrowRight, ChevronDown } from "lucide-react"
import Link from "next/link"
import { blogs } from "./blogs"
import { useEffect, useState } from "react"
import Image from "next/image"

export function Blogs() {
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const isCollapsed = localStorage.getItem("blogs-collapsed") === "true";
        setShowAll(isCollapsed);
    }, []);

    const displayedBlogs = showAll ? blogs : blogs.slice(0, 3)

    return (
        <section className="flex flex-col gap-8 pt-12" id="blogs">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Blogs</h2>

            <div className="flex flex-col gap-10">
                {displayedBlogs.map((blog) => (
                    <div key={blog.id} id={`${blog.id}`} className="scroll-mt-20">
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                                <h3 className="text-xl font-medium">
                                    <Link
                                        href={`/blog/${blog.id}`}
                                        aria-label={`Read more about ${blog.title}`}
                                    >
                                        {blog.title}
                                    </Link>
                                </h3>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <span>{blog.date}</span>
                                    <span>•</span>
                                    <span>{blog.readTime}</span>
                                    <span>•</span>
                                    <span>{blog.author}</span>
                                </div>
                                <p className="flex gap-2 flex-wrap">
                                    {blog.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="text-xs text-accent bg-black/50 border border-accent/25 px-2 py-1 rounded-4xl"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </p>
                                {blog.content && (
                                    <div className="mt-2 text-foreground/95 text-base pb-2">
                                        {blog.content.brief}
                                    </div>
                                )}

                                <Link
                                    className="flex items-center gap-1 group"
                                    href={`/blog/${blog.id}`}
                                    aria-label={`Read more about ${blog.title}`}
                                >
                                    <span className="sm:text-base text-sm">Read more</span>
                                    <ArrowRight
                                        className="size-3 mt-[2px] group-hover:translate-x-2 transition-all"
                                        aria-hidden="true"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {blogs.length > 3 && (
                <button
                    onClick={() => {
                        setShowAll(!showAll)
                        localStorage.setItem("blogs-collapsed", (!showAll).toString())
                    }}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mx-auto mt-4"
                    aria-expanded={showAll}
                    aria-controls="blogs-list"
                >
                    {showAll ? "Show Less" : "Show More"}
                    <ChevronDown
                        className={`size-4 transition-transform ${showAll ? "rotate-180" : ""}`}
                        aria-hidden="true"
                    />
                </button>
            )}
        </section>
    )
} 