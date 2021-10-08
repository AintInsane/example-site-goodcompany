import cardImage1Url from '../Images/cardimage1.png'
import cardImage2Url from '../Images/cardimage2.png'
import cardImage3Url from '../Images/cardimage3.png'
import cardImage4Url from '../Images/cardimage4.png'
import cardImage5Url from '../Images/cardimage5.png'
import cardImage6Url from '../Images/cardimage6.png'
import cardImage7Url from '../Images/cardimage7.png'
import cardImage8Url from '../Images/cardimage5.png'
import Typography from "../Typography/Typography";
import SectionWithAdvantageCards from "./SectionWithAdvantageCards";
import './SectionWithAdvantages.css'


export default function SectionWithAdvantages() {
    return (
        <div className="SectionWithAdvantages">
            <SectionWithAdvantageCards
                cardImageUrl={cardImage1Url}
                cardtitle={(<Typography>We're your partner!</Typography>)}
                cardtext={(<Typography>Because we're more than just on
                        agency.We're your partner!</Typography>)}
            />
            <SectionWithAdvantageCards
                cardImageUrl={cardImage2Url}
                cardtitle={(<Typography>We're your partner!</Typography>)}
                cardtext={(<Typography>Because we're more than just on
                        agency.We're your partner!</Typography>)}
            />
            <SectionWithAdvantageCards
                cardImageUrl={cardImage3Url}
                cardtitle={(<Typography>We're your partner!</Typography>)}
                cardtext={(<Typography>Because we're more than just on
                        agency.We're your partner!</Typography>)}
            />
            <SectionWithAdvantageCards
                cardImageUrl={cardImage4Url}
                cardtitle={(<Typography>We're your partner!</Typography>)}
                cardtext={(<Typography>Because we're more than just on
                        agency.We're your partner!</Typography>)}
            />
            <SectionWithAdvantageCards
                cardImageUrl={cardImage5Url}
                cardtitle={(<Typography>We're your partner!</Typography>)}
                cardtext={(<Typography>Because we're more than just on
                        agency.We're your partner!</Typography>)}
            />
            <SectionWithAdvantageCards
                cardImageUrl={cardImage6Url}
                cardtitle={(<Typography>We're your partner!</Typography>)}
                cardtext={(<Typography>Because we're more than just on
                        agency.We're your partner!</Typography>)}
            />
            <SectionWithAdvantageCards
                cardImageUrl={cardImage7Url}
                cardtitle={(<Typography>We're your partner!</Typography>)}
                cardtext={(<Typography>Because we're more than just on
                        agency.We're your partner!</Typography>)}
            />
            <SectionWithAdvantageCards
                cardImageUrl={cardImage8Url}
                cardtitle={(<Typography>We're your partner!</Typography>)}
                cardtext={(<Typography>Because we're more than just on
                        agency.We're your partner!</Typography>)}
            />


        </div>
    )
}