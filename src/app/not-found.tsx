import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[90vh] gap-4">
      <h1 className="text-3xl sm:text-5xl font-bold">404</h1>
      <p className="text-muted-foreground text-base sm:text-lg">Page not found</p>
      <Link
        href="/"
        className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="size-4" />
        Return home
      </Link>
    </section>
  )
} 