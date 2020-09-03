import React from 'react';
import './App.css';

const TheClock = () => {
  return (
    <React.Fragment>
      <div>00:00:00</div>
      <button>Start</button>
      <button>Stop</button>
    </React.Fragment>
  );
}


const App = () => {
  return (
    <div className="App">
      <TheClock />
    </div>
  );
}

export default App;
