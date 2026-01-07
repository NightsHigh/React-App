import { Header } from './components/Header'
import { Main } from './components/Main'
import { Footer } from './components/Footer'
import { SendEnHilsen } from './components/SendEnHilsen'
function App() {
   const names = ["Spongebob", "Patrick", "Squidward", "Sandy"]
   return (
      <>
         <Header />
         <Main>
            <SendEnHilsen name={names[Math.floor(Math.random() * names.length)]} />
         </Main>
         <Footer />
      </>
   )
}

export default App