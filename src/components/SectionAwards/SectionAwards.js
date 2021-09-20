import './SectionAwards.css'
import AwardsUrl from '../Images/planet.png'

export default function SectionAwards() {
    return (
        <div className="SectionAwards">

            <div className="SectionAwards-one">
                <div className="SectionAwards-oneTitle">Awards</div>
                <div className="SectionAwards-oneText">
                    we're an award-winning agency that's worked<br/>
                    with some of the biggest brands around.
                </div>
            </div>


            <div className="SectionAwards-two">

                <div className="SectionAwards-twoCard">
                    <img className="SectionAwards-twoCardImage" src={AwardsUrl}/>
                    <div className="SectionAwards-twoCardTitle">Award#1</div>
                    <div className="SectionAwards-twoCardText">This award's short discriotion</div>
                </div>

                <div className="SectionAwards-twoCard">
                    <img className="SectionAwards-twoCardImage" src={AwardsUrl}/>
                    <div className="SectionAwards-twoCardTitle">Award#2</div>
                    <div className="SectionAwards-twoCardText">This award's short discriotion</div>
                </div>

                <div className="SectionAwards-twoCard">
                    <img className="SectionAwards-twoCardImage" src={AwardsUrl}/>
                    <div className="SectionAwards-twoCardTitle">Award#3</div>
                    <div className="SectionAwards-twoCardText">This award's short discriotion</div>
                </div>


            </div>


            <div className="SectionAwards-three">
                <div className="SectionAwards-threeBlueField">
                    <div className="SectionAwards-threeBlueField-message">
                        <div className="SectionAwards-threeBlueField-messageTitle">Together,</div>
                        <div className="SectionAwards-threeBlueField-messageText">
                            we can to great things
                        </div>

                    </div>
                    <input className="SectionAwards-threeBlueField-messageButton" type="submit"
                           value=" Let's collaborate"
                    />

                </div>
            </div>


        </div>
    )
}
