import React from 'react'
import { useSelector } from 'react-redux';

const Profile = () => {
    const {name,age,status,email,phone}=useSelector((state)=>{
        console.log(state);
        return state;
    })
  return (
    <div>
        <h1>Your name is: {name}</h1>        
        <h1>Your email is: {email}</h1>
        <h1>Your age is: {age}</h1>
        <h1>Your status is: {status}</h1>
        <h1>Your phone is: {phone}</h1>
    </div>
  )
}

export default Profile;