import axios from 'axios'


export default class workTimeService {

    getWorkTime() {
        return axios.get("http://localhost:8080/api/work-times/getAll")
    }
}
