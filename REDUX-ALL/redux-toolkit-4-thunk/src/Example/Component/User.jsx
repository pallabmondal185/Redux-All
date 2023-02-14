import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../Reducers/UserReducer';

const User = () => {
  const { loading, entities,error } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [])

  // console.log(loading);
  // console.log(entities);

  return (
    <>
      <h1>Usert Data</h1>

      <h3>{error}</h3>

      { loading && <h3>loading...</h3>}

      {

        entities.map((item) =>
          <div key={item.id}>
            <h3>Name: {item.name}</h3>
            <h3>Username: {item.username}</h3>
            <h3>Email: {item.email}</h3>

            <hr />
          </div>
        )
      }

    </>
  )
}

export default User
