import "./SectionWithBlocks.css"

export default function SectionWithBlocks() {
    return (
        <div className="SectionWithBlocks">

                <div className="SectionWithBlocks-panel SectionWithBlocks-panelOne">
                        <div className="SectionWithBlocks-panelContent">
                            <h2 className="SectionWithBlocks-title">Work with us</h2>
                            <h4 className="SectionWithBlocks-text">
                                Our mission is simple:Work with the best, design
                                with a purpose, and engineer for a sustainable
                                future.
                            </h4>
                            <input className="SectionWithBlocks-input" type="submit"
                            value="Let's collaborate"
                            />
                        </div>
                </div>

                <div className="SectionWithBlocks-panel SectionWithBlocks-panelTwo">
                    <div className="SectionWithBlocks-panelContent">
                        <h2 className="SectionWithBlocks-title">Work with us</h2>
                        <h4 className="SectionWithBlocks-text SectionWithBlocks-text_two">
                            Our process may be data-driven, but our
                            projects are fueled by something much
                            stronger: passion.
                            Our process may be data-driven, but our
                            projects are fueled by something much
                            stronger: passion.
                            Our process may be data-driven, but our
                            projects are fueled by something much
                            stronger: passion.

                        </h4>
                        <input className="SectionWithBlocks-input inputTwo" type="submit"
                               value="Join our team"
                        />
                    </div>
                </div>

        </div>
    )
}