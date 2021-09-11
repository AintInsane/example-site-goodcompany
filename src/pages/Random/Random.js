import './Random.css'
import catUrl from './cat.jpg'

export default function Random() {
    return (
        <div className="Random">
            <img className="Random-image" src={catUrl}/>
        </div>
    )
}
