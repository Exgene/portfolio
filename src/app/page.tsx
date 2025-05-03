// import Test from "@/markdown/test.mdx"

export default function Home() {
  return (
    <main className="mx-auto max-w-xl flex flex-col justify-center gap-20">
      <Navbar></Navbar>
      <AboutSimple></AboutSimple>
      <Education></Education>
      <Footer></Footer>
    </main>
  );
}

function Education() {
  // Maybe i can move this over to about section. Ok for now
  return (
    <div className="flex flex-col">
      <h2>EDUCATION</h2>
      <div>
        <h3>TITLE</h3>
        <p>DATE</p>
      </div>

      <div>
        <h3>TITLE</h3>
        <p>DATE</p>
      </div>

      <div>
        <h3>TITLE</h3>
        <p>DATE</p>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <div className="w-full flex justify-between">
      <p>@KAUSTHUBH J RAO</p>

      <ul className="flex gap-2">
        <li>Twitter</li>
        <li>Linkedin</li>
        <li>Github</li>
      </ul>

    </div>
  )
}

function AboutSimple() {
  return (
    <div className="flex gap-10 justify-center ">
      <img src="/test" alt="" className="w-24 h-24" />
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

function Navbar() {
  return (
    <nav className="w-full h-16 flex items-center justify-between border-b-2 border-amber-50">
      <p className="">Kausthubh J Rao</p>

      <ul className="flex gap-4">
        <li>About</li>
        <li>Blog</li>
        <li>Youtube</li>
      </ul>
    </nav>
  )
}

