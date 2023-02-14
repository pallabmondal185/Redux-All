import React from 'react';
import { connect } from 'react-redux';
import { addNumber } from '../service/MyCounterAction/MyCounterAction';

const MyAddition = ({ addNumber, result }) => {
    const num1 = 5;
    const num2 = 3;
    return (
        <>
            <h1>Addition of Two Number</h1>
            <h3>First Number: {num1} </h3>
            <h3>Second Number: {num2} </h3>
            <h3>Result: {result}</h3>
            <button onClick={() => addNumber(num1, num2)}>Add</button>
        </>
    )
}

const myStateToProps = (state) => {
    return {
        result: state.MyAdditionReducer.result,
    }
}

export default connect(myStateToProps, { addNumber })(MyAddition)
