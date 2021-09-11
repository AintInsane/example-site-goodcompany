import './hands.png'
import "./Header.css"
import {NavLink} from 'react-router-dom'

export default function Header(props) {
    return (
        <div className="Header">
            <div className="Header-container">
                <div className="Header-nav">
                    <NavLink className="Header-navLogo" to="/"></NavLink>
                    <NavLink className="Header-navLink" to="/about">О нас</NavLink>
                </div>
                <div className="Header-title"><h2>Гильдия мамкиных программистов</h2></div>
                <div className="Header-text">Новый продукт "Кумыс-19" <br/> Разроботано совместно с британским ученым</div>
            </div>
        </div>
    )
}
