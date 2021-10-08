import Typography from "../Typography/Typography";
import './SectionWithAdvantagesCards.css'
export default function SectionWithAdvantageCards(props) {
    return (
      <div className="SectionWithAdvantageCards">
          <img className="SectionWithAdvantageCards-image" src={props.cardImageUrl}/>
           <div className="SectionWithAdvantageCards-content">
               <h3 className="SectionWithAdvantageCards-title">{props.cardtitle}</h3>
               <Typography className="SectionWithAdvantageCards-text">{props.cardtext}</Typography>
           </div>
      </div>
    )
}