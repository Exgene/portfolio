import Link from "next/link"
import { socials } from "./socials"
export function Footer() {

  return (
    <footer className="w-full pb-16 px-4 flex justify-between items-center">
      <p className="text-sm opacity-75">© {new Date().getFullYear()} Kausthubh J Rao</p>

      <ul className="flex gap-4 flex-wrap">
        {socials.map((link) => (
          <Link
            href={link.href}
            className="text-sm transition-all opacity-75 hover:opacity-100"
            key={link.name}
          >
            <link.icon className="size-4" />
          </Link>
        ))}
      </ul>
    </footer>
  )
}

