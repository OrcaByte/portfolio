import React from 'react';
import cottonBro from '../Images/cottonbro.jpg';
import negative from '../Images/negative.jpg';
import photomix from '../Images/photomix.jpg';

export default function ProjectsPage() {
  return (
    <div className="home-card scrollbar">
      <div className="p-2 grid justify-between grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-x-4">
        <div className="rounded bg-white overflow-hidden shadow-lg">
          <img className="w-full" src={cottonBro} alt="Mountain" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Mountain</div>
            <p className="tracking-tight text-gray-800 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
        <div className="rounded bg-white overflow-hidden shadow-lg">
          <img className="w-full" src={negative} alt="River" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">River</div>
            <p className="tracking-tight text-gray-800 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #summer
            </span>
          </div>
        </div>

        <div className="rounded bg-white overflow-hidden shadow-lg">
          <img className="w-full" src={photomix} alt="Forest" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Forest</div>
            <p className="tracking-tight text-gray-800 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #fall
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
