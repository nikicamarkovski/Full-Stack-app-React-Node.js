import React, { useReducer } from 'react';
import DoctorContext from './DoctorContext';
import DoctorReducer from './DoctorReducer';
import axios from 'axios';
import {

    GET_PATIENTS ,
    GET_PATIENTS_BY_ID,
    DELETE_PATIENT,
    SET_ERROR ,
    CREATE_PATIENT ,
    CLEAR_ERRORS ,
    GET_HISTORY , 
    CREATE_HISTORY, 
    GET_OWN_PATIENTS,
    NUMBER_OF_MEDICATION ,
    ENTER_MEDICATION ,
    NEW_HISTORY_ERROR ,
    FILTER_PATIENTS , 
    CLEAR_FILTER,
    ID_ERROR,
    DIAGNOSE,
    CREATE_TERM,
    GET_ALL_TERMS,
    DELETE_SPECIFIC_TERM,
    SET_CURRENT

} from '../types';



const DoctorState = props => {
    const initialState = {
        patients : null ,
        error : null ,
        patientById : null ,
        response : null ,
        history : null,
        newHistory : null ,
        ownPatients : null ,
        numberOfMedication  : null,
        medication : null,
        newHistoryError : null ,
        filtered : null ,
        idError : null ,
        diagnose : null,
        createTermResponse : null ,
        terms : null ,
        currentDate : null
    };

    const[state, dispach] = useReducer(DoctorReducer, initialState);

    const getPatients = async () => {
        try {
            const res = await axios.get('/patients')
           dispach({
               type:GET_PATIENTS,
               payload : res.data
           })
        } catch (error) {
            
        }
    }

    const getPatientById = async id => {
        console.log(id);
        try {
            const res = await axios.get(`/patients/${id}`)
            
            dispach({
                type: GET_PATIENTS_BY_ID,
                payload : res.data ,

            })
        } catch (error) {
            dispach({
                type : ID_ERROR , 
                payload : error.response.data.error.message
            })
            
        }
    }

    const deletePatient = async (id)=> {
        console.log(id);
        const config = {
            headers : {
              'Content-Type' : 'application/json'
            }
        }
       try {
           const res = await axios.delete(`/patients/${id}` , config);
           console.log(res.data);
           dispach({
            type : DELETE_PATIENT,
            payload : id
        })
       } catch (error) {
          console.log(error);
       }
        
        
    }

    const filterPatients = (text) => {
        console.log(text);
        dispach({
            type : FILTER_PATIENTS,
            payload : text
        })
        console.log(state.filtered)
    }

    const clearFilter = () => {
        dispach({
            type : CLEAR_FILTER
        })
       
    }

    const createNewPatient =async (formData)=>{
        const config = {
            headers : {
              'Content-Type' : 'application/json'
            }
        }
       try {
           const res = await axios.post('/patients' , formData , config);
           clearError()
           dispach({
               type : CREATE_PATIENT ,
               payload : res.data
           })
    
       } catch (error) {
          
           
           dispach({
               type:SET_ERROR,
               payload : error.response.data.error.message
           })
          
       }
    }  

    const clearError = ()=> {
        dispach({
            type : CLEAR_ERRORS
        })
      
    }

    const getPatietHistory =async (id) => {
      
        try {
            const res = await axios.get(`/patients/${id}/history`);
            console.log(res.data);
          dispach({
            type : GET_HISTORY,
            payload: res.data
          })

        } catch (error) {
            
        }
    }

    const CreatePatientHistory = async (formData) => {
        const config = {
            headers : {
              'Content-Type' : 'application/json'
            }
        }

        try {
            const res = await axios.post('/patients/history' , formData , config)
                
            dispach({
                type : CREATE_HISTORY,
                payload : res.data
                 
            })
        } catch (error) {
            dispach({
                type : NEW_HISTORY_ERROR,
                payload : error.response.data.error.message
            })
        }
    }

  const  getOwnPatients = async () => {
      try {
          const res = await axios.get('/doctors/patients');
            dispach({
                type:GET_OWN_PATIENTS,
                payload : res.data
            })
      } catch (error) {
          
      }
  }

  const getNumberOfMedications = async (name) => {
      try {
          const res = await axios.get(`/drugs/${name}`);
          dispach({
              type: NUMBER_OF_MEDICATION ,
              payload : res.data
          })
      } catch (error) {
          
      }
  }

 const postDrugs = async (formData) => {
    const config = {
        headers : {
          'Content-Type' : 'application/json'
        }
    }
    try {
        const res = await axios.post('/order' , formData , config);
        dispach({
            type : ENTER_MEDICATION ,
            payload : res.data

        })
        console.log(res.data)
    } catch (error) {
        
    }
 }

 const createNewTerm = async (formData) => {
    
    const config = {
        headers : {
          'Content-Type' : 'application/json'
        }
    }
    try {
         const res =   await axios.post('/patients/terms' , formData , config);
        dispach({
            type : CREATE_TERM,
            payload: res.data
        })
        console.log(state.createTermResponse)
    } catch (error) {
        
    }
 }

const diagnoseHelper =async (text) => {
    try {
        const res= await axios.get(`/patients/diagnose/${text}`);
        dispach({
            type : DIAGNOSE,
            payload : res.data
        })   
    } catch (error) {
        
    }
     
}

 const getAllPatientTerms = async (id) => {
     try {
         const res = await axios.get(`/patients/${id}/terms`);
        
            console.log(res.data.terms);
         dispach({
             type: GET_ALL_TERMS,
             payload: res.data.terms
         })
       
     } catch (error) {
         console.log(error);
     }
 }

 const deleteTerm = async (id) => {

   

   try {
       await axios.delete(`/patients/${id}/terms`)
        dispach({
            type:DELETE_SPECIFIC_TERM,
            payload : id
        })
   } catch (error) {
       console.log(error);
   }

 }

 const setCurrent = async (formData) => {
     try {
         dispach({
            type:SET_CURRENT,
            payload : formData
         })
         
     } catch (error) {
         
     }
      
 }
 const changeTerm = async (formData) =>{
    const config = {
        headers : {
          'Content-Type' : 'application/json'
        }
    }
    try {
        console.log(formData);
        await axios.patch(`/patients/${formData.patient}/terms/${formData.id}` , formData , config);
    } catch (error) {
        
    }
 }


    return ( 
    <DoctorContext.Provider
    value={{
        patients:state.patients,
        error:state.error,
        patientById : state.patientById,
        response : state.response,
        history : state.history,
        ownPatients : state.ownPatients,
        numberOfMedication : state.numberOfMedication,
        medication : state.medication,
        newHistory : state.newHistory,
        newHistoryError : state.newHistoryError,
        filtered : state.filtered ,
        idError : state.idError,
        diagnose : state.diagnose ,
        createTermResponse : state.createTermResponse,
        terms : state.terms ,
        currentDate : state.currentDate , 

        getPatients,
        getPatientById,
        deletePatient ,
        createNewPatient ,
        getPatietHistory,
        clearError ,
        getOwnPatients,
        getNumberOfMedications,
        postDrugs , 
        CreatePatientHistory , 
        filterPatients ,
        clearFilter ,
        diagnoseHelper ,
        createNewTerm,
        getAllPatientTerms ,
        deleteTerm ,
        setCurrent ,
        changeTerm


    }}
    >



    {props.children}
    </DoctorContext.Provider>
    )
}

export default DoctorState;