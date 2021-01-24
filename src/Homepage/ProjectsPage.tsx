import React, { useContext } from 'react';
import { GlobalContext } from '../globalContext';

export default function ProjectsPage() {
  const { projects } = useContext<any>(GlobalContext);
  return (
    <div className="home-card scrollbar">
      <div className="p-2 grid justify-between grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 md:gap-x-4">
        {projects.map((projectInfo: any) => (
          <div
            key={projectInfo.name}
            className="rounded bg-white overflow-hidden shadow-lg mb-4"
          >
            <img
              style={{ height: 200 }}
              className="w-full"
              src={projectInfo.imgUrl}
              alt={projectInfo.name}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{projectInfo.name}</div>
              <p className="tracking-tight text-gray-800 text-base">
                {projectInfo.description}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              {projectInfo.tags.map((tag: string) => (
                <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
