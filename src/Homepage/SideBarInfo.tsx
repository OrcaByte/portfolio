import React from 'react';
import ProfileImg from '../Images/sumit.jpeg';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';

export default function SideBarInfo() {
  return (
    <aside className="col-span-3 p-3 shadow-md rounded-sm pt-4 bg-yellow-300 flex h-full flex-col justify-between items-center">
      <div className="avatar-container relative">
        <img src={ProfileImg} alt="avatar" />
      </div>

      <div className="mt-1">
        <h2 className="font-medium text-3xl">Sumit Kumar</h2>
        <p className="text-base italic underline text-center text-green-600">Software Engineer</p>
      </div>

      <AboutMe />

      <ContactMe />
    </aside>
  );
}
