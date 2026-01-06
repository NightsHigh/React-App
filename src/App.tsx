import './App.css'
import Navigation from './components/Navigation'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="app min-h-screen flex flex-col">
      <Navigation />
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App