import './App.css'
import Home from './pages/Home'
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
      <div className="container">
        <div className='col-12 text-center p-5'>

          <div className='row'>
            <h3>Nossos serviços</h3>
            <p>Conheça os serviços disponibilizados pela HealthPlus:</p>
            <div className='division-bar bg-primary'></div>
          </div>

          <div className='row mt-5'>
            <div className='col-4'>
              <CardSpecialities image={heart} title="Saúde" text="Melhore sua saúde com o HealthPlus!" />
            </div>
            <div className='col-4'>
              <CardSpecialities image={esporte} title="Esporte" text="Adquira saúde por meio dos esportes com o HealthPlus!" />
            </div>
            <div className='col-4'>
              <CardSpecialities image={bemestar} title="Bem Estar" text="Além da saúde física, cuide da sua saúde mental com o HealthPlus!" />
            </div>
          </div>
        </div>

      </div>
      <br />
      <Footer/>
    </>
  )
}

export default App
