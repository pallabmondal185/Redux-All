import React from 'react';
import {useDispatch,useSelector} from 'react-redux';

const Contact = () => {
    const dispatch=useDispatch();
    const {city}=useSelector((state)=> state)
  return (
    <>
      <hr />
      <h1>...............Contact................</h1>
      <h3>City: {city}</h3>
      <button onClick={()=> dispatch({type:'TOGGLE_CITY'})}>Toggle City</button>
    </>
  )
}

export default Contact
