import React from "react"
import { HashRouter as Router } from "react-router-dom"
import App from "../screens/mainApp/App"
import "./Routes.scss"

export const Routes = () => {

    return (
        <>
            <Router basename="/" hashType="slash">
                <div className="app-outer-loop">
                    <App />
                </div>
            </Router>
        </>
    )
}