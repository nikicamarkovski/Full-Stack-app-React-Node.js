import React , {useReducer} from 'react'
import axios from 'axios';
import jwt from 'jwt-decode'
import AuthContext from './AuthContext';  // import na contactContext
import authReducer from './AuthReducer'; /// contact reducer
import setAuthToken from '../../utils/setAuthToken'
import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
}from '../types';

const AuthState = props=>{
  const initialState = {
      token: localStorage.getItem('token'),
      isAuthenticated : null,
      user:null,
      error:null
  }
  const [state , dispatch] = useReducer(authReducer , initialState);

  const loadUser = () => {
    if(localStorage.token) {
      console.log('dadada')
      setAuthToken(localStorage.token)
      const actUser = jwt(localStorage.getItem('token'));
      console.log(actUser);
      dispatch({
        type: USER_LOADED,
        payload : actUser.user
      })
   
    }
    

  }
   
  const login = async formData => {

        const config = {
          headers : {
            'Content-Type' : 'application/json'
          }
        }

      try {
          const res = await axios.post('/login' , formData , config)
          
          clearErrors()
          dispatch({
            type : LOGIN_SUCCESS,
            payload : res.data
          })
          loadUser()
      } catch (error) {
        dispatch({
          type:LOGIN_FAIL,
          payload : error.response.data
        })
        
      }
  }

  const clearErrors  = ()=> {
    dispatch({
      type : CLEAR_ERRORS
    })
  }

  const logout = () => {
    dispatch({
      type : LOGOUT
    })
  }
  return(

      <AuthContext.Provider
      value={{
         token: state.token,
         isAuthenticated : state.isAuthenticated,
         user : state.user,
         error: state.error,

         
          login,
         loadUser ,
         clearErrors,
         logout

      }}
      >
          {props.children}
      </AuthContext.Provider>
  )
}


export default AuthState