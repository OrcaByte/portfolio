import React, { useContext } from 'react';
import { GlobalContext } from '../globalContext';
import ProfileImg from '../Images/sumit.jpeg';
import ContactMe from './ContactMe';

export default function SideBarInfo() {
  const { profile } = useContext<any>(GlobalContext);

  return (
    <aside className="col-span-3 p-3 shadow-md rounded-sm pt-4 bg-yellow-300 flex h-full flex-col justify-between items-center">
      <div className="avatar-container relative">
        <img className="transform hover:scale-110" src={ProfileImg} alt="avatar" />
      </div>

      <div className="mt-1">
        <h2 className="font-medium text-purple-500 text-3xl">{profile.name}</h2>
        <p className="text-base italic underline text-center text-green-600">
          {profile.jobTitle}
        </p>
      </div>

      <p className="text-center tracking-tight font-medium my-4">
        {profile.aboutMe}
      </p>

      <ContactMe />
    </aside>
  );
}
