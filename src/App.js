// import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Button text="Hii, Iam Fine"  bgColor="primary" btntype="solid"/>
        <Button text="Hii, Iam Fine"  bgColor="secondary" btntype="solid"/>
        <Button text="Hii, Iam Fine"  bgColor="tom" btntype="solid"/>
        <Button text="Hii, Iam Fine"  bgColor="jerry" btntype="solid"/>

        <Button text="Hii, Iam Fine"  bgColor="primary" btntype="outline"/>
        <Button text="Hii, Iam Fine"  bgColor="secondary" btntype="outline"/>
        <Button text="Hii, Iam Fine"  bgColor="tom" btntype="outline"/>
        <Button text="Hii, Iam Fine"  bgColor="jerry" btntype="outline"/>
      </header>
      
    </div>
  );
}

export default App;
