import React, { useContext } from 'react';
import ContactMe from './ContactMe';
import { useStateListner } from './Utils';

export default function SideBarInfo() {
  const [state] = useStateListner();

  return (
    <aside
      className={
        'md:col-span-3 col-span-12 p-4 shadow-md rounded-sm bg-yellow-300 flex h-full flex-col justify-between items-center'
      }
    >
      <div className="avatar-container relative">
        <img
          className="transform hover:scale-110"
          src={state.profile.avatarUrl}
          alt="avatar"
        />
      </div>

      <div className="mt-1">
        <h2 className="font-medium text-purple-500 text-3xl">{state.profile.name}</h2>
        <p className="text-base italic underline text-center text-green-600">
          {state.profile.jobTitle}
        </p>
      </div>

      <p className="text-center tracking-tight font-medium mt-4">
        {state.profile.aboutMe}
      </p>
      <div className="hidden md:block w-full">
        <ContactMe />
      </div>
    </aside>
  );
}
