import {NavLink} from 'react-router-dom'
import Typography from "../Typography/Typography";
import Surface from "../Surface/Surface";
import Container from "../Container/Container";
import "./Header.css"

export default function Header() {
    return (
        <Surface bg="dark" className="Header">
            <Container className="Header-container">

                <div className="Header-nav">

                    <NavLink className="Header-navLogo" to="/">
                        <Typography variant="logo" color="secondary"  >company</Typography>
                    </NavLink>

                    <div className="Header-navLinks">

                        <NavLink className="Header-navLink" activeClassName="Header-navLink_active" to="/about">
                            <Typography variant="text2" color="primary">About</Typography>
                        </NavLink>

                        <NavLink className="Header-navLink" to="/career">
                            <Typography variant="text2" color="primary">Career</Typography>
                        </NavLink>

                    </div>

                </div>

            </Container>
        </Surface>

    )
}
