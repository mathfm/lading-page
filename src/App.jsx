import './App.css'
import Home from './components/home'
import Header from './components/header'
import CardSpecialities from './components/card'
import heart from './assets/Frame2.svg'
import esporte from './assets/esporte.svg'
import bemestar from './assets/bem-estar.svg'
import Footer from './components/footer'

function App() {
  return (
    <>
      <Header />
      <Home />
      <div className="services">
        <h3>Nossos serviços</h3>
        <div className='division-bar bg-primary'></div>
        <p>Conheça os serviços disponibilizados pela HealthPlus:</p>

        <div className="cards">
          <CardSpecialities image={heart} title="Saúde" text="Melhore sua saúde com o HealthPlus!" />
          <CardSpecialities image={esporte} title="Esporte" text="Adquira saúde por meio dos esportes com o HealthPlus!" />
          <CardSpecialities image={bemestar} title="Bem Estar" text="Além da saúde física, cuide da sua saúde mental com o HealthPlus!" />
        </div>
      </div>
      <br />
      <Footer/>
    </>
  )
}

export default App
