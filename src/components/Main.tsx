

export function Main({ children }: MainProps) {
  return (
    <main className="max-w-6xl mx-auto my-8 p-8 bg-gray-100 rounded-lg shadow-md">
      {children ?? <p className="text-gray-800 text-xl leading-relaxed text-center m-0">Hej verden</p>}
    </main>
  )
}

