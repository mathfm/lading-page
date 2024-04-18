import "../App.css"
import logo from "../assets/logo.svg"

export default function Header() {
  return (
    <header className="d-flex justify-content-between p-3 mb-5 background-header">
      <a class="navbar-brand" href="#">
        <img src={logo} alt="Bootstrap" width="150"/>
      </a>

      <ul className="nav">
        <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Quem somos</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Sobre</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Contato</a></li>
      </ul>
    </header>
  )
}