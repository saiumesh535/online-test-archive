import React from 'react';
import './App.css';
import CounterComponent from './store/reducer-sample/counter.component';

const App: React.FC = () => {
  return (
    <div className="App">
      <CounterComponent />
    </div>
  );
}

export default App;
