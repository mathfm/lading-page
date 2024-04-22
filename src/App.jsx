import './App.css'
import Home from './pages/Home'
import Header from './components/header'
import CardSpecialities from './components/card'
import heart from './assets/Frame2.svg'
import esporte from './assets/esporte.svg'
import bemestar from './assets/bem-estar.svg'
import Footer from './components/footer'
import Benefits from './pages/Benefits'

function App() {
  return (
    <>
      <Header />
      <Home />
      <Benefits />
      <Footer/>
    </>
  )
}

export default App
