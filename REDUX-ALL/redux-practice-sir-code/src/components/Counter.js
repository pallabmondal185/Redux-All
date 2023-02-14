import React from 'react';
import {connect} from 'react-redux';

const Counter = (props) => {
  return (
    <div>
      <h1>i Am {props.count}</h1>
    </div>
  )
}

function mapStateToProps(state){
    return{
        count:state.count,
    }
}

export default connect(mapStateToProps) (Counter) 
