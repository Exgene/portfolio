import { socials } from "./socials"
import Link from "next/link"
import Image from "next/image"
import { MapPin, MoveHorizontal } from "lucide-react"

export function AboutSimple() {
  return (
    <section className="flex gap-10 justify-center items-center pt-4" id="about">
      <Image
        src="/pfp.jpeg"
        alt="Kausthubh profile picture"
        width={144}
        height={144}
        sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 144px"
        className="object-cover rounded-full border-2 border-foreground/60 aspect-square shadow-md w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36"
        priority
        quality={85}
      />
      <div className="text-sm md:text-lg flex flex-col gap-3">
        <p>
          Hello, my name is {' '}
          <span className="font-bold italic text-accent">
            Kausthubh
          </span>
        </p>
        <p className="opacity-90">
          I'm a <span className="font-bold">Software Engineer </span> who bathes..... ocassionally. I love building stuff.
        </p>
        <p className="text-xs sm:text-sm flex items-center gap-2 text-muted-foreground opacity-80 py-2">
          <MapPin className="size-5" aria-hidden="true" />
          <span>{'Mangalore'}</span> {/** 
           <MoveHorizontal />
           <span>{'Bangalore'}</span>
          **/}
        </p>

        <ul className="flex gap-4 flex-wrap xs:pr-4">
          {socials.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base flex items-center gap-1 transition-all opacity-85 hover:opacity-100"
                aria-label={`Visit ${link.name}`}
                prefetch={false}
              >
                <link.icon className="size-4" aria-hidden="true" />
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section >
  )
}

