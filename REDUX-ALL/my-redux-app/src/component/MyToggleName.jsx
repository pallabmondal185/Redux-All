import React from 'react';
import { toggleName } from '../service/MyCounterAction/MyCounterAction';
import { connect } from 'react-redux'


const MyToggleName = ({toggleName,name}) => {
  return (
    <>
      <h1>Name : {name}</h1>
      <button onClick={()=> toggleName()}>Toggle Name</button>
    </>
  )
}

const myStateToProps=(state)=>{
  return {
    name: state.MyToggleNameReducer.name
  }
}

export default connect(myStateToProps,{toggleName})(MyToggleName)
