import { useState } from "react"
import './style.css'
import Agendar from "../button/button"

const Menu = () => {
    const [menuOpen, setmenuOpen] = useState(false)
    const toggleMenu = ( ) => {
        setmenuOpen(!menuOpen)
    }

    return (
        <nav>
            <img src="cnbox/logo.svg" alt="CNBox Cotia" />
            <div className="menuMobile" onClick={toggleMenu}>
                <div className="backgroundMenu" style={{display: menuOpen ? 'flex' : 'none'}}></div>
                {menuOpen ? <i className="bi bi-x-circle"></i> : <i className="bi bi-list"></i>}
                <ul style={{display: menuOpen ? 'flex' : 'none'}}>
                    <li><a href="#crossfit">O CrossFit</a></li>
                    <li><a href="#planos">Planos</a></li>
                    <li><a href="#depoimentos">Depoimentos</a></li>
                    <li className="aula">Agendar aula experimental</li>
                </ul>
            </div>
            <div className="menuDesktop">
                <ul>
                    <li><a href="#crossfit">O CrossFit</a></li>
                    <li><a href="#planos">Planos</a></li>
                    <li><a href="#depoimentos">Depoimentos</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Menu