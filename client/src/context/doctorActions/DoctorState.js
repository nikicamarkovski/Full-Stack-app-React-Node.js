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
    GET_HISTORY

} from '../types';


const DoctorState = props => {
    const initialState = {
        patients : null ,
        error : null ,
        patientById : null ,
        response : null ,
        history : null

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
            
        }
    }

    const deletePatient = async (id)=> {
        const config = {
            headers : {
              'Content-Type' : 'application/json'
            }
        }
       try {
           const res = await axios.delete(`/patients/${id}` , config);
           dispach({
            type : DELETE_PATIENT,
            payload : id
        })
       } catch (error) {
          console.log(error);
       }
        
        
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
           console.log(state.response);
       } catch (error) {
           /// da se koregira vo backendot za error da vrakja 
           
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
    return ( 
    <DoctorContext.Provider
    value={{
        patients:state.patients,
        error:state.error,
        patientById : state.patientById,
        response : state.response,
        history : state.history,

        getPatients,
        getPatientById,
        deletePatient ,
        createNewPatient ,
        getPatietHistory,
        clearError


    }}
    >



    {props.children}
    </DoctorContext.Provider>
    )
}

export default DoctorState;