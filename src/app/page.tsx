// import Test from "@/markdown/test.mdx"

import { Education } from "./_components/Education";
import { Projects } from "./_components/Projects";
import { Experience } from "./_components/Experience";
import { ContactMe } from "./_components/Contacts";
import { AboutSimple } from "./_components/About";

export default function Home() {
  return (
    <>
      <main className="flex flex-col justify-center gap-12 px-4 py-24">
        <AboutSimple />
        <Education />
        <Experience />
        <Projects />
        <ContactMe />
      </main>
    </>
  );
}


