import React from 'react'

 const PatientHistoryItems = props => {
  
     
    // //  const { NameOfDrug} = drug;
    //  const {id , date} = term;
    console.log(props);
    if(props.drug !==undefined){
        console.log(props.drug.NameOfDrug)
    }
    return (
   
            <ul className='drugs'>
            {props.drug !==undefined && 
            <li> Medication : {props.drug.NameOfDrug}</li>
            }
            </ul>
          
       
    )
}


export default PatientHistoryItems;