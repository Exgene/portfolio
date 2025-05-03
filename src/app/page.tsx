// import Test from "@/markdown/test.mdx"

import { Education } from "./_components/Education";
import { Footer } from "./_components/Footer";
import { Navbar } from "./_components/Navbar";
import { Projects } from "./_components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-xl flex flex-col justify-center gap-20 px-4 py-24">
        <AboutSimple />
        <Projects />
        <Education />
        <Footer />
      </main>
    </>
  );
}

function AboutSimple() {
  const socialLinks = [
    { name: "Twitter", href: "https://twitter.com/kausthubh" },
    { name: "LinkedIn", href: "https://linkedin.com/in/kausthubh" },
    { name: "GitHub", href: "https://github.com/kausthubh" }
  ];

  return (
    <div className="flex gap-10 justify-center items-center pt-4" id="about">
      <img 
        src="/pfp.jpeg" 
        alt="Kausthubh profile picture" 
        className="w-24 h-24 object-cover rounded-full border-2 border-foreground border-opacity-10 shadow-md" 
      />
      <div className="flex flex-col gap-3">
        <p className="font-medium">
          Hello, my name is Kausthubh
        </p>
        <p className="text-sm opacity-80">
          I'm a Software Engineer with a passion for building elegant solutions
        </p>

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
    </div>
  )
}

