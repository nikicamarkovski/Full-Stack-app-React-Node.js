import {
    GET_PATIENTS,
    GET_PATIENTS_BY_ID,
    DELETE_PATIENT ,
    SET_ERROR ,
    CREATE_PATIENT ,
    CLEAR_ERRORS ,
    GET_HISTORY,
    GET_OWN_PATIENTS,
    NUMBER_OF_MEDICATION ,
    ENTER_MEDICATION ,
    CREATE_HISTORY ,
    NEW_HISTORY_ERROR , 
    FILTER_PATIENTS , 
    CLEAR_FILTER ,
    ID_ERROR ,
    DIAGNOSE,
    CREATE_TERM ,
    GET_ALL_TERMS,
    DELETE_SPECIFIC_TERM ,
    SET_CURRENT ,
    HISTORY_ERROR ,
    MEDICATIONS
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
                
                 ownPatients: state.ownPatients.filter(contact => contact.id != action.payload)
               
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
                error : null,
                historyError:null,
                idError : null
            } 

        case GET_HISTORY : 
        return {
            ...state,
            history : action.payload
        }

        case GET_OWN_PATIENTS : 
            return {
                ...state ,
                ownPatients : action.payload

            }

        case NUMBER_OF_MEDICATION : 
            return {
                ...state , 
                numberOfMedication : action.payload
            }

        case ENTER_MEDICATION : 
            return {
                ...state ,
                medication : action.payload
            }
         case CREATE_HISTORY :
             return {
                 ...state ,
                 newHistory : action.payload
             }

        case NEW_HISTORY_ERROR :
            return {
                ...state ,
                newHistoryError : action.payload
            }

        case FILTER_PATIENTS : 
        return {
            ...state,
            filtered : state.ownPatients.filter((patient)=>{
                return patient.name.includes(action.payload) || patient.email.includes(action.payload)
            })
        }
        
        case CLEAR_FILTER :
            return {
                ...state ,
                filtered : null
            }
        
        case ID_ERROR : 
            return {
                ...state,
                idError : action.payload
        }
        case DIAGNOSE :
            return {
                ...state,
                diagnose : action.payload
            }
        case CREATE_TERM : 
            return {
                ...state,
                createTermResponse : action.payload
            }
        case GET_ALL_TERMS :
           
            return {
                ...state ,
                terms : action.payload
            }

            case DELETE_SPECIFIC_TERM : 
           
                return {
                    ...state ,
                    terms : state.terms.filter(term => (term.id !== action.payload))
                       
                }

            case SET_CURRENT : 
                 
                return {
                    ...state,
                    currentDate : action.payload
                }
            
            case HISTORY_ERROR : 
               
                return {
                    ...state,
                    historyError : action.payload
                }
            case MEDICATIONS : 
            console.log('dada')
                return {
                    ...state ,
                    medications : action.payload
                }
      
       default :
       return state
    }
     

}