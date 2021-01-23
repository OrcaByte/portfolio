import React from 'react';
import './App.scss';
import { GlobalContext, projectDetail } from './globalContext';
import Homepage from './Homepage/Homepage';

function App() {
  return (
    <GlobalContext.Provider value={projectDetail}>
      <div className="p-4 w-full">
        <Homepage />
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
