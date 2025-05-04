import { MailIcon, Twitter } from "lucide-react";
import Link from "next/link";

export function ContactMe() {
  return (

    <section className="flex flex-col gap-8 pt-12" id="education">
      <h2 className="text-xl font-semibold tracking-tight">Contact Me</h2>
      <div className="italic">
        Forms TODO!
        I will soon add a section for anonymous reach outs!
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-1">
          <Link href={'mailto:kausthubhjrao@gmail.com'} className="mt-1 text-xs opacity-85 hover:opacity-100 flex items-center gap-1"><MailIcon className="size-4" />Email</Link>
          <Link href={'https://x.com/exgene'} className="mt-1 text-xs opacity-85 hover:opacity-100 flex items-center gap-1"><Twitter className="size-4" />Twitter Dm</Link>
        </div>
      </div>
    </section>
  )
}
