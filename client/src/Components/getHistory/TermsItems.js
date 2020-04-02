import React from 'react'

 const TermsItems = (props) => {
    return (
        
            <ul className='date'>
            {props.term !== undefined && 
            <li> Date : {props.term.date}</li>
            }
           </ul>
    
    )
}



export default TermsItems;