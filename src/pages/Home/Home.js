import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import HomeCollaborateForm from "./HomeCollaborateForm"
import Typography from "../../components/Typography/Typography";
import Surface from "../../components/Surface/Surface";
import Container from "../../components/Container/Container";
import featuresImg1 from '../../components/Images/featuresImg1.png'
import './Home.css'

export default function Home() {
    return (
        <div>

            <Header/>

            <Surface bg="dark" className="Home-hero" >
                <Container>
                    <Typography variant="h1" color="primary" paragraph>Company</Typography>
                    <Typography variant="text1" color="secondary" paragraph>
                        Our mission is simple: Work with the best, design with a purpose,
                        and engineer for a sustainable future.
                    </Typography>
                </Container>
            </Surface>

            <Surface className="Home-collaborate" bg="light">
                <Container className="Home-collaborateContainer">

                    <div className="Home-collaborateFeatures">

                        <div className="Home-collaborateFeature">
                            <img className="Home-collaborateFeatureImage" src={featuresImg1}/>
                            <div className="Home-collaborateFeatureCaption">
                                <Typography variant="h3" color="primary" paragraph>Value prop #1</Typography>
                                <Typography variant="text2" color="secondary" paragraph>
                                    Because we're more than just an agency. We're your partner.
                                </Typography>
                            </div>
                        </div>

                        <div className="Home-collaborateFeature">
                            <img className="Home-collaborateFeatureImage" src={featuresImg1}/>
                            <div className="Home-collaborateFeatureCaption">
                                <Typography variant="h3" paragraph>Value prop #1</Typography>
                                <Typography variant="text2" color="secondary" paragraph>
                                    Because we're more than just an agency. We're your partner.
                                </Typography>
                            </div>
                        </div>

                        <div className="Home-collaborateFeature">
                            <img className="Home-collaborateFeatureImage" src={featuresImg1}/>
                            <div className="Home-collaborateFeatureCaption">
                                <Typography variant="h3" paragraph>Value prop #1</Typography>
                                <Typography variant="text2" color="secondary" paragraph>
                                    Because we're more than just an agency. We're your partner.
                                </Typography>
                            </div>
                        </div>

                    </div>

                    <Surface className="Home-collaborateForm" bg="accent" bgStickToEnd>
                        <HomeCollaborateForm/>
                    </Surface>
                </Container>
            </Surface>

            <Surface className="Home-offices" bg="dark" >
                <Container className="Home-officesContainer">
                    <Typography variant="h2" color="light" paragraph>Offices</Typography>
                    <ul className="Home-officesList">

                        <li>
                            <Typography variant="h4" color="light">USA</Typography>
                            <Typography variant="text2" color="light" paragraph>Chicago</Typography>
                            <Typography variant="text2" color="grey" paragraph> IL 60610-3702</Typography>
                            <Typography variant="text2" color="light" paragraph>(312) 867-0455</Typography>
                            <Typography variant="text2" color="light" paragraph>company@mail.com</Typography>
                        </li>

                        <li>
                            <Typography variant="h4" color="light">Italy</Typography>
                            <Typography variant="text2" color="light" paragraph>Rome</Typography>
                            <Typography variant="text2" color="grey" paragraph>GA 30161</Typography>
                            <Typography variant="text2" color="light" paragraph>(706) 235-6445</Typography>
                            <Typography variant="text2" color="light" paragraph>company@mail.com</Typography>
                        </li>

                        <li>
                            <Typography variant="h4" color="light">UK</Typography>
                            <Typography variant="text2" color="light" paragraph>London</Typography>
                            <Typography variant="text2" color="grey" paragraph>34/35 STRAND, WC2N 5HZ</Typography>
                            <Typography variant="text2" color="light" paragraph>020 7930 7530</Typography>
                            <Typography variant="text2" color="light" paragraph>company@mail.com</Typography>
                        </li>

                    </ul>
                </Container>
            </Surface>

            <Surface bg="dark"><div style={{height:50}}/></Surface>

            <Footer/>

        </div>
    )
}