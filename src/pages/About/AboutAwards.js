import AwardsUrl from "../../components/Images/AboutAwards/trophy.png"
import Typography from "../../components/Typography/Typography";
import Surface from "../../components/Surface/Surface";
import Container from "../../components/Container/Container";
import './AboutAwards.css'


export default function AboutAwards() {
    return (
        <Surface className="SectionAwards">

                <div className="SectionAwards-rowOne">
                    <Typography variant="h1" paragraph>Awards</Typography>
                    <Typography variant="text2" color="grey">
                        we're an award-winning agency that's worked<br/>
                        with some of the biggest brands around.
                    </Typography>
                </div>


                <div className="SectionAwards-rowTwo">

                    <div className="SectionAwards-rowTwo_card">
                        <img className="SectionAwards-rowTwo_image" alt="img" src={AwardsUrl}/>
                        <Typography variant="h3" paragraph>Award#1</Typography>
                        <Typography variant="h4" color="secondary" >This award's short description</Typography>
                    </div>

                    <div className="SectionAwards-rowTwo_card">
                        <img className="SectionAwards-rowTwo_image" alt="img" src={AwardsUrl}/>
                        <Typography variant="h3" paragraph>Award#2</Typography>
                        <Typography variant="h4" color="secondary" >This award's short description</Typography>
                    </div>

                    <div className="SectionAwards-rowTwo_card">
                        <img className="SectionAwards-rowTwo_image" alt="img" src={AwardsUrl}/>
                        <Typography variant="h3" paragraph>Award#3</Typography>
                        <Typography variant="h4" color="secondary" >This award's short description</Typography>
                    </div>


                </div>


                <div className="SectionAwards-rowThree">
                    <Container className="SectionAwards-rowThree_board">
                        <div>
                            <Typography  variant="h1">Together,</Typography>
                            <Typography variant="h3">
                                we can to great things-

                            </Typography>
                        </div>
                        <input className="SectionAwards-rowThree_boardButton" type="submit"
                               value=" Let's collaborate &#10142;"
                        />
                    </Container>
                </div>


        </Surface>
    )
}
