import React, { useContext , useEffect} from 'react'
import {Link} from 'react-router-dom'
import AuthContext from '../../../context/auth/AuthContext'
 const PatientHomePage = () => {
     const authContext = useContext(AuthContext);
     useEffect(()=> {
        authContext.loadUser();

        // eslint-disable-next-line
     },[])
    return (
        <div>
        <Link>Get History</Link>
        <Link>get all terms</Link>
        </div>
    )
}


export default PatientHomePage;