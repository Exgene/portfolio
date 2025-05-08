"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function BackButton({ id }: { id: string }) {
    const router = useRouter()
    return (
        <button
            className="flex items-center gap-2 text-sm transition-all opacity-75 hover:opacity-100 w-fit"
            onClick={(e) => {
                e.preventDefault()
                router.push(`/#${id}`)
            }}
        >
            <ArrowLeft className="size-4" /> Back
        </button>
    )
}