import "./SectionWithCta.css"

export default function SectionWithCta(props) {
    return (
        <div className="SectionWithCta">
            <div
                className={`SectionWithCta-bg SectionWithCta-bg_top ${
                    props.topBackground === "darkMedium"
                        ? "SectionWithCta-bg_darkMedium"
                        : ""
                }`}
            ></div>
            <div
                className={`SectionWithCta-bg SectionWithCta-bg_bottom ${
                    props.bottomBackground === "darkMedium"
                        ? "SectionWithCta-bg_darkMedium"
                        : ""
                } ${props.bottomBackground === "dark" ? "SectionWithCta-bg_dark" : ""}`}
            ></div>

            <div className="SectionWithCta-panel SectionWithCta-panel_content">
                <div className="SectionWithCta-panelContainer">
                    left
                    <br/>
                    asdasd
                    <br/>
                    asdasdasd
                    <br/>
                    asdasdasd
                    <br/>
                    asdas
                </div>
            </div>

            <div className="SectionWithCta-panel SectionWithCta-panel_action">
                <div className="SectionWithCta-panelContainer">
                    right
                </div>
            </div>
        </div>
    )
}
