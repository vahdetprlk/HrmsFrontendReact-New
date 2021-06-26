import axios from "axios";

export default class ResumeService {
  getResume() {
    return axios.get("http://localhost:8080/api/resumes/getByIsActive");
  }

  getByJobSeekerIdAndIsActive(jobSeekerId,isActive){

    return axios.get(`http://localhost:8080/api/resumes/getByJobSeekerIdAndActiveTrue?isActive=`+isActive+`&userId=`+jobSeekerId+``)
  }

  addResume(resume) {
    return axios.post("http://localhost:8080/api/resumes/add", resume);
  }
}
