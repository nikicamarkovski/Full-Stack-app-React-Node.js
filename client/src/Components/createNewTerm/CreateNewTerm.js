import React, { useState, useContext } from 'react'
import DoctorContext from '../../context/doctorActions/DoctorContext';
 const CreateNewTerm = ({patientId}) => {
            const doctorContext = useContext(DoctorContext);
            const {createNewTerm , createTermResponse} = doctorContext

            const [state , setState] = useState({
            date : '',
            pacient_id : patientId
        })

        const {date , pacient_id} = state

        const onChange = (e)=> {
            setState({...state , [e.target.name]: e.target.value})

        }

        const onSubmit = (e) => {
            e.preventDefault();
            createNewTerm({
                pacient_id,
                date
            })
        }

        
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type='text' value={date} placeholder='Enter Date' name='date' onChange={onChange}></input>
                <button type='submit'>submit</button>    
            </form>    

            {createTermResponse !==null &&
                <div>{createTermResponse}</div> 
            }
        </div>
    )
}


export default CreateNewTerm;