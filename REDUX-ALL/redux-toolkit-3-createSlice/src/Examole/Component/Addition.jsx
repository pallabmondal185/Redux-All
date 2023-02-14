import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Addition = () => {
    const {num1,num2,result}=useSelector(state=>state.AddReducer);
    const dispatch=useDispatch();

  return (
    <>
      <h1>Addition and Substraction</h1>
      <h3>First Number: {num1}</h3>
      <h3>Second Number: {num2}</h3>
      <h3>result is: {result}</h3>
      <button onClick={()=>dispatch({type:'ADDITION'})}>Addidtion</button>
      <button onClick={()=>dispatch({type:'SUBSTRACTION',payload:num1-num2})}>substraction</button>

    </>
  )
}

export default Addition
