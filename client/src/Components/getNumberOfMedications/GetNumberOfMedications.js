import React, { useState, useContext } from 'react'
import DoctorContext from '../../context/doctorActions/DoctorContext';

import MedicationItems from './MedicationItems'

 const GetNumberOfMedications = () => {
    const doctorContext = useContext(DoctorContext);

    const {getNumberOfMedications , numberOfMedication} = doctorContext;
    const [state , setState] = useState({
        name : ''
    })

    const {name} = state;

    const onChange = (e) => { 
        setState({...state , [e.target.name]:e.target.value})
    }

    const onSubmit= (e)=> {
        e.preventDefault();
        getNumberOfMedications(name)
    }
    return (
        <div>
          <form onSubmit={onSubmit}>
            <input type='text' name='name' placeholder='Name of Medication' value={name} onChange={onChange}></input>      
            <button type='submit'>Submit</button>
        </form>  
        {numberOfMedication !== null &&
            numberOfMedication.map((item)=>(
                <MedicationItems key={item.drug_name} item={item}/>
            ))
        }
        </div>
    )
}


export default GetNumberOfMedications;