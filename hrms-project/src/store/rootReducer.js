import { combineReducers } from "redux";
import jobAdvertReducer from "./reducers/jobAdvertReducer";


const rootReducer= combineReducers({
    appliedJobAdverts : jobAdvertReducer
})     

export default rootReducer;