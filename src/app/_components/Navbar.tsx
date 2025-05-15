import Link from "next/link";

export function Navbar() {
  const navLinks = [
    // { name: "About", href: "#about" },
    { name: "Blog", href: "/blog" },
    // { name: "Youtube", href: "#youtube" }
  ];

  return (
    <div className="fixed top-0 left-0 right-0 bg-background z-10 font-inter">
      <nav className="mx-auto max-w-3xl h-16 flex items-center justify-between border-b border-white/50 px-4">
        <Link 
          href={'/'} 
          className="font-bold opacity-85 tracking-tight"
          aria-label="Home - Kausthubh J Rao"
        >
          Kausthubh J Rao
        </Link>

        <ul className="flex gap-6 flex-wrap">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                href={link.href}
                className="transition-all text-sm md:text-base opacity-85 hover:opacity-100"
                aria-label={`Navigate to ${link.name}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

