import React from 'react'
import * as moment from 'moment';
 const TermsItems = (props) => {

    let formatDate =  moment(props.term.date).format('DD/MM/YYYY');
    return (
        
            <ul className='date'>
            {props.term !== undefined && 
            <li> Date : {formatDate}</li>
            }
           </ul>
    
    )
}



export default TermsItems;