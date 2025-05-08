import { MailIcon, Twitter } from "lucide-react";
import Link from "next/link";

export function ContactMe() {
  return (
    <section className="flex flex-col gap-8 pt-12" id="contact">
      <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Contact Me</h2>
      <div>
        <span className="italic text-sm">{'Forms TODO! I will soon add a section for anonymous reach outs!'}</span>
        <br />
        <br />
        <span className="">These are my preferred way of contacts, Although you can message me up in any of the socials i have mentioned! :)</span>
      </div>
      <div className="flex gap-10">
        <ul className="flex gap-4 text-sm sm:text-base" role="navigation" aria-label="Contact links">
          <li>
            <Link 
              href={'mailto:kausthubhjrao@gmail.com'} 
              className="opacity-85 hover:opacity-100 flex items-center gap-1"
              aria-label="Send me an email"
            >
              <MailIcon className="size-4" aria-hidden="true" />
              <span>Email</span>
            </Link>
          </li>
          <li>
            <Link 
              href={'https://x.com/exgene'} 
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-85 hover:opacity-100 flex items-center gap-1"
              aria-label="Contact me on Twitter"
            >
              <Twitter className="size-4" aria-hidden="true" />
              <span>Twitter Dm</span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}
