import Typography from "../../components/Typography/Typography";
import './CareerPositionCard.css'
import Card from "../../components/Card/Card";

export default function CareerPositionsCard(props) {
    return (
        <Card className="CareerPositionsCard">
            <div className="CareerPositionsCard-row">
                <div className="CareerPositionsCard-cardElement_dept">{props.dept}</div>
                <div className="CareerPositionsCard-cardElement_employment">{props.employment}</div>
            </div>
            <Typography className="CareerPositionsCard-cardElement_position">{props.position}</Typography>
            <Typography className="CareerPositionsCard-cardElement_address">{props.address}</Typography>
            <input className="CareerPositionsCard-button" type="button" value="More details"/>
        </Card>
    )

}