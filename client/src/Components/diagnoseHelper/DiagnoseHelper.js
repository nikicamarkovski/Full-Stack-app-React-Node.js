import React, { useContext , useState} from 'react'
import DoctorContext from '../../context/doctorActions/DoctorContext';

import DiagnoseItems from './DiagnoseItems';
 const DiagnoseHelper = () => {
    
    const doctorContext = useContext(DoctorContext);
    const {diagnoseHelper , diagnose} = doctorContext;
    const [state , setState] = useState({
        text : ''
    })

    const {text} = state;

    const onChange = (e) => { 
        setState({...state , [e.target.name]:e.target.value})
    }

    const onSubmit= (e)=> {
        e.preventDefault();
       diagnoseHelper(text);
    }
 

    return (
        <div>
          <form onSubmit={onSubmit}>
            <input type='text' name='text' placeholder='Add symphtom' value={text} onChange={onChange}></input>      
            <button type='submit'>Submit</button>
            </form>
            <ul></ul>
            {diagnose !== null && 
         
            diagnose.illness.map((x)=> (
                <DiagnoseItems key={x.bolest_id} x={x}/>
            ))}
        </div>
    )
}


export default DiagnoseHelper;