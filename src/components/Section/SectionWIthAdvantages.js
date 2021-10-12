import cardImage1Url from '../Images/AboutSectionWithAdvantages/research.png'
import cardImage2Url from '../Images/AboutSectionWithAdvantages/chronometer.png'
import cardImage3Url from '../Images/AboutSectionWithAdvantages/connections.png'
import cardImage4Url from '../Images/AboutSectionWithAdvantages/handshake.png'
import cardImage5Url from '../Images/AboutSectionWithAdvantages/brain.png'
import cardImage6Url from '../Images/AboutSectionWithAdvantages/team.png'
import cardImage7Url from '../Images/AboutSectionWithAdvantages/teamwork.png'
import cardImage8Url from '../Images/AboutSectionWithAdvantages/idea.png'
import Typography from "../Typography/Typography";
import SectionWithAdvantageCards from "./SectionWithAdvantageCards";
import './SectionWithAdvantages.css'


export default function SectionWithAdvantages() {
    return (
        <div className="SectionWithAdvantages">
            <SectionWithAdvantageCards
                cardImageUrl={cardImage1Url}
                cardtitle={(<Typography>Full transparency</Typography>)}
                cardtext={(<Typography>Because we're more than just on
                        agency.We're your partner!</Typography>)}
            />
            <SectionWithAdvantageCards
                cardImageUrl={cardImage2Url}
                cardtitle={(<Typography>Real time status</Typography>)}
                cardtext={(<Typography>Because we're more than just on
                        agency.We're your partner!</Typography>)}
            />
            <SectionWithAdvantageCards
                cardImageUrl={cardImage3Url}
                cardtitle={(<Typography>Agile process</Typography>)}
                cardtext={(<Typography>Because we're more than just on
                        agency.We're your partner!</Typography>)}
            />
            <SectionWithAdvantageCards
                cardImageUrl={cardImage4Url}
                cardtitle={(<Typography>Trust & reliability</Typography>)}
                cardtext={(<Typography>Because we're more than just on
                        agency.We're your partner!</Typography>)}
            />
            <SectionWithAdvantageCards
                cardImageUrl={cardImage5Url}
                cardtitle={(<Typography>Heavy involvement</Typography>)}
                cardtext={(<Typography>Because we're more than just on
                        agency.We're your partner!</Typography>)}
            />
            <SectionWithAdvantageCards
                cardImageUrl={cardImage6Url}
                cardtitle={(<Typography>Onsite collaboration</Typography>)}
                cardtext={(<Typography>Because we're more than just on
                        agency.We're your partner!</Typography>)}
            />
            <SectionWithAdvantageCards
                cardImageUrl={cardImage7Url}
                cardtitle={(<Typography>Dedicated teams</Typography>)}
                cardtext={(<Typography>Because we're more than just on
                        agency.We're your partner!</Typography>)}
            />
            <SectionWithAdvantageCards
                cardImageUrl={cardImage8Url}
                cardtitle={(<Typography>Innovation & strategy</Typography>)}
                cardtext={(<Typography>Because we're more than just on
                        agency.We're your partner!</Typography>)}
            />


        </div>
    )
}