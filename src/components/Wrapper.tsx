export function Wrapper({ title, subtitle, children }: { title: string, subtitle: string, children: React.ReactNode }) {
    return (
        <main className="max-w-6xl mx-auto my-8 p-8 bg-gray-100 rounded-lg shadow-md">
        <h1 className="text-gray-800 text-xl leading-relaxed text-center m-0">{title}</h1>
        <h2 className="text-gray-800 text-xl leading-relaxed text-center m-0">{subtitle}</h2>
        {children}
        </main>
    )
}