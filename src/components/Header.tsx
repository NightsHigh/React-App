import { NavBar } from './NavBar'

export function Header() {
  return (
    <header className="bg-gradient-to-br from-purple-500 to-purple-700 p-8 shadow-lg rounded-b-[10px]">
      <h1 className="text-white text-4xl font-bold mb-4 text-center drop-shadow-md">React App</h1>
      <NavBar />
    </header>
  )
}

