import { toast } from "react-toastify";

import { APPLY_TO_JOB_ADVERT, CANCEL_APPLICATION } from "../actions/jobAdvertActions";
import { appliedJobAdverts } from "../initialValues/initials";

const initialState = {
    appliedJobAdverts : appliedJobAdverts
}



export default function jobAdvertReducer(state= initialState,{type,payload} ) {

    switch (type) {
        case APPLY_TO_JOB_ADVERT:

        let jobAdvert = state.appliedJobAdverts.find(a=>a.jobAdvert.id===payload.id)

        if (jobAdvert) {

            toast.warning("Bu İlan Daha Önce Eklenmiştir. Başvuru Durumunu Başvurulan İlanlar Sayfasından Takip Edebilirsiniz.")

            return {
                ...state,
              };
            
            
        } else {
             toast.success(`İlana başvurunuz gerçekleşmiştir. Başvuru Durumunu Başvurulan İlanlar Sayfasından Takip Edebilirsiniz. `);
            return{
                  
                ...state,
                appliedJobAdverts:[...state.appliedJobAdverts,{jobAdvert:payload}]

            }
            
        }
            
           
        case CANCEL_APPLICATION:
            return{    /* Burada Gönderdiğim Ürün ve dışındakilerden oluşan yeni bir ürün oluştur  */
                ...state,
                appliedJobAdverts:state.appliedJobAdverts.filter(a=>a.jobAdvert.id!==payload.id)
            }
        default:
            return state;
    }


    
}