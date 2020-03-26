import React from 'react'

 const MedicationItems = ({item}) => {
    const {quantity , drug_name} =item
    return (
        <div>
            <ul>
                 <li> Name : {drug_name}</li>
                 <li> Quantity : {quantity}</li>
            </ul>
        </div>
    )
}



export default MedicationItems