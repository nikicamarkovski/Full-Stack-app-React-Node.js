import React from 'react'

 const PatientHistoryItems = props => {
  
     
    // //  const { NameOfDrug} = drug;
    //  const {id , date} = term;
    console.log(props);
    if(props.drug !==undefined){
        console.log(props.drug.NameOfDrug)
    }
    return (
        <div>
            <ul>
            {props.drug !==undefined && 
            <li>{props.drug.NameOfDrug}</li>
            }

            {props.illness !== undefined &&
            <li>{props.illness.nameofIllness}</li>
            }
            {props.term !== undefined && 
            <li>{props.term.date}</li>
            }
            </ul>
        </div>
    )
}


export default PatientHistoryItems;