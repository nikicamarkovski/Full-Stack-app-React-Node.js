import React, { useContext ,useEffect ,useState} from 'react'
import {Link} from 'react-router-dom'
import AuthContext from '../../../context/auth/AuthContext'
import DoctorContext from '../../../context/doctorActions/DoctorContext';
import Patients from '../../getPatients/Patients'
import Patient from '../../patientID/Patient'
import GetPatientHistory from '../../getHistory/GetPatientHistory'
import CreateNewPatient from '../../createNewPatient/createNewPatient';
import CreatePatientHistory from '../../createHistory/CreatePatientHistory';
import GetOwnPatients from '../../getOnwPatients/GetOwnPatients';
import GetNumberOfMedications from '../../getNumberOfMedications/GetNumberOfMedications';
import EnterMedicine from '../../enterMedicine/EnterMedicine';
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

     const getOwnPatients = () => {
        setState({show : 'getAllOwnPatients'})
        doctorContext.getOwnPatients()
     }

     const getNumberOfMedications = () => {
        setState({
            show : 'GetNumberOfMedications'
        })
     }

     const enterMedicine = () => {
         setState({

             show: 'EnterMedicine'
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
        <div className="doctor-NavBar">
            <div className ="static-navBar">
            <div onClick={getAllPatients} className={show === 'showAllPatients' ? 'show' : 'hide'}>get all patients</div>
            <div onClick={showId} className={show === 'showIdForm' ? 'show' : 'hide'}>Get Patient by ID</div>
            <div onClick={createPatient} className={show === 'createPatient' ? 'show' : 'hide'}>Create new patient</div>
            <div onClick={createHistory} className={show === 'createHistory' ? 'show' : 'hide'}>Create patient history</div>
            <div onClick={getHistory} className={show === 'getHistory' ? 'show' : 'hide'}> Get History of Patient</div>
            <div onClick={getOwnPatients} className={show === 'getAllOwnPatients' ? 'show' : 'hide'}>Get Onw Patients</div>
            <div onClick={getNumberOfMedications} className={show === 'GetNumberOfMedications' ? 'show' : 'hide'}>Get Number Of Medication</div>
            <div onClick={enterMedicine} className={show === 'EnterMedicine' ? 'show' : 'hide'}>Enter Medicine</div>
            </div>
            <div className="response">        
         {state.show === 'showAllPatients' && <Patients/>}
         {state.show === 'getHistory' &&  <GetPatientHistory/>}
          {state.show ==='showIdForm' &&<div> <form onSubmit={onSubmit}>
              <input type='text' name='id' value={id} onChange={onChange} placeholder='search patient by id'></input>
              <button value='Search' type='submit'>search</button> 
          </form> <Patient/> </div>}
            {state.show === 'createPatient' && <CreateNewPatient/>}
            {state.show === 'createHistory' && <CreatePatientHistory/>}
            {state.show === 'getAllOwnPatients' && <GetOwnPatients/>}
            {state.show === 'GetNumberOfMedications' && <GetNumberOfMedications/>}
            {state.show === 'EnterMedicine' && <EnterMedicine/>}
            </div>

        </div>
    )
}

const Style = {
    color:'red'
}
export default DoctorHomePage;