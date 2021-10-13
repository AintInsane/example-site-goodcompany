import './SectionContentWithImage.css'
import Typography from "../Typography/Typography";

export default function SectionContentWithImage(props) {

    return (
        <div className={`SectionContentWithImage ${props.imagePlacement === 'end' && 'SectionContentWithImage_imagePlacement_end'}
                                                 ${props.paragraph === true ? 'SectionContentWithImage_paragraph' : ""}
        `}>
            <img className="SectionContentWithImage-image" src={props.imageUrl}/>
            <ul className="SectionContentWithImage-content">
                <li className="SectionContentWithImage-title">{props.title}</li>
                <li className="SectionContentWithImage-text">{props.text}</li>
                <div className="SectionContentWithImage-button" >{props.button}</div>
            </ul>

        </div>
    )
}
