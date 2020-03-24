import React, { useState, useContext, useEffect } from 'react'
import DoctorContext from '../../context/doctorActions/DoctorContext';
import PatientHistoryItems from './PatientHistoryItems';
 const GetPatientHistory = () => {
    
    const doctorContext = useContext(DoctorContext);
    const {getPatietHistory ,history} = doctorContext;
    
    const [state , setState] = useState({
         id : ''
     });

     const {id} = state;

     const onChange = (e) => {
         setState({
             ...state , [e.target.name]:e.target.value
         })
     }
     const onSubmit = (e) => {
            e.preventDefault();
            getPatietHistory(id)
     }

   
    return (
        <div>
            <form onSubmit={onSubmit}>
            <input text='id' name='id' value={id} onChange={onChange}></input>
            </form>
            
            {history !== null && 
            <div>
            <ul>
                <li> Name : {history.name}</li>
                <li>Surname : {history.surname}</li>
                 <li>Age : {history.age}</li>
                 
            </ul>
                {history.illness.map((elem)=>(
                    <PatientHistoryItems  illness={elem}/>
                ))}
                {history.drugs.map((drug)=>(
                    <PatientHistoryItems  drug={drug} />
                ))}
                {history.terms.map((term)=>(
                    <PatientHistoryItems  term={term}  />
                ))}
            </div>
            }
           
        </div>
    )
}



export default GetPatientHistory;