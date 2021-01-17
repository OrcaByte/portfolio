import React from 'react';
import ProfileImg from '../Images/sumit.jpeg';
import Divider from './Divider';
import './home.scss';

export default function Homepage() {
  return (
    <div className="w-full z-10 relative">
      <div className="grid grid-cols-12 p-4">
        <div className="avatar-container col-span-2 relative">
          <img src={ProfileImg} alt="avatar" />
        </div>
        <div className="col-span-3 flex flex-col justify-center">
          <h2 className="font-medium text-5xl">Sumit Kumar</h2>
          <p className="text-base italic mt-1 text-gray-400">
            Software Engineer
          </p>
        </div>
        <div className="col-span-6 flex justify-center items-center">hello</div>
      </div>
      <Divider />
    </div>
  );
}
