"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function BackButton({ id }: { id: string }) {
    return (
        <Link
            href={`/#${id}`}
            className="flex items-center gap-2 text-sm transition-all opacity-75 hover:opacity-100 w-fit"
            aria-label="Go back to previous section"
        >
            <ArrowLeft className="size-4" aria-hidden="true" /> Back
        </Link>
    )
}