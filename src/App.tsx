// import { Header } from './components/Header'
// import { Footer } from './components/Footer'
// import { SendEnHilsen } from './components/SendEnHilsen'
// import { DynamicHeader } from './components/DynamicHeader'
import { Main } from './components/Main'
import { DynamicButton } from './components/DynamicButton'
function App() {
   return (
      <>
      <Main>
        <DynamicButton
          action={() => alert("Hello There! From the first button!")}
          size="small"
          theme="dark"
          text="Click me i'm the best button!"
        />
        <DynamicButton
          action={() => alert("Hello There! From the second button!")}
          size="medium"
          theme="light"
          text="Click me i'm second best button!"
        />
        <DynamicButton
          action={() => alert("Hello There! From the third button!")}
          size="large"
          theme="dark"
          text="Click me i'm third best button!"
        />
      </Main>
      </>
   )
}

export default App