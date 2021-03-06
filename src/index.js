import {StrictMode} from "react"
import ReactDOM from "react-dom"
import {BrowserRouter} from 'react-router-dom'
import "./styles.css"
import App from "./components/App/App"

const rootElement = document.getElementById("root")
ReactDOM.render(
    <StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </StrictMode>,
    rootElement
)