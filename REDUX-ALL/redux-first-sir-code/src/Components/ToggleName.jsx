import React from 'react';
import {ToggleName} from '../services/Action/CounterAction';

const ToggleName = ({toggleName,name}) => {
  return (
    <>
      <h1>Name : {name}</h1>
      <button onClick={()=> toggleName()}>Toggle Name</button>
    </>
  )
}

export default ToggleName
