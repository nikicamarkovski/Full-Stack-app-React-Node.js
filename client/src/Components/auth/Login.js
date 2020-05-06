import React, { useState, useContext, useEffect } from 'react'
import AuthContext from '../../context/auth/AuthContext'

 const Login = props => {

   
    const authContext = useContext(AuthContext);
    const {login , error , isAuthenticated , user , loadUser} = authContext;

    const [state , setState] = useState({
    
         email:'',
         password:'',
   
     });

     const onChange = (e)=>{
        setState({...state , [e.target.name]:e.target.value})

     }
     useEffect(()=> {
        loadUser()
        if(isAuthenticated) {
          
            if(user !== null) {
             
            //     var obj = Object.keys(user);
            //     var bool = obj.includes('id');
                if(Object.keys(user)[0]=='id'){
                    props.history.push('/patienthome')
                } else {
                    props.history.push('/doctorhome')
                }
                
            }
           
        }
     
          // eslint-disable-next-line
     },[error , isAuthenticated , props.history , user ,loadUser])


     const onSubmit =(e)=>{
        e.preventDefault();
        login({
            email,
            password
        })
        
    }

    const {email , password } = state
    
    return (
        <div>
            
             <div className="loginMenu">
            <h1>
         
            Account <span>Log in </span>
            </h1>
            <form onSubmit={onSubmit} className="loginForm">
           
            <div className='email'>
                <label htmlFor='email'>Email</label>
                <input type='email' name='email' value={email} onChange={onChange}></input>
             
                {error === "Wrong  Email" && <span>{error}</span>}</div>
            <div className='password'>
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' value={password} onChange={onChange}></input>
                {error === "Wrong  Password" && <span>{error}</span>}
            </div>
          
            <input type='submit' value='Login' id='submit'/>
            </form>
        </div>
        </div>
    )
}

export default Login;