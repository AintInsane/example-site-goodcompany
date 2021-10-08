import {NavLink} from 'react-router-dom'
import Facebook from '../Images/FaceBookIcon.png'
import Twitter from '../Images/TWITTERicon.png'
import Instagram from '../Images/InstagramIcon.png'
import In from '../Images/InIcon.png'
import Container from "../Container/Container";
import Typography from "../Typography/Typography";
import Surface from "../Surface/Surface";
import "./Footer.css"


export default function Footer() {
    return (
        <Surface bg="deepDark" className="Footer">

            <Container className="Footer-container">

                <div className="Footer-row">
                    <ul className="Footer-col Footer-col_company">
                        <li>
                            <Typography variant="logo" color="primary" paragraph>company</Typography>
                            <Typography variant="text2" color="secondary"> Empowering companies
                                at the intersection of UX Design,
                                Development & Business
                            </Typography>
                        </li>
                    </ul>


                    <ul className="Footer-col Footer-col_links">
                        <li className="Footer-col_list">
                            <Typography variant="text3" color="secondary" paragraph>Services</Typography>
                            <Typography variant="text2" color="primary" paragraph> <a href={''}>Case Studies</a></Typography>
                            <Typography variant="text2" color="primary" paragraph><a href={''}>Solutions</a></Typography>
                            <Typography variant="text2" color="primary"><a href={''}>Industries</a></Typography>
                        </li>

                        <li className="Footer-col_list">
                            <Typography variant="text3" color="secondary" paragraph>Why company</Typography>
                            <Typography variant="text2" color="primary" paragraph><a href={'/about'}>About us</a></Typography>
                            <Typography variant="text2" color="primary" paragraph><a href={''}>Leadership</a></Typography>
                            <Typography variant="text2" color="primary"><a href={''}>Careers</a></Typography>
                        </li>

                        <li className="Footer-col_list">
                            <Typography variant="text3" color="secondary" paragraph>Learn more</Typography>
                            <Typography variant="text2" color="primary" paragraph><a href={''}>Insights</a></Typography>
                            <Typography variant="text2" color="primary" paragraph><a href={''}>FAQ</a></Typography>
                            <Typography variant="text2" color="primary"><a href={''}>Contact us</a></Typography>
                        </li>
                    </ul>


                    <ul className="Footer-col Footer-col_contact">
                        <li>
                            <Typography variant="text2" color="secondary" paragraph>Stay up to date</Typography>
                            <Typography variant="text4" color="primary" paragraph>
                                Sign up to our newsletter for instant access to our insights
                            </Typography>
                            <input
                                className="Footer-formInput"
                                type="mail"
                                placeholder="Your e-mail address"
                            />
                        </li>


                    </ul>
                </div>

                <div className="Footer-divider"/>

                <div className="Footer-row">

                    <div className="Footer-social">


                        <div className="Footer-socialIcon_box"><a href="https://facebook.com"> <img className="Footer-socialIcon" src={Facebook}/></a></div>
                        <div className="Footer-socialIcon_box"><a href="https://twitter.com"> <img className="Footer-socialIcon" src={Twitter}/></a></div>
                        <div className="Footer-socialIcon_box"><a href="https://www.instagram.com"> <img className="Footer-socialIcon" src={Instagram}/></a></div>
                        <div className="Footer-socialIcon_box"><a href="https://www.linkedin.cn"> <img className="Footer-socialIcon" src={In}/></a></div>
                    </div>

              <Typography variant="h5" color="secondary">www.site.com</Typography>

                    <Typography variant="h5" color="secondary">Privacy policy</Typography>

                </div>

            </Container>

        </Surface>
    )
}
