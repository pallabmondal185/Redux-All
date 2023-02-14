import React from 'react';
import { getName,getEmail } from '../action/UserAction';
import { useDispatch, useSelector } from 'react-redux';

const User = () => {
    const dispatch = useDispatch();

    const {name,email}=useSelector((state)=>{
        return state;
    })

    const updateName = async () => {
        dispatch(getName())
    }

    const updateEmail=()=>{
        dispatch(getEmail())
    }

    return (
        <>
            <h1>User Name</h1>
            <h3>My Name Is: {name}</h3>
            <button onClick={() => updateName()}>change Name</button>
            <h3>my Email is: {email}</h3>
            <button onClick={()=>updateEmail()}>Change email</button>
        </>
    )
}

export default User;
