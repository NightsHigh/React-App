export function NavBar() {
  return (
    <nav className="bg-white/10 backdrop-blur-md rounded-lg p-4 mt-4">
      <ul className="flex list-none m-0 p-0 gap-8 justify-center flex-wrap">
        <li className="m-0">
          <a href="#home" className="text-white no-underline font-medium px-4 py-2 rounded-md transition-all hover:bg-white/20 hover:-translate-y-0.5">
            Hjem
          </a>
        </li>
        <li className="m-0">
          <a href="#about" className="text-white no-underline font-medium px-4 py-2 rounded-md transition-all hover:bg-white/20 hover:-translate-y-0.5">
            Om
          </a>
        </li>
        <li className="m-0">
          <a href="#contact" className="text-white no-underline font-medium px-4 py-2 rounded-md transition-all hover:bg-white/20 hover:-translate-y-0.5">
            Kontakt
          </a>
        </li>
      </ul>
    </nav>
  )
}

