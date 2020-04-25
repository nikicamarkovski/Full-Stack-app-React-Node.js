import React , {useReducer}from 'react';
import PatientContext from './PatientContext';
import PatientReducer from './PatientReducer';
import axios from 'axios';

import{
GET_OWN_HISTORY
} from '../types';


const PatientState = (props) => {


    const initialState = {
        ownHistory : null
    };

    const [state , dispach] = useReducer(PatientReducer , initialState );

    const getOwnHistory = async () => {
        const res = await axios.get('/patients/history');
        console.log(res.data);
        console.log("dadadaad");
    };

    return(
    <PatientContext.Provider value={{
        ownHistory : state.ownHistory ,
        getOwnHistory
    }}>
        { props.children }
    </PatientContext.Provider>
    )
}

export default PatientState;