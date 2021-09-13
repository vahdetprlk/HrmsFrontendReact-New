import axios from 'axios'


export default class workTypeService {

    getWorkType() {
        return axios.get("http://localhost:8080/api/work-types/getAll")
    }
}
