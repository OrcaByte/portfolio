import React from 'react';
import { Link } from 'react-router-dom';

export default function Tabs() {
  const TABS = [
    {
      name: 'Work Experience',
      path: '',
    },
    {
      name: 'Skills and Languages',
      path: 'skills',
    },
    {
      name: 'Projects',
      path: 'projects',
    },
  ];
  return (
    <div className="py-2 mx-2 border-t border-b bg-gray-100 border-yellow-600 flex justify-around ">
      {TABS.map((tabInfo) => (
        <Link
          className="nav-tab inline-block hover:bg-gray-100 font-medium text-green-600 text-center"
          to={tabInfo.path}
        >
          <span className="relative -top-1 px-2 inline-block">
            {tabInfo.name}
          </span>
        </Link>
      ))}
    </div>
  );
}
