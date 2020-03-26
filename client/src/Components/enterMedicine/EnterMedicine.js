import React, { useState, useContext } from 'react'
import DoctorContext from '../../context/doctorActions/DoctorContext';


 const EnterMedicine = () => {

    const doctorContext = useContext(DoctorContext);
    const {medication , postDrugs} = doctorContext

    const [state, setState] = useState({
        name : '' ,
        quantity : ''
    })

    const {name , quantity} = state;
    
    const onChange = (e) => {
        setState({...state , [e.target.name]:e.target.value});    
    }

  const onSubmit = (e)=> {
    e.preventDefault();
    postDrugs({
        name,
        quantity
    })

  }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input name='name' value={name} onChange={onChange} placeholder='Enter name of Medication'></input>
                <input name='quantity' value={quantity} onChange={onChange} placeholder='Enter Quantity'></input>
                <button type='submit'>Submit</button>
            </form>
            {medication !== null &&
               <div>{medication}</div>
            }
        </div>
    )
}



export default EnterMedicine;