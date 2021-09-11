import './SectionContentWithImage.css'

export default function SectionContentWithImage(props) {

    return (
        <div className={`SectionContentWithImage ${props.imagePlacement === 'end' && 'SectionContentWithImage_imagePlacement_end'}`}>
            <img className="SectionContentWithImage-image" src={props.imageUrl}/>
            <div className="SectionContentWithImage-content">
                <h3 className="SectionContentWithImage-title">{props.title}</h3>
                <div className="SectionContentWithImage-text">{props.text}</div>
            </div>
        </div>
    )
}
