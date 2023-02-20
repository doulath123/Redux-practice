import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import { ReduxContext } from './Redux/ReduxProvider';
import { incrementCountAction } from './Redux/action';

function App() {
  const [getState, dispatch]=useContext(ReduxContext)
  console.log(getState())
  const state=getState();
  return (
    <div className="App">
     <h1>count:{state.count}</h1>
     <button onClick={()=>dispatch(incrementCountAction(1))}>ADD</button>
     <button onClick={()=>dispatch(incrementCountAction(-1))}>REDUCE</button>
    </div>
  );
}

export default App;
