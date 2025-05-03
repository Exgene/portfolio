import { socialLinks } from "./socials"
export function Footer() {

  return (
    <div className="w-full py-8 flex justify-between items-center ">
      <p className="text-sm opacity-75">© {new Date().getFullYear()} Kausthubh J Rao</p>

      <ul className="flex gap-4">
        {socialLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="text-sm hover:underline transition-all opacity-75 hover:opacity-100"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

