import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


const Upper = () => {
    const {name}=useSelector(state=>state.upperReducer);
    const dispatch=useDispatch();
  return (
    <>
      <h1>UPERCASE user name</h1>
      <h3>name: {name}</h3>
      <button onClick={()=> dispatch({type:'UPPER_CASE'}) }>UpperCase</button>
      <button onClick={()=> dispatch({type:'LOWER_CASE',payload:name.toLowerCase()}) }>LowerCase</button>

    </>
  )
}

export default Upper
