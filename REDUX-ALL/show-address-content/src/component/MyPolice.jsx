import React from 'react';
import { connect } from 'react-redux';
import { handlePolice } from '../services/action/AddressAction';

const MyPolice = ({handlePolice,ps}) => {
  return (
    <>
      <h1>Police Station: {ps}</h1>
      <button onClick={handlePolice}>Change Police Station</button>
    </>
  )
}

const myStateToProps=(state)=>{
    return {
        ps: state.AddressReducer.ps
    }
}

export default connect(myStateToProps,{handlePolice})(MyPolice);
