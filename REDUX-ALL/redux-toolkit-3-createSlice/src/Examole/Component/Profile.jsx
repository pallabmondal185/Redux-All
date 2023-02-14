import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeName,changeAge, changecity } from '../Reducer/ProfileSlice';


const Profile = () => {
    const { name, age, city } = useSelector((state) => state.profileReducer);
    const dispatch = useDispatch();

    return (
        <>
            <h1>Update Your Profile</h1>

            <h3>name: {name}</h3>
            <button onClick={()=>dispatch(changeName())}>change Name</button>

            <h3>age: {age}</h3>
            <button onClick={()=>dispatch(changeAge())}>toggle Age</button>

            <h3>city: {city}</h3>
            <button onClick={()=>dispatch(changecity('Delhi'))}>change City</button>

        </>
    )
}

export default Profile
