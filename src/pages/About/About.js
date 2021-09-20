import Header from "../../components/Header/Header"
import Section from "../../components/Section/Section"
import Footer from "../../components/Footer/Footer"
import SectionContentWithImage from "../../components/Section/SectionContentWithImage"
import AboutImgOneUrl from "../../components/Images/AboutImgOne.jpg"
import AboutImgTwoUrl from "../../components/Images/AboutImgTwo.jpg"
import AboutImgThreeUrl from "../../components/Images/AboutImgThree.jpg"
import  AboutImgFourUrl from "../../components/Images/AboutImgFour.jpg"
import SectionWithAdvantages from "../../components/Section/SectionWIthAdvantages";
import SectionAwards from "../../components/SectionAwards/SectionAwards";
import SectionWithBlocks from "../../components/SectionWithBlocks/SectionWithBlocks";

export default function About(props) {

    return (
        <div>

            <Header/>

            <Section>

                <SectionContentWithImage
                    imagePlacement="start"
                    imageUrl={AboutImgOneUrl}
                    title="Good company story"
                    text={(
                        <div>
                            <div>
                                We started like you did: a potent mixture of passion
                                and work ethic, combined with the insight to
                                recognize a problem and envision a solution.
                                In our case ,we saw a lack of transparency in digital
                                agencies.Too many design and development companies slapped
                                a shiny coat a paint on a poorly product, then bailed,
                                leaving their clients high and dry.
                            </div>
                        </div>
                    )}
                />

                <SectionContentWithImage
                    imagePlacement="end"
                    imageUrl={AboutImgTwoUrl}
                    title="Leadership"
                    text={(
                        <div>
                            <div>
                               We hall from different backgrounds, different
                                lifestyles.We're home to self-taught guru and
                                a fashionista turned software developer, and
                                we're pretty sure we're the only company that
                                employs booth a farmer Army engineers and a
                                viral video star.These are the threads from
                                the rich tapestry that is Good Company.
                            </div>
                        </div>
                    )}
                />

            </Section>



             <SectionWithBlocks/>





            <Section background="darkMedium">
                <SectionContentWithImage
                    imagePlacement="start"
                    imageUrl={AboutImgThreeUrl}
                    title="Diversity/Inclusivity"
                    text={(
                        <div>
                            <div>
                                We hall from different backgrounds, different
                                lifestyles.We're home to self-taught guru and
                                a fashionista turned software developer, and
                                we're pretty sure we're the only company that
                                employs booth a farmer Army engineers and a
                                viral video star.These are the threads from
                                the rich tapestry that is Good Company.
                            </div>
                        </div>
                    )}
                />
                <SectionContentWithImage
                    imagePlacement="end"
                    imageUrl={AboutImgFourUrl}
                    title="Mission & Values"
                    text={(
                        <div>
                            <div>
                                We hall from different backgrounds, different
                                lifestyles.We're home to self-taught guru and
                                a fashionista turned software developer, and
                                we're pretty sure we're the only company that
                                employs booth a farmer Army engineers and a
                                viral video star.These are the threads from
                                the rich tapestry that is Good Company.
                            </div>
                        </div>
                    )}
                />

            </Section>



            <Section background="darkMedium">
            <SectionWithAdvantages/>
            </Section>

            <SectionAwards/>

            <Footer/>

        </div>
    )

}