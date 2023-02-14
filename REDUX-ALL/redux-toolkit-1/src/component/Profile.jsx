import React from 'react';
import { useSelector,useDispatch } from 'react-redux';

const Profile = () => {
    const dispatch=useDispatch()
    const {name,age} =useSelector((state)=>{
        console.log(state);
        return state
    })
    return (
        <>
            <h1>....................Profile of Pallab.....................</h1>
            <h3>My Name Is: {name}</h3>
            <button onClick={()=>dispatch({type: 'UPDATE_NAME'})}>Change Name</button>
             <h3>My age is:{age}</h3>
             <button onClick={()=>dispatch({type:"UPDATE_AGE",payload:100})}>Change Name</button>
            <hr />
        </>
    )
}

export default Profile;
