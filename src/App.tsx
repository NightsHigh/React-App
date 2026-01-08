import './App.css'
// import Navigation from './components/Navigation'
// import { Header } from './components/Header'
// import { Main } from './components/Main'
// import { Footer } from './components/Footer'
// import { Wrapper } from './components/Wrapper'
import { Card} from './components/Card'
export default function App() {
  return (
    <div className="app min-h-screen flex flex-col">
      {/* <Navigation /> */}
      {/* <Header /> */}
      {/* <Wrapper title="Hej verden" subtitle="Velkommen til min side">
        <Main />
      </Wrapper> */}
      {/* <Footer /> */}
      <Card textContent="Hej verden" title="Velkommen til min side" footerContent="Hej verden" />
      <Card textContent="" title="" footerContent="" />
    </div>
  )
}