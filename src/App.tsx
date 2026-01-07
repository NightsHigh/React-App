// import { Header } from './components/Header'
// import { Footer } from './components/Footer'
// import { SendEnHilsen } from './components/SendEnHilsen'
// import { DynamicHeader } from './components/DynamicHeader'
import { Main } from './components/Main'
import { ListOverArray } from './components/ListOverArray'
function App() {
   const favoriteFoods = ["Ramen", "Sushi", "Pizza", "Hamburger", "Hotdog"]
   const favoriteMovies = ["Inception", "Interstellar", "The Matrix", "Shrek", "The Dark Knight"]
 
   return (
      <>
      <Main>
        <h2>Mine livretter</h2>
        <ListOverArray ArrayName={favoriteFoods} />

        <h2>Mine favoritfilm</h2>
        <ListOverArray ArrayName={favoriteMovies} />
      </Main>
      </>
   )
}

export default App