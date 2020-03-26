import React, { useContext } from 'react'
import DoctorContext from '../../context/doctorActions/DoctorContext';
import OwnPatientItems from './OwnPatientItems';
 const GetOwnPatients = () => {
    const doctorContext = useContext(DoctorContext);
    const {ownPatients} = doctorContext
   
   return (
       <div>
           {ownPatients !== null && ownPatients.map(patient=>(
                 <OwnPatientItems key={patient.id} patient={patient}/>  
           ))}
       </div>
   )
}


export default GetOwnPatients;