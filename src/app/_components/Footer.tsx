"use client"

import Link from "next/link"
import { socials } from "./socials"

export function Footer() {
  return (
    <footer className="w-full py-8 px-4 mt-auto">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <p className="text-sm opacity-75">© {new Date().getFullYear()} Kausthubh</p>

        <ul className="flex gap-4 flex-wrap">
          {socials.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                target="_blank"
                prefetch={false}
                rel="noopener noreferrer"
                className="text-sm transition-all opacity-75 hover:opacity-100"
                aria-label={`Visit ${link.name}`}
              >
                <link.icon className="size-4" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

