import React from 'react'
import {connect} from 'react-redux'

const Hello = (props) => {
  return (
    <div>
      {props.count}
    </div>
  )
}
function mapStateToProps(state){
    return{
        count:state.count,
    }
}
export default connect(mapStateToProps)(Hello)
