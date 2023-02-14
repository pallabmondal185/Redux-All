import './App.css';
//provider in high order component that have meny child
import {Provider} from 'react-redux'
import Counter from './components/Counter';
import Hello from './components/Hello';

function App() {

  return (
    <div className="App">
      <h1>redux tutorial</h1>

      <Counter/>
      {/* <Hello/> */}
    </div>
  );
}

export default App;
