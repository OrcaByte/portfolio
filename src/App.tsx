import React from 'react';
import './App.scss';
import { GlobalContext, projectDetail } from './globalContext';
import HomeContainer from './Homepage/HomeContainer';
import SideBarInfo from './Homepage/SideBarInfo';

function App() {
  return (
    <GlobalContext.Provider value={projectDetail}>
      <div
        ref={projectDetail.pdfOptions.parentRef}
        className="xs:p-0 sm:p-2 md:p-4 w-full"
      >
        <div
          style={{ height: '94vh' }}
          className="w-full grid grid-cols-12 z-10 relative"
        >
          <SideBarInfo />
          <HomeContainer />
        </div>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
