import React, { useState, useContext } from 'react'
import DoctorContext from '../../context/doctorActions/DoctorContext';

import MedicationItems from './MedicationItems'

 const GetNumberOfMedications = () => {
    const doctorContext = useContext(DoctorContext);

    const {getNumberOfMedications , numberOfMedication , medications} = doctorContext;
    const [state , setState] = useState({
        name : '',
        medicationsVisibility : false
    })

    const {name ,  medicationsVisibility} = state;

    const onChange = (e) => { 
        setState({...state , [e.target.name]:e.target.value})
    }
    

    const onSubmit= (e)=> {
        e.preventDefault();
        getNumberOfMedications(name)
    }

    const onClick = () => {
        setState({
            medicationsVisibility : !medicationsVisibility
        })
    }
    const ValueOfDiv = (e) => {
        console.log(e.target.innerHTML);
        setState({
            name : e.target.innerHTML
        })
    }
    return (
        <div>
          <form onSubmit={onSubmit}>
        
            <input type='text' name='name' placeholder='Name of Medication' value={name} onChange={onChange}></input>
            <i  onClick={onClick} class="far fa-caret-square-down"></i>       
          
    
            <button type='submit'>Submit</button>
        </form> 
        <ul className='dropDown'>
        {medications !== null && medications.map((e)=>(
         
                <li onClick={ValueOfDiv} className={medicationsVisibility ? 'showButton' : 'hideButton'} key={e.drug_name}>{e.drug_name}</li>
          
        ))} 
          </ul>
        {numberOfMedication !== null &&
            numberOfMedication.map((item)=>(
                <MedicationItems key={item.drug_name} item={item}/>
            ))
        }
        </div>
    )
}



export default GetNumberOfMedications;