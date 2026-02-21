import React from "react"
import { HashRouter as Router, Route, Routes as ReactRoutes } from "react-router-dom"
import App from "../screens/mainApp/App"
import TempApp from "../screens/tempApp/TempApp"
import "./Routes.scss"

export const Routes = () => {

    return (
        <>
            <Router>
                <div className="app-outer-loop">
                    <ReactRoutes>
                        <Route path="/" element={<TempApp />} />
                        <Route path="/home" element={<App />} />
                        <Route path="*" element={<TempApp />} />
                    </ReactRoutes>
                </div>
            </Router>
        </>
    )
}