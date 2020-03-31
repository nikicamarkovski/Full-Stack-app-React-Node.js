
import React, { useState, useContext } from 'react'
import DoctorContext from '../../context/doctorActions/DoctorContext';
 const OwnPatientItems = ({patient}) => {

    const doctorContext = useContext(DoctorContext);

    const {deletePatient} = doctorContext;

        const {id, name , surname , email } = patient

    const [state , setState] = useState({
        isVisible : false ,
        idForDelete : null ,
      
    })
    const {isVisible , idForDelete } = state;

    const deleteId = (e)=> {
        setState({ isVisible: true ,  idForDelete : e.target.id})
       

    }

    const positive = () => {
        console.log(idForDelete);
        setState({isVisible : false});
        deletePatient(idForDelete)
    }

    const negative = ()=> {
       
        setState({isVisible : false})
    }
    return (
        <div style ={Style}>
        <p>{id}</p>
        <p>{name}</p>
        <p>{surname}</p>
        <p>{email}</p>
        <button id={id} onClick={deleteId}>delete</button>
        {isVisible ? <div> Are you sure ?
            <button onClick={positive}>yes</button>
            <button onClick={negative}>no</button>
        </div> : null}
        <hr></hr>
        </div>
       
    )
  
}

const Style = {
    width : '50%'
  
}

export default OwnPatientItems;