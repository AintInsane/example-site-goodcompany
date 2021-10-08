import Typography from "../../components/Typography/Typography";
import Surface from "../../components/Surface/Surface";
import "./AboutSectionWithBlocks.css"

export default function AboutSectionWithBlocks() {

    return (
        <Surface bg="lightToDark" className="SectionWithBlocks">

            <div className="SectionWithBlocks-panel SectionWithBlocks-panelStart">
                <div className="SectionWithBlocks-panelContent">
                    <Typography variant="h3" color="light" paragraph>
                        Work with us
                    </Typography>
                    <Typography variant="text4" color="blue" paragraph>
                        Our mission is simple:Work with the best, design
                        with a purpose, and engineer for a sustainable
                        future.
                    </Typography>
                    <input className="SectionWithBlocks-input" type="button"
                           value="Let's collaborate"
                    />
                </div>
            </div>

            <div className="SectionWithBlocks-panel SectionWithBlocks-panelEnd">
                <div className="SectionWithBlocks-panelContent">
                    <Typography  variant="h3" color="light" paragraph>
                        Work with us
                    </Typography>
                    <Typography  variant="text4" color="blue" paragraph>
                        Our process may be data-driven, but our
                        projects are fueled by something much
                        stronger: passion.
                        Our process may be data-driven, but our
                        projects are fueled by something much
                        stronger: passion.
                        Our process may be data-driven, but our
                        projects are fueled by something much
                        stronger: passion.

                    </Typography>
                    <input className="SectionWithBlocks-input SectionWithBlocks-inputTwo" type="button"
                           value="Join our team"
                    />
                </div>
            </div>

        </Surface>
    )
}


