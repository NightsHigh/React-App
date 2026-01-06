import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1 className="title">React - Fordele og Ulemper</h1>
        <p className="subtitle">En oversigt over fordele og ulemper ved at bruge React til webudvikling</p>
      </header>

      <main className="main-content">
        <section className="section advantages" aria-labelledby="fordele-heading">
          <h2 id="fordele-heading" className="section-title">Fordele ved React</h2>
          <ul className="list">
            <li className="list-item">
              <article>
                <h3 className="item-title">Komponentbaseret Arkitektur</h3>
                <p className="item-description">
                  React's komponentbaserede tilgang gør det nemt at opbygge genbrugelige UI-komponenter, 
                  hvilket reducerer kodeduplikering og gør koden mere vedligeholdelig og skalerbar.
                </p>
              </article>
            </li>
            <li className="list-item">
              <article>
                <h3 className="item-title">Virtual DOM</h3>
                <p className="item-description">
                  React bruger en Virtual DOM, som gør det muligt at opdatere kun de nødvendige dele af 
                  DOM'en, hvilket resulterer i bedre performance og hurtigere rendering end traditionel DOM-manipulation.
                </p>
              </article>
            </li>
            <li className="list-item">
              <article>
                <h3 className="item-title">Stort Community og Ekosystem</h3>
                <p className="item-description">
                  React har et enormt community og et rigt ekosystem af biblioteker, værktøjer og 
                  ressourcer, hvilket gør det nemt at finde løsninger, support og best practices.
                </p>
              </article>
            </li>
            <li className="list-item">
              <article>
                <h3 className="item-title">React Hooks</h3>
                <p className="item-description">
                  React Hooks forenkler håndtering af state og sideeffekter i funktionelle komponenter, 
                  hvilket gør koden mere læsbar og reducerer kompleksiteten sammenlignet med class-komponenter.
                </p>
              </article>
            </li>
            <li className="list-item">
              <article>
                <h3 className="item-title">Unidirectional Data Flow</h3>
                <p className="item-description">
                  React's envejs data flow gør det lettere at debugge og forstå, hvordan data bevæger 
                  sig gennem applikationen, hvilket reducerer kompleksitet og forbedrer vedligeholdbarheden.
                </p>
              </article>
            </li>
            <li className="list-item">
              <article>
                <h3 className="item-title">Stærk Tooling Support</h3>
                <p className="item-description">
                  React har fremragende tooling support med React DevTools, som gør det nemt at 
                  inspicere komponenter, debugge og optimere applikationer. Der er også god integration med TypeScript.
                </p>
              </article>
            </li>
            <li className="list-item">
              <article>
                <h3 className="item-title">Genbrugelig Kode</h3>
                <p className="item-description">
                  Komponenter kan nemt genbruges på tværs af forskellige dele af applikationen eller 
                  endda i forskellige projekter, hvilket sparer tid og reducerer fejl.
                </p>
              </article>
            </li>
            <li className="list-item">
              <article>
                <h3 className="item-title">Server-Side Rendering Support</h3>
                <p className="item-description">
                  Med frameworks som Next.js kan React understøtte server-side rendering, hvilket 
                  forbedrer SEO og initial load-tid for applikationer.
                </p>
              </article>
            </li>
          </ul>
        </section>

        <section className="section disadvantages" aria-labelledby="ulemper-heading">
          <h2 id="ulemper-heading" className="section-title">Ulemper ved React</h2>
          <ul className="list">
            <li className="list-item">
              <article>
                <h3 className="item-title">Stejl Læringskurve</h3>
                <p className="item-description">
                  React kan være udfordrende for begyndere, især koncepter som JSX, hooks, state 
                  management og lifecycle-metoder kræver tid at mestre.
                </p>
              </article>
            </li>
            <li className="list-item">
              <article>
                <h3 className="item-title">Hyppige Opdateringer</h3>
                <p className="item-description">
                  React opdateres ofte med nye features og breaking changes, hvilket kan kræve 
                  kontinuerlig opdatering af kodebase og viden for at holde sig ajour.
                </p>
              </article>
            </li>
            <li className="list-item">
              <article>
                <h3 className="item-title">Store Bundle Størrelser</h3>
                <p className="item-description">
                  React applikationer kan blive store i størrelse, hvilket kan påvirke initial load 
                  tid negativt, selvom code splitting og lazy loading kan hjælpe med at reducere dette.
                </p>
              </article>
            </li>
            <li className="list-item">
              <article>
                <h3 className="item-title">SEO-Udfordringer</h3>
                <p className="item-description">
                  Client-side rendering kan påvirke søgemaskineoptimering negativt, hvilket kræver 
                  ekstra konfiguration eller brug af SSR-frameworks som Next.js.
                </p>
              </article>
            </li>
            <li className="list-item">
              <article>
                <h3 className="item-title">JSX Kan Være Forvirrende</h3>
                <p className="item-description">
                  JSX syntaksen, som blander HTML-lignende kode med JavaScript, kan være forvirrende 
                  for nye udviklere, der er vant til at adskille markup og logik.
                </p>
              </article>
            </li>
            <li className="list-item">
              <article>
                <h3 className="item-title">Behov for Yderligere Biblioteker</h3>
                <p className="item-description">
                  React er kun et view library, så for routing, state management og andre features 
                  skal man ofte tilføje yderligere biblioteker, hvilket kan øge kompleksiteten og afhængighederne.
                </p>
              </article>
            </li>
            <li className="list-item">
              <article>
                <h3 className="item-title">Kan Være Overkill for Simple Projekter</h3>
                <p className="item-description">
                  For meget simple statiske websites kan React være unødvendigt komplekst og tilføje 
                  overhead, hvor plain HTML/CSS/JS ville være tilstrækkeligt.
                </p>
              </article>
            </li>
            <li className="list-item">
              <article>
                <h3 className="item-title">Afhængighed af Tredjepartsbiblioteker</h3>
                <p className="item-description">
                  Afhængighed af mange tredjepartsbiblioteker kan føre til kompatibilitetsproblemer, 
                  sikkerhedsrisici og øget kompleksitet ved vedligeholdelse.
                </p>
              </article>
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}

export default App