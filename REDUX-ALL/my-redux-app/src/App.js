import logo from './logo.svg';
import './App.css';
import MyCounter from './component/MyCounter';
import MyToggleName from './component/MyToggleName';
import MyAddition from './component/MyAddition';

function App() {
  return (
    <div className="App">

       <MyCounter/>
       <MyToggleName/>
       <MyAddition/>
       
    </div>
  );
}

export default App;
