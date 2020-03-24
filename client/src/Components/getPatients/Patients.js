import React, { useContext } from 'react'
import DoctorContext from '../../context/doctorActions/DoctorContext';
import PatientItems from './PatientItems';


 const Patients = () => {
     const doctorContext = useContext(DoctorContext);
     const {patients} = doctorContext
     console.log(patients);
    return (
        <div>
            {patients !== null && patients.map(patient=>(
                  <PatientItems key={patient.id} patient={patient}/>  
            ))}
        </div>
    )
}
export default Patients