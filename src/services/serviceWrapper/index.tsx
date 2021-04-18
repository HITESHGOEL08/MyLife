import axios from "axios";

export class serviceWrapper {

    static getMethod = () => {
        return axios({
            method: "get",
            baseURL: "https://randomuser.me/",
            url: "api/",
            headers: {
                'Content-Type': 'application/json',
            },
        })

    }
}