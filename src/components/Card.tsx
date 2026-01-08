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

export function CardImage({ image }: { image: string }) {
    return (
        <img src={image || "https://picsum.photos/200/300"} alt="Card Image" className="w-full h-auto" />
    )
}
export function Card({ textContent, title, footerContent, image }: { textContent: string, title: string, footerContent: string, image: string }) {
    return (
        <div className="max-w-md mx-auto my-8 p-8 bg-gray-100 border-2 border-gray-300 rounded-lg">
            <CardHeader text={textContent} />
            <CardBody content={title} />  
            <CardFooter content={footerContent} />  
            <CardImage image={image} />
        </div>
    )
}