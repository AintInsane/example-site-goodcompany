import "./SectionWithForm.css"

export default function SectionWithForm(props) {
    return (
        <div className="SectionWithForm">
            <div className="SectionWithForm-panel SectionWithForm-panel_content">
                <div className="SectionWithForm-panelContainer">{props.content}</div>
            </div>
            <div className="SectionWithForm-panel SectionWithForm-panel_form">
                <div className="SectionWithForm-panelContainer">
                    {props.form}
                </div>
            </div>
        </div>
    )
}
