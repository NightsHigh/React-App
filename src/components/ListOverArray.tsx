export function ListOverArray(props: { ArrayName: string[] }) {
    return (
        <ul className="list-disc list-inside">
            {props.ArrayName.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    )
}
