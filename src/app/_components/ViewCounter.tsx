"use client"

import { useEffect, useState } from "react"

interface ViewCounterProps {
    slug: string
}

export function ViewCounter({ slug }: ViewCounterProps) {
    const [views, setViews] = useState<number | null>(null)

    useEffect(() => {
        const incrementView = async () => {
            try {
                const response = await fetch(`/api/views/set`, {
                    method: "POST",
                    body: JSON.stringify({ slug }),
                })
                const data = await response.json()
                setViews(data.result)
            } catch (error) {
                console.error("Error incrementing view count:", error)
            }
        }

        incrementView()
    }, [slug])

    useEffect(() => {
        const getViews = async () => {
            try {
                const response = await fetch(`/api/views/get`, {
                    method: "POST"  ,
                    body: JSON.stringify({ slug }),
                })
                const data = await response.json()
                setViews(data.result)
            } catch (error) {
                console.error("Error fetching view count:", error)
            }
        }

        getViews()
    }, [slug])

    return (
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>{views ?? "..."} views</span>
        </div>
    )
} 