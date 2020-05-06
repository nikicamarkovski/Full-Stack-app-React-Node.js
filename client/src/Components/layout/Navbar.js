import React, { useContext } from 'react'
import {Link} from 'react-router-dom';
import AuthContext from '../../context/auth/AuthContext';
  const Navbar = () => {
      const authContext = useContext(AuthContext);
      const {user , isAuthenticated , logout} = authContext;
        console.log(user)
      const guestLinks = (
         
        <> 
          
       
        <Link to='/about'>About</Link>
        <Link to='/login'>Login</Link>
        </>
    
        )
    

        const authLinks = (
            <>
             <li> {user!==null  && user.doctor_name ? user.doctor_name + ' ' + user.surname : <div>{null}</div>}   </li> 
             <li> {user !== null && user.name? user.name + " " + user.surname : <div>{null}</div>}</li>
            <Link to='/login' onClick={logout}>Logout</Link>
            </>
        )
    return (
        <div className='navbar'>
            
            <div className='left'> Hospital Project</div>
            <ul className='links'>
             {isAuthenticated ? authLinks : guestLinks}
            </ul>
        </div>
    )
}

export default Navbar;