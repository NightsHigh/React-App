export function SendEnHilsen(props: { name: string }) {
  return ( 
    <p className="bg-blue-800">
      <h1 className="text-white text-4xl font-bold mb-4 text-center">Hello There! {props.name}</h1>
    </p>
  )
}

