"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Loading() {
  const [showLoading, setShowLoading] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowLoading(true)
    }, 1000)

    return () => clearTimeout(showTimer)
  }, [])

  useEffect(() => {
    if (showLoading) {
      setShouldRender(true)
      const hideTimer = setTimeout(() => {
        setShouldRender(false)
      }, 1000)

      return () => clearTimeout(hideTimer)
    }
  }, [showLoading])

  if (!shouldRender) {
    return null
  }

  return (
    <section className="min-h-[calc(100vh-6rem)] gap-10 text-3xl sm:text-5xl text-center flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <div className="w-8 h-8 border-6 border-accent/25 border-t-accent rounded-full animate-spin" role="status" aria-label="Loading"></div>
        </div>
        <p className="text-foreground/75 animate-pulse">Loading...</p>
      </div>
      <Link
        href="/"
        className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Return to home page"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        Return home
      </Link>
    </section>
  )
} 