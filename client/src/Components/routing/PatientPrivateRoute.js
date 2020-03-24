import React, { useContext } from 'react';
import {Route , Redirect} from 'react-router-dom'
import AuthContext from '../../context/auth/AuthContext';
import jwt from 'jwt-decode'
 const PatientPrivateRoute = ({component:Component , ...rest}) => {

    const authContext = useContext(AuthContext);
    const {isAuthenticated , loading} = authContext;
    if(localStorage.getItem('token')){
        const actUser = jwt(localStorage.getItem('token'));
        var objKeys = Object.keys(actUser)
        var bool = objKeys[0].includes('id')
    }
   
    return (
       <Route {...rest} render = {props => !isAuthenticated && !loading && !bool? (
           <Redirect to='/login'/>
       ): (
           <Component {...props}/>
       )}  />

      
    )
}


export default PatientPrivateRoute;