import React from 'react';
import './App.scss';
import HomeContainer from './Homepage/HomeContainer';
import SideBarInfo from './Homepage/SideBarInfo';
import ResumeDialog from './resumes/ResumeDialog';

function App() {
  return (
      <div className="xs:p-0 sm:p-2 md:p-4 w-full">
        <ResumeDialog />
        <div
          style={{ height: '94vh' }}
          className="w-full grid grid-cols-12 z-10 relative"
        >
          <SideBarInfo />
          <HomeContainer />
        </div>
      </div>
  );
}

export default App;
