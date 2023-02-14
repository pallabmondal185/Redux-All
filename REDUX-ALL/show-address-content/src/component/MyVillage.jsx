import React from 'react';
import { connect } from 'react-redux';
import { handleVillage } from '../services/action/AddressAction';

const MyVillage = ({ handleVillage, vill }) => {
    return (
        <>
            <h1>Village: {vill}</h1>
            <button onClick={() => handleVillage()}>change Village</button>
        </>
    )
}

const myStateToProps = (state) => {
    return {
        vill: state.AddressReducer.vill
    }
}


export default connect(myStateToProps, { handleVillage })(MyVillage)
