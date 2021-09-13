import axios from "axios";

export default class cityService  {
  
    getCity(){
       return axios.get("http://localhost:8080/api/cities/getall")
    }
 
    getCityById(id){
        return axios.get("http://localhost:8080/api/cities/getById?id="+id)
    }
}
