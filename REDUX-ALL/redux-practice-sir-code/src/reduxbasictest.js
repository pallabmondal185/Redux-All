//pore ata app component a add kore dekbo

import { createStore } from 'redux';
import './App.css';



function App() {
//reducer function must have 2 patamiter 
//state,action
const reducer=(state={},action)=>{
  if (action.type=='A'){
    return{
      //if you want to return prev state tehen
      ...state,
      A:'i am A'
    }
  }
  if(action.type=='B'){
    return{
      ...state,
      B:'i am B'
    }
  }
   return state
}

const store=createStore(reducer)

store.subscribe(()=>{
  console.log(store.getState());
})

store.dispatch({type:"A"})
store.dispatch({type:"B"})


  return (
    <div className="App">
      <h1>redux tutorial</h1>
    </div>
  );
}

export default App;
