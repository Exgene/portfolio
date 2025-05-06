import { MailIcon, Twitter } from "lucide-react";
import Link from "next/link";

export function ContactMe() {
  return (

    <section className="flex flex-col gap-8 pt-12" id="education">
      <h2 className="text-2xl font-semibold tracking-tight">Contact Me</h2>
      <div>
        <span className="italic">{'Forms TODO! I will soon add a section for anonymous reach outs!'}</span>
        <br />
        <br />
        <span className="">These are my preferred way of contacts, Although you can message me up in any of the socials i have mentioned! :)</span>
      </div>
      <div className="flex gap-10">
        <div className="flex gap-4">
          <Link href={'mailto:kausthubhjrao@gmail.com'} className="mt-1 text-base opacity-85 hover:opacity-100 flex items-center gap-1">
            <MailIcon className="size-4" />
            <span>Email</span>
          </Link>
          <Link href={'https://x.com/exgene'} className="mt-1 text-base opacity-85 hover:opacity-100 flex items-center gap-1">
            <Twitter className="size-4" />
            <span>Twitter Dm</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
