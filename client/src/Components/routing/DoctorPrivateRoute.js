import React, { useContext } from 'react';
import {Route , Redirect} from 'react-router-dom'
import AuthContext from '../../context/auth/AuthContext';
import jwt from 'jwt-decode'
 const DoctorPrivateRoute = ({component:Component , ...rest}) => {

    const authContext = useContext(AuthContext);
    const {isAuthenticated , loading} = authContext;
    if(localStorage.getItem('token')){
        const actUser = jwt(localStorage.getItem('token'));
        console.log(actUser);
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


export default DoctorPrivateRoute;