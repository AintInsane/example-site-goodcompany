import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import SectionContentWithImage from "../../components/Section/SectionContentWithImage"
import AboutImgOneUrl from "../../components/Images/AboutImgOne.jpg"
import AboutImgTwoUrl from "../../components/Images/AboutImgTwo.jpg"
import AboutImgThreeUrl from "../../components/Images/AboutImgThree.jpg"
import AboutImgFourUrl from "../../components/Images/AboutImgFour.jpg"
import SectionWithAdvantages from "../../components/Section/SectionWIthAdvantages";
import AboutAwards from "./AboutAwards";
import Container from "../../components/Container/Container";
import Typography from "../../components/Typography/Typography";
import Surface from "../../components/Surface/Surface";
import AboutSectionWithBlocks from "./AboutSectionWithBlocks";
import Vectors from "../../components/Vectors/Vectors";
import './About.css'


export default function About() {

    return (
        <div>

            <Header/>

            <Surface className="About-hero" bg="dark">

                <Container>
                    <Typography variant="h1" paragraph>About us</Typography>
                    <Typography variant="text2" color="secondary" paragraph>
                        Our mission is simple: Work with the best, design with a purpose,
                        and engineer for a sustainable future.
                    </Typography>
                </Container>

            </Surface>
            <Vectors/>

            <Surface>
                <Container>
                    <SectionContentWithImage
                        imagePlacement="start"
                        imageUrl={AboutImgOneUrl}
                        title={(<Typography variant="h2" paragraph>Company story</Typography>)}
                        text={(<Typography variant="text2" color="secondary">
                            We started like you did: a potent mixture of passion
                            and work ethic, combined with the insight to
                            recognize a problem and envision a solution.
                            In our case ,we saw a lack of transparency in digital
                            agencies.Too many design and development companies slapped
                            a shiny coat a paint on a poorly product, then bailed,
                            leaving their clients high and dry.
                        </Typography>)}
                        button={(<input className="AboutSectionContentWithImage-button1" type="button" value="Let's talk &#8594;"/>)}
                    />

                    <SectionContentWithImage
                        imagePlacement="end"
                        imageUrl={AboutImgTwoUrl}
                        title={(<Typography variant="h2" paragraph> Leadership</Typography>)}
                        text={(<Typography variant="text2" color="secondary">
                            We hall from different backgrounds, different
                            lifestyles.We're home to self-taught guru and
                            a fashionista turned software developer, and
                            we're pretty sure we're the only company that
                            employs booth a farmer Army engineers and a
                            viral video star.These are the threads from
                            the rich tapestry that is Good Company.
                        </Typography>)}
                    />


                </Container>
            </Surface>


            <Surface className="About-SectionContentWithImage_gradient">
                <Surface bg="lightToDark">
                    <Container>
                        <AboutSectionWithBlocks/>
                    </Container>
                </Surface>
                <Container>


                    <SectionContentWithImage
                        imagePlacement="start"
                        imageUrl={AboutImgThreeUrl}
                        title={(<Typography variant="h2" paragraph> Diversity/Inclusivity</Typography>)}
                        text={(<Typography variant="text2" color="secondary">
                            We hall from different backgrounds, different
                            lifestyles.We're home to self-taught guru and
                            a fashionista turned software developer, and
                            we're pretty sure we're the only company that
                            employs booth a farmer Army engineers and a
                            viral video star.These are the threads from
                            the rich tapestry that is Good Company.
                        </Typography>)}
                        button={(<input className="AboutSectionContentWithImage-button2" type="button" value="Learn more &#8594;"/>)}



                    />


                    <SectionContentWithImage
                        imagePlacement="end"
                        imageUrl={AboutImgFourUrl}
                        title={(<Typography variant="h2" paragraph>Mission & Values</Typography>)}
                        text={(<Typography variant="text2" color="secondary">
                            We hall from different backgrounds, different
                            lifestyles.We're home to self-taught guru and
                            a fashionista turned software developer, and
                            we're pretty sure we're the only company that
                            employs booth a farmer Army engineers and a
                            viral video star.These are the threads from
                            the rich tapestry that is Good Company.
                        </Typography>)}

                    />


                </Container>

                <Container>
                    <SectionWithAdvantages/>
                </Container>
            </Surface>

            <AboutAwards/>

            <Footer/>

        </div>
    )

}