export function DynamicHeader(props: { headerText: string }) {
    return (
        <header className="bg-blue-500">
            <h1 className="text-white text-4xl font-bold mb-4 text-center">{props.headerText || "Mangler Header Text"}</h1>
        </header>
    )
}
