import './style/global.css'

import { Header } from './components/Header'
import { About } from './components/About'
import { Banner } from './components/Banner'
import { Nav } from './components/Nav'
import { Services } from './components/Services'
import { Work } from './components/Work'
import { Contact } from './components/Contact'

export function App() {
  return (
    <section className="bg-site bg-no-repeat bg-cover overflow-hidden bg-black/70">
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
    </section>
  )
}
