import React, { useState, useContext, useEffect } from 'react'
import DoctorContext from '../../context/doctorActions/DoctorContext';
 const CreateNewPatient = () => {

    const doctorContext = useContext(DoctorContext);
    const {createNewPatient , error , response} = doctorContext;
     const [state , setState] = useState({
         name : '',
         surname: '',
         age : '',
         email : '',
         password : ''

     });

     const {name , surname , age , email , password} = state;


     const onChange = (e)=> {
         setState({...state , [e.target.name]: e.target.value})

     }
     
     const onSubmit = (e)=> {
         e.preventDefault();
         createNewPatient({
             name,
             surname,
             age,
             email,
             password
         })
     }
    useEffect(()=> {
         
        console.log('da')
         console.log(error);
         console.log(response);
         // eslint-disable-next-line
    } , [error, response])

  
    return (
        
        <div>
            <form onSubmit={onSubmit}>
                <input name='name' type='text' placeholder='Name' value={name} onChange={onChange}></input>
                <input name='surname' type='text' placeholder='Surname' value={surname}  onChange={onChange}></input>
                <input name='age' type='text' placeholder='age' value={age}  onChange={onChange}></input>
                <input name='email' type='email' placeholder='email' value={email}  onChange={onChange}></input>
                <input name='password' type='password' placeholder='password' value={password}  onChange={onChange}></input>
                <button type='submit'>Submit</button>           
            </form>
             
        <div>{error !== null && <div id='da'>{error}</div>}</div>
        <div>{response !== null && <div>{response}
            <ul>
             <li> Name : {name}</li>
             <li>Surname : {surname}</li>
            <li>Age : {age}</li>
            <li> Email : {email}</li>
    
            </ul>
        </div>}</div>
        </div>
    )
}



export default CreateNewPatient;