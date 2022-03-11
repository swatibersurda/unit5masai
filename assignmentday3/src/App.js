import logo from './logo.svg';
import './App.css';
import {Counter} from "./components/Counter.jsx"

function App() {
  const counter=0;
  return(
    <div className='APP'>
      <Counter counter={counter}/>
      
      </div>
  );
 
}

export default App;
