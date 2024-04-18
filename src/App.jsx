import './App.css'
import HeaderAndFooterExample from './components/card'
import Header from './components/header'

function App() {
  return (
     <>
      <Header />

      <HeaderAndFooterExample image='src/assets/Frame2.svg' text='teste aleatório' title='titulo' />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
