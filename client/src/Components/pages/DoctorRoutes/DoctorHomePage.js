import React, { useContext ,useEffect ,useState} from 'react'
import {Link} from 'react-router-dom'
import AuthContext from '../../../context/auth/AuthContext'
import DoctorContext from '../../../context/doctorActions/DoctorContext';
import Patients from '../../getPatients/Patients'
import Patient from '../../patientID/Patient'
import GetPatientHistory from '../../getHistory/GetPatientHistory'
import CreateNewPatient from '../../createNewPatient/createNewPatient';
import CreatePatientHistory from '../../createHistory/CreatePatientHistory';


 const DoctorHomePage = () => {
     const authContext = useContext(AuthContext);
     const doctorContext = useContext(DoctorContext);
    const {getPatientById , patientById} = doctorContext;
     const [state , setState] = useState({
    
        show : '',
        id : ""
  
    });

    const {show , id} = state;

     const getAllPatients   = () => {
        setState({show : 'showAllPatients'})
        doctorContext.getPatients()
     }
     useEffect(()=> {
        authContext.loadUser();

        // eslint-disable-next-line
     },[])

     const showId = ()=> {
         setState({
            show : 'showIdForm'
         })
     } 

     const createPatient = ()=> {
         setState({
             show : 'createPatient'
         })
     }
     const createHistory = ()=> {
         setState({

            show: 'createHistory'

         })
     }
     const getHistory = () => {
         setState({
             show : 'getHistory'
         })
     }

        const onChange = (e) => {
        
         setState({...state , [e.target.name]:e.target.value})
            
        }
        const onSubmit = (e)=>{
            e.preventDefault();

            getPatientById(id);
        }
    return (
        <div>
            <div onClick={getAllPatients}>get all patients</div>
            <div onClick={showId}>Get Patient by ID</div>
            <div onClick={createPatient}>Create new patient</div>
            <div onClick={createHistory}>Create patient history</div>
            <div onClick={getHistory}> Get History of Patient</div>
         {state.show === 'showAllPatients' && <Patients/>}
         {state.show === 'getHistory' &&  <GetPatientHistory/>}
          {state.show ==='showIdForm' &&<div> <form onSubmit={onSubmit}>
              <input type='text' name='id' value={id} onChange={onChange} placeholder='search patient by id'></input>
              <button value='Search' type='submit'>search</button> 
          </form> <Patient/> </div>}
            {state.show === 'createPatient' && <CreateNewPatient/>}
            {state.show === 'createHistory' && <CreatePatientHistory/>}
        </div>
    )
}


export default DoctorHomePage;