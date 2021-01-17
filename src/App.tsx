import React from 'react';
import './App.scss';
import Canvas from './background/Canvas';
import Homepage from './Homepage/Homepage';

function App() {
  return (
    <div className="p-4 w-full">
      <Canvas />
      <Homepage />
    </div>
  );
}

export default App;
