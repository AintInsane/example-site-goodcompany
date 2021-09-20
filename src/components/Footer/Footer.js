import "./Footer.css"
import Facebook from '../Images/FaceBookIcon.png'
import Twitter from '../Images/TWITTERicon.png'
import Instagram from '../Images/InstagramIcon.png'
import In from '../Images/InIcon.png'

export default function Footer(props) {
    return (
        <div className="Footer">

            <div className="Footer-container">

                <div className="Footer-row">

                    <div className="Footer-col Footer-col_company">
                        <h3 className="Footer-companyTitle">Good company</h3>
                        <div className="Footer-companyText">
                            Empowering companies
                            at the intersection of UX Design,
                            Development & Business
                        </div>
                    </div>

                    <div className="Footer-col Footer-col_links">

                        <div className="Footer-list">
                            <h3 className="Footer-listTitle">Services</h3>
                            <ul className="Footer-listItems">
                                <li>Service</li>
                                <li>Service</li>
                                <li>Service</li>
                            </ul>
                        </div>

                        <div className="Footer-list">
                            <h3 className="Footer-listTitle">Services</h3>
                            <ul className="Footer-listItems">
                                <li>Service</li>
                                <li>Service</li>
                                <li>Service</li>
                            </ul>
                        </div>

                        <div className="Footer-list">
                            <h3 className="Footer-listTitle">Services</h3>
                            <ul className="Footer-listItems">
                                <li>Service</li>
                                <li>Service</li>
                                <li>Service</li>
                            </ul>
                        </div>

                    </div>

                    <div className="Footer-col Footer-col_contact">

                        <div className="Footer-form">
                            <h3 className="Footer-formTitle">Stay up to date</h3>
                            <div className="Footer-formText">
                                Sign up to our newsletter for instant access
                                to our insights
                            </div>
                            <input
                                className="Footer-formInput"
                                type="mail"
                                placeholder="Your e-mail adress"
                            />
                        </div>

                    </div>
                </div>

                <div className="Footer-divider"/>

                <div className="Footer-row">

                    <div className="Footer-social">
                        <img className="Footer-socialIcon" src={Facebook}/>
                        <img className="Footer-socialIcon" src={Twitter}/>
                        <img className="Footer-socialIcon" src={Instagram}/>
                        <img className="Footer-socialIcon" src={In}/>
                    </div>

                    <div className="Footer-address">www.site.com</div>

                    <div className="Footer-privacy">Privacy policy</div>

                </div>

            </div>

        </div>
    )
}
