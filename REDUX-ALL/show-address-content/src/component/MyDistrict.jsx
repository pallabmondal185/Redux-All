import React from 'react';
import { handleDistrict } from '../services/action/AddressAction';
import { connect } from 'react-redux';

const MyDistrict = ({ handleDistrict, dist }) => {
    return (
        <>
            <h1>District: {dist}</h1>
            <button onClick={() => handleDistrict()}>change District</button>
        </>
    )
}

const myStateToProps=(state)=>{
    return {
        dist: state.AddressReducer.dist
    }
}

export default connect(myStateToProps,{handleDistrict})(MyDistrict)
