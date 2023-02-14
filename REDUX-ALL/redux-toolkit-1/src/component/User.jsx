import React from 'react';
import { useSelector,useDispatch } from 'react-redux';

const User = () => {
  const dispatch=useDispatch();
  const {counter}=useSelector((state)=>state)
  return (
    <>
      <h1>.................user....................</h1>
      <h1>count: {counter}</h1>
      <button onClick={()=>dispatch({type:"INCREMENT"})}>INC</button>
      <button onClick={()=>dispatch({type:"DECREMENT"})}>DEC</button>
    </>
  )
}

export default User
