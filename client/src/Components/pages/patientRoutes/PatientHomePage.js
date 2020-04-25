import React, { useContext , useEffect} from 'react'
import {Link} from 'react-router-dom'
import AuthContext from '../../../context/auth/AuthContext'
import PatientContext from '../../../context/patientActions/PatientContext';
 const PatientHomePage = () => {
     const patientContext = useContext(PatientContext);
     const { ownHistory , getOwnHistory } = patientContext;
     const authContext = useContext(AuthContext);
     useEffect(()=> {
        authContext.loadUser();

        // eslint-disable-next-line
     },[])
    return (
        <div>
        <button onClick={getOwnHistory}>Get History</button>
        <Link>get all terms</Link>
        </div>
    )
}


export default PatientHomePage;