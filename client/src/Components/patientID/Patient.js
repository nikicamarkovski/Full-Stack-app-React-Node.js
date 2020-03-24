import React, { useContext } from 'react'
import DoctorContext from '../../context/doctorActions/DoctorContext'
import PatientItems from './PatientItems'


const Patient = () => {
    const doctorContext = useContext(DoctorContext);
    const {patientById} = doctorContext;
    
    

    return (
        <div>
            {patientById !== null && patientById.map(patient =>(
                <PatientItems key={patient.id} patient={patient}/>
            ))}
         
        </div>
    )
}


export default Patient
