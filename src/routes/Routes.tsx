import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import App from "../screens/mainApp/App"
import TempApp from "../screens/tempApp/TempApp"
import "./Routes.scss"

export const Routes = () => {

    return (
        <>
            <Router basename="/" >
                <div className="app-outer-loop">

                    <Switch>
                        <Route exact path="/">
                            <TempApp />
                        </Route>
                        <Route path="/home">
                            <App />
                        </Route>
                        <Route path="*">
                            <TempApp />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </>
    )
}