import React from 'react';
import './stepper.scss';
import { useStateListner } from './Utils';

export default function WorkExperience() {
  const [state] = useStateListner();

  return (
    <div className="home-card scrollbar stepper-container ">
      <div className="timeline relative p-4">
        {state.timeline.map((event, index: number) => (
          <React.Fragment key={index}>
            {event.year && (
              <h2 className="timeline__item timeline__item--year py-2 bg-gray-800 text-3xl grid place-items-center">
                {event.year}
              </h2>
            )}

            {(event.title || event.blurp) && (
              <div className="timeline__item md:mr-0 mr-10 p-3 my-5">
                {event.title && (
                  <h3 className="timeline__title m-0 text-lg">{event.title}</h3>
                )}
                {event.blurp && (
                  <p className="mt-2 text-sm md:text-base">{event.blurp}</p>
                )}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
