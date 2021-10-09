import axios from "axios";
import { configs } from "../../config/config";

export class serviceWrapper {

    static getMethod = () => {
        return axios({
            method: "get",
            baseURL: configs.BASEURL,
            url: "test",
            headers: {
                'Content-Type': 'application/json',
            },
        })

    }
}