
import ReactGA from "react-ga"

export class googleAnalyticsService {

    static initGA = () => {

        ReactGA.initialize("UA-175785716-1", {
            gaOptions: {
                userId: Math.random().toString(36).slice(2),
                name: Math.random().toString(36).slice(2)
            },
            testMode: false
        })

    }
}