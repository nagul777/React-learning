//import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'
import Button from './components/Button'
import { useState } from 'react';
import Mouseover from './components/Mouseover';

function App() {
const [Count,setCount] = useState(0)
   
function handleIncrement(x){
  setCount(x);
}

  return (
    <div className="App">
     <Counter value={Count}/>
     <Button value={Count} setValue={handleIncrement}/>


     <Mouseover />
    </div>
  );
}

export default App;
