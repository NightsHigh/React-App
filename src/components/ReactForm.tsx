// I denne opgave skal du arbejde endnu videre med React useState Hook.
// Du skal lave en komponent som kan vise og sende en formular.

// Opgavekrav:

// Formularen skal indeholde følgende felter:

//     Fulde navn
//     Telefonnummer
//     Email
//     Kommentar
//     Mulighed for valg af foretrukken kontaktmetode: telefon eller email

// Derudover skal formularen også indeholde en knap til at sende, en besked der viser om man har "sendt" og en knap til at nulstille felterne med.

// Ved siden af formularen skal der være et tomt felt som kan vise de inputværdier som sendes med formularen. Værdierne skal løbende vises når en bruger indtaster en karakter


import { useState } from "react";
export default function(){
    const [navn, setNavn] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [kommentar, setKommentar] = useState("");
    const [navnError, setNavnError] = useState("Please enter at least 2 words");
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("Please enter a valid phone number");

    return(
        <>
            <label htmlFor="navn">Indtast dit fuldenavn</label>
            <input 
            id="navn" className="border-2 border-gray-300 rounded-md p-2" type="text" value={navn} onChange={(e) => setNavn(e.target.value)} />
            {navn.split(" ").length < 2 && <p>{navnError}</p>}
            {navn.split(" ").length > 1 && <p>You have entered: {navn}</p>}


            <label htmlFor="email">Indtast din email</label>    
            <input
                id="email"
                required
                className="border-2 border-gray-300 rounded-md p-2"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={(e) => {
                    const value = e.target.value.trim();
                    setEmail(value);
                    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value)) {
                        setEmailError("Please enter a valid email");
                    } else {
                        setEmailError("");
                    }
                }}
            />
            {emailError && <p>{emailError}</p>}
            {email && <p>You have entered: {email}</p>}

            <label htmlFor="phone">Indtast dit telefonnummer</label>
            <input
  id="phone"
  required
  className="border-2 border-gray-300 rounded-md p-2"
  type="tel"
  value={phone}
  onChange={(e) => {
    const onlyNumbers = e.target.value.replace(/\D/g, "");
    setPhone(onlyNumbers);
  }}
  onBlur={() => {
    if (phone.length < 8) {
      setPhoneError("Please enter a valid phone number");
    } else {
      setPhoneError("");
    }
  }}
/>

            {phone.length > 0 && <p>You have entered: {phone}</p>}
            {phone.length < 8 && <p>{phoneError}</p>}

            <label htmlFor="kommentar">Indtast din kommentar</label>
            <textarea id="kommentar" required className="border-2 border-gray-300 rounded-md p-2" value={kommentar} onChange={(e) => setKommentar(e.target.value)} />
            {kommentar.length > 0 && <p>You have entered: {kommentar}</p>}
        </>
    )
}