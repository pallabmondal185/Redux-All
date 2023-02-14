import React from 'react';
import { connect } from 'react-redux';
import { incriment, decriment, uppercase } from '../services/Action/CounterAction';

const Counter = ({ incriment, decriment,uppercase, count, upper }) => {
  return (
    <div>
      <h3>Counter : {count}</h3>
      <button onClick={() => incriment()}>Incriment</button>
      <button onClick={() => decriment()}>Decriment</button>
      <hr />
      <h1>UpperCase: {upper}</h1>
      <button onClick={() => uppercase()}>Uppercase</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  count: state.CounterReducer.count,
  upper: state.CounterReducer.upper
})
export default connect(mapStateToProps, { incriment, decriment, uppercase })(Counter) 
