import React from 'react';
import './home.scss';
import HomeContainer from './HomeContainer';
import SideBarInfo from './SideBarInfo';

export default function Homepage() {
  return (
    <div style={{height: '94vh'}} className="w-full grid grid-cols-12 z-10 relative">
      <SideBarInfo />
      <div className="col-span-9">
        <HomeContainer />
      </div>
    </div>
  );
}
