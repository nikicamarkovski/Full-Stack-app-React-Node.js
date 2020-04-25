import React , {Component }from 'react';
import { BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import './App.css';
import PatientPrivateRoute from './Components/routing/PatientPrivateRoute';
import DoctorPrivateRoute from './Components/routing/DoctorPrivateRoute'
import DoctorState from './context/doctorActions/DoctorState'
import PatientState from './context/patientActions/PatientState';
/// Components
import AuthState from './context/auth/AuthState'
import Login from './Components/auth/Login';
import About from './Components/pages/About'
import Navbar from './Components/layout/Navbar';
import PatientHomePage from './Components/pages/patientRoutes/PatientHomePage';
import DoctroHomePage from './Components/pages/DoctorRoutes/DoctorHomePage';
import setAuthToken from './utils/setAuthToken'

if(localStorage.token) {
 
  setAuthToken(localStorage.token)
}
class App extends Component {
  
  render(){
    return (
     <div>
  <AuthState>
    <DoctorState>
    <PatientState>
   <Router>
     <Navbar/>
        <Switch>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/about' component={About}/>
        <PatientPrivateRoute exact path='/patienthome' component={PatientHomePage}/>
        <DoctorPrivateRoute exact path ='/doctorhome' component ={DoctroHomePage}/>
       </Switch>
    </Router>
    </PatientState>
    </DoctorState>
 </AuthState>
     </div>

    )
  }
}

export default App;
