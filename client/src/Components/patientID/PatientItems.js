import React , {useState, useContext, useEffect}from 'react'
import CreatePatientHistory from '../createHistory/CreatePatientHistory'
import CreateNewTerm from '../createNewTerm/CreateNewTerm';
import DoctorContext from '../../context/doctorActions/DoctorContext';
import TermsItems from '../createNewTerm/Terms/TermsItems';
 const PatientItems = ({patient}) => {

    const doctorContext = useContext(DoctorContext);

    const {getAllPatientTerms , terms }  = doctorContext;

    const {id, name , surname , age} = patient

    const [state , setState] = useState({
        historyIsVisible : false,
        termIsVisible : false ,
        buttonVisible : false
    })
    const {historyIsVisible , termIsVisible , buttonVisible} = state
    const historySetVisible = () => {
        setState({
            historyIsVisible : !state.historyIsVisible,
            termIsVisible : false
       })
    }

    const termSetVisible = () => {
        setState({
            historyIsVisible : false,
            termIsVisible : !state.termIsVisible
       })
    }
        const onClick = () => {
            
            getAllPatientTerms(id);
            setState({
                buttonVisible : true
            })
        }
        // useEffect(()=> {
        //     getAllPatientTerms(id);
        // }, [])
       
     const clearTermState = () => {
            setState({
                buttonVisible : false
            })

     }
    return (
        <div>
            <p>id : {id}</p>
            <p>Name : {name}</p>
            <p>Surname : {surname}</p>
            <p>Age : {age}</p>
         <button onClick={historySetVisible}>{historyIsVisible? 'hide form' : 'create history' }</button>
            {historyIsVisible &&  <CreatePatientHistory patientId = {id}/>}
            <button onClick={termSetVisible}>{termIsVisible ? 'hide form' : 'create term' }</button>
            {termIsVisible &&  <CreateNewTerm patientId = {id}/>}
           <button onClick={onClick}>get all terms</button>
           
           { buttonVisible && terms !== null &&   terms.map(term => (
               <TermsItems term={term} key={term.id}
               
               />
               
           ))}
       <button onClick={clearTermState} className={!buttonVisible? 'hideButton' : 'showVisible'}>Hide</button>
        </div>
    )
}


export default PatientItems;