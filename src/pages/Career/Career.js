import React from 'react'
import Header from "../../components/Header/Header";
import Surface from "../../components/Surface/Surface";
import Container from "../../components/Container/Container";
import Typography from "../../components/Typography/Typography";
import PartnersImg1 from "../../components/Images/Career/flaticon.png"
import PartnersImg2 from "../../components/Images/Career/freepik.png"
import PartnersImg3 from "../../components/Images/Career/piktab.png"
import PartnersImg4 from "../../components/Images/Career/slidesgo.png"
import './Career.css'
import Footer from "../../components/Footer/Footer";
import SectionContentWithImage from "../../components/Section/SectionContentWithImage";
import AboutImgOneUrl from "../../components/Images/AboutImgOne.jpg";
import CareerPositionsCard from "./CareerPositionsCard";

const DATA = [
    {
        dept: "frontend",
        regural: true,
        position: "Middle Frontend Engineer",
        address: ".......",
    },
    {
        dept: "frontend",
        regural: true,
        position: "Senior Frontend Engineer",
        address: ".......",
    },
    {
        dept: "backend",
        regural: false,
        position: "Junior Backend Engineer",
        address: ".......",
    },
    {
        dept: "backend",
        regural: true,
        position: "Middle Backend Engineer",
        address: ".......",
    },
    {
        dept: "design",
        regural: true,
        position: "Designer",
        address: ".......",
    },
]

export default function Career() {
    const [setSelectDept] = React.useState(null)
    return (
        <div className="Career">
            <Header/>


            {/*/////////////////////////////   Career-hero   //////////////////////////////////*/}


            <Surface className="Career-hero" bg="dark">
                <Container>
                    <Typography variant="h1" paragraph>Career</Typography>
                    <Typography variant="text2" color="secondary" paragraph>
                        By joining the team, you will have the rare chance to work
                        on truly cutting edge projects that push the boundaries of
                        design and code. Bring your a game.
                    </Typography>
                </Container>
            </Surface>
            <Surface className="Career-partners" bg="accent">
                <Container className="Career-partnersContainer">
                    <Typography variant="h3">We've worked with the best -</Typography>
                    <div className="Career-partnersRow">
                        <a href={""}><img className="Career-partnersImage" src={PartnersImg1}/></a>
                        <a href={""}><img className="Career-partnersImage" src={PartnersImg2}/></a>
                        <a href={""}><img className="Career-partnersImage" src={PartnersImg3}/></a>
                        <a href={""}><img className="Career-partnersImage" src={PartnersImg4}/></a>
                    </div>

                </Container>
            </Surface>

            {/*/////////////////////////////SectionContentWithImage//////////////////////////////////*/}


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
                        agencies.
                        <br/><br/><br/><br/><br/>
                        Too many design and development companies slapped
                        a shiny coat a paint on a poorly product, then bailed,
                        leaving their clients high and dry.
                    </Typography>)}
                    paragraph
                />
            </Container>

            {/*/////////////////////////////Career-positions//////////////////////////////////*/}

            <Container>
                <div className="Career-positions">

                    <Typography variant="h4" color="secondary" paragraph>work with us a company</Typography>
                    <Typography variant="h1" paragraph>Open positions</Typography>
                    <div className="Career-positionsRow">

                        {/*--------------------Button All-----------------------*/}

                        {/*<button className="Career-positionButton"*/}
                        {/*        onClick={() => {*/}
                        {/*            setSelectedDept("all")*/}
                        {/*        }}>*/}
                        {/*    <Typography variant="h4" color="secondary">All</Typography>*/}
                        {/*</button>*/}
                        {/*--------------------Button Design-----------------------*/}
                        {/*<button className="Career-positionButton"*/}
                        {/*        onClick={() => {*/}
                        {/*            setSelectedDept("design")*/}
                        {/*        }}>*/}
                        {/*    <Typography variant="h4" color="secondary">Design</Typography>*/}
                        {/*</button>*/}

                        {/*------------------Button Development---------------------*/}

                        <Typography variant="h4" color="secondary">Development</Typography>

                        {/*--------------------Button Marketing-----------------------*/}

                        <Typography variant="h4" color="secondary">Marketing</Typography>
                    </div>


                    <div className="Career-positionsCards">
                        {DATA.map((item, i) => {
                            return (
                                <CareerPositionsCard
                                    key={i}
                                    dept={(<Typography variant="h5">{item.dept}</Typography>)}
                                    employment={(<Typography variant="text2" paragraph>regular</Typography>)}
                                    position={(<Typography variant="h3">{item.position}</Typography>)}
                                    address={(<Typography color="secondary">Address</Typography>)}
                                />
                            )
                        })}

                    </div>
                </div>
            </Container>


            {/*/////////////////////////////Career-board//////////////////////////////////*/}


            <Surface bg="lightToDark">
                <Container>
                    <div className="Career-board">
                        <div className="Career-boardColumn Career-boardColumn_start">
                            <Typography variant="h3">Not ready yet to join?</Typography>
                            <Typography variant="h2">
                                Let's stay in touch -

                            </Typography>
                        </div>
                        <div className="Career-boardColumn Career-boardColumn_end">
                            <Typography variant="text2" color="secondary" paragraph>160+clients, million of end-users,
                                and thousands of designs later, we're an award-winning
                                agency that's worked with some of the biggest brands around.
                            </Typography>
                            <input className="Career-BoardButton" type="button"
                                   value=" Let's collaborate &#10142;"
                            />
                        </div>
                    </div>
                </Container>
            </Surface>


            {/*/////////////////////////////    Career-footer    //////////////////////////////////*/}

            <Footer/>
        </div>

    )
}
