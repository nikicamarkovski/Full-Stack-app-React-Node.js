import React, { useState, useContext, useEffect } from 'react'
import DoctorContext from '../../context/doctorActions/DoctorContext';
import PatientHistoryItems from './PatientHistoryItems';
import IllnessItems from './IllnessItems';
import TermsItems from './TermsItems';

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
        <div className='div-response'>
            <form onSubmit={onSubmit}>
            <input text='id' name='id' value={id} onChange={onChange}></input>
            <button type='submit'>Submit</button>
            </form>
            
            {history !== null && 
            <div className='some'>
            <ul>
                <li> Name : {history.name}</li>
                <li>Surname : {history.surname}</li>
                 <li>Age : {history.age}</li>
                 
            </ul>
            <div className='illness-response'>    {history.illness.map((elem)=>(
                   <IllnessItems  illness={elem}/>
                ))} </div>
               <div className='drugs-response'>   {history.drugs.map((drug)=>(
                  <PatientHistoryItems  drug={drug} />
                ))} </div>
               <div className='terms-response'>    {history.terms.map((term)=>(
                 <TermsItems  term={term}  /> 
                ))}</div>
            </div>
            }
           
        </div>
    )
}



export default GetPatientHistory;