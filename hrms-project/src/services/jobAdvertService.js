import axios from "axios";

export default class JobAdvertService {
  getJobAdvert() {
    return axios.get("http://localhost:8080/api/job-adverts/getAll");
  }

  getJobAdvertById(id){

    return axios.get(`http://localhost:8080/api/job-adverts/getById?id=`+id+``)
  }
  
  getBySortedByCreatedDate(){

    return axios.get("http://localhost:8080/api/job-adverts/getAllByActiveTrueAndSortedByCreatedDateDescDate")
  }

  getByEmployerIdAndIsActive(isActive,employerId){

    return axios.get(`http://localhost:8080/api/job-adverts/getAllByEmployerIdAndActiveTrue?id=`+employerId+`&isActive=`+isActive+``)
  }




  addJobAdvert(jobAdvert){
      return axios.post("http://localhost:8080/api/job-adverts/add",jobAdvert)
  }

  deleteJobAdvert(jobAdvert){

    return axios.delete("http://localhost:8080/api/job-adverts/delete",jobAdvert)
  }
}
