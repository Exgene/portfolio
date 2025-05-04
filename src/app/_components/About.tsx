import { socialLinks } from "./socials"
import Link from "next/link"
import Image from "next/image"
export function AboutSimple() {
  return (
    <section className="flex gap-10 justify-center items-center pt-4" id="about">
      <Image
        src="/pfp.jpeg"
        alt="Kausthubh profile picture"
        width={96}
        height={96}
        className="object-cover aspect-square rounded-full border-2 border-foreground border-opacity-10 shadow-md"
      />
      <div className="flex flex-col gap-3">
        <p className="">
          Hello, my name is {' '}
          <span className="font-bold italic text-accent">
            Kausthubh
          </span>
        </p>
        <p className="text-sm opacity-80">
          I'm a <span className="font-bold">Software Engineer </span> who bathes..... ocassionally. I love building stuff.
        </p>

        <ul className="flex gap-4 flex-wrap">
          {socialLinks.map((link) => (
            <Link
              href={link.href}
              key={link.name}
              className="text-sm flex items-center gap-1 transition-all opacity-75 hover:opacity-100"
            >
              <link.icon className="size-4" />
              {link.name}
            </Link>
          ))}
        </ul>
      </div>
    </section>
  )
}

