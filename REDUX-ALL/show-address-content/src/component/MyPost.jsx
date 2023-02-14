import React from 'react'
import { connect } from 'react-redux';
import {handlePost} from '../services/action/AddressAction';

const MyPost = ({ handlePost, po }) => {
    return (
        <>
            <h1>Post Office: {po}</h1>
            <button onClick={() => handlePost()}>Change Post Office</button>
        </>
    )
}

const myStateToProps = (state) => {
    return {
        po: state.AddressReducer.po
    }
}

const myDispatchToProps=()=>{
    return {handlePost}
}

export default connect(myStateToProps,myDispatchToProps())(MyPost)
