import axios from "axios";

export default class JobPositionService {
  getJobPosition() {
    return axios.get("http://localhost:8080/api/job-positions/getall");
  }

  addJobPosition(jobPosition){
      return axios.post("http://localhost:8080/api/job-positions/add",jobPosition)
  }
}
