import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment,decrement } from '../Reducer/CounterSlice';

const Counter = () => {
    const { count } = useSelector(state => state.counterReducer);
    const dispatch=useDispatch();
    return (
        <>
            <h1>Counter Using Slice</h1>
            <h3>count: {count}</h3>
            <button onClick={()=>dispatch(increment())}>INC</button>
            <button onClick={()=>dispatch(decrement())}>DEC</button>

        </>
    )
}

export default Counter
