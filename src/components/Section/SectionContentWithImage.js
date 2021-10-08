import './SectionContentWithImage.css'

export default function SectionContentWithImage(props) {

    return (
        <div className={`SectionContentWithImage ${props.imagePlacement === 'end' && 'SectionContentWithImage_imagePlacement_end'}`}>
            <img className="SectionContentWithImage-image" src={props.imageUrl}/>
            <ul className="SectionContentWithImage-content">
                <li className="SectionContentWithImage-title">{props.title}</li>
                <li className="SectionContentWithImage-text">{props.text}</li>
            </ul>
        </div>
    )
}
