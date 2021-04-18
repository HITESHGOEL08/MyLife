import axios from "axios";

export class serviceWrapper {

    static getMethod = () => {
        return axios({
            method: "get",
            baseURL: "http://localhost:19975/",
            url: "test",
            headers: {
                'Content-Type': 'application/json',
            },
        })

    }
}