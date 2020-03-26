import React, { useState, useContext } from 'react'

 const PatientItems = ({patient}) => {
  

        const {id, name , surname , email } = patient
  

    
    return (
        <div>
        <p>{id}</p>
        <p>{name}</p>
        <p>{surname}</p>
        <p>{email}</p>
        
        <hr></hr>
        </div>
       
    )
}

export default PatientItems;