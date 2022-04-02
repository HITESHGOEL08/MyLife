
import ReactGA from "react-ga"

export class googleAnalyticsService {

    static initGA = () => {

        ReactGA.initialize("UA-175785716-1", {
            gaOptions: {
                userId: `${window.crypto.getRandomValues(new Uint32Array(1))[0]}`,
                name: `user-${window.crypto.getRandomValues(new Uint32Array(1))[0]}`
            },
            testMode: false
        })

    }
}