import React from 'react';
import { increment,decrement } from '../service/MyCounterAction/MyCounterAction';
import { connect } from 'react-redux';

const MyCounter = ({increment,decrement,count}) => {
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={()=>increment()}>Increment</button>
      <button onClick={()=>decrement()}>Decrement</button>
    </>
  )
}

const myStateToProps=(state)=>{
    return {
      count: state.MyCounterReducer.count,
    }
}

export default connect(myStateToProps,{increment,decrement})(MyCounter);

//The connect() function connects a React component to a Redux store.
//It provides its connected component with the pieces of the data it needs from the store, and the functions it can use to dispatch actions to the store.

