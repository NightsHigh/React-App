export function Wrapper({ children }: { children: React.ReactNode }) {
    return (
        <main className="max-w-6xl mx-auto my-8 p-8 bg-gray-100">
            <div className="grid grid-cols-2 grid-rows-2 gap-8">
                {children}
            </div>
        </main>
    )
}