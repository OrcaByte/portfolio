import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GlobalContext } from '../globalContext';
import { FaRegFilePdf } from 'react-icons/fa';

import { useStateListner } from './Utils';
import { IconButton } from '@material-ui/core';

export default function NavbarCss() {
  const location = useLocation();
  const { TABS } = useContext(GlobalContext);
  const [state, dispatcher] = useStateListner();

  return (
    <nav className="bg-gray-800 mt-4 md:mt-0 md:ml-3">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="relative flex items-center justify-between h-14">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex space-x-1 md:space-x-4">
              {TABS.map((t) => (
                <React.Fragment key={t.name}>
                  <Link
                    to={t.path}
                    className={`${
                      location.pathname === t.path
                        ? 'bg-green-800 hover:bg-gray-900'
                        : ' hover:bg-gray-700'
                    } ${
                      t.classes
                    } text-gray-300 hover:text-white px-2 md:px-3 py-1 rounded-md text-sm font-medium`}
                  >
                    {t.name}
                  </Link>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="absolute hidden inset-y-0 right-0 md:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <IconButton
              size="small"
              className="bg-transparent hover:bg-blue text-blue-dark font-semibold py-2 px-4 border border-blue hover:border-transparent rounded"
              onClick={() => dispatcher({ isResumeDialog: true })}
            >
              <FaRegFilePdf className="text-yellow-400 hover:text-blue-400" />
            </IconButton>
          </div>
        </div>
      </div>
    </nav>
  );
}
