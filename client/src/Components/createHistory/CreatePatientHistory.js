import React, { useState , useContext } from 'react'
import DoctorContext from '../../context/doctorActions/DoctorContext';
const CreatePatientHistory = ({patientId}) => {

    const doctorContext = useContext(DoctorContext);
    const {getPatietHistory} = doctorContext

    console.log(patientId)
    const [state , setState ] = useState({
        patient : patientId,
        illness : '',
        drug : '',
        quantity : ''
    })
    const { patient, illness , drug, quantity} = state

    const onChange = (e)=> {
        setState({ ...state , [e.target.name]:e.target.value});

    }

    const onSubmit = (e)=> {
        e.preventDefault() ; 
           
        getPatietHistory(patient)
    }
    return (
       
         <div>
              <form onSubmit={onSubmit}>
             
                <input name='illness' type='text' placeholder='illness' value={illness}  onChange={onChange}></input>
                <input name='drug' type='text' placeholder='drug' value={drug}  onChange={onChange}></input>
                <input name='quantity' type='text' placeholder='quantity' value={quantity}  onChange={onChange}></input>
                
                <button type='submit'>Submit</button>           
            </form>
         </div>
    )
}



export  default CreatePatientHistory;