import Link from "next/link"
import { socialLinks } from "./socials"
export function Footer() {

  return (
    <footer className="w-full pt-8 flex justify-between items-center ">
      <p className="text-sm opacity-75">© {new Date().getFullYear()} Kausthubh J Rao</p>

      <ul className="flex gap-4">
        {socialLinks.map((link) => (
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

