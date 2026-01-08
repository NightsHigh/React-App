export function CardHeader({ text }: { text: string }) {
    return (
        <h1 className="text-gray-800 text-xl text-center m-0">{text || "No text content"}</h1>
    )
}

export function CardBody({ content }: { content: string }) {
    return (
        <h2 className="text-gray-800 text-xl text-center m-0">{content || "No content"}</h2>
    )
}

export function CardFooter({ content }: { content: string }) {
    return (
        <p className="text-gray-800 text-xl text-center m-0">{content || "No footer content"}</p>
    )
}

export function Card({ textContent, title, footerContent }: { textContent: string, title: string, footerContent: string }) {
    return (
        <div className="max-w-md mx-auto my-8 p-8 bg-gray-100">
            <CardHeader text={textContent} />
            <CardBody content={title} />  
            <CardFooter content={footerContent} />  
        </div>
    )
}