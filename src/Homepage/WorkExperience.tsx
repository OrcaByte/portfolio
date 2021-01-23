import React, { useContext } from 'react';
import { GlobalContext } from '../globalContext';
import './stepper.scss';

export default function WorkExperience() {
  const { timeline } = useContext<any>(GlobalContext);

  return (
    <div className="home-card scrollbar stepper-container ">
      <div className="timeline p-4">
        {timeline.map((event: any) => (
          <>
            {event.year && (
              <h2 className="timeline__item timeline__item--year">
                {event.year}
              </h2>
            )}

            {(event.title || event.blurp) && (
              <div className="timeline__item">
                {event.title && (
                  <h3 className="timeline__title">{event.title}</h3>
                )}
                {event.blurp && (
                  <p className="timeline__blurb">{event.blurp}</p>
                )}
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
}
