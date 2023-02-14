import React from 'react';
import { connect } from 'react-redux';
import { addition } from '../services/Action/CounterAction';

const Addition = ({ num1, num2, result,addition }) => {
    return (
        <>
            <hr />
            <h1>Addition</h1>
            <h3>1st Number:{num1}</h3>
            <h3>2nd Number:{num2}</h3>
            <button onClick={()=> addition()}>Add</button>
            <h3>Result:{result}</h3>
        </>
    )
}

const myStateToProps = (state) => {
    return {
        num1: state.CounterReducer.num1,
        num2: state.CounterReducer.num2,
        result: state.CounterReducer.result
    }
}

export default connect(myStateToProps, { addition })(Addition);
