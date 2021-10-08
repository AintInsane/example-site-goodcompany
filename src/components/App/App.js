import { Switch, Route, Redirect } from 'react-router-dom'
import About from "../../pages/About/About"
import Home from "../../pages/Home/Home"
import Random from "../../pages/Random/Random"
import "./App.css"

export default function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/random" component={Random}/>
            </Switch>
        </div>
    )
}
