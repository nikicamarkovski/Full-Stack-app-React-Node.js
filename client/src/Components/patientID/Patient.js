import React, { useContext } from 'react'
import DoctorContext from '../../context/doctorActions/DoctorContext'
import PatientItems from './PatientItems'


const Patient = () => {
    const doctorContext = useContext(DoctorContext);
    const {patientById , idError } = doctorContext;

    
    return (
        <div>
            {patientById !== null &&  patientById.length !== 0 && patientById.map(patient =>(
                <PatientItems key={patient.id} patient={patient}/>
            ))}
         {idError !== null && idError}
        </div>
    )
}


export default Patient
