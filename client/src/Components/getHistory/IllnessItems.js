import React from 'react'


 const IllnessItems = (props) => {
   
    console.log(props.illness.nameofIllness)
    return (

      
             <ul className ='illness'>
            {props.illness !== undefined &&
            <li>Diagnose : {props.illness.nameofIllness}</li>
            }
            </ul>         
      
    )
}



export default IllnessItems