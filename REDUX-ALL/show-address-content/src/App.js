import './App.css';
import MyVillage from './component/MyVillage';
import MyPost from './component/MyPost';
import MyPolice from './component/MyPolice';
import MyDistrict from './component/MyDistrict';

function App() {
  return (
    <div className="App">

      <MyVillage />
      <MyPost/>
      <MyPolice/>
      <MyDistrict/>

    </div>
  );
}

export default App;
