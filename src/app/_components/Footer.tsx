export function Footer() {
  const socialLinks = [
    { name: "Twitter", href: "https://twitter.com/kausthubh" },
    { name: "LinkedIn", href: "https://linkedin.com/in/kausthubh" },
    { name: "GitHub", href: "https://github.com/kausthubh" }
  ];

  return (
    <div className="w-full py-8 flex justify-between items-center border-t border-opacity-20">
      <p className="text-sm opacity-75">© {new Date().getFullYear()} KAUSTHUBH J RAO</p>

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

