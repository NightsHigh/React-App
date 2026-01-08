import './App.css'
// import Navigation from './components/Navigation'
// import { Header } from './components/Header'
// import { Main } from './components/Main'
// import { Footer } from './components/Footer'
import { Wrapper } from './components/Wrapper'
import { Card} from './components/Card'
export default function App() {

  const randomImage = "https://picsum.photos/200/300"
  const randomImage2 = "https://picsum.photos/200/300?random=2"
  const randomImage3 = "https://picsum.photos/200/300?random=3"
  const randomImage4 = "https://picsum.photos/200/300?random=4"
  const cardData = [{
    Title: "This is a random title for a card",
    TextContent: "This is a random text content for a card",
    Image: randomImage,
    FooterContent: "This is a random footer content for a card"
  },
  {
    Title: "This is a random title for a card",
    TextContent: "This is a random text content for a card",
    Image: randomImage2,
    FooterContent: "This is a random footer content for a card"
  },
  {
    Title: "This is a random title for a card",
    TextContent: "This is a random text content for a card",
    Image: randomImage3,
    FooterContent: "This is a random footer content for a card",
  },
  {
    Title: "This is a random title for a card",
    TextContent: "This is a random text content for a card",
    Image: randomImage4,
    FooterContent: "This is a random footer content for a card"
  }]


  return (
    <div className="app min-h-screen flex flex-col">
      {/* <Navigation /> */}
      {/* <Header /> */}
      {/* <Wrapper title="Hej verden" subtitle="Velkommen til min side">
        <Main />
      </Wrapper> */}
      {/* <Footer /> */}
      <Wrapper title="Hej verden" subtitle="Velkommen til min side">
        {cardData.map((card) => (
        <Card
          textContent={card.TextContent}
          title={card.Title}
          footerContent={card.FooterContent}
          image={card.Image}
        />
      ))}
      </Wrapper>
    </div>
  )
}