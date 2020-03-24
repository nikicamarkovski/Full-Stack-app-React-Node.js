import {
    GET_PATIENTS,
    GET_PATIENTS_BY_ID,
    DELETE_PATIENT ,
    SET_ERROR ,
    CREATE_PATIENT ,
    CLEAR_ERRORS ,
    GET_HISTORY
} from '../types';



export default (state , action) => {
    switch(action.type) {

     case GET_PATIENTS : 
     return {
         ...state,
         patients : action.payload
     }
     case GET_PATIENTS_BY_ID :
         return {
             ...state ,
             patientById : action.payload
         }
         case DELETE_PATIENT :
            
             return {
                 ... state ,
                
                 patients: state.patients.filter(contact => contact.id != action.payload)
               
             }
        case SET_ERROR :
            return {
                ...state ,
                error : action.payload
            }

        case CREATE_PATIENT : 
        return {

            ...state ,
            response : action.payload
        }
        case CLEAR_ERRORS :
            return {
                ...state ,
                error : null
            } 

        case GET_HISTORY : 
        return {
            ...state,
            history : action.payload
        }
    }
     

}