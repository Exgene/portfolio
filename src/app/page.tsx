// import Test from "@/markdown/test.mdx"

import { Education } from "./_components/Education";
import { Footer } from "./_components/Footer";
import { Navbar } from "./_components/Navbar";
import { Projects } from "./_components/Projects";

export default function Home() {
  return (
    <main className="mx-auto max-w-xl flex flex-col justify-center gap-20">
      <Navbar></Navbar>
      <AboutSimple></AboutSimple>
      <Projects></Projects>
      <Education></Education>
      <Footer></Footer>
    </main>
  );
}

function AboutSimple() {
  return (
    <div className="flex gap-10 justify-center ">
      <img src="/pfp.jpeg" alt="" className="w-24 h-24 object-cover rounded-full border-2 border-white" />
      <div className="flex flex-col gap-2">
        <p>
          Hello my name is Kausthubh
        </p>
        <p>
          Im a Software Engineer. I bath.... ocassionally
        </p>

        <ul className="flex gap-2">
          <li>Twitter</li>
          <li>Linkedin</li>
          <li>Github</li>
        </ul>
      </div>
    </div>
  )
}

