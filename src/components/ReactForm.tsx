import { useState } from "react";
export default function(){
    const [input, setInput] = useState("");
    const [email, setEmail] = useState("");
    const [inputError, setInputError] = useState("Please enter at least 6 characters");
    const [emailError, setEmailError] = useState("Please enter a valid email");

    return(
        <>
            <label htmlFor="input">Indtast dit mindst 6 bogstaver</label>
            <input 
            id="input" className="border-2 border-gray-300 rounded-md p-2" type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            {input.length < 6 && <p>{inputError}</p>}
            {input.length > 0 && <p>You have entered: {input}</p>}

            <label htmlFor="email">Indtast din email</label>
            <input id="email" required className="border-2 border-gray-300 rounded-md p-2" type="email"  value={email} onChange={(e) => setEmail(e.target.value)} />
            {email.length > 0 && !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email) && (
                <p>{emailError}</p>
            )}
            {email.length > 0 && <p>You have entered: {email}</p>}
        </>
    )
}