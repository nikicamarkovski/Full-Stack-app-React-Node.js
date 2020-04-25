import React, { useRef, useContext, useEffect } from 'react';
import DoctorContext from '../../context/doctorActions/DoctorContext';

 const FilterOwnPatients = () => {

    const doctorContext = useContext(DoctorContext);
    const {filterPatients , filtered , clearFilter} = doctorContext;

     const text = useRef('');

    useEffect(()=>{
        if(filtered === null ) {
            text.current.value ='';
        }
    })
    const onChange = (e) => {
        if(text.current.value !== '') {
            filterPatients(e.target.value);
        } else {
            clearFilter();
        }
    }
    console.log(filtered);
    return (
        <form>
        <input ref={text} type="text"  placeholder="filter" onChange={onChange}></input>
    </form>
    )
}


export default FilterOwnPatients