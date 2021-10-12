import Typography from "../../components/Typography/Typography";
import Surface from "../../components/Surface/Surface";
import "./AboutSectionWithBlocks.css"
import Container from "../../components/Container/Container";

export default function AboutSectionWithBlocks() {

    return (

        <div className="SectionWithBlocks">

            <div className="SectionWithBlocks-panel SectionWithBlocks-panelStart">
                <div className="SectionWithBlocks-panelContent">
                    <Typography variant="h3" paragraph>
                        Work with us
                    </Typography>
                    <Typography className="SectionWithBlocks-text" variant="text2" color="secondary" paragraph>
                        Our mission is simple:Work with the best, design <br/>
                        with a purpose, and engineer for a sustainable <br/>
                        future.
                    </Typography>
                    <input className="SectionWithBlocks-input" type="button"
                           value="Let's collaborate"
                    />
                </div>
            </div>

            <div className="SectionWithBlocks-panel SectionWithBlocks-panelEnd">
                <div className="SectionWithBlocks-panelContent">
                    <Typography  variant="h3" paragraph>
                        Work with us
                    </Typography>
                    <Typography className="SectionWithBlocks-text" variant="text2" color="secondary" paragraph>
                        Our process may be data-driven, but our <br/>
                        projects are fueled by something much <br/>
                        stronger: passion.


                    </Typography>
                    <input className="SectionWithBlocks-input SectionWithBlocks-inputTwo" type="button"
                           value="Join our team"
                    />
                </div>
            </div>

        </div>

    )
}


