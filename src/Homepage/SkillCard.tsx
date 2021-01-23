import React from 'react';

export default function SkillCard(props: { percentage: number , label:string, children?:any }) {
  return (
    <div className="p-1 col-span-1 flex items-center rounded-md shadow-md bg-white">
      <div className="circular-avatar bg-indigo-100">
        {props.children}
      </div>
      <div className="py-1 px-2 w-10/12">
        <p className="text-lg text-gray-800 font-medium">{props.label}</p>
        <div className="flex justify-between items-center">
          <div className="h-3 w-full overflow-hidden rounded-full bg-pink-200">
            <div
              style={{ width: `${props.percentage}%` }}
              className="bg-green-400 w-10/12 h-full"
            />
          </div>

          <span className="text-indigo-500 text-right font-semibold inline-block w-14">
            {props.percentage}%
          </span>
        </div>
      </div>
    </div>
  );
}
