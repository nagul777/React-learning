//import logo from './logo.svg';
import './App.css';
import CalculaterInput from './components/CalculaterInput'
import CalculaterButtons from './components/CalculaterButtons'

function App() {
  return (
    <div className="App">
    
      <CalculaterInput />
      <div className='button'>
      <CalculaterButtons />
      <CalculaterButtons />
      <CalculaterButtons />
      <CalculaterButtons />
      </div>
      <div className='button'>
      <CalculaterButtons />
      <CalculaterButtons />
      <CalculaterButtons />
      <CalculaterButtons />
      </div>
      <div className='button'>
      <CalculaterButtons />
      <CalculaterButtons />
      </div>
    </div>
  );
}

export default App;
