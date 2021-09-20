import './hands.png'
import "./Header.css"
import HomePageUrl from "../Images/HomePage.png"
import {NavLink} from 'react-router-dom'

export default function Header(props) {
    return (
        <div className="Header">
            <div className="Header-container">
                <div className="Header-nav">
                    <NavLink className="Header-navLogo" to="/">
                        <img src={HomePageUrl}/>
                    </NavLink>
                    <NavLink className="Header-navLink" to="/about">About</NavLink>
                </div>
                <div className="Header-title">Good company</div>
                <div className="Header-text">
                    Our mission is simple: Work with the best, design with a purpose,
                    and engineer for a sustainable future.

                </div>
            </div>
        </div>
    )
}
