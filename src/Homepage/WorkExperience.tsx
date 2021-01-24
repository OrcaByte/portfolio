import React, { useContext } from 'react';
import { GlobalContext } from '../globalContext';
import './stepper.scss';

export default function WorkExperience() {
  const { timeline } = useContext<any>(GlobalContext);

  return (
    <div className="home-card scrollbar stepper-container ">
      <div className="timeline relative p-4">
        {timeline.map((event: any) => (
          <>
            {event.year && (
              <h2 className="timeline__item timeline__item--year py-2 bg-gray-800 text-3xl grid place-items-center">
                {event.year}
              </h2>
            )}

            {(event.title || event.blurp) && (
              <div className="timeline__item p-3 my-5">
                {event.title && (
                  <h3 className="timeline__title m-0 text-2xl">
                    {event.title}
                  </h3>
                )}
                {event.blurp && <p className="mt-2 text-base">{event.blurp}</p>}
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
}
