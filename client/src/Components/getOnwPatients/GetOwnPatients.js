import React, { useContext } from 'react'
import DoctorContext from '../../context/doctorActions/DoctorContext';
import OwnPatientItems from './OwnPatientItems';
import FilterOwnPatients from './FilterOwnPatients';
 const GetOwnPatients = () => {
    const doctorContext = useContext(DoctorContext);
    const {ownPatients , filtered} = doctorContext
   
   return (

       <div className="patient-items">
           <FilterOwnPatients/>
           {/* {ownPatients !== null && ownPatients.map(patient=>(
                 <OwnPatientItems key={patient.id} patient={patient}/>  
           ))} */}
     {ownPatients !== null ?  (<div className="filtered">{filtered !== null ? filtered.map(patient => ( <OwnPatientItems key={patient.id} patient = {patient}/>))
            :ownPatients.map(patient=>
             
                <OwnPatientItems key={patient.id} patient = {patient}/>
                ) }</div>) : <div>Loading....</div>} 
       </div>
   )
}


export default GetOwnPatients;