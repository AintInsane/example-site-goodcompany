import './SectionWithAdvantages.css'
import SectionWithAdvantageCards from "./SectionWithAdvantageCards";
import cardImage1Url from '../Images/cardimage1.png'
import cardImage2Url from '../Images/cardimage2.png'
import cardImage3Url from '../Images/cardimage3.png'
import cardImage4Url from '../Images/cardimage4.png'
import cardImage5Url from '../Images/cardimage5.png'
import cardImage6Url from '../Images/cardimage6.png'
import cardImage7Url from '../Images/cardimage7.png'
import cardImage8Url from '../Images/cardimage5.png'


export default function SectionWithAdvantages() {
    return (
        <div className="SectionWithAdvantages">
            <SectionWithAdvantageCards
                cardImageUrl={cardImage1Url}
                cardtitle="We're your partner!"
                cardtext="Because we're more than just on
                agency.We're your partner!"
            />
            <SectionWithAdvantageCards
                cardImageUrl={cardImage2Url}
                cardtitle="We're your partner!"
                cardtext="Because we're more than just on
                agency.We're your partner!"
            />
            <SectionWithAdvantageCards
                cardImageUrl={cardImage3Url}
                cardtitle="We're your partner!"
                cardtext="Because we're more than just on
                agency.We're your partner!"
            />
            <SectionWithAdvantageCards
                cardImageUrl={cardImage4Url}
                cardtitle="We're your partner!"
                cardtext="Because we're more than just on
                agency.We're your partner!"
            />
            <SectionWithAdvantageCards
                cardImageUrl={cardImage5Url}
                cardtitle="We're your partner!"
                cardtext="Because we're more than just on
                agency.We're your partner!"
            />
            <SectionWithAdvantageCards
                cardImageUrl={cardImage6Url}
                cardtitle="We're your partner!"
                cardtext="Because we're more than just on
                agency.We're your partner!"
            />
            <SectionWithAdvantageCards
                cardImageUrl={cardImage7Url}
                cardtitle="We're your partner!"
                cardtext="Because we're more than just on
                agency.We're your partner!"
            />
            <SectionWithAdvantageCards
                cardImageUrl={cardImage5Url}
                cardtitle="We're your partner!"
                cardtext="Because we're more than just on
                agency.We're your partner!"
            />


        </div>
    )
}