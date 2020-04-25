import React, { useContext, useState } from 'react'
import * as moment from 'moment';
import DoctorContext from '../../../context/doctorActions/DoctorContext';
 const TermsItems = ({term}) => {

   
    const doctorContext = useContext(DoctorContext);
    const {deleteTerm , setCurrent , patientById , changeTerm } = doctorContext;


  let formatDate =  moment(term.date).format('DD/MM/YYYY');

//   const [state , setState] = useState({
//     formVisible : false,
//     date :  'dada'
// })

   

const [ state , setState] = useState({
    
    formVisible : false,
    date : ''
});

const {formVisible , date } = state



    const onClick = () => {
        
        deleteTerm(term.id);
    
    }
    const Modify = () => {

        setCurrent({
            id : term.id,
            date:formatDate
        })
        setState({
            formVisible : !formVisible,
            date : formatDate
        })
    }
  
    const onChange = (e) => {
        setState({...state, [e.target.name]:e.target.value})
    }
    const onSubmit = (e) => {
        e.preventDefault();
        
        changeTerm({
            id : term.id,
            date: date ,
           patient : patientById[0].id
        });
        
    }
    return (
        <div>
            {formatDate}
           <button onClick={onClick}>Delete</button>
             <button onClick={Modify}>{formVisible ? "Hide form" : "Modify"}</button>
            
           <form onSubmit={onSubmit} className={formVisible ? "formshow" : "formhide"}>
           <input name='date' onChange={onChange} value={date}></input>
           <button type='submit'>submit</button>
           </form>
         
        </div>
    )
}


export default TermsItems