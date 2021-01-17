import React from 'react';
import { Link } from 'react-router-dom';

export default function Tabs() {
  const TABS = [
    {
      name: 'Work Experience',
      path: 'work-exp',
    },
    {
      name: 'Skills and Languages',
      path: 'skills',
    },
    {
      name: 'Projects',
      path: 'project',
    },
  ];
  return (
    <div className="py-2 mx-2 border-t border-b border-yellow-300 grid grid-cols-10">
      {TABS.map((tabInfo) => (
        <Link
          className="col-span-2 font-medium text-green-600 text-center"
          to={tabInfo.path}
        >
          {tabInfo.name}
        </Link>
      ))}
    </div>
  );
}
