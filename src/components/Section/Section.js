import "./Section.css"

export default function Section(props) {
    return (
        <div
            className={`Section ${
                props.background === "dark" ? "Section_background_dark" : ""
            } ${
                props.background === "darkMedium" ? "Section_background_darkMedium" : ""
            }`}
        >
            <div className="Section-container">{props.children}</div>

        </div>
    )
}
