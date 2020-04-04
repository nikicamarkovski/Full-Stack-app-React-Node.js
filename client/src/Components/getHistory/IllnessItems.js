import React from 'react'


 const IllnessItems = (props) => {
   

    return (

      
             <ul className ='illness'>
            {props.illness !== undefined &&
            <li>Diagnose : {props.illness.nameofIllness}</li>
            }
            </ul>         
      
    )
}



export default IllnessItems