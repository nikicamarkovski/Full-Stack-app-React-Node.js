import React , {useState, useContext}from 'react'
import CreatePatientHistory from '../createHistory/CreatePatientHistory'

 const PatientItems = ({patient}) => {

    
    const {id, name , surname , age} = patient

    const [state , setState] = useState({
        isVisible : false
    })
    const {isVisible} = state
    const setVisible = () => {
        setState({
            isVisible : !state.isVisible
       })
    }
    return (
        <div>
            <p>{id}</p>
            <p>{name}</p>
            <p>{surname}</p>
            <p>{age}</p>
    <button onClick={setVisible}>{isVisible? 'hide' : 'show' }</button>
            {isVisible &&  <CreatePatientHistory patientId = {id}/>}
            
           
        </div>
    )
}


export default PatientItems;